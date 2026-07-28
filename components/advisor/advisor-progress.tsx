"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdvisorProgressProps {
  steps: string[];
  currentStep: number;
}

export function AdvisorProgress({ steps, currentStep }: AdvisorProgressProps) {
  return (
    <ol className="flex w-full max-w-md items-center" aria-label="Advisor progress">
      {steps.map((label, i) => {
        const isComplete = i < currentStep;
        const isActive = i === currentStep;
        return (
          <li key={label} className={cn("flex items-center", i < steps.length - 1 && "flex-1")}>
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-caption font-semibold transition-colors duration-fast",
                  isComplete && "bg-brand-blue text-white",
                  isActive && !isComplete && "border-brand-blue text-brand-blue border-2",
                  !isComplete && !isActive && "border-border-subtle text-foreground-secondary border-2",
                )}
              >
                {isComplete ? <Check className="h-3.5 w-3.5" aria-hidden /> : i + 1}
              </span>
              <span className="text-caption text-foreground-secondary hidden whitespace-nowrap sm:block">{label}</span>
            </div>
            {i < steps.length - 1 ? (
              <span className="bg-border-subtle relative mx-2 h-0.5 flex-1 overflow-hidden rounded-full">
                <motion.span
                  className="bg-brand-blue absolute inset-y-0 left-0"
                  initial={false}
                  animate={{ width: isComplete ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
