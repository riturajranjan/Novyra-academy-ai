"use client";

import { cn } from "@/lib/utils";
import { Flag } from "lucide-react";

export type QuestionCircleStatus =
  | "unvisited"
  | "visited"
  | "answered"
  | "flagged"
  | "current";

interface QuestionCircleProps {
  number: number;
  status?: QuestionCircleStatus;
  onClick?: () => void;
  className?: string;
}

const variants: Record<QuestionCircleStatus, string> = {
  unvisited:
    "border-outline-variant bg-surface-container text-on-surface/60 hover:bg-surface-container-high",

  visited: "border-outline bg-surface-container-high text-on-surface",

  answered: "border-emerald-500 bg-emerald-500 text-white",

  flagged: "border-amber-500 bg-amber-500 text-black",

  current:
    "border-primary bg-primary text-primary-foreground ring-4 ring-primary/20",
};

export default function QuestionCircle({
  number,
  status = "unvisited",
  onClick,
  className,
}: QuestionCircleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Question ${number}`}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-200",
        "hover:scale-105 active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        variants[status],
        className,
      )}>
      {status === "flagged" ? (
        <Flag className="h-4 w-4 fill-current" />
      ) : (
        number
      )}

      {status === "current" && (
        <span className="absolute -bottom-1 h-2 w-2 rounded-full bg-primary" />
      )}
    </button>
  );
}
