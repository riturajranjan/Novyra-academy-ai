"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BokehBackground } from "@/components/ui/bokeh-background";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { LightRays } from "@/components/ui/light-rays";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";
import { Particles } from "@/components/hero/particles";
import { ProductPreviewCard } from "@/components/hero/product-preview-card";
import { BrowserFrame } from "@/components/hero/browser-frame";
import { heroScreens } from "@/content/hero-screens";
import { heroProducts } from "@/content/hero-products";
import { panelAnchors } from "@/content/hero-scene-layout";

const CYCLE_MS = 4500;

/** Float/position tuning per product card — kept separate from content so the
 * layout can be retuned without touching product data. */
const productLayout: Record<string, { className: string; bob: number; duration: number; delay: number; z: number }> = {
  "hospital-erp": { className: "hidden h-24 w-40 sm:block", bob: 10, duration: 7, delay: 0, z: 20 },
  analytics: { className: "hidden h-24 w-36 sm:block", bob: 14, duration: 8.5, delay: 0.4, z: 60 },
  "ai-assistant": { className: "hidden h-36 w-20 md:block", bob: 13, duration: 8, delay: 1.6, z: 45 },
  crm: { className: "hidden h-32 w-24 md:block", bob: 12, duration: 7.2, delay: 0.8, z: 30 },
  "school-erp": { className: "hidden h-24 w-36 lg:block", bob: 9, duration: 6.5, delay: 1.2, z: 50 },
};

/**
 * The backdrop (mesh/aurora/bokeh/particles) and the foreground group are
 * kept as separate layers on purpose — a future cinematic background video
 * can slot in behind the foreground group without touching this layout.
 */
export function HeroScene() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredIndexRef = useRef<number | null>(null);
  useEffect(() => {
    hoveredIndexRef.current = hoveredIndex;
  }, [hoveredIndex]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      if (hoveredIndexRef.current !== null) return;
      setActiveIndex((i) => (i + 1) % heroScreens.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const currentScreen = heroScreens[hoveredIndex ?? activeIndex];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.6 });
  const parallaxX = useTransform(springX, [-1, 1], [-14, 14]);
  const parallaxY = useTransform(springY, [-1, 1], [-10, 10]);
  const tiltX = useTransform(springY, [-1, 1], [4, -4]);
  const tiltY = useTransform(springX, [-1, 1], [-4, 4]);

  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const spotSpringX = useSpring(spotX, { stiffness: 140, damping: 22, mass: 0.4 });
  const spotSpringY = useSpring(spotY, { stiffness: 140, damping: 22, mass: 0.4 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentParallax = useTransform(scrollYProgress, [0, 1], [0, -32]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.4]);
  const browserScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const browserRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const browserLift = useTransform(scrollYProgress, [0, 1], [0, -70]);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    spotX.set(px);
    spotY.set(py);
    if (reduceMotion) return;
    mouseX.set((px / 100) * 2 - 1);
    mouseY.set((py / 100) * 2 - 1);
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      style={{ perspective: "1600px" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { y: bgParallax }}>
        <GradientMesh />
        <LightRays />
        <AuroraBackground />
        <BokehBackground />
        <Particles />
      </motion.div>
      {reduceMotion ? null : <CursorSpotlight x={spotSpringX} y={spotSpringY} />}
      {/* Deliberately no wire/network-diagram lines here — glowing connectors
          between the cards and browser read as a sci-fi data-flow motif, not
          Apple/Stripe-style restraint. connection-lines.tsx is kept in the
          codebase but intentionally unused in this composition. */}
      {/* <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.05]" aria-hidden /> */}

      {/* <motion.div
        className="relative mx-auto h-full max-w-5xl"
        style={{
          transformStyle: "preserve-3d",
          x: reduceMotion ? 0 : parallaxX,
          y: reduceMotion ? 0 : contentParallax,
          rotateX: reduceMotion ? 0 : tiltX,
          rotateY: reduceMotion ? 0 : tiltY,
          opacity: reduceMotion ? 1 : fadeOut,
        }}
        animate={reduceMotion ? undefined : { rotateZ: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div style={reduceMotion ? undefined : { y: parallaxY }}>
         
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "radial-gradient(50% 35% at 50% 72%, color-mix(in oklab, var(--background) 45%, transparent), transparent 75%)",
            }}
          />

          <div className="flex h-full items-end justify-center px-4 pb-4 sm:pb-6">
            <motion.div
              style={{
                z: 40,
                scale: reduceMotion ? 1 : browserScale,
                rotate: reduceMotion ? 0 : browserRotate,
                y: reduceMotion ? 0 : browserLift,
              }}
            >
              <BrowserFrame screen={currentScreen} />
            </motion.div>
          </div>

          {heroProducts.map((product) => {
            const layout = productLayout[product.id];
            const anchor = panelAnchors[product.id as keyof typeof panelAnchors];
            return (
              <ProductPreviewCard
                key={product.id}
                product={product}
                className={layout.className}
                style={{ ...anchor.style, transform: `translateZ(${layout.z}px)` }}
                bob={layout.bob}
                duration={layout.duration}
                delay={layout.delay}
                onHoverChange={(id) => setHoveredIndex(id ? product.screenIndex : null)}
              />
            );
          })}
        </motion.div>
      </motion.div> */}
    </div>
  );
}
