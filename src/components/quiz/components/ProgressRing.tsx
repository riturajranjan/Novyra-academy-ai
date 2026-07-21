"use client";

import { cn } from "@/lib/utils";

interface ProgressRingProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  showLabel?: boolean;
  className?: string;
  color?: "primary" | "tertiary" | "success";
}

export default function ProgressRing({
  value,
  size = 52,
  strokeWidth = 4,
  label,
  showLabel = true,
  className,
  color = "primary",
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (value / 100) * circumference;

  const colors = {
    primary: "stroke-primary",
    tertiary: "stroke-tertiary",
    success: "stroke-emerald-400",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className,
      )}
      style={{
        width: size,
        height: size,
      }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-surface-container-highest"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn(colors[color], "transition-all duration-500")}
        />
      </svg>

      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[11px] font-semibold">
            {label ?? `${value}%`}
          </span>
        </div>
      )}
    </div>
  );
}
