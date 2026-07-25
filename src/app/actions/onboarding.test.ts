import { describe, it, expect, vi, beforeEach } from "vitest";

const mockUser = { id: "user-1", name: "Test User", email: "test@example.com" };

vi.mock("@/lib/dal", () => ({
  requireUser: vi.fn(async () => mockUser),
}));

const prismaMock = {
  board: { findUnique: vi.fn() },
  boardClass: { findUnique: vi.fn() },
  boardClassSubject: { count: vi.fn() },
  learningStyle: { count: vi.fn() },
  targetScore: { findUnique: vi.fn() },
  dailyGoal: { findUnique: vi.fn() },
  onboardingProfile: {
    findUnique: vi.fn(),
    findUniqueOrThrow: vi.fn(),
    upsert: vi.fn(),
    update: vi.fn(),
  },
  userSubject: { deleteMany: vi.fn(), createMany: vi.fn(), count: vi.fn() },
  userLearningStyle: { deleteMany: vi.fn(), createMany: vi.fn(), count: vi.fn() },
  $transaction: vi.fn(async (callback: (tx: unknown) => unknown) => callback(prismaMock)),
};

vi.mock("@/lib/prisma", () => ({ prisma: prismaMock }));

const { saveClassSelection, saveSubjectsSelection, saveBoardSelection, saveGoalSelection } =
  await import("./onboarding");

beforeEach(() => {
  vi.clearAllMocks();
  prismaMock.$transaction.mockImplementation(async (callback: (tx: unknown) => unknown) =>
    callback(prismaMock)
  );
  // Defaults so recomputeCompletion doesn't throw when a test doesn't care about it.
  prismaMock.onboardingProfile.findUniqueOrThrow.mockResolvedValue({
    id: "profile-1",
    boardId: "cbse",
    classId: 10,
    dailyGoalId: "steady",
    completedAt: null,
  });
  prismaMock.userSubject.count.mockResolvedValue(1);
  prismaMock.userLearningStyle.count.mockResolvedValue(1);
});

describe("saveClassSelection", () => {
  it("rejects a class that isn't offered by the user's selected board", async () => {
    prismaMock.onboardingProfile.findUnique.mockResolvedValue({ id: "profile-1", boardId: "cbse" });
    prismaMock.boardClass.findUnique.mockResolvedValue(null); // no BoardClass row => not offered

    const result = await saveClassSelection(10);

    expect(result?.error).toMatch(/not available/i);
    expect(prismaMock.$transaction).not.toHaveBeenCalled();
  });

  it("requires a board to be selected first", async () => {
    prismaMock.onboardingProfile.findUnique.mockResolvedValue({ id: "profile-1", boardId: null });

    const result = await saveClassSelection(10);

    expect(result?.error).toMatch(/board/i);
    expect(prismaMock.boardClass.findUnique).not.toHaveBeenCalled();
  });

  it("persists the class when it belongs to the selected board, and clears subjects if the class changed", async () => {
    prismaMock.onboardingProfile.findUnique.mockResolvedValue({ id: "profile-1", boardId: "cbse" });
    prismaMock.boardClass.findUnique.mockResolvedValue({ boardId: "cbse", classId: 11 });
    prismaMock.onboardingProfile.findUniqueOrThrow.mockResolvedValue({
      id: "profile-1",
      boardId: "cbse",
      classId: 10, // previous class differs from the new selection (11)
      dailyGoalId: null,
      completedAt: null,
    });

    const result = await saveClassSelection(11);

    expect(result).toBeUndefined();
    expect(prismaMock.onboardingProfile.update).toHaveBeenCalledWith({
      where: { userId: mockUser.id },
      data: { classId: 11 },
    });
    expect(prismaMock.userSubject.deleteMany).toHaveBeenCalledWith({
      where: { onboardingProfileId: "profile-1" },
    });
  });

  it("does not clear subjects when re-saving the same class", async () => {
    prismaMock.onboardingProfile.findUnique.mockResolvedValue({ id: "profile-1", boardId: "cbse" });
    prismaMock.boardClass.findUnique.mockResolvedValue({ boardId: "cbse", classId: 10 });
    prismaMock.onboardingProfile.findUniqueOrThrow.mockResolvedValue({
      id: "profile-1",
      boardId: "cbse",
      classId: 10,
      dailyGoalId: null,
      completedAt: null,
    });

    await saveClassSelection(10);

    expect(prismaMock.userSubject.deleteMany).not.toHaveBeenCalled();
  });
});

describe("saveSubjectsSelection", () => {
  it("rejects subjects that aren't offered for the selected board and class", async () => {
    prismaMock.onboardingProfile.findUnique.mockResolvedValue({
      id: "profile-1",
      boardId: "cbse",
      classId: 10,
    });
    prismaMock.boardClassSubject.count.mockResolvedValue(1); // only 1 of 2 requested subjects is valid

    const result = await saveSubjectsSelection([1, 999]);

    expect(result?.error).toMatch(/not available/i);
    expect(prismaMock.$transaction).not.toHaveBeenCalled();
  });

  it("requires board and class to be selected first", async () => {
    prismaMock.onboardingProfile.findUnique.mockResolvedValue({ id: "profile-1", boardId: "cbse", classId: null });

    const result = await saveSubjectsSelection([1]);

    expect(result?.error).toMatch(/board and class/i);
  });

  it("persists subjects transactionally when all belong to the board/class", async () => {
    prismaMock.onboardingProfile.findUnique.mockResolvedValue({
      id: "profile-1",
      boardId: "cbse",
      classId: 10,
    });
    prismaMock.boardClassSubject.count.mockResolvedValue(2);

    const result = await saveSubjectsSelection([1, 2]);

    expect(result).toBeUndefined();
    expect(prismaMock.userSubject.deleteMany).toHaveBeenCalledWith({
      where: { onboardingProfileId: "profile-1" },
    });
    expect(prismaMock.userSubject.createMany).toHaveBeenCalledWith({
      data: [
        { onboardingProfileId: "profile-1", subjectId: 1 },
        { onboardingProfileId: "profile-1", subjectId: 2 },
      ],
    });
  });
});

