"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function SmartInsight() {
  return (
    <section className="mb-8 flex items-start gap-4 ">
      {/* Avatar */}

      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-2xl border border-[#C0C1FF]/20 bg-[#151D31]">
        <Image
          className="h-full w-full object-cover"
          src="/drnovya.jpg"
          alt=""
          height={100}
          width={100}
        />

        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#151D31] bg-cyan-400 animate-pulse" />
      </div>

      {/* Bubble */}

      <div className="relative flex-1 rounded-2xl rounded-tl-none border border-white/10 bg-[#151D31] p-4">
        {/* Bubble Arrow */}

        <div
          className="
            absolute
            left-[-8px]
            top-0
            h-0
            w-0
            border-b-[10px]
            border-r-[8px]
            border-b-transparent
            border-r-[#151D31]
          "
        />

        {/* Badge */}

        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={16} className="text-[#C0C1FF]" />

          <span
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#C0C1FF]
            ">
            Smart Insight
          </span>
        </div>

        {/* Message */}

        <p
          className="
            text-[15px]
            italic
            leading-7
            text-[#E5E7EB]
          ">
          "An ambitious target, Candidate. Based on your historical performance,
          this goal is achievable with the Steady learning pace. I've optimized
          your roadmap for maximum retention."
        </p>
      </div>
    </section>
  );
}
