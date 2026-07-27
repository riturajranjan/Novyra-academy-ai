"use client";

import Link from "next/link";

import type { ChapterSummary } from "./SubjectPage";

interface CurriculumPathProps {
  subjectId: number;
  chapters: ChapterSummary[];
  subjectProgress: number;
}

export default function CurriculumPath({ subjectId, chapters, subjectProgress }: CurriculumPathProps) {
  return (
    <div className="glass-card p-stack-lg rounded-2xl relative">
      <div className="flex items-center justify-between mb-stack-lg">
        <h3 className="font-headline-md text-headline-md">Curriculum Path</h3>
        <span className="text-xs font-mono-sm text-primary font-bold">{subjectProgress}%</span>
      </div>

      {chapters.length === 0 ? (
        <p className="text-on-surface-variant font-body-md">No chapters yet.</p>
      ) : (
        <div className="relative pl-8">
          {/* Roadmap Vertical Line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-[2px] roadmap-line rounded-full opacity-20" />
          <div className="space-y-stack-lg">
            {chapters.map((chapter, index) => {
              const isCurrent = index === 0;

              return (
                <Link
                  href={`/subject/${subjectId}/chapter/${chapter.id}`}
                  key={chapter.id}
                  className={`relative group cursor-pointer block ${isCurrent ? "" : "opacity-40"}`}>
                  {isCurrent ? (
                    <div className="absolute -left-[27px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-surface shadow-[0_0_10px_rgba(192,193,255,0.8)] z-10 animate-pulse" />
                  ) : (
                    <div className="absolute -left-[27px] top-1 h-5 w-5 rounded-full bg-surface-container-highest border-4 border-surface z-10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px]">lock</span>
                    </div>
                  )}
                  <div>
                    <p
                      className={`text-xs font-mono-sm mb-1 ${isCurrent ? "text-primary" : "text-on-surface-variant"}`}>
                      CHAPTER {chapter.order}
                    </p>
                    <h5 className="text-sm font-bold">{chapter.title}</h5>
                    {isCurrent && (
                      <div className="hidden group-hover:block absolute left-full ml-stack-md top-0 w-48 p-stack-md glass-card rounded-xl z-20">
                        <p className="text-xs text-on-surface-variant mb-unit">
                          {chapter.lessonCount} {chapter.lessonCount === 1 ? "Lesson" : "Lessons"} • {chapter.progress}
                          % complete
                        </p>
                        <p className="text-xs text-primary font-bold">
                          {chapter.status === "PLACEHOLDER" ? "Coming Soon" : "In Progress"}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
