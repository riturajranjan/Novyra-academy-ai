"use client";

import { useEffect, useRef, type CSSProperties, type PointerEvent } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { accentGlow, accentStroke, accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import type { AccentColor } from "@/content/hero-screens";
import { heroScreens } from "@/content/hero-screens";
import type { HeroProduct } from "@/content/hero-products";
import { MockScreen } from "@/components/hero/mock-screen";
import { GraphCard } from "@/components/hero/graph-card";
import { DeviceFrame } from "@/components/hero/device-frame";

function GradesVisual({ accent }: { accent: AccentColor }) {
  const bars = [
    { min: 35, max: 65 },
    { min: 50, max: 85 },
    { min: 30, max: 55 },
    { min: 60, max: 92 },
    { min: 45, max: 75 },
  ];
  return (
    <div className="flex h-full items-end gap-1.5">
      {bars.map((b, i) => (
        <motion.div
          key={i}
          className="w-full rounded-t-sm"
          style={{ backgroundColor: accentTint(accent, i % 2 === 0 ? 55 : 32), transformOrigin: "bottom" }}
          initial={{ height: `${b.min}%` }}
          animate={{ height: [`${b.min}%`, `${b.max}%`, `${b.min}%`] }}
          transition={{ duration: 3.4, delay: i * 0.15, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function CounterVisual({ accent }: { accent: AccentColor }) {
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(reduceMotion ? 186 : 0);
  const rounded = useTransform(count, (v) => `+${Math.round(v)}%`);

  useEffect(() => {
    if (reduceMotion) return;
    const controls = animate(count, 186, { duration: 2, delay: 0.3, ease: easePremium });
    return controls.stop;
  }, [count, reduceMotion]);

  return (
    <div className="flex h-full flex-col justify-between gap-1">
      <motion.span className="text-title text-foreground font-semibold tabular-nums">{rounded}</motion.span>
      <div className="h-8">
        <GraphCard accent={accent} />
      </div>
    </div>
  );
}

const cardVisualMap: Record<NonNullable<HeroProduct["visual"]>, (props: { accent: AccentColor }) => React.JSX.Element> = {
  grades: GradesVisual,
  counter: CounterVisual,
};

/** A miniature live snapshot of the mapped product screen, scaled down to
 * fit inside a device frame — the same MockScreen the central browser uses,
 * so the device genuinely mirrors what the browser is showing. */
function DeviceMiniPreview({ screenIndex }: { screenIndex: number }) {
  const screen = heroScreens[screenIndex];
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="origin-top-left" style={{ width: 220, height: 160, transform: "scale(0.42)" }}>
        <MockScreen layout={screen.layout} accent={screen.accent} />
      </div>
    </div>
  );
}

interface ProductPreviewCardProps {
  product: HeroProduct;
  className?: string;
  style?: CSSProperties;
  /** Bob distance in px and cycle duration in seconds — vary per card so
   * they drift out of phase with each other. */
  bob?: number;
  duration?: number;
  delay?: number;
  onHoverChange?: (id: string | null) => void;
}

/** Interactive live preview of one of Novyra's real products — floats
 * ambiently, tilts toward the pointer on hover, and (via onHoverChange) can
 * drive the central browser to jump to the matching product screen. */
export function ProductPreviewCard({
  product,
  className,
  style,
  bob = 12,
  duration = 7,
  delay = 0,
  onHoverChange,
}: ProductPreviewCardProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const Icon = product.icon;

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 220, damping: 18, mass: 0.4 });
  const springTiltY = useSpring(tiltY, { stiffness: 220, damping: 18, mass: 0.4 });

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * 14);
    tiltX.set(py * -14);
  }

  function handlePointerLeave() {
    tiltX.set(0);
    tiltY.set(0);
    onHoverChange?.(null);
  }

  const isDevice = product.frame !== "card";
  const CardVisual = product.visual ? cardVisualMap[product.visual] : null;

  return (
    <motion.div
      ref={ref}
      className={`glass shadow-card absolute cursor-default rounded-2xl p-3 transition-shadow duration-base ease-soft ${className ?? ""}`}
      style={{
        ...style,
        rotateX: reduceMotion ? 0 : springTiltX,
        rotateY: reduceMotion ? 0 : springTiltY,
        transformPerspective: 600,
      }}
      animate={reduceMotion ? undefined : { y: [0, -bob, 0], rotate: [0, 1.2, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, boxShadow: accentGlow(product.accent), transition: { duration: 0.3, ease: "easeOut" } }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerEnter={() => onHoverChange?.(product.id)}
    >
      <div className="flex h-full flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: accentStroke[product.accent] }} aria-hidden />
          <span className="text-caption text-foreground truncate font-medium">{product.label}</span>
          <span
            className="animate-glow-pulse ml-auto h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: accentStroke[product.accent] }}
            aria-hidden
          />
        </div>
        <div className="min-h-0 flex-1">
          {isDevice ? (
            <DeviceFrame type={product.frame as "macbook" | "tablet" | "phone"}>
              <DeviceMiniPreview screenIndex={product.screenIndex} />
            </DeviceFrame>
          ) : CardVisual ? (
            <CardVisual accent={product.accent} />
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
