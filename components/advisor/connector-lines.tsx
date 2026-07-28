"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getNeedAccent } from "@/lib/advisor-accent";
import { NODE_POSITIONS } from "@/lib/advisor-layout";
import type { AdvisorOption } from "@/content/solution-advisor";

interface ConnectorLinesProps {
  options: AdvisorOption[];
  selectedId?: string;
  hoveredId?: string | null;
  width: number;
  height: number;
}

/** Keeps the line off the center hub and off the card so nothing draws
 * through text — measured in pixels, not percent, since the hub/card sizes
 * are fixed regardless of canvas width. Matches the requested 20px gap to
 * the hub (170px hub radius + 20px) and 16px gap to each card (~75px card
 * half-width + 16px). */
const START_CLEARANCE = 190;
const END_CLEARANCE = 116;
/** Slight bezier bow — alternates side per node index for an organic but
 * still clean, geometric feel. */
const CURVE_AMOUNT = 16;

/** One SVG layer behind the hub and nodes — a single accent-colored
 * connector from the center to every service node. At rest every line sits
 * at a low, even opacity; hovering or selecting a node brightens its own
 * line with a glow and a traveling light, and gently fades every other
 * line so the active relationship reads clearly. */
export function ConnectorLines({ options, selectedId, hoveredId, width, height }: ConnectorLinesProps) {
  const reduceMotion = useReducedMotion();
  if (!width || !height) return null;

  const cx = width / 2;
  const cy = height / 2;
  const anyActive = Boolean(selectedId || hoveredId);

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-visible"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        {options.map((option) => {
          const accent = getNeedAccent(option.id);
          return (
            <linearGradient key={option.id} id={`advisor-connector-${option.id}`} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={accent.from} />
              <stop offset="100%" stopColor={accent.to} />
            </linearGradient>
          );
        })}
      </defs>

      {options.map((option, i) => {
        const pos = NODE_POSITIONS[option.id] ?? { top: 50, left: 50 };
        const nx = (pos.left / 100) * width;
        const ny = (pos.top / 100) * height;
        const dx = nx - cx;
        const dy = ny - cy;
        const dist = Math.max(Math.hypot(dx, dy), 1);
        const ux = dx / dist;
        const uy = dy / dist;

        const start = { x: cx + ux * START_CLEARANCE, y: cy + uy * START_CLEARANCE };
        const end = { x: nx - ux * END_CLEARANCE, y: ny - uy * END_CLEARANCE };
        const mid = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };
        const curve = (i % 2 === 0 ? 1 : -1) * CURVE_AMOUNT;
        const control = { x: mid.x + -uy * curve, y: mid.y + ux * curve };
        const d = `M ${start.x} ${start.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`;

        const accent = getNeedAccent(option.id);
        const isActive = option.id === selectedId || option.id === hoveredId;
        const restOpacity = anyActive && !isActive ? 0.08 : 0.2;
        const drawTransition = { duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : i * 0.05, ease: "easeOut" as const };

        return (
          <g key={option.id}>
            {isActive ? (
              <motion.path
                d={d}
                fill="none"
                stroke={accent.base}
                strokeLinecap="round"
                strokeWidth={6}
                style={{ filter: "blur(6px)" }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.35 }}
                transition={drawTransition}
              />
            ) : null}
            <motion.path
              d={d}
              fill="none"
              stroke={`url(#advisor-connector-${option.id})`}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: isActive ? 0.9 : restOpacity, strokeWidth: isActive ? 2 : 1 }}
              animate={{ pathLength: 1, opacity: isActive ? 0.9 : restOpacity, strokeWidth: isActive ? 2 : 1 }}
              transition={{
                pathLength: drawTransition,
                opacity: { duration: 0.3, ease: "easeOut" },
                strokeWidth: { duration: 0.3, ease: "easeOut" },
              }}
            />
            <motion.circle
              cx={end.x}
              cy={end.y}
              r={isActive ? 3 : 2}
              fill={accent.base}
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 0.95 : anyActive ? 0.15 : 0.35 }}
              transition={{ duration: 0.3 }}
            />
            {isActive && !reduceMotion ? (
              <circle r={2.5} fill="#ffffff">
                <animateMotion dur="1.4s" repeatCount="indefinite" path={d} />
              </circle>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
