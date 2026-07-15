"use client";

import { Brain, ClipboardCheck } from "lucide-react";

export default function PersonalizationEngine() {
  return (
    <section
      className="
        relative
        h-[220px]
        overflow-hidden
        rounded-[28px]
        border
        border-white/5
        bg-[#131B2E]
      ">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8083FF]/10 blur-[90px]" />
      </div>

      {/* Nodes */}

      <div className="relative z-10 flex h-full items-center justify-between px-8 md:px-12">
        {/* Left */}

        <div className="flex flex-col items-center gap-4">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#8083FF]/30
              bg-[#1A2238]
            ">
            <Brain size={28} className="text-[#C0C1FF]" />
          </div>

          <span className="text-xs tracking-wide text-[#9CA3AF]">
            Learning Style
          </span>
        </div>

        {/* Connection */}

        <div className="hidden md:flex relative mx-8 flex-1">
          <div className="h-[2px] rounded-full bg-gradient-to-r from-[#8083FF] via-[#4CD7F6] to-[#B8C4FF]" />

          {/* Shimmer */}

          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="shimmer h-full w-full" />
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-col items-center gap-4">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-cyan-400/30
              bg-[#1A2238]
            ">
            <ClipboardCheck size={28} className="text-cyan-400" />
          </div>

          <span className="text-xs tracking-wide text-[#9CA3AF]">
            Daily Missions
          </span>
        </div>
      </div>

      {/* Footer */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
        ">
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-[#8083FF]/50
          ">
          Personalization Engine Alpha
        </span>
      </div>
    </section>
  );
}
