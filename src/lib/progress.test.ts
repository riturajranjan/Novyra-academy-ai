import { describe, expect, it } from "vitest";

import { computeChapterProgress, computeSubjectProgress } from "./progress";

describe("computeChapterProgress", () => {
  it("returns 0 for an empty chapter", () => {
    expect(computeChapterProgress([], new Set())).toBe(0);
  });

  it("computes the rounded percentage of completed lessons", () => {
    const chapterLessonIds = ["l1", "l2", "l3"];
    const completed = new Set(["l1"]);
    expect(computeChapterProgress(chapterLessonIds, completed)).toBe(33);
  });

  it("returns 100 when every lesson is completed", () => {
    const chapterLessonIds = ["l1", "l2"];
    const completed = new Set(["l1", "l2"]);
    expect(computeChapterProgress(chapterLessonIds, completed)).toBe(100);
  });

  it("ignores completed lesson ids outside the chapter", () => {
    const chapterLessonIds = ["l1"];
    const completed = new Set(["l1", "unrelated"]);
    expect(computeChapterProgress(chapterLessonIds, completed)).toBe(100);
  });
});

describe("computeSubjectProgress", () => {
  it("returns 0 for a subject with no lessons", () => {
    expect(computeSubjectProgress([], new Set())).toBe(0);
  });

  it("computes the rounded percentage across all subject lessons", () => {
    const subjectLessonIds = ["l1", "l2", "l3", "l4"];
    const completed = new Set(["l1", "l2", "l3"]);
    expect(computeSubjectProgress(subjectLessonIds, completed)).toBe(75);
  });
});
