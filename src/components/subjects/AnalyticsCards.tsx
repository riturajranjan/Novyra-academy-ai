"use client";

import { CheckCircle2, PlayCircle, Circle } from "lucide-react";

import type { ChapterSummary } from "./SubjectPage";

interface AnalyticsCardsProps {
  progressPercent: number;
  quizAverageScore: number | null;
  studyMinutes: number;
  chapters: ChapterSummary[];
}

function formatStudyTime(minutes: number): string {
  if (minutes <= 0) return "0m";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins}m`;
  if (mins === 0) return `${hours}h`;
  return `${hours}h ${mins}m`;
}

export default function AnalyticsCards({ progressPercent, quizAverageScore, studyMinutes, chapters }: AnalyticsCardsProps) {
  const previewChapters = chapters.slice(0, 4);

  return (
    <>
      <section className="md:hidden mt-stack-md">
        <div className="px-margin-mobile flex justify-between items-center mb-stack-sm">
          <h3 className="font-headline-md text-headline-md">Your Journey</h3>
          <span className="font-mono-sm text-on-surface-variant">
            {chapters.length} {chapters.length === 1 ? "Chapter" : "Chapters"}
          </span>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar gap-stack-md px-margin-mobile py-stack-sm snap-x">
          {previewChapters.length === 0 && (
            <p className="text-on-surface-variant font-body-md px-2">No chapters yet.</p>
          )}
          {previewChapters.map((chapter) => {
            const isDone = chapter.progress === 100;
            const isCurrent = !isDone && chapter.progress > 0;

            return (
              <div
                key={chapter.id}
                className={`snap-start flex-shrink-0 w-32 glass-card-no-border  p-stack-sm rounded-xl text-center border-l-4 ${
                  isDone
                    ? "border-l-primary/50"
                    : isCurrent
                      ? "border-l-tertiary shadow-[0_0_20px_rgba(76,215,246,0.15)] bg-surface-container-high"
                      : "border-l-white/10 opacity-50"
                }`}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    isDone
                      ? "bg-primary/20 text-primary"
                      : isCurrent
                        ? "bg-tertiary/20 text-tertiary ai-glow"
                        : "bg-white/5 text-on-surface-variant"
                  }`}>
                  {isDone ? <CheckCircle2 size={20} /> : isCurrent ? <PlayCircle size={20} /> : <Circle size={20} />}
                </div>
                <p className="font-label-md text-on-surface truncate">{chapter.title}</p>
                <span
                  className={`text-[10px] uppercase font-mono-sm ${
                    isDone ? "text-primary" : isCurrent ? "text-tertiary" : "text-on-surface-variant"
                  }`}>
                  {isDone ? "Done" : isCurrent ? "Current" : "Upcoming"}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Desktop */}

      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-stack-md">
        <div className="glass-card-no-border  p-stack-md rounded-xl flex items-center gap-stack-md">
          <div className="p-unit rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-[24px]">bolt</span>
          </div>
          <div>
            <p className="text-xs font-mono-sm text-on-surface-variant">Progress</p>
            <p className="font-bold">{progressPercent}%</p>
          </div>
        </div>
        <div className="glass-card-no-border  p-stack-md rounded-xl flex items-center gap-stack-md">
          <div className="p-unit rounded-lg bg-tertiary/10 text-tertiary">
            <span className="material-symbols-outlined text-[24px]">
              check_circle
            </span>
          </div>
          <div>
            <p className="text-xs font-mono-sm text-on-surface-variant">Quiz Avg</p>
            <p className="font-bold">{quizAverageScore !== null ? `${quizAverageScore}%` : "—"}</p>
          </div>
        </div>
        <div className="glass-card-no-border  p-stack-md rounded-xl flex items-center gap-stack-md">
          <div className="p-unit rounded-lg bg-on-secondary-container/10 text-on-secondary-container">
            <span className="material-symbols-outlined text-[24px]">grain</span>
          </div>
          <div>
            <p className="text-xs font-mono-sm text-on-surface-variant">Study Time</p>
            <p className="font-bold">{formatStudyTime(studyMinutes)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
