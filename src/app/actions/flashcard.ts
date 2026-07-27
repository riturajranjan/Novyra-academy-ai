"use server";

import { revalidatePath } from "next/cache";

import { requireUser, getOnboardingProfile } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { FLASHCARD_REVIEW_XP } from "@/lib/gamification";
import { reviewFlashcardSchema } from "@/lib/validation/flashcard";

export type ReviewFlashcardState = { error?: string } | undefined;

/**
 * Logs a review as a generic Activity(FLASHCARD_REVIEWED) row — there is no
 * separate flashcard-review table, per the "Activity is generic" rule.
 * Reviews are not idempotent: reviewing the same card repeatedly is the
 * whole point of spaced repetition, each review earns XP again.
 */
export async function reviewFlashcard(input: { flashcardId: string }): Promise<ReviewFlashcardState> {
  const user = await requireUser();

  const parsed = reviewFlashcardSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  const { flashcardId } = parsed.data;

  const profile = await getOnboardingProfile();
  const selectedSubjectIds = profile?.subjects.map((row) => row.subject.id) ?? [];
  if (selectedSubjectIds.length === 0) {
    return { error: "Finish onboarding before reviewing flashcards." };
  }

  const flashcard = await prisma.flashcard.findFirst({
    where: { id: flashcardId, lesson: { chapter: { subjectId: { in: selectedSubjectIds } } } },
    select: {
      id: true,
      lessonId: true,
      lesson: { select: { chapterId: true, chapter: { select: { subjectId: true } } } },
    },
  });
  if (!flashcard) {
    return { error: "That flashcard isn't part of your selected subjects." };
  }

  try {
    await prisma.activity.create({
      data: {
        userId: user.id,
        type: "FLASHCARD_REVIEWED",
        subjectId: flashcard.lesson.chapter.subjectId,
        chapterId: flashcard.lesson.chapterId,
        lessonId: flashcard.lessonId,
        title: "Reviewed a flashcard",
        xp: FLASHCARD_REVIEW_XP,
      },
    });

    revalidatePath(
      `/subject/${flashcard.lesson.chapter.subjectId}/chapter/${flashcard.lesson.chapterId}/lesson/${flashcard.lessonId}`,
    );
    return undefined;
  } catch {
    return { error: "Could not record this flashcard review." };
  }
}
