"use client";

import {
  Brain,
  ClipboardCheck,
  TrendingUp,
  Bookmark,
  Plus,
  Mic,
  ArrowUp,
  Home,
  BookOpen,
  GraduationCap,
  BarChart3,
  User,
} from "lucide-react";

const chips = [
  {
    title: "Simplify",
    icon: Brain,
  },
  {
    title: "Practice Quiz",
    icon: ClipboardCheck,
  },
  {
    title: "Check Readiness",
    icon: TrendingUp,
  },
  {
    title: "Save Module",
    icon: Bookmark,
  },
];

export default function BottomActions() {
  return (
    <div
      className="
      fixed
      bottom-[105px]
      md:bottom-0
      inset-x-0
      z-50
      lg:hidden
    ">
      {/* Gradient */}

      <div
        className="
        bg-gradient-to-t
        from-background
        via-background/95
        to-transparent
        pt-8
        ">
        <div className="px-margin-mobile">
          <div
            className="
            flex
            gap-3
            overflow-x-auto
            scrollbar-hide
            pb-5
          ">
            {chips.map((chip) => {
              const Icon = chip.icon;

              return (
                <button
                  key={chip.title}
                  className="
                  shrink-0
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  glass-card
                  border
                  border-white/5
                ">
                  <Icon size={16} className="text-primary" />

                  <span className="text-xs font-semibold">{chip.title}</span>
                </button>
              );
            })}
          </div>

          {/* Input */}

          <div
            className="
            glass-card
            rounded-[28px]
            p-2
            flex
            items-center
            gap-2
          ">
            <button
              className="
              h-11
              w-11
              rounded-full
              flex
              items-center
              justify-center
            ">
              <Plus size={20} />
            </button>

            <input
              placeholder="Ask your mentor..."
              className="
              flex-1
              bg-transparent
              outline-none
              px-2
            "
            />

            <button
              className="
              h-11
              w-11
              rounded-full
              bg-surface-container-high
              flex
              items-center
              justify-center
            ">
              <Mic size={18} className="text-tertiary" />
            </button>

            <button
              className="
              h-11
              w-11
              rounded-full
              bg-primary
              text-on-primary
              flex
              items-center
              justify-center
            ">
              <ArrowUp size={18} />
            </button>
          </div>

          {/* Wave */}

          <div className="flex items-center justify-center gap-1 h-4 mt-3 opacity-40">
            <div
              className="waveform-bar w-0.5 bg-primary rounded-full"
              style={{ animationDelay: "0s", height: 4 }}
            />
            <div
              className="waveform-bar w-0.5 bg-tertiary rounded-full"
              style={{ animationDelay: "0.1s", height: 6 }}
            />
            <div
              className="waveform-bar w-0.5 bg-white rounded-full"
              style={{ animation: "none", height: 10 }}
            />
            <div
              className="waveform-bar w-0.5 bg-tertiary rounded-full"
              style={{ animationDelay: "0.3s", height: 6 }}
            />
            <div
              className="waveform-bar w-0.5 bg-primary rounded-full"
              style={{ animationDelay: "0.4s", height: 4 }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
    </div>
  );
}
