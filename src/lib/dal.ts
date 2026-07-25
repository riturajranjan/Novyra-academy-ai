import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

/**
 * Single source of truth for "who is making this request." Every Server
 * Action and protected Server Component should authorize through this
 * rather than trusting any client-supplied identity.
 */
export const getCurrentUser = cache(async () => {
  const session = await auth();
  if (!session?.user?.id) return null;

  return prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      emailVerified: true,
      createdAt: true,
    },
  });
});

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

export const isOnboardingComplete = cache(async () => {
  const user = await getCurrentUser();
  if (!user) return false;

  const profile = await prisma.onboardingProfile.findUnique({
    where: { userId: user.id },
    select: { completedAt: true },
  });

  return Boolean(profile?.completedAt);
});

export const getBoards = cache(async () => {
  return prisma.board.findMany({ orderBy: { id: "asc" } });
});

export const getClassesForBoard = cache(async (boardId: string) => {
  const rows = await prisma.boardClass.findMany({
    where: { boardId },
    include: { schoolClass: true },
    orderBy: { classId: "asc" },
  });
  return rows.map((row) => row.schoolClass);
});

export const getSubjectsForBoardClass = cache(async (boardId: string, classId: number) => {
  const rows = await prisma.boardClassSubject.findMany({
    where: { boardId, classId },
    include: { subject: true },
    orderBy: { subjectId: "asc" },
  });
  return rows.map((row) => row.subject);
});

export const getLearningStyles = cache(async () => {
  return prisma.learningStyle.findMany({ orderBy: { id: "asc" } });
});

export const getDailyGoals = cache(async () => {
  return prisma.dailyGoal.findMany({ orderBy: { id: "asc" } });
});

export const getTargetScores = cache(async () => {
  return prisma.targetScore.findMany({ orderBy: { id: "asc" } });
});

/**
 * Full onboarding profile with every relation the onboarding flow, AI
 * personalization, and study-plan steps need to render real user data.
 */
export const getOnboardingProfile = cache(async () => {
  const user = await getCurrentUser();
  if (!user) return null;

  return prisma.onboardingProfile.findUnique({
    where: { userId: user.id },
    include: {
      board: true,
      schoolClass: true,
      targetScore: true,
      dailyGoal: true,
      subjects: { include: { subject: true }, orderBy: { subjectId: "asc" } },
      learningStyles: { include: { learningStyle: true } },
    },
  });
});

export type OnboardingProfileWithRelations = NonNullable<
  Awaited<ReturnType<typeof getOnboardingProfile>>
>;

export type { OnboardingStep } from "@/lib/onboardingSteps";
export { onboardingStepPath, getFirstMissingRequirementStep, getFirstIncompleteStep } from "@/lib/onboardingSteps";
