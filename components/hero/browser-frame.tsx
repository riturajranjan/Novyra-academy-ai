"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { HeroScreen } from "@/content/hero-screens";
import { accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import { MockScreen } from "@/components/hero/mock-screen";

interface BrowserFrameProps {
  /** Controlled by the parent scene so hovering a product preview card can
   * jump the browser to that exact product, pausing the auto-cycle. */
  screen: HeroScreen;
}

export function BrowserFrame({ screen }: BrowserFrameProps) {
  const Icon = screen.icon;

  return (
    <div className="relative w-full max-w-2xl">
      {/* Soft volumetric light source behind the glass — recolors with the
          screen's accent so the whole scene feels alive, not just the frame.
          Restrained size/opacity so it reads as ambient depth, not glow. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[3.5rem] blur-3xl sm:-inset-16"
        animate={{ backgroundColor: accentTint(screen.accent, 24) }}
        transition={{ duration: 1.2, ease: easePremium }}
      />
      <motion.div
        className="glass-strong shadow-card relative overflow-hidden rounded-2xl"
        whileHover={{ scale: 1.015, rotate: -0.3 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
      >
        {/* Static specular highlight — a fixed glass "catch light" in the
            corner, distinct from the periodic shimmer sweep below. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-70 dark:opacity-40"
          style={{ background: "radial-gradient(120% 60% at 15% 0%, rgba(255,255,255,0.35), transparent 55%)" }}
        />

        {/* Moving light reflection sweeping across the glass surface. */}
        <div
          aria-hidden
          className="bg-gradient-shimmer animate-shimmer pointer-events-none absolute inset-0 z-20 opacity-50 dark:opacity-40"
          style={{ animationDuration: "5s" }}
        />

        <div className="border-border-subtle flex items-center gap-2 border-b px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-pink/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-blue/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-emerald/70" />
          <div
            className="ml-3 flex h-6 flex-1 items-center gap-2 rounded-md px-2.5"
            style={{ backgroundColor: accentTint(screen.accent, 10) }}
          >
            <Icon
              className="h-3.5 w-3.5 shrink-0"
              style={{ color: accentTint(screen.accent, 90) }}
              aria-hidden
            />
            <span
              className="h-1.5 w-24 rounded-full"
              style={{ backgroundColor: accentTint(screen.accent, 20) }}
            />
          </div>
        </div>
        <div className="relative h-72 sm:h-80 lg:h-[22rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.5, ease: easePremium }}
              className="absolute inset-0"
            >
              <MockScreen layout={screen.layout} accent={screen.accent} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
