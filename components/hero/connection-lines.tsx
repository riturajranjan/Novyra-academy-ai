"use client";

import { motion } from "framer-motion";
import { panelAnchors, sceneCenter } from "@/content/hero-scene-layout";

const paths = Object.values(panelAnchors);

/** Glowing animated lines suggesting live data flowing between panels and the
 * central browser — purely decorative. */
export function ConnectionLines() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <filter id="hero-line-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {paths.map((p, i) => (
        <motion.line
          key={i}
          x1={p.point.x}
          y1={p.point.y}
          x2={sceneCenter.x}
          y2={sceneCenter.y}
          stroke="var(--color-brand-cyan)"
          strokeWidth="0.25"
          strokeDasharray="2 3"
          filter="url(#hero-line-glow)"
          initial={{ strokeOpacity: 0.15 }}
          animate={{ strokeDashoffset: [0, -20], strokeOpacity: [0.15, 0.4, 0.15] }}
          transition={{
            strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear" },
            strokeOpacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
          }}
        />
      ))}
    </svg>
  );
}
