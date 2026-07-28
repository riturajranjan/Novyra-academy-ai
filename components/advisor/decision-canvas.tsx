"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ConnectorLines } from "@/components/advisor/connector-lines";
import { DecisionNode } from "@/components/advisor/decision-node";
import { getNeedAccent, hexToRgba } from "@/lib/advisor-accent";
import { NODE_POSITIONS } from "@/lib/advisor-layout";
import type { AdvisorOption } from "@/content/solution-advisor";

const HUB_RING_GRADIENT = "conic-gradient(from 0deg, #3B82F6, #06B6D4, #8B5CF6, #EC4899, #F59E0B, #10B981, #3B82F6)";

const hubParticles = [
  { top: "-6%", left: "50%", delay: 0 },
  { top: "50%", left: "104%", delay: 0.6 },
  { top: "104%", left: "50%", delay: 1.2 },
  { top: "50%", left: "-4%", delay: 1.8 },
];

interface DecisionCanvasProps {
  options: AdvisorOption[];
  question: string;
  hint: string;
  selectedId?: string;
  onSelect: (id: string) => void;
}

/** Step 1's desktop/tablet widget. Below 1100px this is a plain two-column
 * grid of nodes with the question in normal flow above it — no absolute
 * positioning, no connectors (a cramped tablet grid reads better without
 * them). At 1100px+ the question becomes an AI hub — a frosted glass
 * sphere with a rotating gradient ring, a breathing glow, and a few
 * floating particles — centered in a compact, reserved-height orbital
 * area. Nodes sit at fixed percentage positions, and a single SVG layer
 * draws one accent-colored connector from the hub to every node.
 * Hovering any node brightens the hub, speeds the ring, swaps in a live
 * preview of that option's description, and dims every other connector.
 * Mobile uses the shared compact row list instead, rendered by the
 * caller. */
export function DecisionCanvas({ options, question, hint, selectedId, onSelect }: DecisionCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const selectedAccent = selectedId ? getNeedAccent(selectedId) : undefined;
  const hoveredAccent = hoveredId ? getNeedAccent(hoveredId) : undefined;
  const activeAccent = hoveredAccent ?? selectedAccent;
  const hoveredOption = options.find((o) => o.id === hoveredId);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={canvasRef}
      className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-6 min-[1100px]:min-h-[1000px]"
    >
      <div className="pointer-events-none absolute inset-0 hidden min-[1100px]:block">
        <ConnectorLines options={options} selectedId={selectedId} hoveredId={hoveredId} width={size.width} height={size.height} />
      </div>

      <div className="relative flex max-w-xs flex-col items-center gap-1.5 text-center min-[1100px]:absolute min-[1100px]:top-1/2 min-[1100px]:left-1/2 min-[1100px]:h-[320px] min-[1100px]:w-[320px] min-[1100px]:max-w-none min-[1100px]:-translate-x-1/2 min-[1100px]:-translate-y-1/2 min-[1100px]:justify-center xl:h-[340px] xl:w-[340px]">
        {/* rotating gradient ring */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -inset-3 hidden rounded-full min-[1100px]:block"
          style={{
            backgroundImage: HUB_RING_GRADIENT,
            WebkitMask: "radial-gradient(closest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
            mask: "radial-gradient(closest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
            opacity: activeAccent ? 0.9 : 0.4,
          }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: activeAccent ? 7 : 16, repeat: Infinity, ease: "linear" }}
        />
        {/* middle glass ring */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-1 hidden rounded-full border border-white/10 backdrop-blur-md min-[1100px]:block"
        />
        {/* breathing ambient glow */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -inset-8 hidden rounded-full blur-2xl min-[1100px]:block"
          style={{ backgroundColor: activeAccent ? hexToRgba(activeAccent.base, 0.5) : "rgba(255,255,255,0.1)" }}
          animate={
            reduceMotion
              ? undefined
              : { scale: [1, 1.06, 1], opacity: activeAccent ? [0.55, 0.85, 0.55] : [0.25, 0.4, 0.25] }
          }
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* floating particles */}
        {!reduceMotion
          ? hubParticles.map((p, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="pointer-events-none absolute hidden h-1 w-1 rounded-full bg-white/60 min-[1100px]:block"
                style={{ top: p.top, left: p.left }}
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
              />
            ))
          : null}

        {/* glass hub */}
        <div
          className="relative flex h-full w-full flex-col items-center justify-center gap-1.5 rounded-full border px-5 backdrop-blur-[26px] backdrop-saturate-[1.6] transition-colors duration-300 min-[1100px]:border-white/10 min-[1100px]:bg-white/[0.04]"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 0 40px -12px rgba(255,255,255,0.15)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-4 top-2 h-1/3 rounded-full bg-gradient-to-b from-white/10 to-transparent"
          />
          <Sparkles
            className="hidden h-4 w-4 transition-colors duration-300 min-[1100px]:block"
            style={{ color: activeAccent ? activeAccent.base : "rgba(255,255,255,0.5)" }}
            aria-hidden
          />
          <p className="text-title font-semibold text-balance text-white">{question}</p>
          <p className="text-caption hidden max-w-[15rem] text-white/50 min-[1100px]:block">
            {hoveredOption ? hoveredOption.description : hint}
          </p>
        </div>
      </div>

      <div role="radiogroup" aria-label={question} className="grid w-full grid-cols-2 gap-3 min-[1100px]:contents">
        {options.map((option, i) => {
          const pos = NODE_POSITIONS[option.id] ?? { top: 50, left: 50 };
          return (
            <DecisionNode
              key={option.id}
              option={option}
              accent={getNeedAccent(option.id)}
              isSelected={option.id === selectedId}
              onSelect={onSelect}
              onHoverChange={(hovering) => setHoveredId((current) => (hovering ? option.id : current === option.id ? null : current))}
              top={pos.top}
              left={pos.left}
              floatDelay={i * 0.3}
            />
          );
        })}
      </div>
    </div>
  );
}
