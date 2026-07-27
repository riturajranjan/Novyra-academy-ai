import { describe, it, expect, vi, beforeEach } from "vitest";

const userA = { id: "user-a", name: "Alice", email: "alice@example.com", image: null };
const userB = { id: "user-b", name: "Bob", email: "bob@example.com", image: null };

const getCurrentUser = vi.fn(async () => userA);
const getOnboardingProfile = vi.fn(async () => null as unknown);
const getUserSelectedSubject = vi.fn(async (subjectId: number) => {
  void subjectId;
  return null as { id: number; title: string } | null;
});
const getCompletedLessonIds = vi.fn(async (lessonIds: string[]) => {
  void lessonIds;
  return new Set<string>();
});

vi.mock("@/lib/dal", () => ({ getCurrentUser, getOnboardingProfile, getUserSelectedSubject, getCompletedLessonIds }));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Args = any;

const prismaMock = {
  subject: { findMany: vi.fn(async (args: Args) => (void args, [] as unknown[])) },
  chapter: { findMany: vi.fn(async (args: Args) => (void args, [] as unknown[])) },
  studySession: {
    aggregate: vi.fn(async (args: Args) => (void args, { _sum: { minutes: null as number | null } })),
    findMany: vi.fn(async (args: Args) => (void args, [] as { minutes: number; completedAt: Date }[])),
  },
  lessonCompletion: { count: vi.fn(async (args: Args) => (void args, 0)) },
  quizAttempt: {
    aggregate: vi.fn(async (args: Args) => (void args, { _avg: { score: null as number | null }, _count: { id: 0 } })),
    groupBy: vi.fn(async (args: Args) => (void args, [] as { subjectId: number; _avg: { score: number | null } }[])),
  },
  activity: {
    aggregate: vi.fn(async (args: Args) => (void args, { _sum: { xp: null as number | null } })),
    findMany: vi.fn(async (args: Args) => (void args, [] as unknown[])),
    findFirst: vi.fn(async (args: Args) => (void args, null as { subjectId: number | null } | null)),
  },
  studyTaskCompletion: {
    findMany: vi.fn(async (args: Args) => (void args, [] as { date: Date }[])),
    count: vi.fn(async (args: Args) => (void args, 0)),
  },
};

vi.mock("@/lib/prisma", () => ({ prisma: prismaMock }));

const {
  getUserSubjects,
  getUserSubjectById,
  getSubjectContinueLearning,
  getDashboardData,
} = await import("./contentDal");

function resetPrismaMock() {
  prismaMock.subject.findMany.mockResolvedValue([]);
  prismaMock.chapter.findMany.mockResolvedValue([]);
  prismaMock.studySession.aggregate.mockResolvedValue({ _sum: { minutes: null } });
  prismaMock.studySession.findMany.mockResolvedValue([]);
  prismaMock.lessonCompletion.count.mockResolvedValue(0);
  prismaMock.quizAttempt.aggregate.mockResolvedValue({ _avg: { score: null }, _count: { id: 0 } });
  prismaMock.quizAttempt.groupBy.mockResolvedValue([]);
  prismaMock.activity.aggregate.mockResolvedValue({ _sum: { xp: null } });
  prismaMock.activity.findMany.mockResolvedValue([]);
  prismaMock.activity.findFirst.mockResolvedValue(null);
  prismaMock.studyTaskCompletion.findMany.mockResolvedValue([]);
  prismaMock.studyTaskCompletion.count.mockResolvedValue(0);
}

beforeEach(() => {
  vi.clearAllMocks();
  getCurrentUser.mockResolvedValue(userA);
  getOnboardingProfile.mockResolvedValue(null);
  getUserSelectedSubject.mockResolvedValue(null);
  getCompletedLessonIds.mockResolvedValue(new Set());
  resetPrismaMock();
});

describe("getUserSubjects", () => {
  it("returns only the subjects the profile actually selected, with real progress math", async () => {
    getOnboardingProfile.mockResolvedValue({
      boardId: "cbse",
      subjects: [{ subject: { id: 1, title: "Physics" } }],
    });
    prismaMock.subject.findMany.mockResolvedValue([
      {
        id: 1,
        title: "Physics",
        icon: "flare",
        badge: null,
        chapters: [{ id: "ch1", lessons: [{ id: "l1" }, { id: "l2" }] }],
      },
    ]);
    getCompletedLessonIds.mockResolvedValue(new Set(["l1"]));

    const subjects = await getUserSubjects();

    expect(subjects).toHaveLength(1);
    expect(subjects[0]).toMatchObject({
      id: 1,
      chapterCount: 1,
      lessonCount: 2,
      completedLessonCount: 1,
      progressPercent: 50,
      href: "/subject/1",
    });
    // scoped to only the ids the profile selected
    expect(prismaMock.subject.findMany.mock.calls[0][0].where.id.in).toEqual([1]);
  });

  it("returns 0% (not NaN) for a subject with zero lessons", async () => {
    getOnboardingProfile.mockResolvedValue({ boardId: null, subjects: [{ subject: { id: 3, title: "Biology" } }] });
    prismaMock.subject.findMany.mockResolvedValue([
      { id: 3, title: "Biology", icon: "vital_signs", badge: null, chapters: [] },
    ]);

    const subjects = await getUserSubjects();

    expect(subjects[0].progressPercent).toBe(0);
    expect(Number.isNaN(subjects[0].progressPercent)).toBe(false);
  });

  it("returns an empty list for a user with no onboarding profile", async () => {
    getOnboardingProfile.mockResolvedValue(null);
    expect(await getUserSubjects()).toEqual([]);
    expect(prismaMock.subject.findMany).not.toHaveBeenCalled();
  });
});

