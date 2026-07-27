"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";

import { requireUser, getOnboardingProfile } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { generateStudyPlan } from "@/lib/studyPlan";
import { STUDY_TASK_XP, computeConsecutiveStreak, toUTCDateOnly } from "@/lib/gamification";
import { completeStudyPlanTaskSchema } from "@/lib/validation/studyPlan";

export type CompleteStudyPlanTaskState = { error?: string; alreadyCompleted?: boolean } | undefined;

/**
 * The only write path in this phase: mark today's study-plan task for one
 * subject as done.
 *
 * Idempotent: StudyTaskCompletion is unique on (userId, date, subjectId,
 * taskType), and its existence is the only completion signal — if a row is
 * already there, this is a no-op, so XP, minutes, and activity can never be
 * duplicated by completing the same task twice.
 *
 * The date is always derived server-side (never accepted from the client),
 * so it can't be used to backdate/game the streak, and the subject must be
 * one the user actually selected during onboarding — never trust a
 * client-supplied userId or an arbitrary subjectId.
 */
export async function completeStudyPlanTask(input: {
  subjectId: number;
}): Promise<CompleteStudyPlanTaskState> {
  const user = await requireUser();

  const parsed = completeStudyPlanTaskSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  const { subjectId } = parsed.data;

  const profile = await getOnboardingProfile();
  if (!profile?.dailyGoalId || profile.subjects.length === 0) {
    return { error: "Finish onboarding before completing study-plan tasks." };
  }

  const selected = profile.subjects.find((row) => row.subject.id === subjectId);
  if (!selected) {
    return { error: "That subject isn't part of your selected subjects." };
  }

  const today = toUTCDateOnly(new Date());
  const plan = generateStudyPlan({
    subjects: profile.subjects.map((row) => ({ id: row.subject.id, title: row.subject.title })),
    dailyGoalId: profile.dailyGoalId,
    learningStyleIds: profile.learningStyles.map((row) => row.learningStyle.id),
  });
  const todayTask = plan.days[today.getUTCDay()]?.tasks.find((task) => task.subjectId === subjectId);
  if (!todayTask) {
    return { error: "There's no study-plan task for this subject today." };
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const existing = await tx.studyTaskCompletion.findUnique({
        where: {
          userId_date_subjectId_taskType: {
            userId: user.id,
            date: today,
            subjectId,
            taskType: todayTask.taskType,
          },
        },
      });
      if (existing) {
        return { alreadyCompleted: true as const };
      }

      // Whether today already had a completion (any subject) — decides
      // whether a streak needs recomputing, so a second subject completed
      // the same day doesn't re-fire a streak activity.
      const hadCompletionToday =
        (await tx.studyTaskCompletion.count({ where: { userId: user.id, date: today } })) > 0;

      await tx.studyTaskCompletion.create({
        data: { id: randomUUID(), userId: user.id, date: today, subjectId, taskType: todayTask.taskType },
      });

      await tx.studySession.create({
        data: { userId: user.id, subjectId, minutes: todayTask.minutes, source: "study_plan_task" },
      });

      await tx.activity.create({
        data: {
          userId: user.id,
          type: "TASK_COMPLETED",
          subjectId,
          title: `Completed ${selected.subject.title} study session`,
          xp: STUDY_TASK_XP,
        },
      });

      if (!hadCompletionToday) {
        const completionDates = await tx.studyTaskCompletion.findMany({
          where: { userId: user.id },
          select: { date: true },
          distinct: ["date"],
          orderBy: { date: "desc" },
        });
        const newStreak = computeConsecutiveStreak(completionDates.map((row) => row.date));

        if (newStreak > 1) {
          await tx.activity.create({
            data: {
              userId: user.id,
              type: "STREAK_EARNED",
              title: `${newStreak}-day streak`,
            },
          });
        }
      }

      return { alreadyCompleted: false as const };
    });

    revalidatePath("/dashboard");
    return result;
  } catch {
    return { error: "Could not mark this task as completed." };
  }
}
