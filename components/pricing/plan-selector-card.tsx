"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { accentStroke, accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { BillingMode, PricingPlan } from "@/content/pricing";

interface PlanSelectorCardProps {
  plan: PricingPlan;
  mode: BillingMode;
  isSelected: boolean;
  onSelect: (id: string) => void;
  /** "stack" is the compact desktop card (left column, ~150px tall).
   * "row" is the horizontal tab used below `lg` — icon, name, and price
   * only, since a 150-180px-wide scroll-snap card can't also fit a
   * description and benefit list without cramming. */
  layout: "stack" | "row";
  /** id of the tabpanel this card controls — must match whichever
   * PlanSpotlight instance is rendered in the same responsive tier. */
  panelId: string;
  index?: number;
}

/** One compact, clickable plan card — the left-column selector on desktop,
 * or a horizontal tab below `lg`. Selecting it makes it the spotlight
 * plan. Selection is never color-alone: a rotating accent border, a
 * floating checkmark badge, and a "Selected" label all carry the state
 * together. */
export function PlanSelectorCard({ plan, mode, isSelected, onSelect, layout, panelId, index = 0 }: PlanSelectorCardProps) {
  const t = useTranslations("pricing");
  const reduceMotion = useReducedMotion();
  const Icon = plan.icon;
  const stroke = accentStroke[plan.accent];
  const benefits = plan.features.slice(0, 3);
  const isStack = layout === "stack";

  return (
    <motion.button
      type="button"
      role="tab"
      aria-selected={isSelected}
      aria-controls={panelId}
      onClick={() => onSelect(plan.id)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "150px" }}
      animate={{ scale: isSelected && isStack ? 1.015 : 1, x: isSelected && isStack ? 4 : 0 }}
      whileHover={
        reduceMotion
          ? undefined
          : isSelected
            ? { scale: isStack ? 1.02 : 1 }
            : { y: -3, x: isStack ? 2 : 0 }
      }
      transition={{ duration: index === 0 ? 0.4 : 0.28, delay: index * 0.06, ease: easePremium }}
      style={{
        backgroundImage: isSelected
          ? `linear-gradient(145deg, ${accentTint(plan.accent, 10)}, rgba(255,255,255,0.018))`
          : "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.016))",
        borderColor: isSelected ? "transparent" : "rgba(255,255,255,0.075)",
        backdropFilter: "blur(20px) saturate(140%)",
        WebkitBackdropFilter: "blur(20px) saturate(140%)",
        boxShadow: isSelected
          ? `0 16px 45px ${accentTint(plan.accent, 14)}, inset 0 1px 0 rgba(255,255,255,0.1)`
          : "inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
      className={cn(
        "group relative flex shrink-0 flex-col overflow-hidden rounded-[22px] border p-4 text-left transition-[box-shadow] duration-[260ms]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        !isSelected && "opacity-[0.86] hover:opacity-100",
        isStack ? "min-h-[150px] w-full" : "min-h-[112px] w-[160px] snap-start sm:w-[172px]",
      )}
    >
      {/* Rotating accent gradient border — selection is never color-alone,
          but this is the primary "this one's active" signal. */}
      {isSelected ? (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -inset-[1.5px] -z-10 rounded-[23px]"
          style={{
            background: `conic-gradient(from 0deg, ${stroke}, rgba(255,255,255,0.35), ${stroke})`,
          }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
      ) : null}

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 rounded-t-[22px] bg-gradient-to-b from-white/8 to-transparent",
          isStack ? "h-1/2" : "h-2/3",
        )}
      />

      {/* Floating checkmark badge — top-right, independent of border color. */}
      {isSelected ? (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full text-white"
          style={{
            backgroundImage: `linear-gradient(135deg, ${stroke}, rgba(255,255,255,0.25))`,
            boxShadow: `0 0 16px -2px ${accentTint(plan.accent, 60)}`,
          }}
        >
          <Check className="h-3.5 w-3.5" aria-hidden />
        </motion.span>
      ) : null}

      <div className={cn("flex items-center gap-2", isStack ? "mb-2.5" : "mb-1.5")}>
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-base group-hover:-translate-y-0.5"
          style={{ backgroundColor: accentTint(plan.accent, isSelected ? 22 : 12) }}
        >
          <Icon className="h-4 w-4" style={{ color: stroke }} aria-hidden />
        </span>
        {isSelected ? (
          <span className="text-[9px] font-semibold tracking-wide uppercase" style={{ color: stroke }}>
            {t("selected")}
          </span>
        ) : plan.featured ? (
          <span className="text-[9px] font-semibold tracking-wide text-white/40 uppercase">{t("popular")}</span>
        ) : null}
      </div>

      <span
        className={cn("text-body-sm font-semibold", isSelected ? "text-foreground" : "text-foreground/90")}
        style={{ marginBottom: isStack ? 6 : 0 }}
      >
        {t(`plans.${plan.id}.name`)}
      </span>

      {isStack ? (
        <span className="text-caption text-foreground-secondary mb-3 line-clamp-1">
          {t(`plans.${plan.id}.tagline`)}
        </span>
      ) : null}

      <span className={cn("flex items-baseline gap-1", isStack ? "mb-3" : "mt-auto")}>
        <span className="text-title-lg font-semibold" style={{ color: isSelected ? stroke : "var(--color-foreground)" }}>
          {plan.price[mode]}
        </span>
        {plan.priceSuffix[mode] ? (
          <span className="text-caption text-foreground-secondary">{plan.priceSuffix[mode]}</span>
        ) : null}
      </span>

      {isStack ? (
        <ul className="mt-auto flex flex-col gap-[6px]">
          {benefits.map((feature) => (
            <li key={feature} className="text-caption text-foreground-secondary flex items-center gap-1.5">
              <span aria-hidden className="h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: stroke }} />
              <span className="truncate">{t(`plans.${plan.id}.features.${feature}`)}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.button>
  );
}
