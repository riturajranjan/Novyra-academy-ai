"use client";

import Link from "next/link";

import type { SubjectSummary } from "@/lib/contentDal";

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Rotates by position only — never derived from a subject's name/id, purely
// a display accent so the real subject list below still reads at a glance.
const SUBJECT_COLORS = ["bg-primary", "bg-tertiary", "bg-green-500", "bg-orange-400"];

interface LearningAnalyticsProgressMetrics {
  completedLessons: number;
  averageQuizScore: number;
}

interface LearningAnalyticsProps {
  subjects: SubjectSummary[];
  progressMetrics: LearningAnalyticsProgressMetrics;
  weeklyStudyMinutes: number[];
}

export default function LearningAnalytics({ subjects, progressMetrics, weeklyStudyMinutes }: LearningAnalyticsProps) {
  const maxMinutes = Math.max(...weeklyStudyMinutes, 1);

  return (
    <section
      className="glass-panel premium-border rounded-2xl p-8"
      style={{
        transform: "translateY(0px)",
        transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10">
        <div>
          <h2 className="font-headline-md text-headline-md mb-1">
            Learning Analytics
          </h2>
          <p className="text-on-surface-variant ">
            Real progress from your study activity.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="text-center">
            <span className="text-headline-md font-bold text-primary block">
              {progressMetrics.completedLessons}
            </span>
            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
              Lessons Completed
            </p>
          </div>
          <div className="text-center">
            <span className="text-headline-md font-bold text-tertiary block">
              {progressMetrics.averageQuizScore}%
            </span>
            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
              Quiz Average
            </p>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-label-md font-bold text-on-surface-variant mb-4 uppercase tracking-widest text-[11px]">
          Your Subjects
        </p>
        {subjects.length === 0 ? (
          <p className="text-on-surface-variant text-body-md">
            No subjects selected yet.
          </p>
        ) : (
          <div className="flex flex-wrap gap-3">
            {subjects.map((subject, index) => (
              <Link
                key={subject.id}
                href={subject.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-white/5 hover:border-primary/40 transition-all text-label-md font-medium">
                <span
                  className={`w-2 h-2 rounded-full ${SUBJECT_COLORS[index % SUBJECT_COLORS.length]}`}
                />
                {subject.title}
                <span className="text-on-surface-variant text-xs">{subject.progressPercent}%</span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="mb-4">
        <p className="text-label-md font-bold text-on-surface-variant mb-4 uppercase tracking-widest text-[11px]">
          Weekly Study Time
        </p>
        <div className="grid grid-cols-7 gap-3 mb-6">
          {DAY_LABELS.map((label) => (
            <div key={label} className="text-center font-mono-sm text-[10px] opacity-40 uppercase">
              {label}
            </div>
          ))}
          {weeklyStudyMinutes.map((minutes, index) => (
            <div key={DAY_LABELS[index]} className="heatmap-cell relative flex items-end" title={`${minutes} min`}>
              <div
                className={minutes > 0 ? "w-full rounded-sm bg-primary" : "w-full rounded-sm bg-white/5"}
                style={{ height: minutes > 0 ? `${Math.max((minutes / maxMinutes) * 100, 15)}%` : "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/5 pt-6">
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-on-surface-variant font-bold uppercase">
            This Week:
          </span>
          <span className="text-[11px] text-primary font-bold">
            {weeklyStudyMinutes.reduce((sum, minutes) => sum + minutes, 0)} min studied
          </span>
        </div>
      </div>
    </section>
  );
}
