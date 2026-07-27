import type { ActivityType } from "@prisma/client";

/** Material Symbols icon per Activity.type — shared by desktop and mobile Recent Activity widgets. */
export const ACTIVITY_TYPE_ICONS: Record<ActivityType, string> = {
  TASK_COMPLETED: "check_circle",
  LESSON_STARTED: "play_circle",
  LESSON_COMPLETED: "auto_stories",
  QUIZ_STARTED: "quiz",
  QUIZ_COMPLETED: "fact_check",
  NOTE_CREATED: "edit_note",
  FLASHCARD_REVIEWED: "style",
  STUDY_SESSION: "schedule",
  STREAK_EARNED: "local_fire_department",
};

/** Coarse relative-time label (minutes/hours/days) for an Activity.createdAt timestamp. */
export function formatRelativeTime(date: Date, now: Date = new Date()): string {
  const diffMinutes = Math.floor((now.getTime() - new Date(date).getTime()) / 60000);

  if (diffMinutes < 1) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;

  return new Date(date).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}
