"use client";

import type { StudyPlanDay } from "@/types/study-plan";

interface WeeklyChartProps {
  days: StudyPlanDay[];
}

export default function WeeklyChart({ days }: WeeklyChartProps) {
  const maxMinutes = Math.max(...days.map((day) => day.totalMinutes), 1);

  return (
    <div className="glass-panel rounded-xl p-stack-md">
      <h4 className="text-label-md font-bold mb-4 flex items-center gap-2">
        <span
          className="material-symbols-outlined text-primary"
          data-icon="event_note">
          event_note
        </span>
        Weekly Study Minutes
      </h4>
      <div className="flex justify-between items-end h-32 gap-1 px-2">
        {days.map((day) => (
          <div key={day.dayOfWeek} className="flex flex-col items-center gap-2 w-full">
            <div
              className="w-full bg-primary/20 rounded-t-sm border-t-2 border-primary"
              style={{ height: `${Math.max((day.totalMinutes / maxMinutes) * 100, 4)}%` }}
            />
            <span className="text-mono-sm text-on-surface-variant">{day.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-white/5 rounded-lg flex items-center gap-3">
        <span
          className="material-symbols-outlined text-tertiary text-sm"
          data-icon="psychology">
          psychology
        </span>
        <p className="text-label-md text-on-surface-variant">
          {days[0]?.totalMinutes ?? 0} minutes allocated per day across your selected subjects.
        </p>
      </div>
    </div>
  );
}
