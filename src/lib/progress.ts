/**
 * Progress is never a stored counter — same rule as XP and streak in
 * gamification.ts. Callers fetch the raw Lesson ids for a chapter/subject
 * and the user's completed lesson ids, and these functions do the
 * arithmetic fresh every time.
 */

/** Percentage (0-100, rounded) of chapterLessonIds present in completedLessonIds. */
export function computeChapterProgress(chapterLessonIds: string[], completedLessonIds: Set<string>): number {
  if (chapterLessonIds.length === 0) return 0;

  const completedCount = chapterLessonIds.filter((id) => completedLessonIds.has(id)).length;
  return Math.round((completedCount / chapterLessonIds.length) * 100);
}

/** Percentage (0-100, rounded) of subjectLessonIds present in completedLessonIds. */
export function computeSubjectProgress(subjectLessonIds: string[], completedLessonIds: Set<string>): number {
  if (subjectLessonIds.length === 0) return 0;

  const completedCount = subjectLessonIds.filter((id) => completedLessonIds.has(id)).length;
  return Math.round((completedCount / subjectLessonIds.length) * 100);
}
