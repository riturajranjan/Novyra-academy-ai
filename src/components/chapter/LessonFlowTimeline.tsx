"use client";

import type { Lesson } from "@prisma/client";

interface LessonFlowTimelineProps {
  lessons: Lesson[];
}

/**
 * Real-data counterpart to the static LessonFlow.tsx (used only by the
 * legacy /chapter route). No completion signal exists yet in this phase, so
 * status is order-based only: first lesson = current, rest = upcoming —
 * honest given the data available, rather than fabricating "completed".
 */
export default function LessonFlowTimeline({ lessons }: LessonFlowTimelineProps) {
  return (
    <div className="p-6 rounded-2xl glass-panel inner-glow border border-white/5">
      <h4 className="font-headline-md text-white text-lg mb-6 flex items-center justify-between">
        Lesson Flow
        <span className="text-mono-sm text-primary">
          {lessons.length} {lessons.length === 1 ? "Lesson" : "Lessons"}
        </span>
      </h4>

      {lessons.length === 0 ? (
        <p className="text-on-surface-variant text-mono-sm">No lessons yet.</p>
      ) : (
        <div className="space-y-0 relative">
          <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-white/5"></div>

          {lessons.map((lesson, index) => {
            const isCurrent = index === 0;
            const isLast = index === lessons.length - 1;

            return (
              <div key={lesson.id} className={`relative pl-10 ${isLast ? "" : "pb-8"} ${isCurrent ? "" : "opacity-40"}`}>
                {isCurrent ? (
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-4 border-background z-10 ai-pulse">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                ) : (
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border-4 border-background z-10"></div>
                )}
                <p
                  className={`text-mono-sm mb-1 ${isCurrent ? "text-primary font-bold" : "text-on-surface-variant"}`}>
                  {isCurrent ? "CURRENT LESSON" : `Lesson ${lesson.order}`}
                </p>
                <h5 className={`font-label-md ${isCurrent ? "text-white text-lg" : "text-on-surface"}`}>
                  {lesson.title}
                </h5>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
