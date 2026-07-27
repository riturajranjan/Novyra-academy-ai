import { describe, expect, it } from "vitest";

import { formatRelativeTime } from "./activityDisplay";

describe("formatRelativeTime", () => {
  const now = new Date("2026-07-28T12:00:00.000Z");

  it("returns 'Just now' for under a minute", () => {
    expect(formatRelativeTime(new Date("2026-07-28T11:59:30.000Z"), now)).toBe("Just now");
  });

  it("returns minutes ago for under an hour", () => {
    expect(formatRelativeTime(new Date("2026-07-28T11:45:00.000Z"), now)).toBe("15m ago");
  });

  it("returns hours ago for under a day", () => {
    expect(formatRelativeTime(new Date("2026-07-28T07:00:00.000Z"), now)).toBe("5h ago");
  });

  it("returns 'Yesterday' for exactly one day back", () => {
    expect(formatRelativeTime(new Date("2026-07-27T12:00:00.000Z"), now)).toBe("Yesterday");
  });

  it("returns days ago for under a week", () => {
    expect(formatRelativeTime(new Date("2026-07-25T12:00:00.000Z"), now)).toBe("3d ago");
  });

  it("returns a formatted date for a week or more", () => {
    expect(formatRelativeTime(new Date("2026-07-01T12:00:00.000Z"), now)).toBe("Jul 1");
  });
});
