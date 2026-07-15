"use client";

import { CheckCircle } from "lucide-react";

interface TargetScoreCardProps {
  score: string;
  title: string;
  desc: string;
  selected: boolean;
  onClick: () => void;
}

export default function TargetScoreCard({
  score,
  title,
  selected,
  onClick,
  desc,
}: TargetScoreCardProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`
        glass-panel p-4 rounded-xl text-left border-white/5 hover:border-primary/50 transition-all hover:scale-[1.02] border-primary bg-primary/10 ring-1 ring-primary/30 text-primary

        ${selected ? "selected-card" : ""}
      `}>
        <div className="text-xl font-bold">{score}</div>
        <div className="text-[10px] uppercase text-primary">{title}</div>
        <div className="mt-2 text-[10px] text-on-surface-variant">{desc}</div>
      </button>
    </>
  );
}
