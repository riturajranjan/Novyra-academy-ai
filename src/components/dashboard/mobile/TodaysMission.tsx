"use client";

import Link from "next/link";
import { PlayCircle } from "lucide-react";

import type { ContinueLearningItem } from "@/lib/contentDal";

interface TodaysMissionProps {
  continueLearning: ContinueLearningItem | null;
}

export default function TodaysMission({ continueLearning }: TodaysMissionProps) {
  return (
    <section>
      {/* Header */}

      <div className="flex items-center justify-between mb-4">
        <span className="text-on-surface-variant  text-xs uppercase tracking-[0.2em]">
          Active Mission
        </span>
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
            <h2 className="font-headline-lg-mobile text-2xl leading-tight mb-1">
              {continueLearning ? continueLearning.lessonTitle : "No lessons available yet"}
            </h2>

            <p className="text-on-surface-variant text-sm mb-6">
              {continueLearning
                ? `${continueLearning.subjectTitle} • ${continueLearning.chapterTitle}`
                : "Select a subject to get started."}
            </p>
          </div>
        </div>

        {/* Lesson */}

        <div className="space-y-4 relative z-10">
          {continueLearning ? (
            <>
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

                <span className="text-sm font-medium">{continueLearning.chapterTitle}</span>
              </div>

              {/* Button */}

              <Link
                href={continueLearning.href}
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
                {continueLearning.label} Mission
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </>
          ) : (
            <button
              disabled
              className="w-full py-4 rounded-2xl bg-white/5 text-on-surface-variant font-bold flex items-center justify-center gap-2 cursor-not-allowed">
              No Mission Available
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
