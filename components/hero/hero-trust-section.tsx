"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { heroTrustItems } from "@/content/hero";
import { fadeInUp, staggerContainer } from "@/lib/motion";

/** A flat row of honest capability claims beneath the CTAs — never a star
 * rating or fake review, just what Novyra actually does. */
export function HeroTrustSection() {
  const t = useTranslations("hero.trust.items");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainer}
      className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2.5 lg:justify-start"
    >
      {heroTrustItems.map((item) => {
        const Icon = item.icon;
        return (
          <motion.span
            key={item.id}
            variants={fadeInUp}
            className="text-body-sm text-foreground-secondary inline-flex items-center gap-1.5"
          >
            <Icon className="text-brand-emerald h-4 w-4" aria-hidden />
            {t(item.id)}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
