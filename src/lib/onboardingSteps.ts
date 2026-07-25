/**
 * Pure onboarding-completion logic, deliberately free of any "server-only"
 * or Prisma import so it can be unit tested directly and reused wherever
 * a profile-shaped object is available.
 */
export interface OnboardingCompletionProfile {
  boardId: string | null;
  classId: number | null;
  dailyGoalId: string | null;
  completedAt: Date | null;
  subjects: unknown[];
  learningStyles: unknown[];
}

export type OnboardingStep =
  | "board"
  | "class"
  | "subjects"
  | "learning-style"
  | "goal-selection"
  | "ai-personalization";

type RequirementStep = Exclude<OnboardingStep, "ai-personalization">;

const ONBOARDING_STEP_PATHS: Record<OnboardingStep, string> = {
  board: "/board",
  class: "/class",
  subjects: "/subjects",
  "learning-style": "/learning-style",
  "goal-selection": "/goal-selection",
  "ai-personalization": "/ai-personalization",
};

export function onboardingStepPath(step: OnboardingStep): string {
  return ONBOARDING_STEP_PATHS[step];
}

/**
 * The first step whose *required field* is still missing (board, class,
 * subjects, learning style, daily goal) — independent of the completedAt
 * flag. Every step's page uses this to redirect back if a prerequisite is
 * missing. It deliberately never returns "ai-personalization", so the
 * ai-personalization page itself can call it without ever redirecting to
 * itself.
 */
export function getFirstMissingRequirementStep(
  profile: OnboardingCompletionProfile | null
): RequirementStep | null {
  if (!profile?.boardId) return "board";
  if (!profile.classId) return "class";
  if (profile.subjects.length === 0) return "subjects";
  if (profile.learningStyles.length === 0) return "learning-style";
  if (!profile.dailyGoalId) return "goal-selection";
  return null;
}

/**
 * The first step in the onboarding flow whose required data is still
 * missing, including the final AI-personalization/completion step. Used
 * to send an incomplete user visiting /dashboard back to the right step,
 * rather than always /board.
 */
export function getFirstIncompleteStep(
  profile: OnboardingCompletionProfile | null
): OnboardingStep | null {
  const missingRequirement = getFirstMissingRequirementStep(profile);
  if (missingRequirement) return missingRequirement;
  if (!profile?.completedAt) return "ai-personalization";
  return null;
}
