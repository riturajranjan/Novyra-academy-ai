"use client";

import { CheckCircle } from "lucide-react";
import { DailyGoal } from "@/types/goal-selection";

interface DailyGoalCardProps {
  item: DailyGoal;
  selected: boolean;
  onClick: () => void;
}

export default function DailyGoalCard({
  item,
  selected,
  onClick,
}: DailyGoalCardProps) {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      className={`
        group
        relative
        rounded-2xl
        border
        p-5
        text-left
        transition-all
        duration-300

        ${
          selected
            ? "border-[#8083FF] bg-[#1C2542]"
            : "border-white/10 bg-[#151D31] hover:border-[#8083FF]/40"
        }
      `}>
      {/* Selected Check */}

      {selected && (
        <CheckCircle
          size={18}
          className="absolute right-4 top-4 text-[#C0C1FF]"
        />
      )}

      {/* Icon */}

      <div
        className={`
          mb-4
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl

          ${
            selected
              ? "bg-[#8083FF]/20 text-[#C0C1FF]"
              : "bg-[#222A3D] text-[#9CA3AF]"
          }
        `}>
        <Icon size={22} />
      </div>

      {/* Title */}

      <h3 className="text-lg font-semibold text-white">{item.title}</h3>

      {/* Subtitle */}

      <p className="mt-1 text-sm text-[#9CA3AF]">{item.duration}</p>
    </button>
  );
}
