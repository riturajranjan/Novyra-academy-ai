"use client";

import type { ContinueLearningItem } from "@/lib/contentDal";

interface QuickActionsProps {
  subjectTitle: string;
  progressPercent: number;
  chapterCount: number;
  chaptersCompleted: number;
  minutesRemaining: number;
  continueLearning: ContinueLearningItem | null;
}

function formatMinutes(totalMinutes: number): string {
  if (totalMinutes <= 0) return "0m";
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
}

export default function QuickActions({
  subjectTitle,
  progressPercent,
  chapterCount,
  chaptersCompleted,
  minutesRemaining,
  continueLearning,
}: QuickActionsProps) {
  const chaptersLeft = Math.max(chapterCount - chaptersCompleted, 0);

  return (
    <>
      <div className="relative md:hidden overflow-hidden rounded-xl p-stack-md border border-white/5 bg-surface-container-low">
        <div className="relative z-10">
          <div className="flex justify-between items-end mb-stack-md">
            <div>
              <span className="text-primary font-mono-sm uppercase tracking-widest block mb-2">
                Subject Mastery
              </span>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile">{subjectTitle}</h2>
            </div>
            <div className="text-right">
              <span className="text-display-xl font-display-xl text-primary block leading-none">
                {progressPercent}%
              </span>
              <span className="text-on-surface-variant font-label-md">
                Complete
              </span>
            </div>
          </div>
          <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden mb-stack-md">
            <div className="progress-gradient h-full" style={{ width: `${progressPercent}%` }} />
          </div>
          <div className="flex gap-gutter">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-tertiary text-[18px]">
                auto_stories
              </span>
              <span className="font-label-md text-on-surface-variant">
                {chapterCount} {chapterCount === 1 ? "Chapter" : "Chapters"}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-tertiary text-[18px]">
                schedule
              </span>
              <span className="font-label-md text-on-surface-variant">
                {minutesRemaining > 0 ? `${formatMinutes(minutesRemaining)} left` : "All caught up"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 hidden md:block md:col-span-4">
        <div className="glass-card1 border p-stack-md rounded-2xl space-y-stack-md border-primary/30 bg-primary/5">
          <div className="flex justify-between items-center">
            <span className="font-label-md text-on-surface-variant">
              Course Progress
            </span>
            <span className="font-mono-sm font-bold text-primary">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-tertiary shadow-[0_0_10px_rgba(192,193,255,0.5)]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="grid grid-cols-2 gap-stack-md pt-stack-sm">
            <div>
              <p className="text-on-surface-variant font-mono-sm text-xs uppercase opacity-70">
                Chapters Left
              </p>
              <p className="font-headline-md text-on-surface">
                {chaptersLeft}
                <span className="text-on-surface-variant text-sm font-normal"> of {chapterCount}</span>
              </p>
            </div>
            <div>
              <p className="text-on-surface-variant font-mono-sm text-xs uppercase opacity-70">
                Time Remaining
              </p>
              <p className="font-headline-md text-on-surface">
                {minutesRemaining > 0 ? formatMinutes(minutesRemaining) : "Done"}
              </p>
            </div>
          </div>
          <div className="pt-stack-md border-t border-white/5 flex items-center gap-stack-md">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tertiary/20 text-tertiary">
              <span className="material-symbols-outlined">flag</span>
            </div>
            <div>
              <p className="text-xs font-mono-sm text-tertiary">
                {continueLearning ? (continueLearning.label === "Review" ? "ALL CAUGHT UP" : "UP NEXT") : "NO CONTENT YET"}
              </p>
              <p className="text-sm font-medium">
                {continueLearning ? continueLearning.lessonTitle : "Check back once chapters are added."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
