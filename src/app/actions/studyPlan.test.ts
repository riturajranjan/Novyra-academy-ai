import { describe, it, expect, vi, beforeEach } from "vitest";

const mockUser = { id: "user-1", name: "Test User", email: "test@example.com" };

const requireUser = vi.fn(async () => mockUser);
const getOnboardingProfile = vi.fn();

vi.mock("@/lib/dal", () => ({ requireUser, getOnboardingProfile }));

const revalidatePath = vi.fn();
vi.mock("next/cache", () => ({ revalidatePath }));

const prismaMock = {
  studyTaskCompletion: {
    findUnique: vi.fn(),
    count: vi.fn(),
    create: vi.fn(),
    findMany: vi.fn(),
  },
  studySession: { create: vi.fn() },
  activity: { create: vi.fn() },
  $transaction: vi.fn(async (callback: (tx: unknown) => unknown) => callback(prismaMock)),
};

vi.mock("@/lib/prisma", () => ({ prisma: prismaMock }));

const { completeStudyPlanTask } = await import("./studyPlan");

// Physics + Mathematics, "steady" goal (60 min/day) split evenly with a
// "reading" learning style — every day of the generated plan gives each
// subject a 30-minute "reading" task, so tests don't need to mock the date.
const baseProfile = {
  dailyGoalId: "steady",
  subjects: [
    { subject: { id: 1, title: "Physics" } },
    { subject: { id: 4, title: "Mathematics" } },
  ],
  learningStyles: [{ learningStyle: { id: "reading" } }],
};

function daysAgo(n: number): Date {
  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  d.setUTCDate(d.getUTCDate() - n);
  return d;
}

beforeEach(() => {
  vi.clearAllMocks();
  requireUser.mockResolvedValue(mockUser);
  getOnboardingProfile.mockResolvedValue(baseProfile);
  prismaMock.$transaction.mockImplementation(async (callback: (tx: unknown) => unknown) =>
    callback(prismaMock)
  );
  prismaMock.studyTaskCompletion.findUnique.mockResolvedValue(null);
  prismaMock.studyTaskCompletion.count.mockResolvedValue(0);
  prismaMock.studyTaskCompletion.findMany.mockResolvedValue([{ date: daysAgo(0) }]);
});

describe("completeStudyPlanTask", () => {
  it("rejects a subjectId that isn't part of the user's selected subjects", async () => {
    const result = await completeStudyPlanTask({ subjectId: 999 });

    expect(result?.error).toBeTruthy();
    expect(prismaMock.$transaction).not.toHaveBeenCalled();
  });

  it("rejects a non-positive subjectId before ever reading the profile", async () => {
    const result = await completeStudyPlanTask({ subjectId: -1 });

    expect(result?.error).toBeTruthy();
    expect(getOnboardingProfile).not.toHaveBeenCalled();
  });

  it("is idempotent: completing an already-completed task is a no-op", async () => {
    prismaMock.studyTaskCompletion.findUnique.mockResolvedValue({
      id: "existing",
      userId: "user-1",
      date: daysAgo(0),
      subjectId: 1,
      taskType: "reading",
    });

    const result = await completeStudyPlanTask({ subjectId: 1 });

    expect(result).toEqual({ alreadyCompleted: true });
    expect(prismaMock.studyTaskCompletion.create).not.toHaveBeenCalled();
    expect(prismaMock.studySession.create).not.toHaveBeenCalled();
    expect(prismaMock.activity.create).not.toHaveBeenCalled();
  });

  it("records a completion, a study session, and a TASK_COMPLETED activity with the fixed XP rule", async () => {
    const result = await completeStudyPlanTask({ subjectId: 1 });

    expect(result).toEqual({ alreadyCompleted: false });

    expect(prismaMock.studyTaskCompletion.create).toHaveBeenCalledTimes(1);
    const completionArgs = prismaMock.studyTaskCompletion.create.mock.calls[0][0].data;
    expect(completionArgs.userId).toBe("user-1");
    expect(completionArgs.subjectId).toBe(1);
    expect(completionArgs.taskType).toBe("reading");

    expect(prismaMock.studySession.create).toHaveBeenCalledWith({
      data: { userId: "user-1", subjectId: 1, minutes: 30, source: "study_plan_task" },
    });

    expect(prismaMock.activity.create).toHaveBeenCalledWith({
      data: {
        userId: "user-1",
        type: "TASK_COMPLETED",
        subjectId: 1,
        title: "Completed Physics study session",
        xp: 10,
      },
    });

    expect(revalidatePath).toHaveBeenCalledWith("/dashboard");
  });

  it("never uses a client-supplied userId — always the authenticated session's id", async () => {
    await completeStudyPlanTask({ subjectId: 1, userId: "attacker" } as never);

    expect(prismaMock.studyTaskCompletion.create.mock.calls[0][0].data.userId).toBe("user-1");
    expect(prismaMock.studySession.create.mock.calls[0][0].data.userId).toBe("user-1");
    expect(prismaMock.activity.create.mock.calls[0][0].data.userId).toBe("user-1");
  });

  it("fires a STREAK_EARNED activity when this is the first completion today and extends a streak", async () => {
    prismaMock.studyTaskCompletion.findMany.mockResolvedValue([
      { date: daysAgo(0) },
      { date: daysAgo(1) },
    ]);

    await completeStudyPlanTask({ subjectId: 1 });

    expect(prismaMock.activity.create).toHaveBeenCalledTimes(2);
    expect(prismaMock.activity.create).toHaveBeenNthCalledWith(2, {
      data: { userId: "user-1", type: "STREAK_EARNED", title: "2-day streak" },
    });
  });

  it("does not fire a streak activity for a lone first-time completion (streak of 1)", async () => {
    prismaMock.studyTaskCompletion.findMany.mockResolvedValue([{ date: daysAgo(0) }]);

    await completeStudyPlanTask({ subjectId: 1 });

    expect(prismaMock.activity.create).toHaveBeenCalledTimes(1);
  });

  it("does not recompute the streak when another subject was already completed today", async () => {
    prismaMock.studyTaskCompletion.count.mockResolvedValue(1);

    await completeStudyPlanTask({ subjectId: 1 });

    expect(prismaMock.studyTaskCompletion.findMany).not.toHaveBeenCalled();
    expect(prismaMock.activity.create).toHaveBeenCalledTimes(1);
  });

  it("rejects when onboarding (daily goal / subjects) isn't complete", async () => {
    getOnboardingProfile.mockResolvedValue({ ...baseProfile, dailyGoalId: null });

    const result = await completeStudyPlanTask({ subjectId: 1 });

    expect(result?.error).toBeTruthy();
    expect(prismaMock.$transaction).not.toHaveBeenCalled();
  });
});
