"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { trustMetrics } from "@/content/contact-cta";
import { easePremium } from "@/lib/motion";

const NUMERIC_VALUE = /^(\d+)(.*)$/;

function AnimatedMetricValue({ value }: { value: string }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(NUMERIC_VALUE);
  const [display, setDisplay] = useState(match ? 0 : value);

  useEffect(() => {
    if (!match || !isInView) return;
    const target = parseInt(match[1], 10);
    const controls = animate(0, target, {
      duration: reduceMotion ? 0 : 1.4,
      ease: easePremium,
      onUpdate: (v) => setDisplay(`${Math.round(v)}${match[2]}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <span
      ref={ref}
      className={match ? "text-display-lg text-gradient-brand font-semibold" : "text-title-lg text-gradient-brand font-semibold text-balance"}
    >
      {display}
    </span>
  );
}

/** Animated premium counters — non-numeric values (like "Growing
 * Portfolio") simply fade in instead of counting, since not every honest
 * metric here is a number. */
export function TrustMetrics() {
  return (
    <div className="glass-strong shadow-card relative grid grid-cols-2 gap-6 overflow-hidden rounded-[28px] p-8 sm:grid-cols-5 sm:p-10">
      <div aria-hidden className="bg-brand-blue/8 pointer-events-none absolute -inset-20 -z-10 rounded-full blur-3xl" />
      {trustMetrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: i * 0.06, ease: easePremium }}
          className="flex flex-col items-center gap-1.5 text-center"
        >
          <AnimatedMetricValue value={metric.value} />
          <span className="text-caption text-foreground-secondary font-medium tracking-wide uppercase">{metric.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
