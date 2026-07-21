"use client";

import { Play, Clock3, BookOpen, ArrowRight } from "lucide-react";

export default function ContinueLearning() {
  return (
    <section
      className="
      glass-card

      inner-glow

      rounded-3xl

      p-8

      border

      border-primary/20

      relative

      overflow-hidden
    ">
      {/* Glow */}

      <div
        className="
        absolute

        -right-24

        -top-24

        h-72

        w-72

        rounded-full

        bg-primary/10

        blur-[120px]
      "
      />

      <div className="relative z-10">
        {/* Badge */}

        <span
          className="
          inline-flex

          items-center

          gap-2

          rounded-full

          bg-primary/10

          px-4

          py-2

          text-xs

          font-bold

          uppercase

          tracking-[0.2em]

          text-primary
        ">
          <Play size={12} />
          Continue Learning
        </span>

        {/* Title */}

        <h2
          className="
          mt-6

          text-4xl

          font-bold

          leading-tight
        ">
          Dynamics &
          <br />
          Newton&apos;s Laws
        </h2>

        <p
          className="
          mt-4

          max-w-xl

          leading-7

          text-on-surface-variant
        ">
          Continue from your last checkpoint. AI has prepared the next lesson
          based on your previous performance.
        </p>

        {/* Stats */}

        <div
          className="
          mt-8

          grid

          grid-cols-3

          gap-6
        ">
          <div>
            <div className="flex items-center gap-2">
              <Clock3 size={16} className="text-primary" />

              <span className="text-xs uppercase text-on-surface-variant">
                Time Left
              </span>
            </div>

            <h4 className="mt-2 text-xl font-bold">28 min</h4>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-primary" />

              <span className="text-xs uppercase text-on-surface-variant">
                Lessons
              </span>
            </div>

            <h4 className="mt-2 text-xl font-bold">5 / 8</h4>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Play size={16} className="text-primary" />

              <span className="text-xs uppercase text-on-surface-variant">
                Progress
              </span>
            </div>

            <h4 className="mt-2 text-xl font-bold">68%</h4>
          </div>
        </div>

        {/* Progress */}

        <div className="mt-8">
          <div className="flex justify-between mb-3">
            <span className="text-sm text-on-surface-variant">
              Overall Progress
            </span>

            <span className="font-bold text-primary">68%</span>
          </div>

          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
            <div
              className="
              h-full

              w-[68%]

              rounded-full

              bg-gradient-to-r

              from-primary

              to-tertiary
            "
            />
          </div>
        </div>

        {/* CTA */}

        <button
          className="
          mt-10

          h-14

          px-8

          rounded-2xl

          bg-primary

          text-on-primary

          font-semibold

          flex

          items-center

          gap-3

          hover:scale-[1.02]

          transition-all
        ">
          Resume Lesson
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
