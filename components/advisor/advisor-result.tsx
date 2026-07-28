"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, CircleCheck, Layers, RotateCcw, Wrench } from "lucide-react";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { AdvisorResult as AdvisorResultData } from "@/content/solution-advisor";
import { buttonVariants } from "@/components/ui/button";
import { RippleLink } from "@/components/ui/ripple-link";

interface AdvisorResultProps {
  result: AdvisorResultData;
  onRestart: () => void;
}

/** The recommendation card — service, technology, timeline, and deliverables
 * only. Deliberately no pricing: Novyra doesn't quote cost from a quiz. */
export function AdvisorResult({ result, onRestart }: AdvisorResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: easePremium }}
      className="glass-strong shadow-card mx-auto flex w-full max-w-2xl flex-col gap-8 rounded-3xl p-6 sm:p-10"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-gradient-brand text-caption font-semibold tracking-[0.14em] uppercase">
          Recommended For You
        </span>
        <h3 className="text-headline text-foreground font-semibold">{result.service}</h3>
        {result.focus ? (
          <p className="text-body-sm text-foreground-secondary max-w-md text-pretty">{result.focus}</p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <p className="text-caption text-foreground-secondary flex items-center gap-1.5 font-semibold tracking-wide uppercase">
            <Wrench className="text-brand-blue h-3.5 w-3.5" aria-hidden />
            Suggested Technology
          </p>
          <div className="flex flex-wrap gap-1.5">
            {result.technology.map((tech) => (
              <span key={tech} className="border-border-subtle text-body-sm text-foreground rounded-full border px-3 py-1">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-caption text-foreground-secondary flex items-center gap-1.5 font-semibold tracking-wide uppercase">
            <CalendarClock className="text-brand-blue h-3.5 w-3.5" aria-hidden />
            Estimated Timeline
          </p>
          <p className="text-body text-foreground font-medium">{result.timeline}</p>
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2">
          <p className="text-caption text-foreground-secondary flex items-center gap-1.5 font-semibold tracking-wide uppercase">
            <Layers className="text-brand-blue h-3.5 w-3.5" aria-hidden />
            Deliverables
          </p>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {result.deliverables.map((item) => (
              <li key={item} className="text-body-sm text-foreground-secondary flex items-start gap-2">
                <CircleCheck className="text-brand-blue mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-border-subtle flex flex-col-reverse items-center gap-4 border-t pt-6 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onRestart}
          className="text-caption text-foreground-secondary hover:text-foreground inline-flex items-center gap-1.5 font-medium transition-colors duration-fast"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden />
          Start Over
        </button>
        <RippleLink
          href="/contact"
          className={cn(buttonVariants({ variant: "gradient", size: "lg" }), "group w-full sm:w-auto")}
        >
          Book Free Consultation
          <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-0.5" aria-hidden />
        </RippleLink>
      </div>
    </motion.div>
  );
}
