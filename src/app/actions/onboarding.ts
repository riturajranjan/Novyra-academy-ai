"use server";

import type { Prisma, PrismaClient } from "@prisma/client";

import { requireUser } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import {
  boardSelectionSchema,
  classSelectionSchema,
  subjectsSelectionSchema,
  learningStyleSelectionSchema,
  goalSelectionSchema,
} from "@/lib/validation/onboarding";

export type OnboardingActionState = { error?: string } | undefined;

type Tx = Prisma.TransactionClient | PrismaClient;

/**
 * Onboarding is only "complete" while board, class, at least one subject,
 * at least one learning style, and a daily goal are all still valid. Every
 * mutation that could invalidate a previously-complete profile (e.g.
 * removing the last subject) must run this, not just the goal-selection
 * step where completion was historically set.
 */
async function recomputeCompletion(tx: Tx, profileId: string) {
  const profile = await tx.onboardingProfile.findUniqueOrThrow({
    where: { id: profileId },
  });

  const [subjectCount, learningStyleCount] = await Promise.all([
    tx.userSubject.count({ where: { onboardingProfileId: profileId } }),
    tx.userLearningStyle.count({ where: { onboardingProfileId: profileId } }),
  ]);

  const isComplete =
    Boolean(profile.boardId) &&
    Boolean(profile.classId) &&
    subjectCount > 0 &&
    learningStyleCount > 0 &&
    Boolean(profile.dailyGoalId);

  if (isComplete && !profile.completedAt) {
    await tx.onboardingProfile.update({
      where: { id: profileId },
      data: { completedAt: new Date() },
    });
  } else if (!isComplete && profile.completedAt) {
    await tx.onboardingProfile.update({
      where: { id: profileId },
      data: { completedAt: null },
    });
  }
}

export async function saveBoardSelection(boardId: string): Promise<OnboardingActionState> {
  const user = await requireUser();
  const parsed = boardSelectionSchema.safeParse({ boardId });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const board = await prisma.board.findUnique({ where: { id: parsed.data.boardId } });
  if (!board) {
    return { error: "That board is not available right now." };
  }

  try {
    await prisma.$transaction(async (tx) => {
      const existing = await tx.onboardingProfile.findUnique({ where: { userId: user.id } });
      const boardChanged = Boolean(existing) && existing?.boardId !== parsed.data.boardId;

      const profile = await tx.onboardingProfile.upsert({
        where: { userId: user.id },
        create: { userId: user.id, boardId: parsed.data.boardId },
        update: {
          boardId: parsed.data.boardId,
          // Class and subjects only make sense within their original board.
          ...(boardChanged ? { classId: null } : {}),
        },
      });

      if (boardChanged) {
        await tx.userSubject.deleteMany({ where: { onboardingProfileId: profile.id } });
      }

      await recomputeCompletion(tx, profile.id);
    });
  } catch {
    return { error: "That board is not available right now." };
  }
}

export async function saveClassSelection(classId: number): Promise<OnboardingActionState> {
  const user = await requireUser();
  const parsed = classSelectionSchema.safeParse({ classId });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const profile = await prisma.onboardingProfile.findUnique({ where: { userId: user.id } });
  if (!profile?.boardId) {
    return { error: "Choose a board first." };
  }

  const offering = await prisma.boardClass.findUnique({
    where: { boardId_classId: { boardId: profile.boardId, classId: parsed.data.classId } },
  });
  if (!offering) {
    return { error: "That class is not available for your selected board." };
  }

  try {
    await prisma.$transaction(async (tx) => {
      const existing = await tx.onboardingProfile.findUniqueOrThrow({ where: { userId: user.id } });
      const classChanged = existing.classId !== parsed.data.classId;

      await tx.onboardingProfile.update({
        where: { userId: user.id },
        data: { classId: parsed.data.classId },
      });

      if (classChanged) {
        await tx.userSubject.deleteMany({ where: { onboardingProfileId: existing.id } });
      }

      await recomputeCompletion(tx, existing.id);
    });
  } catch {
    return { error: "That class is not available right now." };
  }
}