describe("getUserSubjectById", () => {
  it("returns null for a subject the user never selected — ownership enforced", async () => {
    getOnboardingProfile.mockResolvedValue({ boardId: null, subjects: [{ subject: { id: 1, title: "Physics" } }] });
    prismaMock.subject.findMany.mockResolvedValue([{ id: 1, title: "Physics", icon: "flare", badge: null, chapters: [] }]);

    const result = await getUserSubjectById(999);

    expect(result).toBeNull();
  });
});

describe("getSubjectContinueLearning", () => {
  it("returns the first lesson not yet completed, in chapter/lesson order", async () => {
    getUserSelectedSubject.mockResolvedValue({ id: 1, title: "Physics" });
    prismaMock.chapter.findMany.mockResolvedValue([
      { id: "ch1", title: "Mechanics", lessons: [{ id: "l1", title: "Lesson 1" }, { id: "l2", title: "Lesson 2" }] },
    ]);
    getCompletedLessonIds.mockResolvedValue(new Set(["l1"]));

    const result = await getSubjectContinueLearning(1);

    expect(result).toMatchObject({ lessonId: "l2", lessonTitle: "Lesson 2", label: "Continue" });
  });

  it("labels 'Start' when nothing has been completed yet", async () => {
    getUserSelectedSubject.mockResolvedValue({ id: 1, title: "Physics" });
    prismaMock.chapter.findMany.mockResolvedValue([
      { id: "ch1", title: "Mechanics", lessons: [{ id: "l1", title: "Lesson 1" }] },
    ]);
    getCompletedLessonIds.mockResolvedValue(new Set());

    const result = await getSubjectContinueLearning(1);

    expect(result?.label).toBe("Start");
  });

  it("labels 'Review' and points at the last lesson once everything is complete", async () => {
    getUserSelectedSubject.mockResolvedValue({ id: 1, title: "Physics" });
    prismaMock.chapter.findMany.mockResolvedValue([
      { id: "ch1", title: "Mechanics", lessons: [{ id: "l1", title: "Lesson 1" }, { id: "l2", title: "Lesson 2" }] },
    ]);
    getCompletedLessonIds.mockResolvedValue(new Set(["l1", "l2"]));

    const result = await getSubjectContinueLearning(1);

    expect(result).toMatchObject({ lessonId: "l2", label: "Review" });
  });

  it("returns null (honest empty state) for a subject with zero lessons — never fabricates a completed lesson", async () => {
    getUserSelectedSubject.mockResolvedValue({ id: 3, title: "Biology" });
    prismaMock.chapter.findMany.mockResolvedValue([]);

    expect(await getSubjectContinueLearning(3)).toBeNull();
  });

  it("returns null for a subject the user doesn't own", async () => {
    getUserSelectedSubject.mockResolvedValue(null);
    expect(await getSubjectContinueLearning(42)).toBeNull();
  });
});

describe("getDashboardData", () => {
  it("returns null only when there is no authenticated user", async () => {
    getCurrentUser.mockResolvedValue(null as unknown as typeof userA);
    expect(await getDashboardData()).toBeNull();
  });

  it("gives a brand-new user (no profile, no activity) an honest all-zero payload, not null", async () => {
    getOnboardingProfile.mockResolvedValue(null);

    const data = await getDashboardData();

    expect(data).not.toBeNull();
    expect(data?.subjects).toEqual([]);
    expect(data?.todayStudyMinutes).toBe(0);
    expect(data?.todayGoalPercent).toBe(0);
    expect(data?.studyPlan).toBeNull();
    expect(data?.continueLearning).toBeNull();
    expect(data?.progressMetrics).toEqual({
      totalStudyMinutes: 0,
      completedLessons: 0,
      quizAttempts: 0,
      averageQuizScore: 0,
      xp: 0,
      streak: 0,
      completedStudyTasks: 0,
    });
    expect(data?.activities).toEqual([]);
    expect(data?.recommendations).toEqual([]);
  });

  it("scopes every query by the authenticated user — two different users never see each other's data", async () => {
    getCurrentUser.mockResolvedValue(userA);
    await getDashboardData();
    const userAQueryUserIds = prismaMock.activity.findMany.mock.calls[0][0].where.userId;

    vi.clearAllMocks();
    resetPrismaMock();
    getCurrentUser.mockResolvedValue(userB);
    getOnboardingProfile.mockResolvedValue(null);
    await getDashboardData();
    const userBQueryUserIds = prismaMock.activity.findMany.mock.calls[0][0].where.userId;

    expect(userAQueryUserIds).toBe("user-a");
    expect(userBQueryUserIds).toBe("user-b");
    expect(userAQueryUserIds).not.toBe(userBQueryUserIds);
  });

  it("orders recent activities descending by createdAt", async () => {
    await getDashboardData();

    expect(prismaMock.activity.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ orderBy: { createdAt: "desc" } }),
    );
  });

  it.each([
    ["light", 30],
    ["steady", 60],
    ["intense", 120],
    ["elite", 240],
  ])("maps dailyGoalId '%s' to %i real minutes for todayGoalPercent", async (dailyGoalId, minutes) => {
    getOnboardingProfile.mockResolvedValue({ dailyGoalId, subjects: [], learningStyles: [] });
    prismaMock.studySession.aggregate.mockImplementation(async (args: { where: { completedAt?: unknown } }) =>
      args.where.completedAt ? { _sum: { minutes: Math.floor(minutes / 2) } } : { _sum: { minutes: 0 } },
    );

    const data = await getDashboardData();

    expect(data?.academicProfile.dailyGoalMinutes).toBe(minutes);
    expect(data?.todayGoalPercent).toBe(50);
  });
});
