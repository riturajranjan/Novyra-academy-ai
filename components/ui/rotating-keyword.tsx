"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";

const words = ["businesses", "hospitals", "schools", "startups", "growing companies", "healthcare", "education"];
const INTERVAL_MS = 2600;

/** Single rotating headline keyword — cycles through Novyra's core verticals
 * with a blur/fade/slide transition. Sized via an invisible widest-word
 * sizer stacked in the same grid cell so the sentence never reflows. The
 * full word list is exposed to screen readers as static text; the animated
 * span itself is aria-hidden to avoid rapid re-announcements. */
export function RotatingKeyword() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <span className="relative inline-grid align-baseline text-left">
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        growing companies
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          aria-hidden
          className="text-gradient-brand animated-gradient-text col-start-1 row-start-1"
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: easePremium }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">businesses, hospitals, schools, startups, growing companies, healthcare, and education</span>
    </span>
  );
}
