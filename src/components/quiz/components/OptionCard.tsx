"use client";

import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

interface OptionCardProps {
  label: string;
  text: string;

  selected?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  disabled?: boolean;

  onClick?: () => void;

  className?: string;
}

export default function OptionCard({
  label,
  text,
  selected = false,
  correct = false,
  incorrect = false,
  disabled = false,
  onClick,
  className,
}: OptionCardProps) {
  const variant = correct
    ? "border-emerald-500 bg-emerald-500/10"
    : incorrect
      ? "border-red-500 bg-red-500/10"
      : selected
        ? "border-primary text-on-primary bg-primary/10"
        : "border-outline-variant bg-surface-container";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group flex w-full mb-3 md:mb-auto items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200",
        " hover:bg-surface-container-high",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "disabled:pointer-events-none disabled:opacity-60",
        variant,
        className,
      )}>
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-colors",
          correct
            ? "border-emerald-500 bg-emerald-500 text-white"
            : incorrect
              ? "border-red-500 bg-red-500 text-white"
              : selected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-outline-variant bg-surface-container-high",
        )}>
        {label}
      </div>

      <div className="flex-1">
        <p className="text-sm leading-relaxed text-on-surface">{text}</p>
      </div>

      {correct && (
        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
      )}

      {incorrect && <XCircle className="h-5 w-5 shrink-0 text-red-500" />}
    </button>
  );
}
