import { describe, it, expect } from "vitest";
import {
  boardSelectionSchema,
  classSelectionSchema,
  subjectsSelectionSchema,
  learningStyleSelectionSchema,
  goalSelectionSchema,
} from "./onboarding";

describe("boardSelectionSchema", () => {
  it("accepts a non-empty boardId", () => {
    expect(boardSelectionSchema.safeParse({ boardId: "cbse" }).success).toBe(true);
  });

  it("rejects an empty boardId", () => {
    expect(boardSelectionSchema.safeParse({ boardId: "" }).success).toBe(false);
  });
});

describe("classSelectionSchema", () => {
  it("accepts an integer classId", () => {
    expect(classSelectionSchema.safeParse({ classId: 10 }).success).toBe(true);
  });

  it("rejects a non-integer classId", () => {
    expect(classSelectionSchema.safeParse({ classId: 10.5 }).success).toBe(false);
  });
});

describe("subjectsSelectionSchema", () => {
  it("requires at least one subject", () => {
    const result = subjectsSelectionSchema.safeParse({ subjectIds: [] });
    expect(result.success).toBe(false);
  });

  it("accepts one or more subject ids", () => {
    expect(subjectsSelectionSchema.safeParse({ subjectIds: [1, 2] }).success).toBe(true);
  });
});

describe("learningStyleSelectionSchema", () => {
  it("requires at least one learning style", () => {
    expect(learningStyleSelectionSchema.safeParse({ learningStyleIds: [] }).success).toBe(false);
  });

  it("accepts one or more learning styles", () => {
    expect(
      learningStyleSelectionSchema.safeParse({ learningStyleIds: ["visual"] }).success
    ).toBe(true);
  });
});

describe("goalSelectionSchema", () => {
  it("requires targetScoreId and dailyGoalId", () => {
    const result = goalSelectionSchema.safeParse({
      targetScoreId: 95,
      dailyGoalId: "steady",
      examDate: null,
    });
    expect(result.success).toBe(true);
  });

  it("allows a null exam date (optional)", () => {
    const result = goalSelectionSchema.safeParse({
      targetScoreId: 95,
      dailyGoalId: "steady",
      examDate: null,
    });
    expect(result.success).toBe(true);
  });

  it("rejects a missing dailyGoalId", () => {
    const result = goalSelectionSchema.safeParse({
      targetScoreId: 95,
      dailyGoalId: "",
      examDate: null,
    });
    expect(result.success).toBe(false);
  });
});
