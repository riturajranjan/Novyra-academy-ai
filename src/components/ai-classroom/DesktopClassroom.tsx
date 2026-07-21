"use client";

import { useState } from "react";

import Hero from "./Hero";
import LearningModes from "./LearningModes";
import LearningCanvas from "./LearningCanvas";
import FloatingChatInput from "./FloatingChatInput";
import VoiceOverlay from "./VoiceOverlay";
import ChatLearning from "./ChatLearning";

export default function DesktopClassroom() {
  const [voiceOpen, setVoiceOpen] = useState(false);

  return (
    <>
      <section className="flex-1 flex flex-col relative overflow-hidden">
        <Hero />

        <LearningModes />

        <ChatLearning />
        {/* Floating Input */}
        <FloatingChatInput />
      </section>

      <aside className="w-85 flex-shrink-0 bg-surface-container/50 backdrop-blur-md border-l border-white/5 flex flex-col z-20">
        <div className="p-8 flex-1 overflow-y-auto space-y-12">
          {/* Intelligent Insights Section */}
          <div className="space-y-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary/60 px-1">
              Intelligent Insights
            </h3>
            {/* Exam Readiness Score */}
            <div className="glass-card p-6 border-primary/20 bg-primary/5">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-label-md font-medium text-on-surface-variant mb-1">
                    Exam Readiness
                  </p>
                  <p className="text-[11px] text-emerald-400 font-bold uppercase tracking-widest">
                    Mastery Level
                  </p>
                </div>
                <span className="text-4xl font-bold text-primary">B+</span>
              </div>
              <div className="space-y-4">
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary via-tertiary to-emerald-400 w-[72%] rounded-full shadow-[0_0_10px_rgba(192,193,255,0.4)]" />
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-on-surface-variant font-medium">
                    Confidence Score
                  </span>
                  <span className="text-on-surface font-bold">72%</span>
                </div>
              </div>
            </div>
            {/* Session Progress */}
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    schedule
                  </span>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
                    Est. To Goal
                  </p>
                  <p className="text-label-md font-bold text-on-surface">
                    14 Minutes
                  </p>
                </div>
              </div>
              <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-md font-bold">
                ON TRACK
              </span>
            </div>
          </div>
          {/* Concept Mastery Checklist */}
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant px-1">
              Concept Mastery
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-400/5 border border-emerald-400/10">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: '"wght" 700' }}>
                    check
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-label-md font-bold text-on-surface block leading-tight">
                    Inertia Basics
                  </span>
                  <span className="text-[10px] text-emerald-400/80 font-bold">
                    100% SECURED
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="w-6 h-6 rounded-lg border-2 border-primary/40 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(192,193,255,1)]" />
                </div>
                <div className="flex-1">
                  <span className="text-label-md font-bold text-primary block leading-tight">
                    Vector Forces
                  </span>
                  <span className="text-[10px] text-primary/60 font-bold uppercase">
                    Learning Now...
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl opacity-40 grayscale">
                <div className="w-6 h-6 rounded-lg border-2 border-white/10" />
                <div className="flex-1">
                  <span className="text-label-md font-bold text-on-surface block leading-tight">
                    Equilibrium Math
                  </span>
                  <span className="text-[10px] text-on-surface-variant uppercase">
                    Locked
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Live Topic Heatmap */}
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant px-1">
              Live Topic Heatmap
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-red-400/5 border border-red-400/10 hover:bg-red-400/10 transition-colors cursor-help group">
                <span className="text-label-md font-bold text-on-surface">
                  Momentum
                </span>
                <span className="text-[9px] font-bold text-red-400 uppercase tracking-tighter group-hover:tracking-widest transition-all">
                  Attention High
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-400/5 border border-emerald-400/10">
                <span className="text-label-md font-bold text-on-surface">
                  Kinetic Friction
                </span>
                <span className="text-[9px] font-bold text-emerald-400 uppercase">
                  Strong
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Quick CTA */}
        <div className="p-8 bg-surface-container-high/80 border-t border-white/5">
          <button className="w-full h-16 rounded-[20px] bg-primary text-on-primary font-bold text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/20">
            <span className="material-symbols-outlined">bolt</span> Take Speed
            Quiz
          </button>
        </div>
      </aside>

      <LearningCanvas />

      {/* <section className="mt-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <JourneyStepper />

              <LessonModule />

              <FloatingChatInput />
            </div>

            <div className="col-span-4">
              <InsightsSidebar />
            </div>
          </div>
        </section> */}

      <VoiceOverlay open={voiceOpen} onClose={() => setVoiceOpen(false)} />
    </>
  );
}
