"use client";

import { TrendingUp } from "lucide-react";

interface PredictionCardProps {
  score?: number;
}

export default function PredictionCard({ score = 95 }: PredictionCardProps) {
  const radius = 58;
  const stroke = 8;

  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="glass-panel rounded-xl p-stack-lg flex flex-col items-center justify-center text-center">
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="text-white/5"
            cx={64}
            cy={64}
            fill="transparent"
            r={58}
            stroke="currentColor"
            strokeWidth={8}
          />
          <circle
            className="text-tertiary"
            cx={64}
            cy={64}
            fill="transparent"
            r={58}
            stroke="currentColor"
            strokeDasharray={364}
            strokeDashoffset={18}
            strokeWidth={8}
            style={{
              strokeDasharray: "364.425, 364.425",
              strokeDashoffset: "18.2212",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-headline-md font-bold">{score}%</span>
          <span className="text-[10px] text-on-surface-variant uppercase">
            Predicted
          </span>
        </div>
      </div>
      <p className="text-label-md font-bold text-on-surface">94% Confidence</p>
      <p className="text-mono-sm text-on-surface-variant mt-2">
        AI Analysis Score
      </p>
    </div>
  );
}
