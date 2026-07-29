"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import dashboardPreview from "@/public/hero2.png";

const IMAGE_SIZES = "(max-width: 1024px) 90vw, 720px";

const PARTICLES = [
  { top: "6%", left: "10%", size: 3, delay: 0 },
  { top: "72%", left: "4%", size: 2, delay: 1.2 },
  { top: "14%", left: "90%", size: 2, delay: 0.6 },
  { top: "82%", left: "92%", size: 3, delay: 1.8 },
  { top: "46%", left: "0%", size: 2, delay: 0.3 },
  { top: "52%", left: "98%", size: 2, delay: 2.2 },
];

const ORBIT_LIGHTS = [
  { color: "var(--color-brand-blue)", duration: 14, delay: 0 },
  { color: "var(--color-brand-pink)", duration: 18, delay: 3 },
];

/** The hero's centerpiece — the real, provided product-dashboard image,
 * used exactly as given (no redraw, no recreation). Every effect here
 * lives *around* the image (glows, rim light, a glass reflection echo,
 * shadow, particles, orbiting lights) — the `<Image>` itself only ever
 * gets a `drop-shadow` filter, never a recolor/crop/edit of its pixels. */
export function HeroImageShowcase() {
  const t = useTranslations("hero");
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex w-full max-w-[720px] items-center justify-center py-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-brand-blue absolute top-[8%] left-[4%] h-56 w-56 rounded-full opacity-30 blur-[90px]" />
        <div className="bg-brand-purple absolute top-[2%] right-[6%] h-64 w-64 rounded-full opacity-30 blur-[100px]" />
        <div className="bg-brand-pink absolute bottom-[6%] left-1/3 h-52 w-52 rounded-full opacity-[0.22] blur-[90px]" />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        {ORBIT_LIGHTS.map((light, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{
              duration: light.duration,
              repeat: Infinity,
              ease: "linear",
              delay: light.delay,
            }}>
            <span
              className="absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
              style={{
                backgroundColor: light.color,
                boxShadow: `0 0 14px 3px ${light.color}`,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="bg-brand-cyan absolute rounded-full"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={
              reduceMotion
                ? { opacity: 0.4 }
                : { opacity: [0, 0.8, 0], y: [0, -14, 0] }
            }
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 w-full"
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>
        <Image
          src={dashboardPreview}
          alt={t("imageAlt")}
          preload
          sizes={IMAGE_SIZES}
          placeholder="blur"
          className="h-auto w-full object-contain drop-shadow-[0_35px_70px_rgba(0,0,0,0.5)]"
        />

        {/* Glass-reflection echo — the same asset, flipped and faded beneath
            it, never a modification of the source file itself. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-full overflow-hidden">
          <Image
            src={dashboardPreview}
            alt=""
            sizes={IMAGE_SIZES}
            className="h-auto w-full translate-y-[-6%] scale-y-[-1] object-contain opacity-40 blur-[2px]"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 55%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 55%)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
