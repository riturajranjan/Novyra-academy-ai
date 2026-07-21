"use client";

import { Zap, CheckCircle2, Brain } from "lucide-react";

const analytics = [
  {
    title: "Velocity",
    value: "1.2 Ch/Day",
    icon: Zap,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Accuracy",
    value: "88.4%",
    icon: CheckCircle2,
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
  },
  {
    title: "Retention",
    value: "92%",
    icon: Brain,
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

export default function AnalyticsCards() {
  return (
    <>
      <section className="md:hidden mt-stack-md">
        <div className="px-margin-mobile flex justify-between items-center mb-stack-sm">
          <h3 className="font-headline-md text-headline-md">Your Journey</h3>
          <span className="font-mono-sm text-on-surface-variant">
            Phase 2 of 4
          </span>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar gap-stack-md px-margin-mobile py-stack-sm snap-x">
          {/* Completed */}
          <div className="snap-start flex-shrink-0 w-32 glass-card-no-border  p-stack-sm rounded-xl text-center border-l-4 border-l-primary/50">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2 text-primary">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <p className="font-label-md text-on-surface truncate">Classical</p>
            <span className="text-[10px] uppercase font-mono-sm text-primary">
              Done
            </span>
          </div>
          {/* Current */}
          <div className="snap-start flex-shrink-0 w-32 glass-card-no-border  p-stack-sm rounded-xl text-center border-l-4 border-l-tertiary shadow-[0_0_20px_rgba(76,215,246,0.15)] bg-surface-container-high">
            <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center mx-auto mb-2 text-tertiary ai-glow">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: '"FILL" 1' }}>
                play_circle
              </span>
            </div>
            <p className="font-label-md text-on-surface truncate">Kinematics</p>
            <span className="text-[10px] uppercase font-mono-sm text-tertiary">
              Current
            </span>
          </div>
          {/* Weak Area */}
          <div className="snap-start flex-shrink-0 w-32 glass-card-no-border  p-stack-sm rounded-xl text-center border-l-4 border-l-error/50">
            <div className="w-10 h-10 rounded-full bg-error/20 flex items-center justify-center mx-auto mb-2 text-error">
              <span className="material-symbols-outlined">priority_high</span>
            </div>
            <p className="font-label-md text-on-surface truncate">Circular</p>
            <span className="text-[10px] uppercase font-mono-sm text-error">
              Weak
            </span>
          </div>
          {/* Upcoming */}
          <div className="snap-start flex-shrink-0 w-32 glass-card-no-border  p-stack-sm rounded-xl text-center border-l-4 border-l-white/10 opacity-50">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-2 text-on-surface-variant">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <p className="font-label-md text-on-surface truncate">Dynamics</p>
            <span className="text-[10px] uppercase font-mono-sm text-on-surface-variant">
              Locked
            </span>
          </div>
        </div>
      </section>

      {/* Desktop */}

      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-stack-md">
        <div className="glass-card-no-border  p-stack-md rounded-xl flex items-center gap-stack-md">
          <div className="p-unit rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-[24px]">bolt</span>
          </div>
          <div>
            <p className="text-xs font-mono-sm text-on-surface-variant">
              Velocity
            </p>
            <p className="font-bold">1.2 Ch/Day</p>
          </div>
        </div>
        <div className="glass-card-no-border  p-stack-md rounded-xl flex items-center gap-stack-md">
          <div className="p-unit rounded-lg bg-tertiary/10 text-tertiary">
            <span className="material-symbols-outlined text-[24px]">
              check_circle
            </span>
          </div>
          <div>
            <p className="text-xs font-mono-sm text-on-surface-variant">
              Accuracy
            </p>
            <p className="font-bold">88.4%</p>
          </div>
        </div>
        <div className="glass-card-no-border  p-stack-md rounded-xl flex items-center gap-stack-md">
          <div className="p-unit rounded-lg bg-on-secondary-container/10 text-on-secondary-container">
            <span className="material-symbols-outlined text-[24px]">grain</span>
          </div>
          <div>
            <p className="text-xs font-mono-sm text-on-surface-variant">
              Retention
            </p>
            <p className="font-bold">92%</p>
          </div>
        </div>
      </div>
    </>
  );
}
