"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type HintVariant = "primary" | "secondary" | "success" | "warning";

interface HintButtonProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  cost?: number;
  variant?: HintVariant;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const variants: Record<HintVariant, string> = {
  primary: "border-primary/20 bg-primary/10 hover:bg-primary/15",

  secondary:
    "border-outline-variant bg-surface-container-high hover:bg-surface-container-highest",

  success: "border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/15",

  warning: "border-amber-500/20 bg-amber-500/10 hover:bg-amber-500/15",
};

export default function HintButton({
  title,
  description,
  icon,
  cost,
  variant = "primary",
  disabled = false,
  onClick,
  className,
}: HintButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-200",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}>
      <div className="flex items-start gap-3">
        {icon && (
          <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-background/40">
            {icon}
          </div>
        )}

        <div>
          <h4 className="text-sm font-semibold text-on-surface">{title}</h4>

          {description && (
            <p className="mt-1 text-xs text-on-surface/70">{description}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {typeof cost === "number" && (
          <span className="rounded-full bg-background/40 px-2.5 py-1 text-xs font-medium">
            {cost} XP
          </span>
        )}

        <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </button>
  );
}
