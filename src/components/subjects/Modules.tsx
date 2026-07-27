"use client";

import Link from "next/link";

import type { ChapterSummary } from "./SubjectPage";

interface ModulesProps {
  subjectId: number;
  chapters: ChapterSummary[];
}

function progressRingOffset(progress: number): number {
  const circumference = 226.2;
  return circumference - (circumference * progress) / 100;
}

export default function Modules({ subjectId, chapters }: ModulesProps) {
  const [activeChapter, ...restChapters] = chapters;

  return (
    <>
      <section className="md:hidden mt-stack-md">
        <div className="flex overflow-x-auto hide-scrollbar gap-stack-sm px-margin-mobile">
          <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-label-md active:scale-95 transition-transform">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: '"FILL" 1' }}>
              auto_awesome
            </span>
            AI Teacher
          </button>
          <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-surface-container text-on-surface font-label-md active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">mic</span>
            Voice Mode
          </button>
          <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-surface-container text-on-surface font-label-md active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">quiz</span>
            Take Quiz
          </button>
          <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-surface-container text-on-surface font-label-md active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">
              lightbulb
            </span>
            Formula Sheet
          </button>
        </div>
      </section>

      {/* Desktop */}

      <div className="md:block hidden space-y-stack-md">
        <div className="flex justify-between items-end">
          <h3 className="font-headline-md text-headline-md">Course Modules</h3>
          <button className="text-primary font-label-md hover:underline">
            View Roadmap
          </button>
        </div>

        {!activeChapter && (
          <div className="glass-card p-stack-lg rounded-2xl text-on-surface-variant">
            No chapters yet.
          </div>
        )}

        {activeChapter && (
          <Link
            href={`/subject/${subjectId}/chapter/${activeChapter.id}`}
            className="glass-card p-stack-lg rounded-2xl md:flex gap-stack-lg items-center relative group">
            {activeChapter.status === "PLACEHOLDER" && (
              <div className="absolute top-4 right-4 flex gap-stack-sm">
                <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant rounded text-[10px] font-bold uppercase tracking-widest">
                  Coming Soon
                </span>
              </div>
            )}
            <div className="relative flex-shrink-0">
              <svg className="w-20 h-20">
                <circle
                  className="text-white/10"
                  cx={40}
                  cy={40}
                  fill="transparent"
                  r={36}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <circle
                  className="text-primary progress-ring-circle"
                  cx={40}
                  cy={40}
                  fill="transparent"
                  r={36}
                  stroke="currentColor"
                  strokeDasharray="226.2"
                  strokeDashoffset={progressRingOffset(activeChapter.progress)}
                  strokeLinecap="round"
                  strokeWidth={4}
                  style={{ strokeDashoffset: progressRingOffset(activeChapter.progress) }}
                />
              </svg>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono-sm font-bold text-lg">
                {activeChapter.progress}%
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-stack-sm mb-unit">
                <span className="text-on-surface-variant font-mono-sm text-xs uppercase">
                  Chapter {activeChapter.order}
                </span>
              </div>
              <h4 className="font-headline-md text-xl mb-stack-sm group-hover:text-primary transition-colors">
                {activeChapter.title}
              </h4>
            </div>
            <button className="px-8 py-3 bg-primary text-on-primary font-bold rounded-xl transition-all hover:shadow-[0_0_20px_rgba(192,193,255,0.4)] active:scale-95">
              {activeChapter.progress > 0 ? "Resume" : "Start"}
            </button>
          </Link>
        )}

        {restChapters.slice(0, 2).map((chapter) => (
          <Link
            key={chapter.id}
            href={`/subject/${subjectId}/chapter/${chapter.id}`}
            className="glass-card p-stack-lg rounded-2xl md:flex gap-stack-lg items-center opacity-80 hover:opacity-100 transition-opacity">
            <div className="relative flex-shrink-0">
              <svg className="w-20 h-20">
                <circle
                  className="text-white/10"
                  cx={40}
                  cy={40}
                  fill="transparent"
                  r={36}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <circle
                  className="text-on-surface-variant progress-ring-circle"
                  cx={40}
                  cy={40}
                  fill="transparent"
                  r={36}
                  stroke="currentColor"
                  strokeDasharray="226.2"
                  strokeDashoffset={progressRingOffset(chapter.progress)}
                  strokeLinecap="round"
                  strokeWidth={4}
                  style={{ strokeDashoffset: progressRingOffset(chapter.progress) }}
                />
              </svg>
              <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-on-surface-variant">
                play_arrow
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-stack-sm mb-unit">
                <span className="text-on-surface-variant font-mono-sm text-xs uppercase">
                  Chapter {chapter.order}
                </span>
                <span className="h-1 w-1 bg-on-surface-variant rounded-full" />
                <span className="text-on-surface-variant font-mono-sm text-xs">
                  {chapter.status === "PLACEHOLDER" ? "COMING SOON" : "NOT STARTED"}
                </span>
              </div>
              <h4 className="font-headline-md text-xl mb-stack-sm">{chapter.title}</h4>
            </div>
            <button className="px-8 py-3 border border-white/10 hover:border-primary text-on-surface font-bold rounded-xl transition-all">
              Start
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}
