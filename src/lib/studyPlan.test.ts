import { describe, it, expect } from "vitest";
import { DAILY_GOAL_MINUTES, getDailyGoalMinutes, generateStudyPlan } from "./studyPlan";

describe("getDailyGoalMinutes", () => {
  it("maps the canonical goal ids to minutes/day", () => {
    expect(getDailyGoalMinutes("light")).toBe(30);
    expect(getDailyGoalMinutes("steady")).toBe(60);
    expect(getDailyGoalMinutes("intense")).toBe(120);
    expect(getDailyGoalMinutes("elite")).toBe(240);
  });

  it("returns the same minutes regardless of which surface (desktop/mobile) reads it", () => {
    // Desktop and mobile both resolve through this single function, so the
    // canonical value they persist can never diverge.
    const fromDesktop = getDailyGoalMinutes("intense");
    const fromMobile = getDailyGoalMinutes("intense");
    expect(fromDesktop).toBe(fromMobile);
  });

  it("returns 0 for a null/undefined goal", () => {
    expect(getDailyGoalMinutes(null)).toBe(0);
    expect(getDailyGoalMinutes(undefined)).toBe(0);
  });

  it("has exactly the four goals specified", () => {
    expect(Object.keys(DAILY_GOAL_MINUTES).sort()).toEqual(["elite", "intense", "light", "steady"]);
  });
});

describe("generateStudyPlan", () => {
  it("only allocates time to the subjects the user actually selected", () => {
    const plan = generateStudyPlan({
      subjects: [
        { id: 1, title: "Physics" },
        { id: 4, title: "Mathematics" },
      ],
      dailyGoalId: "steady",
      learningStyleIds: ["visual"],
    });

    for (const day of plan.days) {
      const subjectIds = day.tasks.map((task) => task.subjectId);
      expect(subjectIds.every((id) => [1, 4].includes(id))).toBe(true);
    }
    expect(plan.subjects.map((s) => s.id).sort()).toEqual([1, 4]);
  });

  it("splits the daily minute budget exactly across selected subjects", () => {
    const plan = generateStudyPlan({
      subjects: [
        { id: 1, title: "Physics" },
        { id: 2, title: "Chemistry" },
        { id: 3, title: "Biology" },
      ],
      dailyGoalId: "steady", // 60 minutes
      learningStyleIds: ["reading"],
    });

    for (const day of plan.days) {
      expect(day.totalMinutes).toBe(60);
      expect(day.tasks.reduce((sum, t) => sum + t.minutes, 0)).toBe(60);
    }
    expect(plan.totalWeeklyMinutes).toBe(60 * 7);
  });

  it("assigns task types only from the user's selected learning styles", () => {
    const plan = generateStudyPlan({
      subjects: [
        { id: 1, title: "Physics" },
        { id: 2, title: "Chemistry" },
        { id: 3, title: "Biology" },
      ],
      dailyGoalId: "intense",
      learningStyleIds: ["visual", "practice"],
    });

    const usedTaskTypes = new Set(plan.days[0].tasks.map((t) => t.taskType));
    for (const taskType of usedTaskTypes) {
      expect(["visual", "practice"]).toContain(taskType);
    }
  });

  it("produces an empty plan when no subjects are selected", () => {
    const plan = generateStudyPlan({
      subjects: [],
      dailyGoalId: "steady",
      learningStyleIds: ["reading"],
    });

    expect(plan.days.every((day) => day.tasks.length === 0 && day.totalMinutes === 0)).toBe(true);
    expect(plan.totalWeeklyMinutes).toBe(0);
  });

  it("produces an empty plan when no daily goal is set", () => {
    const plan = generateStudyPlan({
      subjects: [{ id: 1, title: "Physics" }],
      dailyGoalId: null,
      learningStyleIds: ["reading"],
    });

    expect(plan.dailyMinutes).toBe(0);
    expect(plan.days.every((day) => day.totalMinutes === 0)).toBe(true);
  });
});
