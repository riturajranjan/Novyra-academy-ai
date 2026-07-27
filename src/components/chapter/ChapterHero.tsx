"use client";

interface ChapterHeroProps {
  subjectTitle: string;
  chapterTitle: string;
  chapterOrder: number;
  progress: number;
}

/**
 * Real-data counterpart to the static Hero.tsx (used only by the legacy
 * /chapter route). Same visual structure, but the "remaining"/"weightage"
 * stat row is dropped — no backing data for either field.
 */
export default function ChapterHero({ subjectTitle, chapterTitle, chapterOrder, progress }: ChapterHeroProps) {
  return (
    <div className="relative group">
      <div className="bg-gradient-to-r from-primary/20 to-tertiary/20 rounded-2xl opacity-30 absolute -inset-0.5 blur group-hover:opacity-50 transition"></div>
      <div className="flex flex-col p-8 rounded-2xl relative glass-panel inner-glow justify-between items-start gap-6 md:flex-row md:items-center">
        <div>
          <div className="flex mb-2 items-center gap-3">
            <span className="px-3 py-1 text-primary tracking-wider bg-primary/10 rounded-full border border-primary/20 uppercase text-[12px] md:text-[14px]">
              {subjectTitle} • Chapter {chapterOrder}
            </span>
          </div>
          <h2 className="mb-4 font-headline-md text-headline-md md:font-headline-lg md:text-headline-lg text-white">
            {chapterTitle}
          </h2>
        </div>
        <div className="flex flex-col w-full items-end gap-2 md:w-auto">
          <div className="flex w-full mb-1 justify-between md:w-32">
            <span className="text-mono-sm text-on-surface-variant">Progress</span>
            <span className="text-mono-sm text-primary font-bold">{progress}%</span>
          </div>
          <div className="overflow-hidden w-full h-2 bg-white/5 rounded-full md:w-32">
            <div
              className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(192,193,255,0.5)]"
              style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
