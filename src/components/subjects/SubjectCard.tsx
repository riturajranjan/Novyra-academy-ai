"use client";

import Link from "next/link";

export interface SubjectCardProps {
  id: number;
  name: string;
  icon: string;
  chapterCount: number;
  lessonCount: number;
  completedLessonCount: number;
  progressPercent: number;
  href: string;
  accent?: "primary" | "tertiary" | "secondary" | "orange";
}

const ACCENT_STYLES: Record<
  NonNullable<SubjectCardProps["accent"]>,
  { border: string; iconBg: string; iconColor: string; progress: string }
> = {
  primary: { border: "border-l-primary", iconBg: "bg-primary/10", iconColor: "text-primary", progress: "bg-primary" },
  tertiary: {
    border: "border-l-tertiary",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
    progress: "bg-tertiary",
  },
  secondary: {
    border: "border-l-secondary",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    progress: "bg-secondary",
  },
  orange: {
    border: "border-l-orange-400",
    iconBg: "bg-orange-400/10",
    iconColor: "text-orange-400",
    progress: "bg-orange-400",
  },
};

/**
 * Shared subject card used by both the Dashboard (desktop LearningAnalytics
 * chips, mobile LearningJourney) — same typed SubjectSummary-shaped props
 * everywhere, no static data import.
 */
export default function SubjectCard({
  name,
  icon,
  chapterCount,
  lessonCount,
  completedLessonCount,
  progressPercent,
  href,
  accent = "primary",
}: SubjectCardProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <Link href={href} className={`flex-shrink-0 w-44 glass-card rounded-2xl p-4 border-l-4 ${styles.border} block`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${styles.iconBg}`}>
        <span className={`material-symbols-outlined ${styles.iconColor}`}>{icon}</span>
      </div>
      <h4 className="font-bold text-sm mb-1">{name}</h4>
      <p className="text-[11px] text-on-surface-variant mb-3">
        {completedLessonCount}/{lessonCount} lessons • {chapterCount} {chapterCount === 1 ? "chapter" : "chapters"}
      </p>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full ${styles.progress}`} style={{ width: `${progressPercent}%` }} />
      </div>
    </Link>
  );
}
