import type { StudyPlan, StudyPlanDay, StudyPlanTask, StudyTaskType } from "@/types/study-plan";

/**
 * Canonical goal -> minutes/day mapping. The DB stores dailyGoal.duration as
 * display copy ("30 mins / day"); this is the single source of truth used
 * for any actual scheduling math, keyed off the stable dailyGoal id.
 */
export const DAILY_GOAL_MINUTES: Record<string, number> = {
  light: 30,
  steady: 60,
  intense: 120,
  elite: 240,
};

export function getDailyGoalMinutes(dailyGoalId: string | null | undefined): number {
  if (!dailyGoalId) return 0;
  return DAILY_GOAL_MINUTES[dailyGoalId] ?? 30;
}

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const KNOWN_TASK_TYPES: StudyTaskType[] = [
  "reading",
  "visual",
  "voice",
  "practice",
  "conversation",
  "revision",
];

function toTaskType(learningStyleId: string): StudyTaskType {
  return (KNOWN_TASK_TYPES as string[]).includes(learningStyleId)
    ? (learningStyleId as StudyTaskType)
    : "reading";
}

/**
 * Deterministic, rule-based study plan generated from the user's own
 * persisted onboarding selections — no AI provider call. Splits the daily
 * minute budget evenly across the user's selected subjects every day, and
 * assigns each subject's task type by cycling through the user's chosen
 * learning styles (whose ids already match the task-type vocabulary).
 */
export function generateStudyPlan(input: {
  subjects: { id: number; title: string }[];
  dailyGoalId: string | null;
  learningStyleIds: string[];
}): StudyPlan {
  const dailyMinutes = getDailyGoalMinutes(input.dailyGoalId);
  const subjects = input.subjects;
  const styles = input.learningStyleIds.length > 0 ? input.learningStyleIds : ["reading"];

  const days: StudyPlanDay[] = DAY_LABELS.map((label, dayOfWeek) => {
    if (subjects.length === 0 || dailyMinutes === 0) {
      return { dayOfWeek, label, tasks: [], totalMinutes: 0 };
    }

    const base = Math.floor(dailyMinutes / subjects.length);
    const remainder = dailyMinutes % subjects.length;

    const tasks: StudyPlanTask[] = subjects.map((subject, index) => ({
      subjectId: subject.id,
      subjectTitle: subject.title,
      minutes: base + (index < remainder ? 1 : 0),
      taskType: toTaskType(styles[index % styles.length]),
    }));

    return {
      dayOfWeek,
      label,
      tasks,
      totalMinutes: tasks.reduce((sum, task) => sum + task.minutes, 0),
    };
  });

  return {
    dailyMinutes,
    subjects: subjects.map((subject) => ({ id: subject.id, title: subject.title })),
    days,
    totalWeeklyMinutes: days.reduce((sum, day) => sum + day.totalMinutes, 0),
  };
}
