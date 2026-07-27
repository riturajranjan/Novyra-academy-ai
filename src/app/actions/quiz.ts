"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";

import { requireUser, getOnboardingProfile } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { QUIZ_XP_PER_CORRECT_ANSWER } from "@/lib/gamification";
import { submitQuizAttemptSchema } from "@/lib/validation/quiz";

export type SubmitQuizAttemptState =
  | { error: string }
  | { score: number; correctAnswers: number; totalQuestions: number }
  | undefined;

/**
 * Not idempotent by design — unlike lesson/task completion, a user can
 * retake a quiz and each attempt is its own QuizAttempt row. Grading always
 * happens server-side from the stored QuestionOption.isCorrect flags; a
 * client-supplied score/correctAnswers is never trusted.
 */
export async function submitQuizAttempt(input: {
  quizId: string;
  responses: { questionId: string; selectedOptionId: string | null }[];
}): Promise<SubmitQuizAttemptState> {
  const user = await requireUser();

  const parsed = submitQuizAttemptSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  const { quizId, responses } = parsed.data;

  const profile = await getOnboardingProfile();
  const selectedSubjectIds = profile?.subjects.map((row) => row.subject.id) ?? [];
  if (selectedSubjectIds.length === 0) {
    return { error: "Finish onboarding before taking quizzes." };
  }

  const quiz = await prisma.quiz.findFirst({
    where: { id: quizId, lesson: { chapter: { subjectId: { in: selectedSubjectIds } } } },
    select: {
      id: true,
      title: true,
      lessonId: true,
      questions: { select: { id: true, options: { select: { id: true, isCorrect: true } } } },
      lesson: { select: { chapterId: true, chapter: { select: { subjectId: true } } } },
    },
  });
  if (!quiz) {
    return { error: "That quiz isn't part of your selected subjects." };
  }

  const responseByQuestionId = new Map(responses.map((response) => [response.questionId, response.selectedOptionId]));
  let correctAnswers = 0;
  const gradedResponses = quiz.questions.map((question) => {
    const selectedOptionId = responseByQuestionId.get(question.id) ?? null;
    const isCorrect =
      selectedOptionId !== null && question.options.some((option) => option.id === selectedOptionId && option.isCorrect);
    if (isCorrect) correctAnswers++;
    return { questionId: question.id, selectedOptionId, isCorrect };
  });

  const totalQuestions = quiz.questions.length;
  const score = totalQuestions === 0 ? 0 : Math.round((correctAnswers / totalQuestions) * 100);
  const xp = correctAnswers * QUIZ_XP_PER_CORRECT_ANSWER;
  const subjectId = quiz.lesson.chapter.subjectId;

  try {
    await prisma.$transaction(async (tx) => {
      const attempt = await tx.quizAttempt.create({
        data: {
          id: randomUUID(),
          userId: user.id,
          subjectId,
          quizId,
          totalQuestions,
          correctAnswers,
          score,
        },
      });

      await tx.questionResponse.createMany({
        data: gradedResponses.map((response) => ({
          quizAttemptId: attempt.id,
          questionId: response.questionId,
          selectedOptionId: response.selectedOptionId,
          isCorrect: response.isCorrect,
        })),
      });

      await tx.activity.create({
        data: {
          userId: user.id,
          type: "QUIZ_COMPLETED",
          subjectId,
          chapterId: quiz.lesson.chapterId,
          lessonId: quiz.lessonId,
          title: `Completed quiz: ${quiz.title}`,
          xp,
        },
      });
    });

    revalidatePath(`/subject/${subjectId}/chapter/${quiz.lesson.chapterId}/lesson/${quiz.lessonId}`);
    revalidatePath("/dashboard");
    return { score, correctAnswers, totalQuestions };
  } catch {
    return { error: "Could not submit this quiz attempt." };
  }
}
