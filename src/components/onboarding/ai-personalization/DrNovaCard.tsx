"use client";

import { Bot } from "lucide-react";

export default function DrNovaCard() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-gradient-to-r
        from-[#334282]/20
        to-[#009EB9]/10
        p-6
      ">
      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 flex gap-4">
        {/* Avatar */}

        <div
          className="
            flex
            h-12
            w-12
            flex-shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#8083FF]/40
            bg-[#1B2440]
          ">
          <Bot size={22} className="text-[#C0C1FF]" />
        </div>

        <div className="flex-1">
          {/* Header */}

          <div className="mb-4 flex items-center justify-between">
            <span
              className="
                text-sm
                font-semibold
                tracking-wide
                text-[#C0C1FF]
              ">
              Dr. Nova AI
            </span>

            {/* Typing */}

            <div className="flex gap-1">
              <span className="typing-dot" />

              <span className="typing-dot" />

              <span className="typing-dot" />
            </div>
          </div>

          {/* Message */}

          <p
            className="
              text-[15px]
              leading-7
              text-[#E5E7EB]
            ">
            I've analyzed over
            <span className="font-semibold text-white">
              {" "}
              2 million learning patterns{" "}
            </span>
            based on your Visual + Practice learning style. Your AI classroom is
            now being optimized for maximum retention and faster concept
            mastery.
          </p>

          {/* Footer */}

          <div className="mt-6 flex flex-wrap gap-6">
            <div>
              <p className="text-xs text-[#9CA3AF]">Estimated Success</p>

              <p className="mt-1 text-[#4CD7F6] font-semibold">93%</p>
            </div>

            <div>
              <p className="text-xs text-[#9CA3AF]">Learning Mode</p>

              <p className="mt-1 text-white">Visual / Voice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
