"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { RippleLink } from "@/components/ui/ripple-link";
import { accentStroke, accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { groupFeatures, splitFeatureGroups, type BillingMode, type PricingPlan } from "@/content/pricing";

const MAX_VISIBLE_FEATURES = 10;

const sparkles = [
  { top: "8%", left: "92%", delay: 0 },
  { top: "85%", left: "6%", delay: 1.1 },
];

interface PlanSpotlightProps {
  plan: PricingPlan;
  mode: BillingMode;
  /** This renders once per responsive tier (a mobile/tablet instance and a
   * separate desktop instance, toggled with CSS display), so the id must be
   * distinct per instance to stay valid HTML — two elements can never share
   * an id even when only one is visible at a time. Kept as a stable DOM id
   * for reference even though nothing points to it via `aria-controls`
   * anymore — this is a plain content region reacting to the pricing
   * radiogroup's selection, not an ARIA tabpanel. */
  panelId: string;
}

/** The large featured-plan panel — one reusable spotlight rather than four
 * long cards, crossfading its content whenever a different plan is
 * selected. Features are grouped (Design / Engineering / Growth / Support)
 * and capped at 10 visible items along whole-group boundaries, with any
 * remainder tucked behind "View all features". */
export function PlanSpotlight({ plan, mode, panelId }: PlanSpotlightProps) {
  const t = useTranslations("pricing");
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const Icon = plan.icon;
  const stroke = accentStroke[plan.accent];

  const groups = groupFeatures(plan.features);
  const { visible, overflow, overflowCount } = splitFeatureGroups(groups, MAX_VISIBLE_FEATURES);

  return (
    <div
      id={panelId}
      // 30px/29px (below): an intentional pair outside the sm/md/lg/xl/2xl/
      // hero scale — the outer wrapper's radius plus a -1px inner companion
      // for the gradient border, chosen distinct from `hero` (28px) so this
      // card doesn't read as the same size class as the page's large glass
      // panels. Left as a documented exception rather than forced to scale.
      className="relative isolate flex flex-col overflow-hidden rounded-[30px] p-[1px] transition-[background-image] duration-500"
      style={{
        backgroundImage: `linear-gradient(135deg, ${accentTint(plan.accent, 55)}, ${accentTint(plan.accent, 15)}, ${accentTint(plan.accent, 40)})`,
      }}
    >
      {/* Soft aurora halo behind the card — reacts to whichever plan is
          selected rather than a fixed color, per the spotlight color
          response spec. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-16 -z-10 rounded-full blur-3xl transition-colors duration-500"
        style={{ backgroundColor: accentTint(plan.accent, 16) }}
      />

      <div
        className="relative flex flex-1 flex-col gap-6 overflow-hidden rounded-[29px] p-5 sm:p-8 lg:min-h-[560px]"
        style={{
          backgroundImage: `linear-gradient(145deg, ${accentTint(plan.accent, 14)}, rgba(255,255,255,0.025))`,
          backdropFilter: "blur(28px) saturate(155%)",
          WebkitBackdropFilter: "blur(28px) saturate(155%)",
          boxShadow: `0 28px 85px ${accentTint(plan.accent, 14)}, inset 0 1px 0 rgba(255,255,255,0.12)`,
          transition: "background-image 0.5s ease, box-shadow 0.5s ease",
        }}
      >
        {/* Top glass reflection */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 rounded-t-[29px] bg-gradient-to-b from-white/10 to-transparent"
        />
        {/* Small floating sparkles */}
        {!reduceMotion
          ? sparkles.map((s, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/70"
                style={{ top: s.top, left: s.left }}
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.3, 0.8] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
              />
            ))
          : null}

        <AnimatePresence mode="wait">
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-3">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: accentTint(plan.accent, 18) }}
                >
                  <Icon className="h-6 w-6" style={{ color: stroke }} aria-hidden />
                </span>
                {plan.featured ? (
                  <span className="bg-gradient-brand shadow-glow-purple flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-caption font-semibold text-white">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    {t("bestValue")}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-headline text-foreground font-semibold">{t(`plans.${plan.id}.name`)}</h3>
                <p className="text-body text-foreground-secondary max-w-md">{t(`plans.${plan.id}.tagline`)}</p>
              </div>

              <div className="flex flex-col gap-0.5 pt-0.5">
                {plan.hasPriceLabel ? (
                  <p className="text-caption text-foreground-secondary font-semibold tracking-wide uppercase">
                    {t(`plans.${plan.id}.priceLabel`)}
                  </p>
                ) : null}
                <p className="text-display-xl text-foreground font-semibold">
                  {plan.price[mode]}
                  <span className="text-title text-foreground-secondary font-medium">{plan.priceSuffix[mode]}</span>
                </p>
              </div>
            </div>

            <div className="border-border-subtle flex flex-col gap-3.5 border-t pt-4">
              {visible.map((group) => {
                const GroupIcon = group.icon;
                return (
                  <div key={group.category} className="flex flex-col gap-2">
                    <div className="text-caption text-foreground-secondary flex items-center gap-1.5 font-semibold tracking-wide uppercase">
                      <GroupIcon className="h-3.5 w-3.5" style={{ color: stroke }} aria-hidden />
                      {t(`featureCategories.${group.category}`)}
                    </div>
                    <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                      {group.items.map((feature) => (
                        <li key={feature} className="text-body-sm text-foreground-secondary flex items-center gap-2">
                          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: stroke }} />
                          {t(`plans.${plan.id}.features.${feature}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              <AnimatePresence initial={false}>
                {expanded ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: easePremium }}
                    className="flex flex-col gap-4 overflow-hidden"
                  >
                    {overflow.map((group) => {
                      const GroupIcon = group.icon;
                      return (
                        <div key={group.category} className="flex flex-col gap-2">
                          <div className="text-caption text-foreground-secondary flex items-center gap-1.5 font-semibold tracking-wide uppercase">
                            <GroupIcon className="h-3.5 w-3.5" style={{ color: stroke }} aria-hidden />
                            {t(`featureCategories.${group.category}`)}
                          </div>
                          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                            {group.items.map((feature) => (
                              <li key={feature} className="text-body-sm text-foreground-secondary flex items-center gap-2">
                                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: stroke }} />
                                {t(`plans.${plan.id}.features.${feature}`)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {overflowCount > 0 ? (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  aria-expanded={expanded}
                  className="text-caption flex items-center gap-1 self-start font-semibold"
                  style={{ color: stroke }}
                >
                  {expanded ? t("showLess") : t("viewAllFeatures", { count: overflowCount })}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-fast", expanded && "rotate-180")} aria-hidden />
                </button>
              ) : null}
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <RippleLink
                href={plan.ctaHref}
                className={cn(buttonVariants({ variant: "gradient", size: "lg" }), "group/cta relative w-full overflow-hidden sm:w-auto sm:min-w-[190px]")}
              >
                <span
                  aria-hidden
                  className="bg-gradient-shimmer pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
                />
                {t(`plans.${plan.id}.cta`)}
                <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover/cta:translate-x-0.5" aria-hidden />
              </RippleLink>
              <RippleLink
                href={plan.ctaHref}
                className="text-body-sm text-foreground-secondary hover:text-foreground font-medium underline-offset-4 transition-colors duration-fast hover:underline"
              >
                {t("viewCompletePackage")}
              </RippleLink>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
