/**
 * XP awarded for completing a study-plan task. This is the one and only
 * XP rule right now — there is no manual XP editing anywhere. XP is never
 * stored as a mutable counter; it lives on each Activity row (Activity.xp)
 * and a user's total is the sum of their Activity rows.
 */
export const STUDY_TASK_XP = 10;

/** Flat XP for completing a lesson (LessonCompletion row created). */
export const LESSON_COMPLETION_XP = 15;

/** XP per correct answer in a quiz attempt — total is computed, never stored. */
export const QUIZ_XP_PER_CORRECT_ANSWER = 5;

/** Flat XP for reviewing a flashcard. */
export const FLASHCARD_REVIEW_XP = 2;

/** Flat XP for a lesson's first note (edits to an existing note don't re-award it). */
export const NOTE_CREATED_XP = 5;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/** Truncates to a UTC calendar day so streaks never depend on server timezone. */
export function toUTCDateOnly(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function daysBetween(a: Date, b: Date): number {
  return Math.round((toUTCDateOnly(a).getTime() - toUTCDateOnly(b).getTime()) / MS_PER_DAY);
}

/**
 * Streak isn't a stored counter either — there's no User.currentStreak
 * column, so it can't be manually edited. It's the length of the run of
 * consecutive calendar days (ending at the most recent one) with at least
 * one StudyTaskCompletion, derived fresh from the distinct completion
 * dates every time. Pass dates sorted descending, most recent first.
 */
export function computeConsecutiveStreak(datesDesc: Date[]): number {
  if (datesDesc.length === 0) return 0;

  let streak = 1;
  for (let i = 1; i < datesDesc.length; i++) {
    if (daysBetween(datesDesc[i - 1], datesDesc[i]) === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}
