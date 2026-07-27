import { describe, it, expect, vi, beforeEach } from "vitest";

const mockUser = { id: "user-1", name: "Test User", email: "test@example.com" };

const requireUser = vi.fn(async () => mockUser);
const getOnboardingProfile = vi.fn();

vi.mock("@/lib/dal", () => ({ requireUser, getOnboardingProfile }));

const revalidatePath = vi.fn();
vi.mock("next/cache", () => ({ revalidatePath }));

const prismaMock = {
  lesson: { findFirst: vi.fn() },
  note: { findUnique: vi.fn(), upsert: vi.fn() },
  activity: { create: vi.fn() },
  $transaction: vi.fn(async (callback: (tx: unknown) => unknown) => callback(prismaMock)),
};

vi.mock("@/lib/prisma", () => ({ prisma: prismaMock }));

const { saveNote } = await import("./note");

const baseProfile = { subjects: [{ subject: { id: 1, title: "Physics" } }] };

const baseLesson = { id: "lesson-1", chapterId: "chapter-1", chapter: { subjectId: 1 } };

beforeEach(() => {
  vi.clearAllMocks();
  requireUser.mockResolvedValue(mockUser);
  getOnboardingProfile.mockResolvedValue(baseProfile);
  prismaMock.$transaction.mockImplementation(async (callback: (tx: unknown) => unknown) => callback(prismaMock));
  prismaMock.lesson.findFirst.mockResolvedValue(baseLesson);
  prismaMock.note.findUnique.mockResolvedValue(null);
});

describe("saveNote", () => {
  it("rejects a lessonId outside the user's selected subjects", async () => {
    prismaMock.lesson.findFirst.mockResolvedValue(null);

    const result = await saveNote({ lessonId: "lesson-1", content: "hello" });

    expect(result?.error).toBeTruthy();
    expect(prismaMock.$transaction).not.toHaveBeenCalled();
  });

  it("rejects empty content before touching the database", async () => {
    const result = await saveNote({ lessonId: "lesson-1", content: "   " });

    expect(result?.error).toBeTruthy();
    expect(prismaMock.lesson.findFirst).not.toHaveBeenCalled();
  });

  it("fires NOTE_CREATED and upserts on first save", async () => {
    const result = await saveNote({ lessonId: "lesson-1", content: "F = ma" });

    expect(result).toBeUndefined();
    expect(prismaMock.note.upsert).toHaveBeenCalledWith({
      where: { userId_lessonId: { userId: "user-1", lessonId: "lesson-1" } },
      create: { userId: "user-1", lessonId: "lesson-1", content: "F = ma" },
      update: { content: "F = ma" },
    });
    expect(prismaMock.activity.create).toHaveBeenCalledWith({
      data: {
        userId: "user-1",
        type: "NOTE_CREATED",
        subjectId: 1,
        chapterId: "chapter-1",
        lessonId: "lesson-1",
        title: "Created a note",
        xp: 5,
      },
    });
  });

  it("does not re-fire NOTE_CREATED when editing an existing note", async () => {
    prismaMock.note.findUnique.mockResolvedValue({ id: "note-1", content: "old" });

    await saveNote({ lessonId: "lesson-1", content: "new content" });

    expect(prismaMock.note.upsert).toHaveBeenCalled();
    expect(prismaMock.activity.create).not.toHaveBeenCalled();
  });
});
