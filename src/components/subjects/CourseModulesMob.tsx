"use client";

import Link from "next/link";

import type { ChapterSummary } from "./SubjectPage";

interface CourseModulesMobProps {
  subjectId: number;
  chapters: ChapterSummary[];
}

const RING_CIRCUMFERENCE = 125.6;

export default function CourseModulesMob({ subjectId, chapters }: CourseModulesMobProps) {
  const remainingLessons = chapters.reduce(
    (sum, chapter) => sum + Math.round(((100 - chapter.progress) / 100) * chapter.lessonCount),
    0,
  );

  return (
    <section className="mt-stack-md  pb-12">
      <div className="flex justify-between items-center mb-stack-md">
        <h3 className="font-headline-md text-headline-md">Course Modules</h3>
        <span className="text-on-surface-variant font-label-md text-end">
          {chapters.length === 0 ? "No chapters yet" : `${remainingLessons} Lessons Remaining`}
        </span>
      </div>
      <div className="space-y-stack-md">
        {chapters.length === 0 && (
          <div className="glass-card rounded-xl p-stack-md text-on-surface-variant">No chapters yet.</div>
        )}
        {chapters.slice(0, 3).map((chapter) => {
          const isDone = chapter.progress === 100;
          const offset = RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * chapter.progress) / 100;

          return (
            <Link
              key={chapter.id}
              href={`/subject/${subjectId}/chapter/${chapter.id}`}
              className={`block glass-card rounded-xl p-stack-md border-l-4 ${
                isDone
                  ? "border-l-primary/50"
                  : chapter.progress > 0
                    ? "border-l-tertiary"
                    : "border-l-white/5 opacity-80"
              }`}>
              <div className="flex justify-between items-start mb-stack-md">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`px-2 py-0.5 rounded font-mono-sm text-[10px] uppercase ${
                        isDone
                          ? "bg-primary/10 text-primary"
                          : chapter.progress > 0
                            ? "bg-tertiary/10 text-tertiary"
                            : "bg-white/5 text-on-surface-variant"
                      }`}>
                      {isDone ? "Completed" : chapter.progress > 0 ? "Active Now" : "Not Started"}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-on-surface-variant font-mono-sm text-[10px] uppercase">
                      {chapter.lessonCount} {chapter.lessonCount === 1 ? "Lesson" : "Lessons"}
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md">{chapter.title}</h4>
                </div>
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      className="text-white/5"
                      cx={24}
                      cy={24}
                      fill="transparent"
                      r={20}
                      stroke="currentColor"
                      strokeWidth={4}
                    />
                    <circle
                      className={isDone ? "text-primary" : "text-tertiary"}
                      cx={24}
                      cy={24}
                      fill="transparent"
                      r={20}
                      stroke="currentColor"
                      strokeDasharray={RING_CIRCUMFERENCE}
                      strokeDashoffset={offset}
                      strokeWidth={4}
                    />
                  </svg>
                  <span className="absolute font-mono-sm text-[10px] text-on-surface">{chapter.progress}%</span>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant">{chapter.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
