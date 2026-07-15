"use client";

import Image from "next/image";
import clsx from "clsx";
import { Sparkles } from "lucide-react";

interface AIRecommendationProps {
  selectedSubjects: string[];
}

export default function AIRecommendation({
  selectedSubjects,
}: AIRecommendationProps) {
  const hasSubjects = selectedSubjects.length > 0;

  return (
    <div
      className={clsx(
        `
       glass-panel rounded-2xl p-stack-md border-primary/20 relative overflow-hidden transition-all duration-500
        `,
        hasSubjects
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none",
      )}
      id="ai-preview">
      <div className="ai-shimmer absolute inset-0 pointer-events-none" />
      <div className="relative z-10 flex gap-stack-md">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-primary text-[24px]">
            auto_awesome
          </span>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-1">Excellent Choice!</h4>
          <p
            className="text-on-surface-variant text-label-md leading-relaxed"
            id="preview-text">
            Excellent Choice! You&apos;ve selected{" "}
            <span className="text-primary font-bold">
              {selectedSubjects.join(", ")}
            </span>{" "}
            . Dr. Nova will create Personalized AI Lessons and Voice Learning
            modules for your path.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="bg-surface-variant/40 rounded-lg p-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">
                mic
              </span>
              <span className=" text-[11px]">Voice Learning Ready</span>
            </div>
            <div className="bg-surface-variant/40 rounded-lg p-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-[18px]">
                psychology
              </span>
              <span className=" text-[11px]">Personalized AI Lessons</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
