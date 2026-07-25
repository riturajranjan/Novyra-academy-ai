"use client";

import { Rocket, BookOpen } from "lucide-react";

interface DashboardPreviewProps {
  firstSubjectTitle: string | null;
}

export default function DashboardPreview({ firstSubjectTitle }: DashboardPreviewProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/5
        bg-[#131B2E]
        p-6
      ">
      {/* Hover Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#8083FF]/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-2">
          <BookOpen size={18} className="text-[#9CA3AF]" />

          <h3
            className="
              text-sm
              font-medium
              text-[#C7C4D7]
            ">
            Live Dashboard Preview
          </h3>
        </div>

        {/* Today's Mission */}

        <div
          className="
            mb-4
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-white/5
            bg-[#1A2238]
            p-4
          ">
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-cyan-500/10
              ">
              <Rocket size={20} className="text-cyan-400" />
            </div>

            <div>
              <h4 className="font-medium text-white">Today&apos;s Mission</h4>

              <p className="text-xs text-[#9CA3AF]">
                {firstSubjectTitle ? `${firstSubjectTitle} Fundamentals` : "Your first lesson"}
              </p>
            </div>
          </div>

          <span
            className="
              rounded-lg
              bg-cyan-500/10
              px-3
              py-1
              text-xs
              font-semibold
              text-cyan-400
            ">
            GO
          </span>
        </div>

        {/* Upcoming Quiz */}

        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-white/5
            bg-[#1A2238]
            p-4
            opacity-80
          ">
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-[#8083FF]/10
              ">
              <BookOpen size={20} className="text-[#C0C1FF]" />
            </div>

            <div>
              <h4 className="font-medium text-white">Upcoming Quiz</h4>

              <p className="text-xs text-[#9CA3AF]">
                Starts after today&apos;s lesson
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
