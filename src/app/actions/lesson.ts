"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";

import { requireUser, getOnboardingProfile } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { LESSON_COMPLETION_XP } from "@/lib/gamification";
import { completeLessonSchema } from "@/lib/validation/lesson";

export type CompleteLessonState = { error?: string; alreadyCompleted?: boolean } | undefined;

/**
 * Idempotent: LessonCompletion is unique on (userId, lessonId), and its
 * existence is the only completion signal — same pattern as
 * completeStudyPlanTask. The subject must be one the user actually selected
 * during onboarding — never trust a client-supplied userId or lessonId.
 */
export async function completeLesson(input: { lessonId: string }): Promise<CompleteLessonState> {
  const user = await requireUser();

  const parsed = completeLessonSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  const { lessonId } = parsed.data;

  const profile = await getOnboardingProfile();
  const selectedSubjectIds = profile?.subjects.map((row) => row.subject.id) ?? [];
  if (selectedSubjectIds.length === 0) {
    return { error: "Finish onboarding before completing lessons." };
  }

  const lesson = await prisma.lesson.findFirst({
    where: { id: lessonId, chapter: { subjectId: { in: selectedSubjectIds } } },
    select: { id: true, title: true, chapterId: true, chapter: { select: { subjectId: true } } },
  });
  if (!lesson) {
    return { error: "That lesson isn't part of your selected subjects." };
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const existing = await tx.lessonCompletion.findUnique({
        where: { userId_lessonId: { userId: user.id, lessonId } },
      });
      if (existing) {
        return { alreadyCompleted: true as const };
      }

      await tx.lessonCompletion.create({
        data: { id: randomUUID(), userId: user.id, lessonId },
      });

      await tx.activity.create({
        data: {
          userId: user.id,
          type: "LESSON_COMPLETED",
          subjectId: lesson.chapter.subjectId,
          chapterId: lesson.chapterId,
          lessonId,
          title: `Completed ${lesson.title}`,
          xp: LESSON_COMPLETION_XP,
        },
      });

      return { alreadyCompleted: false as const };
    });

    revalidatePath(`/subject/${lesson.chapter.subjectId}/chapter/${lesson.chapterId}/lesson/${lessonId}`);
    revalidatePath("/dashboard");
    return result;
  } catch {
    return { error: "Could not mark this lesson as completed." };
  }
}
