import "server-only";
import { cache } from "react";
import type { ActivityType } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { getCurrentUser, getOnboardingProfile, getUserSelectedSubject, getCompletedLessonIds } from "@/lib/dal";
import { computeSubjectProgress } from "@/lib/progress";
import { computeConsecutiveStreak, toUTCDateOnly } from "@/lib/gamification";
import { generateStudyPlan, getDailyGoalMinutes } from "@/lib/studyPlan";
import { generateRecommendations, type Recommendation } from "@/lib/recommendations";

export interface SubjectSummary {
  id: number;
  title: string;
  icon: string;
  badge: string | null;
  chapterCount: number;
  lessonCount: number;
  completedLessonCount: number;
  progressPercent: number;
  href: string;
}

/**
 * All of the current user's selected subjects, each with a real chapter/
 * lesson count and a real progress percentage — one query for subjects (with
 * nested chapters/lessons, board-scoped the same way getSubjectWithChapters
 * is) plus one getCompletedLessonIds call, not N+1 per subject.
 */
export const getUserSubjects = cache(async (): Promise<SubjectSummary[]> => {
  const user = await getCurrentUser();
  if (!user) return [];

  const profile = await getOnboardingProfile();
  if (!profile || profile.subjects.length === 0) return [];

  const boardId = profile.boardId ?? null;
  const subjectIds = profile.subjects.map((row) => row.subject.id);

  const subjects = await prisma.subject.findMany({
    where: { id: { in: subjectIds } },
    include: {
      chapters: {
        where: { OR: [{ boardId: null }, { boardId }] },
        select: { id: true, lessons: { select: { id: true } } },
      },
    },
    orderBy: { id: "asc" },
  });

  const allLessonIds = subjects.flatMap((subject) =>
    subject.chapters.flatMap((chapter) => chapter.lessons.map((lesson) => lesson.id)),
  );
  const completedLessonIds = await getCompletedLessonIds(allLessonIds);

  return subjects.map((subject) => {
    const lessonIds = subject.chapters.flatMap((chapter) => chapter.lessons.map((lesson) => lesson.id));
    return {
      id: subject.id,
      title: subject.title,
      icon: subject.icon,
      badge: subject.badge,
      chapterCount: subject.chapters.length,
      lessonCount: lessonIds.length,
      completedLessonCount: lessonIds.filter((id) => completedLessonIds.has(id)).length,
      progressPercent: computeSubjectProgress(lessonIds, completedLessonIds),
      href: `/subject/${subject.id}`,
    };
  });
});

/** Ownership-scoped: only returns a subject the current user actually selected — same rule as getUserSelectedSubject. */
export const getUserSubjectById = cache(async (subjectId: number): Promise<SubjectSummary | null> => {
  const subjects = await getUserSubjects();
  return subjects.find((subject) => subject.id === subjectId) ?? null;
});

export const getSubjectProgress = cache(async (subjectId: number) => {
  const subject = await getUserSubjectById(subjectId);
  if (!subject) return null;

  return {
    progressPercent: subject.progressPercent,
    completedLessonCount: subject.completedLessonCount,
    lessonCount: subject.lessonCount,
    chapterCount: subject.chapterCount,
  };
});

export interface ContinueLearningItem {
  subjectId: number;
  subjectTitle: string;
  chapterId: string;
  chapterTitle: string;
  lessonId: string;
  lessonTitle: string;
  href: string;
  label: "Start" | "Continue" | "Review";
}

/**
 * The first lesson (in chapter/lesson order) the user hasn't completed yet.
 * "Review" (points at the last lesson) once every lesson is done. null for a
 * subject with zero lessons — an honest empty state, never a fabricated
 * "completed lesson."
 */
