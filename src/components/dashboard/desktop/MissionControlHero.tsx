"use client";

import { Clock3, BarChart3 } from "lucide-react";

export default function MissionControlHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-gutter">
      {/* Left */}
      <div
        className="lg:col-span-3 glass-panel premium-border rounded-2xl p-8 relative overflow-hidden mission-glow"
        style={{
          transform: "translateY(0px)",
          transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
        <div className="absolute -top-10 -right-10 opacity-5">
          <span className="material-symbols-outlined text-[240px]">
            rocket_launch
          </span>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <p className="text-headline-md font-medium text-on-surface-variant">
              Good Evening,{" "}
              <span className="text-on-surface font-bold">Gaurav 👋</span>
            </p>
            <span className="text-white/10">|</span>
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/20">
              Mission Control
            </span>
          </div>
          <h1 className="text-headline-lg font-bold mb-8 leading-tight">
            Today&apos;s Mission:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
              Master Newton&apos;s First Law
            </span>
          </h1>
          <div className="flex flex-wrap gap-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-surface-container-high border border-white/5">
                <span className="material-symbols-outlined text-tertiary text-xl">
                  schedule
                </span>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">
                  Est. Time
                </p>
                <p className="text-body-md font-bold">18 Minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-surface-container-high border border-white/5">
                <span className="material-symbols-outlined text-orange-400 text-xl">
                  bar_chart
                </span>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">
                  Difficulty
                </p>
                <p className="text-body-md font-bold">Medium</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-white/10 pl-10">
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter mb-1">
                  AI Confidence Score
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-headline-md font-bold text-primary">
                    87%
                  </span>
                  <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: "87%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div
        className="glass-panel premium-border rounded-2xl p-6 flex flex-col justify-center items-center text-center"
        style={{
          transform: "translateY(0px)",
          transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
        <div className="relative w-28 h-28 mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              className="text-white/5"
              cx={56}
              cy={56}
              fill="transparent"
              r={48}
              stroke="currentColor"
              strokeWidth={8}
            />
            <circle
              className="text-tertiary"
              cx={56}
              cy={56}
              fill="transparent"
              r={48}
              stroke="currentColor"
              strokeDasharray="301.59"
              strokeDashoffset={15}
              strokeWidth={8}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">95%</span>
          </div>
        </div>
        <p className="text-label-md font-bold mb-1">Exam Readiness</p>
        <p className="text-[12px] text-primary font-medium mb-1">
          Top 5% Ranked
        </p>
        <p className="text-[11px] text-on-surface-variant px-4 leading-relaxed">
          Excelling in Physics &amp; Mathematics.
        </p>
      </div>
    </section>
  );
}
