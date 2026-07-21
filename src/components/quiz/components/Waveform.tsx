"use client";

import { cn } from "@/lib/utils";

interface WaveformProps {
  bars?: number;
  height?: number;
  animated?: boolean;
  color?: string;
  className?: string;
}

export default function Waveform({
  bars = 7,
  height = 18,
  animated = true,
  color = "bg-primary",
  className,
}: WaveformProps) {
  return (
    <div
      className={cn("flex items-end justify-center gap-1", className)}
      style={{ height }}>
      {Array.from({ length: bars }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "w-[3px] rounded-full",
            color,
            animated && "animate-pulse",
          )}
          style={{
            height: `${6 + (index % 4) * 4}px`,
            animationDelay: `${index * 0.08}s`,
            animationDuration: "1.2s",
          }}
        />
      ))}
    </div>
  );
}