export const getSubjectContinueLearning = cache(async (subjectId: number): Promise<ContinueLearningItem | null> => {
  const user = await getCurrentUser();
  if (!user) return null;

  const subject = await getUserSelectedSubject(subjectId);
  if (!subject) return null;

  const profile = await getOnboardingProfile();
  const boardId = profile?.boardId ?? null;

  const chapters = await prisma.chapter.findMany({
    where: { subjectId, OR: [{ boardId: null }, { boardId }] },
    orderBy: { order: "asc" },
    select: {
      id: true,
      title: true,
      lessons: { orderBy: { order: "asc" }, select: { id: true, title: true } },
    },
  });

  const allLessons = chapters.flatMap((chapter) =>
    chapter.lessons.map((lesson) => ({ ...lesson, chapterId: chapter.id, chapterTitle: chapter.title })),
  );
  if (allLessons.length === 0) return null;

  const completedLessonIds = await getCompletedLessonIds(allLessons.map((lesson) => lesson.id));
  const nextLesson = allLessons.find((lesson) => !completedLessonIds.has(lesson.id));
  const target = nextLesson ?? allLessons[allLessons.length - 1];

  const label: ContinueLearningItem["label"] = !nextLesson
    ? "Review"
    : completedLessonIds.size > 0
      ? "Continue"
      : "Start";

  return {
    subjectId: subject.id,
    subjectTitle: subject.title,
    chapterId: target.chapterId,
    chapterTitle: target.chapterTitle,
    lessonId: target.id,
    lessonTitle: target.title,
    href: `/subject/${subject.id}/chapter/${target.chapterId}/lesson/${target.id}`,
    label,
  };
});

/** Sum of Lesson.estimatedMinutes across this subject's not-yet-completed lessons — real, 0 if every lesson lacks an estimate or is already done. */
export const getSubjectMinutesRemaining = cache(async (subjectId: number): Promise<number> => {
  const user = await getCurrentUser();
  if (!user) return 0;

  const subject = await getUserSelectedSubject(subjectId);
  if (!subject) return 0;

  const profile = await getOnboardingProfile();
  const boardId = profile?.boardId ?? null;

  const chapters = await prisma.chapter.findMany({
    where: { subjectId, OR: [{ boardId: null }, { boardId }] },
    select: { lessons: { select: { id: true, estimatedMinutes: true } } },
  });
  const lessons = chapters.flatMap((chapter) => chapter.lessons);
  const completedLessonIds = await getCompletedLessonIds(lessons.map((lesson) => lesson.id));

  return lessons
    .filter((lesson) => !completedLessonIds.has(lesson.id))
    .reduce((sum, lesson) => sum + (lesson.estimatedMinutes ?? 0), 0);
});

export interface SubjectDetailStats {
  quizAverageScore: number | null;
  studyMinutes: number;
  todaysTasks: { taskType: string; minutes: number; completed: boolean }[];
}

/**
 * The extra real stats the Subject page's static cards need (quiz average,
 * study minutes, today's plan tasks for this one subject) — batched into
 * one Promise.all rather than scattering separate queries across the page.
 */
export const getSubjectDetailStats = cache(async (subjectId: number): Promise<SubjectDetailStats | null> => {
  const user = await getCurrentUser();
  if (!user) return null;

  const subject = await getUserSelectedSubject(subjectId);
  if (!subject) return null;

  const profile = await getOnboardingProfile();

  const [quizAgg, studyAgg] = await Promise.all([
    prisma.quizAttempt.aggregate({ _avg: { score: true }, where: { userId: user.id, subjectId } }),
    prisma.studySession.aggregate({ _sum: { minutes: true }, where: { userId: user.id, subjectId } }),
  ]);

  let todaysTasks: SubjectDetailStats["todaysTasks"] = [];
  if (profile?.dailyGoalId && profile.subjects.length > 0) {
    const plan = generateStudyPlan({
      subjects: profile.subjects.map((row) => ({ id: row.subject.id, title: row.subject.title })),
      dailyGoalId: profile.dailyGoalId,
      learningStyleIds: profile.learningStyles.map((row) => row.learningStyle.id),
    });
    const today = toUTCDateOnly(new Date());
    const todayTasksForSubject = (plan.days[today.getUTCDay()]?.tasks ?? []).filter(
      (task) => task.subjectId === subjectId,
    );

    if (todayTasksForSubject.length > 0) {
      const completions = await prisma.studyTaskCompletion.findMany({
        where: { userId: user.id, date: today, subjectId },
        select: { taskType: true },
      });
      const completedTaskTypes = new Set(completions.map((row) => row.taskType));
      todaysTasks = todayTasksForSubject.map((task) => ({
        taskType: task.taskType,
        minutes: task.minutes,
        completed: completedTaskTypes.has(task.taskType),
      }));
    }
  }

  return {
    quizAverageScore: quizAgg._avg.score !== null ? Math.round(quizAgg._avg.score) : null,
    studyMinutes: studyAgg._sum.minutes ?? 0,
    todaysTasks,
  };
});

