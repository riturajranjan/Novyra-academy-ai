import { describe, it, expect } from "vitest";
import {
  getFirstMissingRequirementStep,
  getFirstIncompleteStep,
  onboardingStepPath,
  type OnboardingCompletionProfile,
} from "./onboardingSteps";

function profile(overrides: Partial<OnboardingCompletionProfile> = {}): OnboardingCompletionProfile {
  return {
    boardId: "cbse",
    classId: 10,
    dailyGoalId: "steady",
    completedAt: new Date(),
    subjects: [{ subjectId: 1 }],
    learningStyles: [{ learningStyleId: "visual" }],
    ...overrides,
  };
}

describe("getFirstMissingRequirementStep", () => {
  it("returns board when there is no profile at all", () => {
    expect(getFirstMissingRequirementStep(null)).toBe("board");
  });

  it("returns board when boardId is missing", () => {
    expect(getFirstMissingRequirementStep(profile({ boardId: null }))).toBe("board");
  });

  it("returns class when classId is missing", () => {
    expect(getFirstMissingRequirementStep(profile({ classId: null }))).toBe("class");
  });

  it("returns subjects when no subject is selected", () => {
    expect(getFirstMissingRequirementStep(profile({ subjects: [] }))).toBe("subjects");
  });

  it("returns learning-style when no learning style is selected", () => {
    expect(getFirstMissingRequirementStep(profile({ learningStyles: [] }))).toBe("learning-style");
  });

  it("returns goal-selection when dailyGoalId is missing", () => {
    expect(getFirstMissingRequirementStep(profile({ dailyGoalId: null }))).toBe("goal-selection");
  });

  it("never returns ai-personalization, even when everything else is missing", () => {
    const empty = profile({
      boardId: null,
      classId: null,
      dailyGoalId: null,
      subjects: [],
      learningStyles: [],
    });
    expect(getFirstMissingRequirementStep(empty)).not.toBe("ai-personalization");
  });

  it("returns null once board, class, subjects, learning style, and daily goal are all set", () => {
    expect(getFirstMissingRequirementStep(profile())).toBeNull();
  });
});

describe("getFirstIncompleteStep", () => {
  it("delegates to the missing-requirement step first", () => {
    expect(getFirstIncompleteStep(profile({ classId: null }))).toBe("class");
  });

  it("returns ai-personalization when requirements are met but completedAt is not set", () => {
    expect(getFirstIncompleteStep(profile({ completedAt: null }))).toBe("ai-personalization");
  });

  it("returns null (fully onboarded) once completedAt is set and all requirements are met", () => {
    expect(getFirstIncompleteStep(profile())).toBeNull();
  });
});

describe("onboardingStepPath", () => {
  it("maps every step to its route", () => {
    expect(onboardingStepPath("board")).toBe("/board");
    expect(onboardingStepPath("class")).toBe("/class");
    expect(onboardingStepPath("subjects")).toBe("/subjects");
    expect(onboardingStepPath("learning-style")).toBe("/learning-style");
    expect(onboardingStepPath("goal-selection")).toBe("/goal-selection");
    expect(onboardingStepPath("ai-personalization")).toBe("/ai-personalization");
  });
});
