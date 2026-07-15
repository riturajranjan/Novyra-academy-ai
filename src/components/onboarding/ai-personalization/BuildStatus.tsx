"use client";

import { personalizationSteps } from "@/constants/personalization";
import { CheckCircle2, Loader2, Circle } from "lucide-react";

interface BuildStatusProps {
  progress?: number;
}

export default function BuildStatus({ progress = 87 }: BuildStatusProps) {
  return (
    <section
      className="
        rounded-3xl
        border
        border-white/5
        bg-[#131B2E]
        p-6
      ">
      {/* Header */}

      <h3
        className="
          mb-6
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
          text-[#B8C4FF]
        ">
        Live AI Build Status
      </h3>

      {/* Status List */}

      <div className="space-y-5">
        {personalizationSteps.map((step) => (
          <div key={step.id} className="flex items-center gap-3">
            {/* Icon */}

            {step.status === "completed" && (
              <CheckCircle2 size={20} className="text-[#8083FF]" />
            )}

            {step.status === "active" && (
              <Loader2 size={20} className="animate-spin text-[#4CD7F6]" />
            )}

            {step.status === "pending" && (
              <Circle size={18} className="text-[#5E6476]" />
            )}

            {/* Text */}

            <span
              className={`
                text-[15px]

                ${
                  step.status === "completed"
                    ? "text-white"
                    : step.status === "active"
                      ? "font-medium text-white"
                      : "text-[#7B8194]"
                }
              `}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {/* Progress */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-[#8083FF]/15
          bg-[#1A2238]
          p-4
        ">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-[#C0C1FF]">Progress</span>

          <span className="font-mono text-[#C0C1FF]">{progress}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#2A3148]">
          <div
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-[#8083FF]
              to-[#4CD7F6]
              transition-all
              duration-700
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