/** Real streak — same computeConsecutiveStreak-over-StudyTaskCompletion logic used everywhere else, factored out for reuse by the shared Header. */
export const getUserStreak = cache(async (): Promise<number> => {
  const user = await getCurrentUser();
  if (!user) return 0;

  const dates = await prisma.studyTaskCompletion.findMany({
    where: { userId: user.id },
    select: { date: true },
    distinct: ["date"],
    orderBy: { date: "desc" },
  });
  return computeConsecutiveStreak(dates.map((row) => row.date));
});

export interface DashboardStudyPlanTask {
  subjectId: number;
  subjectTitle: string;
  taskType: string;
  minutes: number;
  completed: boolean;
}

export interface DashboardActivity {
  id: string;
  type: ActivityType;
  title: string;
  xp: number;
  createdAt: Date;
}

export interface DashboardData {
  user: { id: string; name: string | null; email: string; image: string | null };
  academicProfile: {
    boardTitle: string | null;
    classTitle: string | null;
    dailyGoalId: string | null;
    dailyGoalMinutes: number | null;
  };
  subjects: SubjectSummary[];
  todayStudyMinutes: number;
  todayGoalPercent: number;
  /** Study minutes for the current calendar week, Monday first through Sunday — real StudySession sums, not a fabricated heatmap. */
  weeklyStudyMinutes: number[];
  studyPlan: DashboardStudyPlanTask[] | null;
  continueLearning: ContinueLearningItem | null;
  progressMetrics: {
    totalStudyMinutes: number;
    completedLessons: number;
    quizAttempts: number;
    averageQuizScore: number;
    xp: number;
    streak: number;
    completedStudyTasks: number;
  };
  activities: DashboardActivity[];
  recommendations: Recommendation[];
}

/**
 * The single authenticated read the Dashboard page needs — composes the
 * functions above plus direct aggregate queries so no card has to fetch its
 * own data. Every number is real; a brand-new user with no activity gets an
 * honest all-zero payload (not null — null only means "not signed in").
 */
