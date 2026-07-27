"use client";

import { generateRecommendations } from "@/lib/recommendations";

interface AICoachProps {
  subjectId: number;
  subjectTitle: string;
  progressPercent: number;
  lessonCount: number;
  completedLessonCount: number;
  quizAverageScore: number | null;
  href: string;
}

export default function AICoach({
  subjectId,
  subjectTitle,
  progressPercent,
  lessonCount,
  completedLessonCount,
  quizAverageScore,
  href,
}: AICoachProps) {
  const [insight] = generateRecommendations({
    dailyGoalMinutes: null,
    todayStudyMinutes: 0,
    streak: 0,
    subjects: [
      { id: subjectId, title: subjectTitle, progressPercent, lessonCount, completedLessonCount, quizAverageScore, href },
    ],
  });

  const insightText = insight?.description ?? `Keep going in ${subjectTitle} — you're at ${progressPercent}% progress.`;

  return (
    <>
      {/* Mobile */}
      <section className="md:hidden mt-stack-md ">
        <div
          className="rounded-xl border bg-surface-container-low overflow-hidden transition-all duration-300 border-tertiary/20"
          id="aiCoach">
          <button className="w-full flex items-center justify-between p-stack-md bg-tertiary/5">
            <div className="flex items-center gap-stack-sm">
              <span
                className="material-symbols-outlined text-tertiary text-[24px]"
                style={{ fontVariationSettings: '"FILL" 1' }}>
                psychology
              </span>
              <span className="font-headline-md text-headline-md text-tertiary">
                AI Coach Insight
              </span>
            </div>
            <span
              className="material-symbols-outlined text-on-surface-variant transition-transform"
              id="coachChevron"
              style={{ transform: "rotate(0deg)" }}>
              expand_less
            </span>
          </button>
          <div
            className="p-stack-md space-y-stack-md transition-opacity duration-300"
            id="coachContent"
            style={{ opacity: 1 }}>
            <div className="flex items-start gap-stack-md">
              <div className="flex-1">
                <h4 className="font-label-md text-primary mb-1">{insight?.title ?? "You're on track"}</h4>
                <p className="font-body-md text-on-surface">{insightText}</p>
              </div>
            </div>
            {insight?.href && (
              <div className="flex gap-stack-sm">
                <a
                  href={insight.href}
                  className="flex-1 text-center bg-surface-container-highest border border-white/10 py-3 rounded-lg font-label-md hover:bg-surface-bright active:scale-[0.98] transition-all">
                  {insight.title}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Desktop */}

      <div className="glass-card md:block hidden rounded-2xl overflow-hidden border-primary/30">
        <div className="p-stack-lg bg-primary/5 border-b border-white/5">
          <div className="flex items-center justify-between mb-stack-md">
            <h3 className="font-bold flex items-center gap-unit">
              <span className="material-symbols-outlined ai-sparkle">
                smart_toy
              </span>
              Lumina AI Coach
            </h3>
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          </div>
          <div className="p-stack-md rounded-xl bg-surface-container-highest/50 border border-white/5 space-y-stack-sm">
            <p className="text-sm leading-relaxed">&quot;{insightText}&quot;</p>
            {insight?.href && (
              <a
                href={insight.href}
                className="block text-center w-full py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg text-sm font-bold transition-all">
                {insight.title}
              </a>
            )}
          </div>
        </div>
        <div className="p-stack-lg space-y-stack-lg">
          <div>
            <h4 className="text-xs font-mono-sm font-bold text-on-surface-variant uppercase tracking-widest mb-stack-md">
              Progress
            </h4>
            <div className="space-y-stack-md">
              <div className="flex gap-stack-md items-center">
                <div className="h-8 w-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0 text-xs">
                  {progressPercent}%
                </div>
                <p className="text-sm">
                  {completedLessonCount} of {lessonCount} lessons complete
                </p>
              </div>
            </div>
          </div>
          {quizAverageScore !== null && quizAverageScore < 60 && (
            <div className="pt-stack-lg border-t border-white/5">
              <div className="flex items-center gap-unit mb-stack-md">
                <span className="material-symbols-outlined text-error text-sm">
                  warning
                </span>
                <span className="text-xs font-bold text-error uppercase">
                  Quiz Average Low
                </span>
              </div>
              <p className="text-sm text-on-surface mb-stack-md">
                Your quiz average in {subjectTitle} is {quizAverageScore}%.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
