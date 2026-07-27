import { describe, it, expect } from "vitest";

import { generateRecommendations, type RecommendationInput } from "./recommendations";

const baseInput: RecommendationInput = {
  dailyGoalMinutes: null,
  todayStudyMinutes: 0,
  streak: 0,
  subjects: [],
};

describe("generateRecommendations", () => {
  it("returns nothing for an all-empty/all-zero input — no fabricated recommendations", () => {
    expect(generateRecommendations(baseInput)).toEqual([]);
  });

  it("recommends starting an unstarted subject that has content", () => {
    const result = generateRecommendations({
      ...baseInput,
      subjects: [
        { id: 1, title: "Physics", progressPercent: 0, lessonCount: 9, completedLessonCount: 0, quizAverageScore: null, href: "/subject/1" },
      ],
    });
    expect(result.some((r) => r.id === "start-1")).toBe(true);
  });

  it("does not recommend starting a subject with zero lessons — nothing to start", () => {
    const result = generateRecommendations({
      ...baseInput,
      subjects: [
        { id: 3, title: "Biology", progressPercent: 0, lessonCount: 0, completedLessonCount: 0, quizAverageScore: null, href: "/subject/3" },
      ],
    });
    expect(result.some((r) => r.id === "start-3")).toBe(false);
  });

  it("recommends reviewing a subject with a real low quiz average", () => {
    const result = generateRecommendations({
      ...baseInput,
      subjects: [
        { id: 1, title: "Physics", progressPercent: 50, lessonCount: 9, completedLessonCount: 4, quizAverageScore: 40, href: "/subject/1" },
      ],
    });
    const review = result.find((r) => r.id === "review-1");
    expect(review?.description).toContain("40%");
  });

  it("does not recommend reviewing when quiz average is null — no attempts yet, not fabricated", () => {
    const result = generateRecommendations({
      ...baseInput,
      subjects: [
        { id: 1, title: "Physics", progressPercent: 50, lessonCount: 9, completedLessonCount: 4, quizAverageScore: null, href: "/subject/1" },
      ],
    });
    expect(result.some((r) => r.id === "review-1")).toBe(false);
  });

  it("does not recommend reviewing when the quiz average is at or above the threshold", () => {
    const result = generateRecommendations({
      ...baseInput,
      subjects: [
        { id: 1, title: "Physics", progressPercent: 50, lessonCount: 9, completedLessonCount: 4, quizAverageScore: 60, href: "/subject/1" },
      ],
    });
    expect(result.some((r) => r.id === "review-1")).toBe(false);
  });

  it("recommends finishing today's goal with the real remaining minutes", () => {
    const result = generateRecommendations({ ...baseInput, dailyGoalMinutes: 60, todayStudyMinutes: 20 });
    const goal = result.find((r) => r.id === "todays-goal");
    expect(goal?.description).toContain("40");
  });

  it("does not recommend the goal task once today's minutes already meet it", () => {
    const result = generateRecommendations({ ...baseInput, dailyGoalMinutes: 60, todayStudyMinutes: 60 });
    expect(result.some((r) => r.id === "todays-goal")).toBe(false);
  });

  it("shows a streak recommendation only when the real streak is positive", () => {
    expect(generateRecommendations({ ...baseInput, streak: 0 }).some((r) => r.id === "streak")).toBe(false);
    expect(generateRecommendations({ ...baseInput, streak: 5 }).some((r) => r.id === "streak")).toBe(true);
  });
});
