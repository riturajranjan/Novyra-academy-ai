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

/**
 * Returns the subject only if the current authenticated user selected it
 * during onboarding. The userId scoping happens inside the query itself
 * (never trust a client-supplied id), so a subject that exists but belongs
 * to someone else's selection resolves to null just like one that doesn't
 * exist at all — callers should treat both as notFound().
 */
export const getUserSelectedSubject = cache(async (subjectId: number) => {
  const user = await getCurrentUser();
  if (!user) return null;

  const row = await prisma.userSubject.findFirst({
    where: { subjectId, onboardingProfile: { userId: user.id } },
    include: { subject: true },
  });

  return row?.subject ?? null;
});

export const getFirstSelectedSubjectId = cache(async () => {
  const profile = await getOnboardingProfile();
  return profile?.subjects[0]?.subject.id ?? null;
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

// --- Learning hierarchy: Subject -> Chapter -> Lesson -> {Quiz, Flashcard, Note} ---
// Same ownership rule as getUserSelectedSubject: a chapter/lesson that exists
// but isn't under a subject the user selected during onboarding resolves to
// null, same as one that doesn't exist — callers should treat both as
// notFound() rather than distinguishing "missing" from "not yours".

export const getSubjectWithChapters = cache(async (subjectId: number) => {
  const subject = await getUserSelectedSubject(subjectId);
  if (!subject) return null;

  const profile = await getOnboardingProfile();
  const boardId = profile?.boardId ?? null;

  // Lesson ids only (not full rows) — just enough for progress.ts to compute
  // a real per-chapter/subject percentage against the user's completions.
  // boardId: null chapters are visible to every board; a set boardId is only
  // visible to that board's users.
  const chapters = await prisma.chapter.findMany({
    where: { subjectId, OR: [{ boardId: null }, { boardId }] },
    orderBy: { order: "asc" },
    include: { lessons: { select: { id: true }, orderBy: { order: "asc" } } },
  });

  return { subject, chapters };
});

export const getChapterWithLessons = cache(async (subjectId: number, chapterId: string) => {
  const subject = await getUserSelectedSubject(subjectId);
  if (!subject) return null;

  const profile = await getOnboardingProfile();
  const boardId = profile?.boardId ?? null;

  const chapter = await prisma.chapter.findFirst({
    where: { id: chapterId, subjectId, OR: [{ boardId: null }, { boardId }] },
    include: { lessons: { orderBy: { order: "asc" } } },
  });

  return chapter ? { subject, chapter } : null;
});

/**
 * Lesson detail scoped through the chapter's subject rather than a direct
 * subjectId param, since the route only carries chapterId/lessonId. Notes
 * and lesson completion are scoped to the current user; quiz/flashcard
 * content is shared across all users. Also enforces the chapter's board
 * scoping — a CBSE user hitting a BSEB-only lesson URL directly resolves to
 * null/notFound(), same as a lesson under a subject they never selected.
 */
export const getLessonDetail = cache(async (chapterId: string, lessonId: string) => {
  const user = await getCurrentUser();
  if (!user) return null;

  const profile = await getOnboardingProfile();
  const selectedSubjectIds = profile?.subjects.map((row) => row.subject.id) ?? [];
  if (selectedSubjectIds.length === 0) return null;
  const boardId = profile?.boardId ?? null;

  return prisma.lesson.findFirst({
    where: {
      id: lessonId,
      chapterId,
      chapter: { subjectId: { in: selectedSubjectIds }, OR: [{ boardId: null }, { boardId }] },
    },
    include: {
      chapter: { include: { subject: true } },
      quizzes: {
        include: { questions: { include: { options: { orderBy: { order: "asc" } } }, orderBy: { order: "asc" } } },
      },
      flashcards: { orderBy: { order: "asc" } },
      notes: { where: { userId: user.id } },
      completions: { where: { userId: user.id } },
    },
  });
});

/**
 * The set of lessonIds (from the given candidates) the current user has
 * completed. Callers pass this into progress.ts's pure functions — real
 * data, currently always empty since nothing writes LessonCompletion until
 * lesson completion ships (a later phase).
 */
export const getCompletedLessonIds = cache(async (lessonIds: string[]) => {
  const user = await getCurrentUser();
  if (!user || lessonIds.length === 0) return new Set<string>();

  const rows = await prisma.lessonCompletion.findMany({
    where: { userId: user.id, lessonId: { in: lessonIds } },
    select: { lessonId: true },
  });

  return new Set(rows.map((row) => row.lessonId));
});

export type LessonDetail = NonNullable<Awaited<ReturnType<typeof getLessonDetail>>>;

export const getUserLessonCompletion = cache(async (lessonId: string) => {
  const user = await getCurrentUser();
  if (!user) return null;

  return prisma.lessonCompletion.findUnique({
    where: { userId_lessonId: { userId: user.id, lessonId } },
  });
});
