"use client";

import { useRef, type PointerEvent } from "react";
import { CircleCheck, Sparkles } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { RippleLink } from "@/components/ui/ripple-link";
import type { BillingMode, PricingPlan } from "@/content/pricing";
import { accentStroke, accentTint } from "@/lib/accent";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: PricingPlan;
  mode: BillingMode;
  index: number;
}

/** One floating glass pricing card. The featured plan gets a taller,
 * elevated treatment with a gradient border and a breathing aurora glow;
 * every card tracks the pointer to drive a soft cursor-following highlight. */
export function PricingCard({ plan, mode, index }: PricingCardProps) {
  const Icon = plan.icon;
  const stroke = accentStroke[plan.accent];
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const highlight = useMotionTemplate`radial-gradient(320px circle at ${mouseX}% ${mouseY}%, ${accentTint(plan.accent, 18)}, transparent 70%)`;

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -8 }}
      animate={
        reduceMotion || !plan.featured
          ? undefined
          : { y: [0, -8, 0] }
      }
      transition={
        plan.featured && !reduceMotion
          ? { y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.5, delay: index * 0.08, ease: easePremium } }
          : { duration: 0.5, delay: index * 0.08, ease: easePremium }
      }
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[28px] backdrop-blur-2xl transition-shadow duration-base",
        plan.featured ? "p-[1px] lg:z-10 lg:-mt-6 lg:mb-6" : "border-border-subtle border",
      )}
      style={
        plan.featured
          ? {
              backgroundImage: `linear-gradient(135deg, ${accentTint("purple", 90)}, ${accentTint("blue", 60)}, ${accentTint("purple", 90)})`,
            }
          : undefined
      }
    >
      {plan.featured ? (
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gradient-brand shadow-glow-purple absolute -top-3.5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-full px-4 py-1.5 text-caption font-semibold text-white"
        >
          <motion.span
            animate={reduceMotion ? undefined : { rotate: [0, 15, -10, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
          </motion.span>
          Most Popular
        </motion.span>
      ) : null}

      <div className="bg-surface/90 relative flex flex-1 flex-col gap-6 rounded-[27px] p-7">
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 -z-10 rounded-[27px]" style={{ backgroundImage: highlight }} />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 rounded-t-[27px] bg-gradient-to-b from-white/10 to-transparent" />
        {plan.featured ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-16 -z-20 rounded-full blur-3xl"
            style={{ backgroundColor: accentTint("purple", 20) }}
            animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : null}

        <div className="flex items-center justify-between gap-3">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-base group-hover:-translate-y-0.5 group-hover:rotate-3"
            style={{ backgroundColor: accentTint(plan.accent, 16) }}
          >
            <Icon className="h-6 w-6" style={{ color: stroke }} aria-hidden />
          </span>
          {plan.featured ? (
            <span className="text-caption border-brand-purple/40 text-brand-purple rounded-full border px-2.5 py-1 font-semibold tracking-wide uppercase">
              Best Value
            </span>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-title-lg text-foreground font-semibold">{plan.name}</h3>
          <p className="text-body-sm text-foreground-secondary">{plan.tagline}</p>
        </div>

        <div className="flex flex-col gap-1">
          {plan.priceLabel ? <p className="text-caption text-foreground-secondary font-semibold tracking-wide uppercase">{plan.priceLabel}</p> : null}
          <p className="text-display-lg text-foreground font-semibold">
            {plan.price[mode]}
            <span className="text-title text-foreground-secondary font-medium">{plan.priceSuffix[mode]}</span>
          </p>
        </div>

        <div className="border-border-subtle flex flex-col gap-3 border-t pt-5">
          {plan.inheritsFrom ? (
            <p className="text-caption text-foreground-secondary font-semibold tracking-wide uppercase">Everything in {plan.inheritsFrom}, plus</p>
          ) : null}
          <ul className="flex flex-col gap-2.5">
            {plan.features.map((feature) => (
              <li key={feature} className="text-body-sm text-foreground-secondary flex items-start gap-2">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0" style={{ color: stroke }} aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <RippleLink
          href={plan.ctaHref}
          className={cn(
            buttonVariants({ variant: plan.featured ? "gradient" : "outline", size: "lg" }),
            "group/cta relative mt-auto w-full overflow-hidden",
          )}
        >
          {plan.featured ? (
            <span
              aria-hidden
              className="bg-gradient-shimmer pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
            />
          ) : null}
          {plan.cta}
        </RippleLink>
      </div>
    </motion.div>
  );
}
