import { randomUUID, randomBytes } from "node:crypto";
import type { PrismaClient } from "@prisma/client";

import { hashPassword } from "../../src/lib/password";
import { LESSON_COMPLETION_XP, QUIZ_XP_PER_CORRECT_ANSWER, FLASHCARD_REVIEW_XP, NOTE_CREATED_XP } from "../../src/lib/gamification";

const DEMO_EMAIL = "demo@novyratech.dev";

/**
 * Seeds a persistent demo account with real, non-zero progress — the only
 * user-scoped rows (LessonCompletion/QuizAttempt/Note/Activity) anywhere in
 * the seed, since none of that data has a meaningful owner otherwise. The
 * password is regenerated and printed on every run by design: this is a
 * shared demo account, not a secret to protect, and re-printing means
 * whoever last ran seed can always get in without needing to track down an
 * old password.
 */
export async function seedDemoUser(prisma: PrismaClient) {
  const password = randomBytes(9).toString("base64url");
  const passwordHash = await hashPassword(password);

  const user = await prisma.user.upsert({
    where: { email: DEMO_EMAIL },
    create: { email: DEMO_EMAIL, name: "Demo Student", passwordHash },
    update: { passwordHash },
  });

  const profile = await prisma.onboardingProfile.upsert({
    where: { userId: user.id },
    create: {
      userId: user.id,
      boardId: "cbse",
      classId: 11,
      targetScoreId: 90,
      dailyGoalId: "steady",
      completedAt: new Date(),
    },
    update: { boardId: "cbse", classId: 11, targetScoreId: 90, dailyGoalId: "steady", completedAt: new Date() },
  });

  // All 4 subjects selected: Physics/Chemistry to demonstrate the fully-
  // seeded flow, Biology/Mathematics to demonstrate the empty-state flow —
  // both are things this seed is meant to let someone actually click through.
  for (const subjectId of [1, 2, 3, 4]) {
    await prisma.userSubject.upsert({
      where: { onboardingProfileId_subjectId: { onboardingProfileId: profile.id, subjectId } },
      create: { onboardingProfileId: profile.id, subjectId },
      update: {},
    });
  }
  await prisma.userLearningStyle.upsert({
    where: { onboardingProfileId_learningStyleId: { onboardingProfileId: profile.id, learningStyleId: "reading" } },
    create: { onboardingProfileId: profile.id, learningStyleId: "reading" },
    update: {},
  });

  // Real progress: all of Physics "Units and Measurements" done, one Chemistry lesson done.
  const completedLessonIds = ["cbse-physics-ch1-l1", "cbse-physics-ch1-l2", "cbse-physics-ch1-l3", "cbse-chemistry-ch1-l1"];
  for (const lessonId of completedLessonIds) {
    const lesson = await prisma.lesson.findUnique({ where: { id: lessonId }, select: { id: true, title: true, chapterId: true, chapter: { select: { subjectId: true } } } });
    if (!lesson) continue;

    await prisma.lessonCompletion.upsert({
      where: { userId_lessonId: { userId: user.id, lessonId } },
      create: { id: randomUUID(), userId: user.id, lessonId },
      update: {},
    });

    const activityId = `demo-activity-lesson-${lessonId}`;
    await prisma.activity.upsert({
      where: { id: activityId },
      create: {
        id: activityId,
        userId: user.id,
        type: "LESSON_COMPLETED",
        subjectId: lesson.chapter.subjectId,
        chapterId: lesson.chapterId,
        lessonId: lesson.id,
        title: `Completed ${lesson.title}`,
        xp: LESSON_COMPLETION_XP,
      },
      update: {},
    });
  }

  // One quiz attempt (Physics "Units and Measurements" quiz), answered correctly.
  const quiz = await prisma.quiz.findUnique({
    where: { id: "cbse-physics-ch1-quiz" },
    include: { questions: { include: { options: true }, orderBy: { order: "asc" } }, lesson: { select: { chapterId: true, chapter: { select: { subjectId: true } } } } },
  });
  if (quiz) {
    const attemptId = "demo-attempt-physics-ch1-quiz";
    const correctAnswers = quiz.questions.length;
    const attempt = await prisma.quizAttempt.upsert({
      where: { id: attemptId },
      create: {
        id: attemptId,
        userId: user.id,
        subjectId: quiz.lesson.chapter.subjectId,
        quizId: quiz.id,
        totalQuestions: quiz.questions.length,
        correctAnswers,
        score: 100,
      },
      update: {},
    });

    for (const question of quiz.questions) {
      const correctOption = question.options.find((option) => option.isCorrect);
      await prisma.questionResponse.upsert({
        where: { quizAttemptId_questionId: { quizAttemptId: attempt.id, questionId: question.id } },
        create: {
          quizAttemptId: attempt.id,
          questionId: question.id,
          selectedOptionId: correctOption?.id ?? null,
          isCorrect: true,
        },
        update: {},
      });
    }

    const quizActivityId = "demo-activity-quiz-physics-ch1";
    await prisma.activity.upsert({
      where: { id: quizActivityId },
      create: {
        id: quizActivityId,
        userId: user.id,
        type: "QUIZ_COMPLETED",
        subjectId: quiz.lesson.chapter.subjectId,
        chapterId: quiz.lesson.chapterId,
        lessonId: quiz.lessonId,
        title: `Completed quiz: ${quiz.title}`,
        xp: correctAnswers * QUIZ_XP_PER_CORRECT_ANSWER,
      },
      update: {},
    });
  }

  // Notes on two completed lessons.
  const noteSeeds = [
    { lessonId: "cbse-physics-ch1-l1", content: "Remember: always write the unit, never just the number. SI base units: m, kg, s, A, K, mol, cd." },
    { lessonId: "cbse-chemistry-ch1-l1", content: "Mole = counting unit. n = mass / molar mass. Avogadro's number = 6.022 x 10^23." },
  ];
  for (const noteSeed of noteSeeds) {
    const lesson = await prisma.lesson.findUnique({ where: { id: noteSeed.lessonId }, select: { id: true, chapterId: true, chapter: { select: { subjectId: true } } } });
    if (!lesson) continue;

    await prisma.note.upsert({
      where: { userId_lessonId: { userId: user.id, lessonId: lesson.id } },
      create: { userId: user.id, lessonId: lesson.id, content: noteSeed.content },
      update: { content: noteSeed.content },
    });

    const noteActivityId = `demo-activity-note-${lesson.id}`;
    await prisma.activity.upsert({
      where: { id: noteActivityId },
      create: {
        id: noteActivityId,
        userId: user.id,
        type: "NOTE_CREATED",
        subjectId: lesson.chapter.subjectId,
        chapterId: lesson.chapterId,
        lessonId: lesson.id,
        title: "Created a note",
        xp: NOTE_CREATED_XP,
      },
      update: {},
    });
  }

  // A couple of flashcard reviews (Physics ch1 flashcards).
  const flashcardIds = ["cbse-physics-ch1-fc1", "cbse-physics-ch1-fc2"];
  for (const flashcardId of flashcardIds) {
    const flashcard = await prisma.flashcard.findUnique({ where: { id: flashcardId }, select: { id: true, lessonId: true, lesson: { select: { chapterId: true, chapter: { select: { subjectId: true } } } } } });
    if (!flashcard) continue;

    const flashcardActivityId = `demo-activity-flashcard-${flashcard.id}`;
    await prisma.activity.upsert({
      where: { id: flashcardActivityId },
      create: {
        id: flashcardActivityId,
        userId: user.id,
        type: "FLASHCARD_REVIEWED",
        subjectId: flashcard.lesson.chapter.subjectId,
        chapterId: flashcard.lesson.chapterId,
        lessonId: flashcard.lessonId,
        title: "Reviewed a flashcard",
        xp: FLASHCARD_REVIEW_XP,
      },
      update: {},
    });
  }

  console.log(`\nDemo account ready: ${DEMO_EMAIL} / ${password}\n`);
}
