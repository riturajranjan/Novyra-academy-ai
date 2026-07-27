"use client";

import Link from "next/link";
import type { Lesson } from "@prisma/client";

interface LessonCardsGridProps {
  subjectId: number;
  chapterId: string;
  lessons: Lesson[];
}

/** Real-data counterpart to the static LessonCards.tsx (used only by the legacy /chapter route). */
export default function LessonCardsGrid({ subjectId, chapterId, lessons }: LessonCardsGridProps) {
  if (lessons.length === 0) {
    return (
      <div className="p-6 rounded-2xl glass-panel inner-glow border border-white/5 text-on-surface-variant">
        No lessons yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {lessons.map((lesson) => (
        <Link
          key={lesson.id}
          href={`/subject/${subjectId}/chapter/${chapterId}/lesson/${lesson.id}`}
          className="p-6 rounded-2xl glass-panel inner-glow border border-white/5 space-y-4 hover:border-primary/30 transition-all cursor-pointer group block">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined" data-icon="functions">
                functions
              </span>
            </div>
            <h4 className="font-headline-md text-white text-lg">{lesson.title}</h4>
          </div>
          <p className="text-on-surface-variant font-body-md leading-relaxed line-clamp-3">
            {lesson.summary || "Content coming soon."}
          </p>
          {lesson.formula && (
            <div className="p-4 bg-surface-container-highest rounded-xl text-center">
              <span className="font-mono-sm text-tertiary text-2xl font-bold tracking-widest">{lesson.formula}</span>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
