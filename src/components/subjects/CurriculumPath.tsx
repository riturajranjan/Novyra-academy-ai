"use client";

import { CheckCircle2, PlayCircle, Lock } from "lucide-react";

const chapters = [
  {
    chapter: "Chapter 1",
    title: "Kinematics",
    status: "completed",
  },
  {
    chapter: "Chapter 2",
    title: "Laws of Motion",
    status: "completed",
  },
  {
    chapter: "Chapter 3",
    title: "Work, Energy & Power",
    status: "current",
  },
  {
    chapter: "Chapter 4",
    title: "Circular Motion",
    status: "locked",
  },
  {
    chapter: "Chapter 5",
    title: "Gravitation",
    status: "locked",
  },
];

export default function CurriculumPath() {
  return (
    <div className="glass-card p-stack-lg rounded-2xl relative">
      <h3 className="font-headline-md text-headline-md mb-stack-lg">
        Curriculum Path
      </h3>
      <div className="relative pl-8">
        {/* Roadmap Vertical Line */}
        <div className="absolute left-[11px] top-4 bottom-4 w-[2px] roadmap-line rounded-full opacity-20" />
        <div className="space-y-stack-lg">
          {/* Step 1: Completed */}
          <div className="relative group cursor-help">
            <div className="absolute -left-[27px] top-1 h-5 w-5 rounded-full bg-primary flex items-center justify-center border-4 border-surface z-10">
              <span className="material-symbols-outlined text-[10px] text-on-primary font-bold">
                check
              </span>
            </div>
            <div>
              <p className="text-xs font-mono-sm text-primary mb-1">
                CHAPTER 1
              </p>
              <h5 className="text-sm font-bold">Units &amp; Measurements</h5>
              <div className="hidden group-hover:block absolute left-full ml-stack-md top-0 w-48 p-stack-md glass-card rounded-xl z-20">
                <p className="text-xs text-on-surface-variant mb-unit">
                  8 Concepts • Quiz: 96%
                </p>
                <p className="text-xs text-primary font-bold">Mastered</p>
              </div>
            </div>
          </div>
          {/* Step 2: Current */}
          <div className="relative group cursor-help">
            <div className="absolute -left-[27px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-surface shadow-[0_0_10px_rgba(192,193,255,0.8)] z-10 animate-pulse" />
            <div>
              <p className="text-xs font-mono-sm text-primary mb-1">
                CHAPTER 4
              </p>
              <h5 className="text-sm font-bold">Dynamics</h5>
              <div className="hidden group-hover:block absolute left-full ml-stack-md top-0 w-48 p-stack-md glass-card rounded-xl z-20">
                <p className="text-xs text-on-surface-variant mb-unit">
                  12 Concepts • Quiz: 85%
                </p>
                <p className="text-xs text-tertiary font-bold">In Progress</p>
              </div>
            </div>
          </div>
          {/* Step 3: Weak Topic */}
          <div className="relative group cursor-help">
            <div className="absolute -left-[27px] top-1 h-5 w-5 rounded-full bg-error border-4 border-surface z-10" />
            <div>
              <p className="text-xs font-mono-sm text-error mb-1">CHAPTER 2</p>
              <h5 className="text-sm font-bold">Vector Algebra</h5>
              <div className="hidden group-hover:block absolute left-full ml-stack-md top-0 w-48 p-stack-md glass-card rounded-xl z-20">
                <p className="text-xs text-on-surface-variant mb-unit">
                  5 Concepts • Quiz: 64%
                </p>
                <p className="text-xs text-error font-bold">Needs Revision</p>
              </div>
            </div>
          </div>
          {/* Step 4: Locked */}
          <div className="relative opacity-40">
            <div className="absolute -left-[27px] top-1 h-5 w-5 rounded-full bg-surface-container-highest border-4 border-surface z-10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[10px]">
                lock
              </span>
            </div>
            <div>
              <p className="text-xs font-mono-sm text-on-surface-variant mb-1">
                CHAPTER 6
              </p>
              <h5 className="text-sm font-bold">Momentum &amp; Collisions</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
