"use client";

import type { LessonDetail } from "@/lib/dal";

interface LessonContentCardProps {
  lesson: LessonDetail;
  chapterProgress: number;
}

/**
 * Lesson content only — no Notes/AI Teacher/Quiz/Flashcards sections and no
 * completion action here. Those are separate, later phases; this phase is
 * hierarchy navigation + a real (currently static-until-completion-ships)
 * progress percentage.
 */
export default function LessonContentCard({ lesson, chapterProgress }: LessonContentCardProps) {
  return (
    <div className="glass-panel inner-glow rounded-2xl border border-white/5 p-8 space-y-6">
      <div>
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="px-3 py-1 text-primary tracking-wider bg-primary/10 rounded-full border border-primary/20 uppercase text-[12px]">
            Lesson {lesson.order}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-mono-sm text-on-surface-variant">Chapter Progress</span>
            <span className="text-mono-sm text-primary font-bold">{chapterProgress}%</span>
          </div>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-white mb-3">{lesson.title}</h1>
        <p className="text-on-surface-variant font-body-md leading-relaxed">{lesson.summary}</p>
      </div>

      {lesson.content ? (
        <p className="text-on-surface font-body-md leading-relaxed whitespace-pre-line">{lesson.content}</p>
      ) : (
        <div className="p-6 rounded-xl bg-surface-container-highest text-on-surface-variant text-center">
          Content coming soon.
        </div>
      )}

      {lesson.analogy && (
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-xs font-mono-sm text-primary uppercase mb-1">Analogy</p>
          <p className="text-on-surface font-body-md leading-relaxed">{lesson.analogy}</p>
        </div>
      )}

      {lesson.formula && (
        <div className="p-4 bg-surface-container-highest rounded-xl text-center">
          <span className="font-mono-sm text-tertiary text-2xl font-bold tracking-widest">{lesson.formula}</span>
        </div>
      )}
    </div>
  );
}