export async function saveSubjectsSelection(subjectIds: number[]): Promise<OnboardingActionState> {
  const user = await requireUser();
  const parsed = subjectsSelectionSchema.safeParse({ subjectIds });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const profile = await prisma.onboardingProfile.findUnique({ where: { userId: user.id } });
  if (!profile?.boardId || !profile?.classId) {
    return { error: "Choose a board and class first." };
  }

  const uniqueSubjectIds = Array.from(new Set(parsed.data.subjectIds));
  const validOfferings = await prisma.boardClassSubject.count({
    where: {
      boardId: profile.boardId,
      classId: profile.classId,
      subjectId: { in: uniqueSubjectIds },
    },
  });
  if (validOfferings !== uniqueSubjectIds.length) {
    return { error: "One or more selected subjects are not available for your board and class." };
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.userSubject.deleteMany({ where: { onboardingProfileId: profile.id } });
      await tx.userSubject.createMany({
        data: uniqueSubjectIds.map((subjectId) => ({
          onboardingProfileId: profile.id,
          subjectId,
        })),
      });

      await recomputeCompletion(tx, profile.id);
    });
  } catch {
    return { error: "One or more selected subjects are not available." };
  }
}

export async function saveLearningStyleSelection(
  learningStyleIds: string[]
): Promise<OnboardingActionState> {
  const user = await requireUser();
  const parsed = learningStyleSelectionSchema.safeParse({ learningStyleIds });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const uniqueLearningStyleIds = Array.from(new Set(parsed.data.learningStyleIds));
  const validStyles = await prisma.learningStyle.count({
    where: { id: { in: uniqueLearningStyleIds } },
  });
  if (validStyles !== uniqueLearningStyleIds.length) {
    return { error: "One or more selected learning styles are not available." };
  }

  try {
    await prisma.$transaction(async (tx) => {
      const profile = await tx.onboardingProfile.upsert({
        where: { userId: user.id },
        create: { userId: user.id },
        update: {},
      });

      await tx.userLearningStyle.deleteMany({ where: { onboardingProfileId: profile.id } });
      await tx.userLearningStyle.createMany({
        data: uniqueLearningStyleIds.map((learningStyleId) => ({
          onboardingProfileId: profile.id,
          learningStyleId,
        })),
      });

      await recomputeCompletion(tx, profile.id);
    });
  } catch {
    return { error: "One or more selected learning styles are not available." };
  }
}

export async function saveGoalSelection(input: {
  targetScoreId: number;
  dailyGoalId: string;
  examDate: string | null;
}): Promise<OnboardingActionState> {
  const user = await requireUser();
  const parsed = goalSelectionSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const [targetScore, dailyGoal] = await Promise.all([
    prisma.targetScore.findUnique({ where: { id: parsed.data.targetScoreId } }),
    prisma.dailyGoal.findUnique({ where: { id: parsed.data.dailyGoalId } }),
  ]);
  if (!targetScore) {
    return { error: "That target score is not available." };
  }
  if (!dailyGoal) {
    return { error: "That daily goal is not available." };
  }

  try {
    await prisma.$transaction(async (tx) => {
      const profile = await tx.onboardingProfile.upsert({
        where: { userId: user.id },
        create: {
          userId: user.id,
          targetScoreId: parsed.data.targetScoreId,
          dailyGoalId: parsed.data.dailyGoalId,
          examDate: parsed.data.examDate ? new Date(parsed.data.examDate) : null,
        },
        update: {
          targetScoreId: parsed.data.targetScoreId,
          dailyGoalId: parsed.data.dailyGoalId,
          examDate: parsed.data.examDate ? new Date(parsed.data.examDate) : null,
        },
      });

      await recomputeCompletion(tx, profile.id);
    });
  } catch {
    return { error: "Could not save your goal selection." };
  }
}
