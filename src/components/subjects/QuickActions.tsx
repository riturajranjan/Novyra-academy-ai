"use client";

export default function QuickActions() {
  return (
    <>
      <div className="relative md:hidden overflow-hidden rounded-xl p-stack-md border border-white/5 bg-surface-container-low">
        <div className="relative z-10">
          <div className="flex justify-between items-end mb-stack-md">
            <div>
              <span className="text-primary font-mono-sm uppercase tracking-widest block mb-2">
                Subject Mastery
              </span>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile">
                Theoretical Physics
              </h2>
            </div>
            <div className="text-right">
              <span className="text-display-xl font-display-xl text-primary block leading-none">
                72%
              </span>
              <span className="text-on-surface-variant font-label-md">
                Complete
              </span>
            </div>
          </div>
          <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden mb-stack-md">
            <div className="progress-gradient h-full w-[72%]" />
          </div>
          <div className="flex gap-gutter">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-tertiary text-[18px]">
                auto_stories
              </span>
              <span className="font-label-md text-on-surface-variant">
                18 Chapters
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-tertiary text-[18px]">
                schedule
              </span>
              <span className="font-label-md text-on-surface-variant">
                4h 20m left
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
            <span className="font-mono-sm font-bold text-primary">72%</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-tertiary w-[72%] shadow-[0_0_10px_rgba(192,193,255,0.5)]" />
          </div>
          <div className="grid grid-cols-2 gap-stack-md pt-stack-sm">
            <div>
              <p className="text-on-surface-variant font-mono-sm text-xs uppercase opacity-70">
                Chapters Left
              </p>
              <p className="font-headline-md text-on-surface">
                5
                <span className="text-on-surface-variant text-sm font-normal">
                  of 18
                </span>
              </p>
            </div>
            <div>
              <p className="text-on-surface-variant font-mono-sm text-xs uppercase opacity-70">
                Time Remaining
              </p>
              <p className="font-headline-md text-on-surface">4h 20m</p>
            </div>
          </div>
          <div className="pt-stack-md border-t border-white/5 flex items-center gap-stack-md">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tertiary/20 text-tertiary">
              <span className="material-symbols-outlined">flag</span>
            </div>
            <div>
              <p className="text-xs font-mono-sm text-tertiary">CURRENT GOAL</p>
              <p className="text-sm font-medium">Finish Mechanics Today</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