describe("saveBoardSelection", () => {
  it("clears the saved class and subjects when the board changes", async () => {
    prismaMock.board.findUnique.mockResolvedValue({ id: "bseb" });
    prismaMock.onboardingProfile.findUnique.mockResolvedValue({ id: "profile-1", boardId: "cbse" });
    prismaMock.onboardingProfile.upsert.mockResolvedValue({ id: "profile-1" });
    prismaMock.onboardingProfile.findUniqueOrThrow.mockResolvedValue({
      id: "profile-1",
      boardId: "bseb",
      classId: null,
      dailyGoalId: null,
      completedAt: null,
    });

    await saveBoardSelection("bseb");

    expect(prismaMock.onboardingProfile.upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        update: expect.objectContaining({ boardId: "bseb", classId: null }),
      })
    );
    expect(prismaMock.userSubject.deleteMany).toHaveBeenCalledWith({
      where: { onboardingProfileId: "profile-1" },
    });
  });

  it("does not touch subjects when re-saving the same board", async () => {
    prismaMock.board.findUnique.mockResolvedValue({ id: "cbse" });
    prismaMock.onboardingProfile.findUnique.mockResolvedValue({ id: "profile-1", boardId: "cbse" });
    prismaMock.onboardingProfile.upsert.mockResolvedValue({ id: "profile-1" });

    await saveBoardSelection("cbse");

    expect(prismaMock.userSubject.deleteMany).not.toHaveBeenCalled();
  });

  it("rejects a board that doesn't exist", async () => {
    prismaMock.board.findUnique.mockResolvedValue(null);

    const result = await saveBoardSelection("not-a-real-board");

    expect(result?.error).toMatch(/not available/i);
    expect(prismaMock.$transaction).not.toHaveBeenCalled();
  });

  it("clears completedAt when a board change invalidates a previously-complete profile", async () => {
    prismaMock.board.findUnique.mockResolvedValue({ id: "bseb" });
    prismaMock.onboardingProfile.findUnique.mockResolvedValue({ id: "profile-1", boardId: "cbse" });
    prismaMock.onboardingProfile.upsert.mockResolvedValue({ id: "profile-1" });
    // After the board-change upsert clears classId, the profile is no longer complete.
    prismaMock.onboardingProfile.findUniqueOrThrow.mockResolvedValue({
      id: "profile-1",
      boardId: "bseb",
      classId: null,
      dailyGoalId: "steady",
      completedAt: new Date(), // was previously marked complete
    });
    prismaMock.userSubject.count.mockResolvedValue(0);
    prismaMock.userLearningStyle.count.mockResolvedValue(1);

    await saveBoardSelection("bseb");

    expect(prismaMock.onboardingProfile.update).toHaveBeenCalledWith({
      where: { id: "profile-1" },
      data: { completedAt: null },
    });
  });
});

describe("saveGoalSelection completion", () => {
  it("marks onboarding complete once the daily goal is the last missing requirement", async () => {
    prismaMock.targetScore.findUnique.mockResolvedValue({ id: 95, score: "95%" });
    prismaMock.dailyGoal.findUnique.mockResolvedValue({ id: "steady" });
    prismaMock.onboardingProfile.upsert.mockResolvedValue({ id: "profile-1" });
    prismaMock.onboardingProfile.findUniqueOrThrow.mockResolvedValue({
      id: "profile-1",
      boardId: "cbse",
      classId: 10,
      dailyGoalId: "steady",
      completedAt: null,
    });
    prismaMock.userSubject.count.mockResolvedValue(1);
    prismaMock.userLearningStyle.count.mockResolvedValue(1);

    const result = await saveGoalSelection({
      targetScoreId: 95,
      dailyGoalId: "steady",
      examDate: null,
    });

    expect(result).toBeUndefined();
    expect(prismaMock.onboardingProfile.update).toHaveBeenCalledWith({
      where: { id: "profile-1" },
      data: { completedAt: expect.any(Date) },
    });
  });

  it("does not mark onboarding complete while a subject is still missing", async () => {
    prismaMock.targetScore.findUnique.mockResolvedValue({ id: 95, score: "95%" });
    prismaMock.dailyGoal.findUnique.mockResolvedValue({ id: "steady" });
    prismaMock.onboardingProfile.upsert.mockResolvedValue({ id: "profile-1" });
    prismaMock.onboardingProfile.findUniqueOrThrow.mockResolvedValue({
      id: "profile-1",
      boardId: "cbse",
      classId: 10,
      dailyGoalId: "steady",
      completedAt: null,
    });
    prismaMock.userSubject.count.mockResolvedValue(0); // no subjects selected
    prismaMock.userLearningStyle.count.mockResolvedValue(1);

    await saveGoalSelection({ targetScoreId: 95, dailyGoalId: "steady", examDate: null });

    expect(prismaMock.onboardingProfile.update).not.toHaveBeenCalled();
  });
});
