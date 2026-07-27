import { describe, it, expect, vi, beforeEach } from "vitest";

const mockUser = { id: "user-1", name: "Test User", email: "test@example.com" };

const requireUser = vi.fn(async () => mockUser);
const getOnboardingProfile = vi.fn();

vi.mock("@/lib/dal", () => ({ requireUser, getOnboardingProfile }));

const revalidatePath = vi.fn();
vi.mock("next/cache", () => ({ revalidatePath }));

const prismaMock = {
  lesson: { findFirst: vi.fn() },
  lessonCompletion: { findUnique: vi.fn(), create: vi.fn() },
  activity: { create: vi.fn() },
  $transaction: vi.fn(async (callback: (tx: unknown) => unknown) => callback(prismaMock)),
};

vi.mock("@/lib/prisma", () => ({ prisma: prismaMock }));

const { completeLesson } = await import("./lesson");

const baseProfile = { subjects: [{ subject: { id: 1, title: "Physics" } }] };

const baseLesson = {
  id: "lesson-1",
  title: "Newton's First Law",
  chapterId: "chapter-1",
  chapter: { subjectId: 1 },
};

beforeEach(() => {
  vi.clearAllMocks();
  requireUser.mockResolvedValue(mockUser);
  getOnboardingProfile.mockResolvedValue(baseProfile);
  prismaMock.$transaction.mockImplementation(async (callback: (tx: unknown) => unknown) => callback(prismaMock));
  prismaMock.lesson.findFirst.mockResolvedValue(baseLesson);
  prismaMock.lessonCompletion.findUnique.mockResolvedValue(null);
});

describe("completeLesson", () => {
  it("rejects a lessonId that isn't part of the user's selected subjects", async () => {
    prismaMock.lesson.findFirst.mockResolvedValue(null);

    const result = await completeLesson({ lessonId: "lesson-1" });

    expect(result?.error).toBeTruthy();
    expect(prismaMock.$transaction).not.toHaveBeenCalled();
  });

  it("rejects when onboarding isn't complete", async () => {
    getOnboardingProfile.mockResolvedValue({ subjects: [] });

    const result = await completeLesson({ lessonId: "lesson-1" });

    expect(result?.error).toBeTruthy();
    expect(prismaMock.lesson.findFirst).not.toHaveBeenCalled();
  });

  it("is idempotent: completing an already-completed lesson is a no-op", async () => {
    prismaMock.lessonCompletion.findUnique.mockResolvedValue({ id: "existing" });

    const result = await completeLesson({ lessonId: "lesson-1" });

    expect(result).toEqual({ alreadyCompleted: true });
    expect(prismaMock.lessonCompletion.create).not.toHaveBeenCalled();
    expect(prismaMock.activity.create).not.toHaveBeenCalled();
  });

  it("records a completion and a LESSON_COMPLETED activity with the fixed XP rule", async () => {
    const result = await completeLesson({ lessonId: "lesson-1" });

    expect(result).toEqual({ alreadyCompleted: false });
    expect(prismaMock.lessonCompletion.create).toHaveBeenCalledTimes(1);

    const completionArgs = prismaMock.lessonCompletion.create.mock.calls[0][0].data;
    expect(completionArgs.userId).toBe("user-1");
    expect(completionArgs.lessonId).toBe("lesson-1");

    expect(prismaMock.activity.create).toHaveBeenCalledWith({
      data: {
        userId: "user-1",
        type: "LESSON_COMPLETED",
        subjectId: 1,
        chapterId: "chapter-1",
        lessonId: "lesson-1",
        title: "Completed Newton's First Law",
        xp: 15,
      },
    });

    expect(revalidatePath).toHaveBeenCalledWith("/subject/1/chapter/chapter-1/lesson/lesson-1");
    expect(revalidatePath).toHaveBeenCalledWith("/dashboard");
  });

  it("never uses a client-supplied userId", async () => {
    await completeLesson({ lessonId: "lesson-1", userId: "attacker" } as never);

    expect(prismaMock.lessonCompletion.create.mock.calls[0][0].data.userId).toBe("user-1");
    expect(prismaMock.activity.create.mock.calls[0][0].data.userId).toBe("user-1");
  });
});
