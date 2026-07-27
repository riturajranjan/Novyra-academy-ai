import { describe, it, expect, vi, beforeEach } from "vitest";

const mockUser = { id: "user-1", name: "Test User", email: "test@example.com" };

const requireUser = vi.fn(async () => mockUser);
const getOnboardingProfile = vi.fn();

vi.mock("@/lib/dal", () => ({ requireUser, getOnboardingProfile }));

const revalidatePath = vi.fn();
vi.mock("next/cache", () => ({ revalidatePath }));

const prismaMock = {
  quiz: { findFirst: vi.fn() },
  quizAttempt: { create: vi.fn() },
  questionResponse: { createMany: vi.fn() },
  activity: { create: vi.fn() },
  $transaction: vi.fn(async (callback: (tx: unknown) => unknown) => callback(prismaMock)),
};

vi.mock("@/lib/prisma", () => ({ prisma: prismaMock }));

const { submitQuizAttempt } = await import("./quiz");

const baseProfile = { subjects: [{ subject: { id: 1, title: "Physics" } }] };

const baseQuiz = {
  id: "quiz-1",
  title: "Newton's Laws Quiz",
  lessonId: "lesson-1",
  lesson: { chapterId: "chapter-1", chapter: { subjectId: 1 } },
  questions: [
    {
      id: "q1",
      options: [
        { id: "opt-a", isCorrect: true },
        { id: "opt-b", isCorrect: false },
      ],
    },
    {
      id: "q2",
      options: [
        { id: "opt-c", isCorrect: false },
        { id: "opt-d", isCorrect: true },
      ],
    },
  ],
};

beforeEach(() => {
  vi.clearAllMocks();
  requireUser.mockResolvedValue(mockUser);
  getOnboardingProfile.mockResolvedValue(baseProfile);
  prismaMock.$transaction.mockImplementation(async (callback: (tx: unknown) => unknown) => callback(prismaMock));
  prismaMock.quiz.findFirst.mockResolvedValue(baseQuiz);
  prismaMock.quizAttempt.create.mockResolvedValue({ id: "attempt-1" });
});

describe("submitQuizAttempt", () => {
  it("rejects a quizId that isn't part of the user's selected subjects", async () => {
    prismaMock.quiz.findFirst.mockResolvedValue(null);

    const result = await submitQuizAttempt({
      quizId: "quiz-1",
      responses: [{ questionId: "q1", selectedOptionId: "opt-a" }],
    });

    expect(result && "error" in result ? result.error : undefined).toBeTruthy();
    expect(prismaMock.$transaction).not.toHaveBeenCalled();
  });

  it("grades server-side and treats an unanswered question as incorrect", async () => {
    const result = await submitQuizAttempt({
      quizId: "quiz-1",
      responses: [{ questionId: "q1", selectedOptionId: "opt-a" }],
    });

    expect(result).toEqual({ score: 50, correctAnswers: 1, totalQuestions: 2 });
  });

  it("computes XP from correct answers only, never trusting client input", async () => {
    await submitQuizAttempt({
      quizId: "quiz-1",
      responses: [
        { questionId: "q1", selectedOptionId: "opt-a" },
        { questionId: "q2", selectedOptionId: "opt-d" },
      ],
    });

    expect(prismaMock.activity.create).toHaveBeenCalledWith({
      data: {
        userId: "user-1",
        type: "QUIZ_COMPLETED",
        subjectId: 1,
        chapterId: "chapter-1",
        lessonId: "lesson-1",
        title: "Completed quiz: Newton's Laws Quiz",
        xp: 10,
      },
    });
  });

  it("scores 0 for an option id that doesn't belong to the question it was submitted for", async () => {
    const result = await submitQuizAttempt({
      quizId: "quiz-1",
      responses: [{ questionId: "q1", selectedOptionId: "opt-d" }],
    });

    expect(result).toEqual({ score: 0, correctAnswers: 0, totalQuestions: 2 });
  });

  it("creates a QuestionResponse for every question, including unanswered ones", async () => {
    await submitQuizAttempt({
      quizId: "quiz-1",
      responses: [{ questionId: "q1", selectedOptionId: "opt-a" }],
    });

    expect(prismaMock.questionResponse.createMany).toHaveBeenCalledWith({
      data: [
        { quizAttemptId: "attempt-1", questionId: "q1", selectedOptionId: "opt-a", isCorrect: true },
        { quizAttemptId: "attempt-1", questionId: "q2", selectedOptionId: null, isCorrect: false },
      ],
    });
  });

  it("allows retaking a quiz — not idempotent", async () => {
    await submitQuizAttempt({ quizId: "quiz-1", responses: [{ questionId: "q1", selectedOptionId: "opt-a" }] });
    await submitQuizAttempt({ quizId: "quiz-1", responses: [{ questionId: "q1", selectedOptionId: "opt-a" }] });

    expect(prismaMock.quizAttempt.create).toHaveBeenCalledTimes(2);
  });
});
