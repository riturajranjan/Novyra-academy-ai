"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CircleCheck, Headset } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { RippleLink } from "@/components/ui/ripple-link";

const trustPointIds = ["freeConsultation", "fastResponse", "noObligation"] as const;

/** Glass "need help choosing?" card anchored below the service navigation —
 * a soft idle float at rest, and on hover a lift, a brighter gradient glow,
 * and a one-shot light-reflection sweep across the surface. */
export function ServiceTrustCard() {
  const t = useTranslations("services");
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
      transition={reduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="group relative isolate"
    >
      <div
        aria-hidden
        className="bg-gradient-brand pointer-events-none absolute -inset-3 -z-10 rounded-2xl opacity-40 blur-2xl transition-opacity duration-slow ease-soft group-hover:opacity-70"
      />

      <div className="glass shadow-card relative overflow-hidden rounded-xl p-5 transition-[transform,box-shadow] duration-slow ease-soft group-hover:-translate-y-1 group-hover:shadow-card-hover sm:p-6">
        <span
          aria-hidden
          className="bg-gradient-shimmer pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-slow ease-soft group-hover:translate-x-full"
        />

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-title text-foreground font-semibold">{t("trustCard.title")}</h3>
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
            <motion.span
              aria-hidden
              animate={reduceMotion ? undefined : { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={reduceMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              className="bg-brand-blue absolute inset-0 rounded-full"
            />
            <span className="bg-gradient-brand shadow-glow-blue relative flex h-8 w-8 items-center justify-center rounded-full text-white">
              <Headset className="h-4 w-4" aria-hidden />
            </span>
          </span>
        </div>
        <p className="text-body-sm text-foreground-secondary mt-2.5">{t("trustCard.description")}</p>

        <div className="mt-5 flex flex-col gap-2.5">
          <RippleLink href="/contact" className={cn(buttonVariants({ variant: "gradient", size: "md" }), "w-full")}>
            <span aria-hidden>🚀</span> {t("trustCard.consultation")}
          </RippleLink>
          <RippleLink href="/contact" className={cn(buttonVariants({ variant: "glass", size: "md" }), "w-full")}>
            <span aria-hidden>💬</span> {t("trustCard.whatsapp")}
          </RippleLink>
        </div>

        <ul className="mt-5 flex flex-col gap-1.5">
          {trustPointIds.map((id) => (
            <li key={id} className="text-caption text-foreground-secondary flex items-center gap-1.5">
              <CircleCheck className="text-brand-emerald h-3.5 w-3.5 shrink-0" aria-hidden />
              {t(`trustCard.points.${id}`)}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
