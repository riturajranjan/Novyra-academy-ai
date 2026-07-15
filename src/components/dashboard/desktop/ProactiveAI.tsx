"use client";

import Image from "next/image";
import { Sparkles, Brain, TrendingUp, ArrowRight } from "lucide-react";

const insights = [
  {
    title: "Physics",
    description: "Your Mechanics accuracy improved by 12% this week.",
  },
  {
    title: "Recommendation",
    description:
      "Complete one Chemistry revision today to maintain your streak.",
  },
  {
    title: "Prediction",
    description: "You're on track to score 94% in the next mock exam.",
  },
];

export default function ProactiveAI() {
  return (
    <section
      className="
      glass-panel
      premium-border
      rounded-2xl
      p-6
      relative
      overflow-hidden
    ">
      {/* Background Glow */}

      <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-primary/10 blur-[120px]" />

      {/* Header */}

      <div className="relative z-10 flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-primary/20">
          <Image
            src="/images/ai/dr-nova.png"
            alt="Dr Nova"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-primary" />

            <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">
              AI ASSISTANT
            </span>
          </div>

          <h2 className="mt-2 text-headline-md font-bold">Dr. Nova</h2>
        </div>
      </div>

      {/* Message */}

      <div className="relative z-10 mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
        <p className="leading-7 text-on-surface">
          Good evening! Based on today&apos;s learning activity, I recommend
          completing the{" "}
          <span className="font-bold text-primary">Interactive Simulation</span>{" "}
          before attempting your mock quiz.
        </p>
      </div>

      {/* Insights */}

      <div className="relative z-10 mt-8 space-y-4">
        {insights.map((item) => (
          <div
            key={item.title}
            className="
              flex
              items-start
              gap-4
              rounded-2xl
              bg-surface-container
              border
              border-white/5
              p-4
            ">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Brain size={18} className="text-primary" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>

              <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div className="relative z-10 mt-8 flex items-center justify-between rounded-2xl bg-surface-container p-5">
        <div>
          <p className="text-xs uppercase tracking-widest text-on-surface-variant">
            AI Confidence
          </p>

          <h3 className="mt-2 flex items-center gap-2 text-2xl font-bold text-primary">
            <TrendingUp size={22} />
            96%
          </h3>
        </div>

        <button className="gradient-button flex h-12 items-center gap-2 rounded-xl px-5 font-semibold">
          Open AI Coach
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
