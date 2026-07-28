"use client";

import { motion } from "framer-motion";
import type { AdvisorOption } from "@/content/solution-advisor";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AdvisorQuestionProps {
  question: string;
  options: AdvisorOption[];
  selectedId?: string;
  onSelect: (id: string) => void;
}

/** A single advisor question — a radio-group grid of premium option cards.
 * Selecting an option is the only interaction; the parent decides what
 * happens next (advance, re-answer, etc). */
export function AdvisorQuestion({ question, options, selectedId, onSelect }: AdvisorQuestionProps) {
  return (
    <div className="flex w-full flex-col items-center gap-6">
      <h3 className="text-title-lg text-foreground text-center font-semibold text-balance">{question}</h3>
      <motion.div
        role="radiogroup"
        aria-label={question}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4"
      >
        {options.map((option) => {
          const isSelected = option.id === selectedId;
          const Icon = option.icon;
          return (
            <motion.button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              variants={fadeInUp}
              onClick={() => onSelect(option.id)}
              className={cn(
                "glass border-border-subtle text-body-sm flex flex-col items-center gap-2.5 rounded-2xl border px-4 py-6 text-center font-medium transition-[border-color,background-color,transform] duration-fast ease-soft hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isSelected ? "border-brand-blue/60 bg-brand-blue/10 text-foreground" : "text-foreground-secondary",
              )}
            >
              <Icon className={cn("h-5 w-5", isSelected ? "text-brand-blue" : "text-foreground-secondary")} aria-hidden />
              {option.label}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
