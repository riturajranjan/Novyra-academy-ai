"use client";

import { motion } from "framer-motion";
import { accentStroke } from "@/lib/accent";
import type { AccentColor } from "@/content/hero-screens";

const path = "M0 40 C 15 30, 25 45, 40 32 S 65 10, 80 18 S 100 5, 120 12";

/** Smooth animated area/line chart — the "Analytics" product visual, distinct
 * from a plain bar chart. */
export function GraphCard({ accent }: { accent: AccentColor }) {
  const stroke = accentStroke[accent];
  const gradientId = `graph-card-fill-${accent}`;

  return (
    <svg viewBox="0 0 120 46" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={`${path} L120 46 L0 46 Z`}
        fill={`url(#${gradientId})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
    </svg>
  );
}
