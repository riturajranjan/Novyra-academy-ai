"use client";

import type { PointerEvent } from "react";
import { Check } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { hexToRgba, type AdvisorAccent } from "@/lib/advisor-accent";
import type { AdvisorOption } from "@/content/solution-advisor";

interface DecisionNodeProps {
  option: AdvisorOption;
  accent: AdvisorAccent;
  isSelected: boolean;
  onSelect: (id: string) => void;
  /** Percent position within the canvas — only applied once `position:
   * absolute` activates at 1100px; ignored by the browser at the tablet
   * grid, where the node is a plain grid cell. */
  top: number;
  left: number;
  floatDelay?: number;
  /** Notifies the parent canvas so the center hub and this node's connector
   * can react together, even though they live in different layers. */
  onHoverChange?: (hovering: boolean) => void;
}

/** A single orbital decision node for Step 1 — icon in a rounded shape,
 * gentle idle float, a cursor-tracked spotlight (mouse only, never touch),
 * and a small inward nudge (plus a slight rotation toward center) when
 * hovered. Selected state stays mostly dark glass with the accent only as
 * a thin gradient border, an inner glow, and icon emphasis — never a solid
 * accent fill. Every category carries its own accent color. */
export function DecisionNode({
  option,
  accent,
  isSelected,
  onSelect,
  top,
  left,
  floatDelay = 0,
  onHoverChange,
}: DecisionNodeProps) {
  const reduceMotion = useReducedMotion();
  const Icon = option.icon;
  const angle = Math.atan2(top - 50, left - 50);
  const rotateToward = Math.max(-6, Math.min(6, -Math.sin(angle) * 6));
  const nudge = isSelected ? 6 : 0;
  const nudgeX = Math.cos(angle) * -nudge;
  const nudgeY = Math.sin(angle) * -nudge;

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);
  const spotlightBackground = useMotionTemplate`radial-gradient(180px circle at ${spotlightX}% ${spotlightY}%, ${hexToRgba(accent.base, 0.22)}, transparent 70%)`;

  function handlePointerMove(e: PointerEvent<HTMLButtonElement>) {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotlightY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <div
      style={{ top: `${top}%`, left: `${left}%` }}
      className="min-[1100px]:absolute min-[1100px]:-translate-x-1/2 min-[1100px]:-translate-y-1/2"
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={reduceMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
        className="relative"
      >
        {isSelected && !reduceMotion ? (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -inset-[1.5px] rounded-2xl"
            style={{
              background: `conic-gradient(from 0deg, ${accent.base} 0%, rgba(255,255,255,0.35) 50%, ${accent.base} 100%)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        ) : null}
        <motion.button
          type="button"
          role="radio"
          aria-checked={isSelected}
          aria-label={`${option.label} — ${option.description}`}
          onClick={() => onSelect(option.id)}
          onHoverStart={() => onHoverChange?.(true)}
          onHoverEnd={() => onHoverChange?.(false)}
          onPointerMove={handlePointerMove}
          animate={{
            x: nudgeX,
            y: nudgeY,
            scale: isSelected ? 1.06 : 1,
            rotate: 0,
            backgroundColor: isSelected ? hexToRgba(accent.base, 0.12) : "rgba(0,0,0,0)",
          }}
          whileHover={
            reduceMotion
              ? undefined
              : isSelected
                ? { y: -4, scale: 1.015, backgroundColor: hexToRgba(accent.base, 0.16) }
                : { y: nudgeY - 8, scale: 1.03, rotate: rotateToward, backgroundColor: "rgba(0,0,0,0)" }
          }
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{
            ["--dn-hover-border" as string]: hexToRgba(accent.base, 0.5),
            ["--dn-hover-glow" as string]: hexToRgba(accent.base, 0.4),
            ["--dn-ring" as string]: accent.base,
            borderColor: isSelected ? "transparent" : undefined,
            backgroundImage: isSelected ? undefined : "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
            boxShadow: isSelected
              ? `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 40px ${hexToRgba(accent.base, 0.18)}`
              : "inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
          className={cn(
            "group relative flex min-h-50 w-full flex-col items-center rounded-2xl border p-6 text-center backdrop-blur-[36px] backdrop-saturate-[1.6] transition-[box-shadow,border-color] duration-base",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--dn-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060f]",
            "min-[1100px]:w-[180px] xl:w-[200px]",
            !isSelected && "border-white/10 hover:border-[color:var(--dn-hover-border)] hover:shadow-[0_0_24px_-8px_var(--dn-hover-glow)]",
          )}
        >
          {/* cursor spotlight */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: spotlightBackground }}
          />
          {/* top reflection */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/10 to-transparent"
          />
          {isSelected ? (
            <motion.span
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white backdrop-blur-sm"
              style={{
                backgroundImage: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                boxShadow: `0 2px 8px -2px ${hexToRgba(accent.base, 0.6)}`,
              }}
              aria-hidden
            >
              <Check className="h-4 w-4" />
            </motion.span>
          ) : null}
          {isSelected && !reduceMotion ? (
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-2xl"
              style={{ boxShadow: `0 0 0 1px ${hexToRgba(accent.base, 0.5)}` }}
              initial={{ opacity: 0.7, scale: 1 }}
              animate={{ opacity: 0, scale: 1.15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          ) : null}
          <span
            className="relative flex h-8 w-8 items-center justify-center rounded-full transition-[background-color,box-shadow] duration-base group-hover:scale-110"
            style={{
              backgroundColor: hexToRgba(accent.base, isSelected ? 0.18 : 0.08),
              boxShadow: isSelected ? `0 0 35px ${hexToRgba(accent.base, 0.45)}` : undefined,
            }}
          >
            <Icon
              className="h-3.5 w-3.5 transition-colors duration-base"
              style={{ color: isSelected ? accent.base : "rgba(255,255,255,0.7)" }}
              aria-hidden
            />
          </span>
          <span className="text-caption mt-5 font-semibold text-white">{option.label}</span>
          <span
            className="text-caption my-2 line-clamp-2"
            style={{ color: isSelected ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.45)" }}
          >
            {option.description}
          </span>
          {option.badge ? (
            <span
              className="mt-auto rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase"
              style={{
                borderColor: hexToRgba(accent.base, 0.35),
                color: isSelected ? accent.base : "rgba(255,255,255,0.55)",
                boxShadow: isSelected ? `0 0 12px -4px ${hexToRgba(accent.base, 0.4)}` : undefined,
              }}
            >
              {option.badge}
            </span>
          ) : null}
        </motion.button>
      </motion.div>
    </div>
  );
}
