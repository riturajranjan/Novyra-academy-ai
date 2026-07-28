"use client";

import { ArrowRight, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import { ConceptPreview } from "@/components/case-studies/concept-preview";
import { buttonVariants } from "@/components/ui/button";
import { RippleLink } from "@/components/ui/ripple-link";
import type { ConceptBuild } from "@/content/case-studies";
import { accentStroke, accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FeaturedConceptProps {
  build: ConceptBuild;
}

/** The large featured concept — a split glass hero card. Framed honestly
 * throughout as a concept exploration, not a completed client engagement:
 * no claimed live demo, no invented outcome metrics. */
export function FeaturedConcept({ build }: FeaturedConceptProps) {
  const Icon = build.icon;
  const stroke = accentStroke[build.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: easePremium }}
      className="glass-strong shadow-card relative overflow-hidden rounded-[36px]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-24 -z-10 rounded-full blur-3xl"
        style={{ backgroundColor: accentTint(build.accent, 16) }}
      />

      <div className="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-stretch lg:gap-10">
        <div className="min-h-[280px] lg:min-h-[420px]">
          <ConceptPreview accent={build.accent} />
        </div>

        <div className="flex flex-col justify-center gap-6">
          <span
            className="text-caption inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 font-semibold tracking-wide uppercase"
            style={{ borderColor: accentTint(build.accent, 35), color: stroke, backgroundColor: accentTint(build.accent, 12) }}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden />
            {build.industryLabel} · Concept
          </span>

          <div className="flex flex-col gap-3">
            <h3 className="text-headline text-foreground font-semibold text-balance">{build.title}</h3>
            <p className="text-body-sm sm:text-body text-foreground-secondary text-pretty">{build.description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-caption text-foreground-secondary font-semibold tracking-wide uppercase">Build Highlights</p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {build.highlights.map((item) => (
                <li key={item} className="text-body-sm text-foreground-secondary flex items-start gap-2">
                  <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: stroke }} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-border-subtle flex flex-wrap items-center gap-4 border-t pt-4">
            <div className="flex flex-wrap gap-1.5">
              {build.techStack.map((tech) => (
                <span key={tech} className="border-border-subtle text-caption text-foreground-secondary rounded-full border px-2.5 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <span className="text-caption text-foreground-secondary ml-auto font-medium">Est. {build.timeline}</span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <RippleLink href="/contact" className={cn(buttonVariants({ variant: "gradient", size: "md" }), "group flex-1")}>
              Start a Similar Project
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-fast group-hover:translate-x-0.5" aria-hidden />
            </RippleLink>
            <RippleLink href="/services" className={cn(buttonVariants({ variant: "outline", size: "md" }), "flex-1")}>
              See the Full Approach
            </RippleLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
