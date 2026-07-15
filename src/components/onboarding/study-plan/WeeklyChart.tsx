"use client";

import { BarChart3, TrendingUp } from "lucide-react";

const data = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 92 },
  { day: "Wed", value: 75 },
  { day: "Thu", value: 100 },
  { day: "Fri", value: 82 },
  { day: "Sat", value: 55 },
  { day: "Sun", value: 40 },
];

export default function WeeklyChart() {
  return (
    <div className="glass-panel rounded-xl p-stack-md">
      <h4 className="text-label-md font-bold mb-4 flex items-center gap-2">
        <span
          className="material-symbols-outlined text-primary"
          data-icon="event_note">
          event_note
        </span>
        Weekly Subject Rotation
      </h4>
      <div className="flex justify-between items-end h-32 gap-1 px-2">
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="w-full bg-primary/20 h-16 rounded-t-sm border-t-2 border-primary" />
          <span className="text-mono-sm text-on-surface-variant">Mon</span>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="w-full bg-tertiary/20 h-20 rounded-t-sm border-t-2 border-tertiary" />
          <span className="text-mono-sm text-on-surface-variant">Tue</span>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="w-full bg-primary/20 h-24 rounded-t-sm border-t-2 border-primary" />
          <span className="text-mono-sm text-on-surface-variant">Wed</span>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="w-full bg-secondary-container h-12 rounded-t-sm border-t-2 border-secondary" />
          <span className="text-mono-sm text-on-surface-variant">Thu</span>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="w-full bg-primary/20 h-28 rounded-t-sm border-t-2 border-primary" />
          <span className="text-mono-sm text-on-surface-variant">Fri</span>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="w-full bg-tertiary/40 h-8 rounded-t-sm border-t-2 border-tertiary" />
          <span className="text-mono-sm text-on-surface-variant">Sat</span>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="w-full bg-white/5 h-4 rounded-t-sm" />
          <span className="text-mono-sm text-on-surface-variant">Sun</span>
        </div>
      </div>
      <div className="mt-4 p-3 bg-white/5 rounded-lg flex items-center gap-3">
        <span
          className="material-symbols-outlined text-tertiary text-sm"
          data-icon="psychology">
          psychology
        </span>
        <p className="text-label-md text-on-surface-variant">
          Sunday is reserved for AI deep-gap analysis.
        </p>
      </div>
    </div>
  );
}