export const getDashboardData = cache(async (): Promise<DashboardData | null> => {
  const user = await getCurrentUser();
  if (!user) return null;

  const profile = await getOnboardingProfile();
  const subjects = await getUserSubjects();

  const dailyGoalId = profile?.dailyGoalId ?? null;
  const dailyGoalMinutes = dailyGoalId ? getDailyGoalMinutes(dailyGoalId) : null;

  const todayStart = toUTCDateOnly(new Date());
  const tomorrowStart = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000);

  const [
    todaySessionAgg,
    totalSessionAgg,
    completedLessons,
    quizAgg,
    quizAveragesBySubject,
    xpAgg,
    activities,
    taskCompletionDates,
    completedStudyTasks,
    latestSubjectActivity,
  ] = await Promise.all([
    prisma.studySession.aggregate({
      _sum: { minutes: true },
      where: { userId: user.id, completedAt: { gte: todayStart, lt: tomorrowStart } },
    }),
    prisma.studySession.aggregate({ _sum: { minutes: true }, where: { userId: user.id } }),
    prisma.lessonCompletion.count({ where: { userId: user.id } }),
    prisma.quizAttempt.aggregate({ _avg: { score: true }, _count: { id: true }, where: { userId: user.id } }),
    prisma.quizAttempt.groupBy({ by: ["subjectId"], where: { userId: user.id }, _avg: { score: true } }),
    prisma.activity.aggregate({ _sum: { xp: true }, where: { userId: user.id } }),
    prisma.activity.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 10,
      select: { id: true, type: true, title: true, xp: true, createdAt: true },
    }),
    prisma.studyTaskCompletion.findMany({
      where: { userId: user.id },
      select: { date: true },
      distinct: ["date"],
      orderBy: { date: "desc" },
    }),
    prisma.studyTaskCompletion.count({ where: { userId: user.id } }),
    prisma.activity.findFirst({
      where: { userId: user.id, subjectId: { not: null } },
      orderBy: { createdAt: "desc" },
      select: { subjectId: true },
    }),
  ]);

  const todayStudyMinutes = todaySessionAgg._sum.minutes ?? 0;
  const todayGoalPercent = dailyGoalMinutes ? Math.min(100, Math.round((todayStudyMinutes / dailyGoalMinutes) * 100)) : 0;
  const streak = computeConsecutiveStreak(taskCompletionDates.map((row) => row.date));

  let studyPlan: DashboardStudyPlanTask[] | null = null;
  if (profile?.dailyGoalId && profile.subjects.length > 0) {
    const plan = generateStudyPlan({
      subjects: profile.subjects.map((row) => ({ id: row.subject.id, title: row.subject.title })),
      dailyGoalId: profile.dailyGoalId,
      learningStyleIds: profile.learningStyles.map((row) => row.learningStyle.id),
    });
    const today = toUTCDateOnly(new Date());
    const todayTasks = plan.days[today.getUTCDay()]?.tasks ?? [];

    const todaysCompletions = await prisma.studyTaskCompletion.findMany({
      where: { userId: user.id, date: today },
      select: { subjectId: true, taskType: true },
    });
    const completedKeys = new Set(todaysCompletions.map((row) => `${row.subjectId}:${row.taskType}`));

    studyPlan = todayTasks.map((task) => ({
      subjectId: task.subjectId,
      subjectTitle: task.subjectTitle,
      taskType: task.taskType,
      minutes: task.minutes,
      completed: completedKeys.has(`${task.subjectId}:${task.taskType}`),
    }));
  }

  const weekStart = new Date(todayStart);
  weekStart.setUTCDate(weekStart.getUTCDate() - todayStart.getUTCDay());
  const weekEnd = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
  const weekSessions = await prisma.studySession.findMany({
    where: { userId: user.id, completedAt: { gte: weekStart, lt: weekEnd } },
    select: { minutes: true, completedAt: true },
  });
  const minutesByDayOfWeek = [0, 0, 0, 0, 0, 0, 0]; // index 0=Sun..6=Sat, matches Date#getUTCDay()
  for (const session of weekSessions) {
    const dayOfWeek = toUTCDateOnly(session.completedAt).getUTCDay();
    minutesByDayOfWeek[dayOfWeek] += session.minutes;
  }
  const weeklyStudyMinutes = [1, 2, 3, 4, 5, 6, 0].map((dayOfWeek) => minutesByDayOfWeek[dayOfWeek]); // Mon..Sun

  const continueLearningSubjectId = latestSubjectActivity?.subjectId ?? subjects[0]?.id ?? null;
  const continueLearning = continueLearningSubjectId
    ? await getSubjectContinueLearning(continueLearningSubjectId)
    : null;

  const quizAverageBySubjectId = new Map(quizAveragesBySubject.map((row) => [row.subjectId, row._avg.score]));

  const recommendations = generateRecommendations({
    dailyGoalMinutes,
    todayStudyMinutes,
    streak,
    subjects: subjects.map((subject) => ({
      id: subject.id,
      title: subject.title,
      progressPercent: subject.progressPercent,
      lessonCount: subject.lessonCount,
      completedLessonCount: subject.completedLessonCount,
      quizAverageScore: quizAverageBySubjectId.get(subject.id) ?? null,
      href: subject.href,
    })),
  });

  return {
    user: { id: user.id, name: user.name, email: user.email, image: user.image },
    academicProfile: {
      boardTitle: profile?.board?.title ?? null,
      classTitle: profile?.schoolClass?.title ?? null,
      dailyGoalId,
      dailyGoalMinutes,
    },
    subjects,
    todayStudyMinutes,
    todayGoalPercent,
    weeklyStudyMinutes,
    studyPlan,
    continueLearning,
    progressMetrics: {
      totalStudyMinutes: totalSessionAgg._sum.minutes ?? 0,
      completedLessons,
      quizAttempts: quizAgg._count.id,
      averageQuizScore: Math.round(quizAgg._avg.score ?? 0),
      xp: xpAgg._sum.xp ?? 0,
      streak,
      completedStudyTasks,
    },
    activities,
    recommendations,
  };
});
