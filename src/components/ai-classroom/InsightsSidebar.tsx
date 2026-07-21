"use client";

import { TrendingUp, Brain, Target, Flame, ArrowRight } from "lucide-react";

export default function InsightsSidebar() {
  return (
    <aside
      className="
      glass-card

      inner-glow

      rounded-[32px]

      border

      border-white/10

      p-6

      space-y-6

      sticky

      top-24
    ">
      {/* Header */}

      <div>
        <p
          className="
          text-xs

          uppercase

          tracking-[0.2em]

          text-primary

          font-bold
        ">
          AI INSIGHTS
        </p>

        <h2 className="mt-2 text-2xl font-bold">Learning Analytics</h2>
      </div>

      {/* Readiness */}

      <div
        className="
        rounded-2xl

        bg-primary/5

        border

        border-primary/10

        p-5
      ">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-on-surface-variant">Exam Readiness</p>

            <h3 className="mt-2 text-4xl font-bold">82%</h3>
          </div>

          <TrendingUp size={30} className="text-primary" />
        </div>

        <div className="mt-5 h-2 rounded-full bg-white/5">
          <div
            className="
            h-full

            w-[82%]

            rounded-full

            bg-primary
          "
          />
        </div>
      </div>

      {/* Confidence */}

      <div
        className="
        rounded-2xl

        bg-surface-container-low

        border

        border-white/5

        p-5
      ">
        <div className="flex items-center gap-3">
          <Brain size={20} className="text-tertiary" />

          <span className="font-semibold">AI Confidence</span>
        </div>

        <h3 className="mt-4 text-3xl font-bold">94%</h3>

        <p className="mt-2 text-sm text-on-surface-variant">
          Excellent understanding of current topic.
        </p>
      </div>

      {/* Goal */}

      <div
        className="
        rounded-2xl

        bg-surface-container-low

        border

        border-white/5

        p-5
      ">
        <div className="flex items-center gap-3">
          <Target size={20} className="text-primary" />

          <span className="font-semibold">Today&apos;s Goal</span>
        </div>

        <p className="mt-4 leading-7 text-on-surface-variant">
          Complete the lesson and score at least
          <strong> 85%</strong> in the practice quiz.
        </p>
      </div>

      {/* Weak Area */}

      <div
        className="
        rounded-2xl

        border

        border-orange-500/20

        bg-orange-500/5

        p-5
      ">
        <div className="flex items-center gap-3">
          <Flame size={20} className="text-orange-400" />

          <span className="font-semibold">Weak Area</span>
        </div>

        <p className="mt-3 text-sm leading-7 text-on-surface-variant">
          Free-body diagrams need more practice.
        </p>
      </div>

      {/* CTA */}

      <button
        className="
        w-full

        h-14

        rounded-2xl

        bg-primary

        text-on-primary

        font-semibold

        flex

        items-center

        justify-center

        gap-2

        transition-all

        hover:scale-[1.02]
      ">
        Take Practice Quiz
        <ArrowRight size={18} />
      </button>
    </aside>
  );
}
