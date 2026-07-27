/**
 * Deterministic, rule-based recommendations — no LLM call. Every string is
 * built from the real numbers passed in; a rule only fires when its
 * real-data condition is actually met, so an all-empty/all-zero input
 * produces zero recommendations rather than fabricated ones.
 */

export interface RecommendationSubjectInput {
  id: number;
  title: string;
  progressPercent: number;
  lessonCount: number;
  completedLessonCount: number;
  quizAverageScore: number | null;
  href: string;
}

export interface RecommendationInput {
  dailyGoalMinutes: number | null;
  todayStudyMinutes: number;
  streak: number;
  subjects: RecommendationSubjectInput[];
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  href?: string;
  priority: "high" | "medium" | "low";
}

const LOW_QUIZ_AVERAGE_THRESHOLD = 60;

export function generateRecommendations(input: RecommendationInput): Recommendation[] {
  const recommendations: Recommendation[] = [];

  const unstartedSubject = input.subjects.find(
    (subject) => subject.lessonCount > 0 && subject.completedLessonCount === 0,
  );
  if (unstartedSubject) {
    recommendations.push({
      id: `start-${unstartedSubject.id}`,
      title: `Start ${unstartedSubject.title}`,
      description: `You haven't started any lessons in ${unstartedSubject.title} yet.`,
      href: unstartedSubject.href,
      priority: "high",
    });
  }

  const weakSubject = input.subjects.find(
    (subject) => subject.quizAverageScore !== null && subject.quizAverageScore < LOW_QUIZ_AVERAGE_THRESHOLD,
  );
  if (weakSubject && weakSubject.quizAverageScore !== null) {
    recommendations.push({
      id: `review-${weakSubject.id}`,
      title: `Review ${weakSubject.title}`,
      description: `Your quiz average in ${weakSubject.title} is ${Math.round(weakSubject.quizAverageScore)}%.`,
      href: weakSubject.href,
      priority: "high",
    });
  }

  if (input.dailyGoalMinutes !== null && input.todayStudyMinutes < input.dailyGoalMinutes) {
    const remaining = input.dailyGoalMinutes - input.todayStudyMinutes;
    recommendations.push({
      id: "todays-goal",
      title: "Finish today's goal",
      description: `${remaining} ${remaining === 1 ? "minute" : "minutes"} left to hit today's study goal.`,
      priority: "medium",
    });
  }

  if (input.streak > 0) {
    recommendations.push({
      id: "streak",
      title: `${input.streak}-day streak`,
      description: `Keep your ${input.streak}-day streak going — study today to extend it.`,
      priority: "low",
    });
  }

  return recommendations;
}
