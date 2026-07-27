import { describe, it, expect, vi, beforeEach } from "vitest";

const mockUser = { id: "user-1", name: "Test User", email: "test@example.com" };

const requireUser = vi.fn(async () => mockUser);
const getOnboardingProfile = vi.fn();

vi.mock("@/lib/dal", () => ({ requireUser, getOnboardingProfile }));

const revalidatePath = vi.fn();
vi.mock("next/cache", () => ({ revalidatePath }));

const prismaMock = {
  flashcard: { findFirst: vi.fn() },
  activity: { create: vi.fn() },
};

vi.mock("@/lib/prisma", () => ({ prisma: prismaMock }));

const { reviewFlashcard } = await import("./flashcard");

const baseProfile = { subjects: [{ subject: { id: 1, title: "Physics" } }] };

const baseFlashcard = {
  id: "card-1",
  lessonId: "lesson-1",
  lesson: { chapterId: "chapter-1", chapter: { subjectId: 1 } },
};

beforeEach(() => {
  vi.clearAllMocks();
  requireUser.mockResolvedValue(mockUser);
  getOnboardingProfile.mockResolvedValue(baseProfile);
  prismaMock.flashcard.findFirst.mockResolvedValue(baseFlashcard);
});

describe("reviewFlashcard", () => {
  it("rejects a flashcardId outside the user's selected subjects", async () => {
    prismaMock.flashcard.findFirst.mockResolvedValue(null);

    const result = await reviewFlashcard({ flashcardId: "card-1" });

    expect(result?.error).toBeTruthy();
    expect(prismaMock.activity.create).not.toHaveBeenCalled();
  });

  it("records a FLASHCARD_REVIEWED activity with the fixed XP rule", async () => {
    const result = await reviewFlashcard({ flashcardId: "card-1" });

    expect(result).toBeUndefined();
    expect(prismaMock.activity.create).toHaveBeenCalledWith({
      data: {
        userId: "user-1",
        type: "FLASHCARD_REVIEWED",
        subjectId: 1,
        chapterId: "chapter-1",
        lessonId: "lesson-1",
        title: "Reviewed a flashcard",
        xp: 2,
      },
    });
  });

  it("allows repeated reviews of the same card — not idempotent", async () => {
    await reviewFlashcard({ flashcardId: "card-1" });
    await reviewFlashcard({ flashcardId: "card-1" });

    expect(prismaMock.activity.create).toHaveBeenCalledTimes(2);
  });
});
