"use client";

import { TrendingUp, Clock3, Target, Trophy } from "lucide-react";

const subjects = [
  {
    name: "Physics",
    progress: 92,
    color: "bg-primary",
  },
  {
    name: "Chemistry",
    progress: 81,
    color: "bg-tertiary",
  },
  {
    name: "Mathematics",
    progress: 95,
    color: "bg-green-500",
  },
  {
    name: "Biology",
    progress: 73,
    color: "bg-orange-400",
  },
];

export default function LearningAnalytics() {
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
            Real-time cognitive metrics from your AI profile.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="text-center">
            <span className="text-headline-md font-bold text-primary block">
              4.2x
            </span>
            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
              Learning Velocity
            </p>
          </div>
          <div className="text-center">
            <span className="text-headline-md font-bold text-tertiary block">
              88%
            </span>
            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
              Retention Score
            </p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-label-md font-bold text-on-surface-variant mb-4 uppercase tracking-widest text-[11px]">
          Weekly Topic Heatmap
        </p>
        <div className="grid grid-cols-7 gap-3 mb-6">
          <div className="text-center font-mono-sm text-[10px] opacity-40 uppercase">
            Mon
          </div>
          <div className="text-center font-mono-sm text-[10px] opacity-40 uppercase">
            Tue
          </div>
          <div className="text-center font-mono-sm text-[10px] opacity-40 uppercase">
            Wed
          </div>
          <div className="text-center font-mono-sm text-[10px] opacity-40 uppercase">
            Thu
          </div>
          <div className="text-center font-mono-sm text-[10px] opacity-40 uppercase">
            Fri
          </div>
          <div className="text-center font-mono-sm text-[10px] opacity-40 uppercase">
            Sat
          </div>
          <div className="text-center font-mono-sm text-[10px] opacity-40 uppercase">
            Sun
          </div>
          <div className="heatmap-cell bg-primary/20" />
          <div className="heatmap-cell bg-primary/40" />
          <div className="heatmap-cell bg-primary/10" />
          <div className="heatmap-cell bg-primary/60" />
          <div className="heatmap-cell bg-primary/30" />
          <div className="heatmap-cell bg-primary/80 shadow-lg shadow-primary/20" />
          <div className="heatmap-cell bg-white/5" />
          <div className="heatmap-cell bg-primary/40" />
          <div className="heatmap-cell bg-primary/10" />
          <div className="heatmap-cell bg-primary/90 shadow-xl shadow-primary/30 ring-2 ring-primary/50" />
          <div className="heatmap-cell bg-white/5" />
          <div className="heatmap-cell bg-white/5" />
          <div className="heatmap-cell bg-white/5" />
          <div className="heatmap-cell bg-white/5" />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/5 pt-6">
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-on-surface-variant font-bold uppercase">
            Mastery Index:
          </span>
          <div className="flex gap-1.5">
            <div className="w-3.5 h-3.5 rounded-sm bg-primary/10" />
            <div className="w-3.5 h-3.5 rounded-sm bg-primary/40" />
            <div className="w-3.5 h-3.5 rounded-sm bg-primary/70" />
            <div className="w-3.5 h-3.5 rounded-sm bg-primary" />
          </div>
        </div>
        <a
          className="text-primary  font-bold flex items-center gap-1 hover:underline"
          href="#">
          Explore Deep Insights{" "}
          <span className="material-symbols-outlined text-sm">
            arrow_outward
          </span>
        </a>
      </div>
    </section>
  );
}
