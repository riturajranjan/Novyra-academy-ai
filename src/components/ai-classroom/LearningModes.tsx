"use client";

import { learningModes } from "@/constants/ai-classroom";
import { useState } from "react";

export default function LearningModes() {
  const [active, setActive] = useState("learn");

  return (
    <>
      <div className="flex md:hidden justify-end animate-in fade-in slide-in-from-right-4 duration-500">
        <div className="max-w-[85%] bg-primary/20 backdrop-blur-md border border-primary/20 text-on-surface px-5 py-3 rounded-2xl rounded-tr-none text-sm font-medium">
          Explain superposition again, but break it down into modules.
        </div>
      </div>

      <div className="flex md:hidden justify-start animate-in fade-in slide-in-from-left-4 duration-700">
        <div className="max-w-full glass-card inner-glow rounded-[2rem] p-stack-md space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-lg">
              <span
                className="material-symbols-outlined text-on-primary text-xl"
                style={{ fontVariationSettings: '"FILL" 1' }}>
                auto_awesome
              </span>
            </div>
            <div>
              <span className="text-sm font-bold text-on-surface">
                Superposition Deep-Dive
              </span>
              <p className="text-[10px] text-primary uppercase font-bold tracking-wider">
                4 Structured Modules
              </p>
            </div>
          </div>
          {/* Vertical Stack of Learning Modules */}
          <div className="space-y-4">
            {/* Module 1: The Core State */}
            <div className="space-y-2 px-1">
              <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                <span className="w-1 h-3 bg-primary rounded-full" /> 01. The
                Core State
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                In quantum mechanics,{" "}
                <span className="text-primary font-semibold">
                  Superposition
                </span>{" "}
                allows systems to exist in multiple states simultaneously until
                measured.
              </p>
            </div>
            {/* Module 2: Mathematical Model */}
            <div className="bg-surface-container-lowest/40 rounded-2xl border border-white/5 p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-[9px] font-bold text-on-surface-variant uppercase">
                  The Math
                </h4>
                <span className="material-symbols-outlined text-primary text-base">
                  functions
                </span>
              </div>
              <div className="text-center py-4 text-xl font-mono text-primary bg-surface/40 rounded-xl border border-white/5">
                |ψ⟩ = α|0⟩ + β|1⟩
              </div>
            </div>
            {/* Module 3: Analogy */}
            <div className="bg-tertiary/5 border-l-4 border-tertiary p-4 rounded-r-xl space-y-2">
              <div className="flex items-center gap-2 text-tertiary">
                <span className="material-symbols-outlined text-base">
                  lightbulb
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  The Analogy
                </span>
              </div>
              <p className="text-sm text-on-surface-variant italic leading-relaxed">
                "Think of a jazz musician improvising. Before the note is
                played, it exists as a range of possibilities."
              </p>
            </div>
            {/* Module 4: Exam Strategy */}
            <div className="bg-secondary-container/20 border border-secondary-container/30 p-4 rounded-2xl flex items-start gap-4">
              <div className="bg-secondary/20 p-2 rounded-xl">
                <span
                  className="material-symbols-outlined text-secondary text-xl"
                  style={{ fontVariationSettings: '"FILL" 1' }}>
                  verified
                </span>
              </div>
              <div className="flex-1">
                <h4 className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                  Exam Tip
                </h4>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-snug">
                  Always emphasize that{" "}
                  <span className="text-secondary font-bold">observation</span>{" "}
                  forces the wave function to collapse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-margin-desktop hidden md:block py-8 journey-line">
        <div className="relative z-10 flex justify-between max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 border-4 border-background">
              <span className="material-symbols-outlined text-[20px]">
                check
              </span>
            </div>
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
              Introduction
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-[0_0_20px_rgba(192,193,255,0.4)] border-4 border-background">
              <span className="text-xs font-bold">01</span>
            </div>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
              Newton&apos;s 1st
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center border-4 border-background">
              <span className="text-xs font-bold">02</span>
            </div>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              2nd Law
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center border-4 border-background">
              <span className="text-xs font-bold">03</span>
            </div>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              Practice
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center border-4 border-background">
              <span className="material-symbols-outlined text-[18px]">
                quiz
              </span>
            </div>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              Quiz
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
