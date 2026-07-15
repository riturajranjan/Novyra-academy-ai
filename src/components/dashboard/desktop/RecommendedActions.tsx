"use client";

import { Brain, BookOpen, Bot, ClipboardCheck, ArrowRight } from "lucide-react";

const actions = [
  {
    icon: Brain,
    title: "Adaptive Quiz",
    description: "10 AI-generated questions based on yesterday's performance.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: BookOpen,
    title: "Revision Mode",
    description: "Revise weak Physics concepts in under 15 minutes.",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
    border: "border-tertiary/20",
  },
  {
    icon: Bot,
    title: "Ask AI Teacher",
    description: "Clear doubts instantly with Dr. Nova AI Mentor.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    icon: ClipboardCheck,
    title: "Practice Test",
    description: "Start a full-length exam simulation with AI evaluation.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
];

export default function RecommendedActions() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <span
          className="material-symbols-outlined text-tertiary"
          style={{ fontVariationSettings: '"FILL" 1' }}>
          auto_awesome
        </span>
        <h3 className=" text-label-md font-bold uppercase tracking-tight text-on-surface-variant">
          Recommended Actions
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <button className="text-left p-6 rounded-2xl border border-tertiary/20 bg-tertiary/5 hover:bg-tertiary/10 transition-all group relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-headline-md text-headline-md text-tertiary">
              Study Optics
            </h4>
            <span className="px-2 py-1 bg-tertiary/20 text-tertiary rounded text-[10px] font-bold">
              CRITICAL
            </span>
          </div>
          <p className="text-body-md text-on-surface-variant mb-4">
            Your accuracy in refraction principles dropped to{" "}
            <span className="text-tertiary font-bold">42%</span>. AI recommends
            immediate conceptual review.
          </p>
          <div className="flex items-center gap-2 text-tertiary  text-label-md font-bold">
            Repair Gap{" "}
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </button>
        <button className="text-left p-6 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all group">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-headline-md text-headline-md text-primary">
              Practice Momentum
            </h4>
            <span className="px-2 py-1 bg-primary/20 text-primary rounded text-[10px] font-bold">
              +18% EXP.
            </span>
          </div>
          <p className="text-body-md text-on-surface-variant mb-4">
            Complete 5 momentum challenges to secure yesterday&apos;s learning.{" "}
            <span className="text-primary">Expected 18% improvement</span>.
          </p>
          <div className="flex items-center gap-2 text-primary  text-label-md font-bold">
            Start Drill{" "}
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
