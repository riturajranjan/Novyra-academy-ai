"use client";

import { PlayCircle } from "lucide-react";

export default function TodaysMission() {
  return (
    <section>
      {/* Header */}

      <div className="flex items-center justify-between mb-4">
        <span className="text-on-surface-variant  text-xs uppercase tracking-[0.2em]">
          Active Mission
        </span>

        <span className="text-primary  text-xs">Oct 14</span>
      </div>

      {/* Card */}

      <div
        className="
        glass-card
        inner-glow

        rounded-3xl

        p-6

        relative

        overflow-hidden

        border

        border-primary/30

        shadow-2xl

        shadow-primary/10
      ">
        {/* Glow */}

        <div
          className="
          absolute

          -top-12

          -right-12

          w-48

          h-48

          rounded-full

          bg-primary/15

          blur-[60px]
        "
        />

        {/* Top */}

        <div className="relative z-10 flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="
                px-2

                py-0.5

                rounded

                bg-tertiary/20

                text-tertiary

                text-[10px]

                uppercase

                tracking-wider

                font-bold
              ">
                Level : Hard
              </span>

              <span
                className="
                text-[10px]

                uppercase

                tracking-wider

                font-bold

                text-on-surface-variant
              ">
                45 MIN
              </span>
            </div>

            <h2 className="font-headline-lg-mobile text-2xl leading-tight mb-1">
              Newton&apos;s First Law
            </h2>

            <p className="text-on-surface-variant text-sm mb-6">
              Physics • Module 4.1
            </p>
          </div>

          {/* Progress Ring */}

          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="transparent"
                strokeWidth="6"
                className="stroke-current text-surface-container-highest"
              />

              <circle
                cx="50"
                cy="50"
                r="42"
                fill="transparent"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="264"
                strokeDashoffset="66"
                className="
                stroke-current

                text-primary

                progress-ring__circle
              "
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold">75%</span>
            </div>
          </div>
        </div>

        {/* Lesson */}

        <div className="space-y-4 relative z-10">
          <div
            className="
            flex

            items-center

            gap-3

            bg-white/5

            p-3

            rounded-xl

            border

            border-white/5
          ">
            <PlayCircle size={22} className="text-primary" />

            <span className="text-sm font-medium">
              Inertia & Motion Analysis
            </span>
          </div>

          {/* Button */}

          <button
            className="
            w-full

            py-4

            rounded-2xl

            bg-primary

            text-on-primary

            font-bold

            flex

            items-center

            justify-center

            gap-2

            shadow-lg

            shadow-primary/20

            active:scale-[0.98]

            transition-transform
          ">
            Resume Mission
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
