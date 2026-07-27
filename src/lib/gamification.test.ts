import { describe, it, expect } from "vitest";
import { STUDY_TASK_XP, toUTCDateOnly, computeConsecutiveStreak } from "./gamification";

function daysAgo(n: number): Date {
  const d = toUTCDateOnly(new Date());
  d.setUTCDate(d.getUTCDate() - n);
  return d;
}

describe("STUDY_TASK_XP", () => {
  it("is a fixed constant", () => {
    expect(STUDY_TASK_XP).toBe(10);
  });
});

describe("toUTCDateOnly", () => {
  it("strips the time-of-day component", () => {
    const withTime = new Date(Date.UTC(2026, 0, 15, 23, 45, 30));
    const dateOnly = toUTCDateOnly(withTime);
    expect(dateOnly.toISOString()).toBe("2026-01-15T00:00:00.000Z");
  });
});

describe("computeConsecutiveStreak", () => {
  it("returns 0 for no completion dates", () => {
    expect(computeConsecutiveStreak([])).toBe(0);
  });

  it("returns 1 for a single day with no prior history", () => {
    expect(computeConsecutiveStreak([daysAgo(0)])).toBe(1);
  });

  it("counts consecutive days ending today", () => {
    expect(computeConsecutiveStreak([daysAgo(0), daysAgo(1), daysAgo(2)])).toBe(3);
  });

  it("stops counting at the first gap", () => {
    expect(computeConsecutiveStreak([daysAgo(0), daysAgo(1), daysAgo(5), daysAgo(6)])).toBe(2);
  });

  it("does not double count a day that appears once (distinct dates assumed)", () => {
    expect(computeConsecutiveStreak([daysAgo(0)])).toBe(1);
  });
});
