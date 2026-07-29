"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { ProcessCard } from "@/components/process/process-card";
import { ProcessDot } from "@/components/process/process-dot";
import { accentStroke, accentTint } from "@/lib/accent";
import { processSteps, type ProcessStep } from "@/content/process-steps";

/** Column pairs — each of the three wide columns holds one top step and one
 * bottom step, in sequence order (01/02 in column 1, 03/04 in column 2,
 * 05/06 in column 3). */
const columns: { top: ProcessStep; bottom: ProcessStep }[] = [
  { top: processSteps[0], bottom: processSteps[1] },
  { top: processSteps[2], bottom: processSteps[3] },
  { top: processSteps[4], bottom: processSteps[5] },
];

/** Short accent-colored tick bridging a card to the rail below/above it —
 * brightens in sync with the card and its rail node while hovered. */
function CardConnector({ step, isActive }: { step: ProcessStep; isActive: boolean }) {
  const stroke = accentStroke[step.accent];
  return (
    <motion.span
      aria-hidden
      className="h-8 w-px shrink-0"
      animate={{ backgroundColor: stroke, boxShadow: isActive ? `0 0 10px 1px ${accentTint(step.accent, 60)}` : "0 0 0 0 transparent" }}
      transition={{ duration: 0.3 }}
    />
  );
}

/** The process section's own layout — three wide glass columns (each
 * holding one top step and one bottom step) around a central SVG rail on
 * desktop, a simple two-column card grid on tablet, and a vertical
 * left-connector spine on mobile. Every breakpoint gate below uses the
 * same arbitrary `min-[]` variant family (never mixed with named
 * breakpoints) so Tailwind sorts them unambiguously and exactly one tier
 * is ever visible at a time. Hovering any card lights up its rail node and
 * connector, even though they live in separate grid rows. */
export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  function makeActiveHandler(id: string) {
    return (active: boolean) => setActiveId((current) => (active ? id : current === id ? null : current));
  }

  return (
    <div className="w-full">
      {/* Desktop (1200px+) — three wide columns around a central rail */}
      <div ref={containerRef} className="hidden min-[1200px]:block">
        <div className="mx-auto grid max-w-[1380px] grid-cols-3 items-end gap-7">
          {columns.map(({ top }) => (
            <div key={top.id} className="flex flex-col items-center gap-0">
              <ProcessCard step={top} from="above" className="max-w-none" onActiveChange={makeActiveHandler(top.id)} />
              <CardConnector step={top} isActive={activeId === top.id} />
            </div>
          ))}
        </div>

        <div className="relative mx-auto h-16 max-w-[1380px]">
          <svg
            aria-hidden
            viewBox="0 0 100 4"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-1/2 h-1 w-full -translate-y-1/2"
          >
            <defs>
              <linearGradient id="process-rail-gradient" x1="0" y1="0" x2="1" y2="0">
                {processSteps.map((step, i) => (
                  <stop key={step.id} offset={`${(i / (processSteps.length - 1)) * 100}%`} stopColor={accentStroke[step.accent]} />
                ))}
              </linearGradient>
              <linearGradient id="process-rail-pulse" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.9" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="2" x2="100" y2="2" stroke="var(--border-subtle)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <motion.line
              x1="0"
              y1="2"
              x2="100"
              y2="2"
              stroke="url(#process-rail-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: reduceMotion ? 1 : scrollYProgress }}
            />
            {!reduceMotion ? (
              <motion.rect
                y="0"
                width="18"
                height="4"
                fill="url(#process-rail-pulse)"
                animate={{ x: [-18, 100] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            ) : null}
          </svg>
          <div className="relative grid h-full grid-cols-6 items-center">
            {processSteps.map((step, i) => (
              <div key={step.id} className="flex justify-center">
                <ProcessDot
                  scrollYProgress={scrollYProgress}
                  threshold={i / (processSteps.length - 1)}
                  accent={step.accent}
                  reduceMotion={Boolean(reduceMotion)}
                  isActive={activeId === step.id}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-[1380px] grid-cols-3 items-start gap-7">
          {columns.map(({ bottom }) => (
            <div key={bottom.id} className="flex flex-col items-center gap-0">
              <CardConnector step={bottom} isActive={activeId === bottom.id} />
              <ProcessCard step={bottom} from="below" className="max-w-none" onActiveChange={makeActiveHandler(bottom.id)} />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet (768–1199px) — simple two-column grid, sequential order */}
      <div className="hidden min-[768px]:grid min-[768px]:grid-cols-2 min-[768px]:gap-5 min-[1200px]:hidden">
        {processSteps.map((step) => (
          <ProcessCard key={step.id} step={step} className="max-w-none" />
        ))}
      </div>

      {/* Mobile (<768px) — vertical timeline, connector on the left */}
      <ol aria-label="Our process" className="flex flex-col gap-5 min-[768px]:hidden">
        {processSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <li key={step.id} className="relative flex gap-4">
              {i < processSteps.length - 1 ? (
                <span className="bg-border-subtle absolute top-9 bottom-[-20px] left-[17px] w-px" aria-hidden />
              ) : null}
              <span
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2"
                style={{ borderColor: accentStroke[step.accent], backgroundColor: accentTint(step.accent, 14) }}
              >
                <Icon className="h-4 w-4" style={{ color: accentStroke[step.accent] }} aria-hidden />
              </span>
              <ProcessCard step={step} className="max-w-none" />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
