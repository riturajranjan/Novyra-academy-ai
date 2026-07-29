"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { pricingTrustStrip } from "@/content/pricing";
import { easePremium } from "@/lib/motion";

/** Compact glass strip below the comparison panel — the short, delivery-
 * process version of the pricing trust story (distinct from the header's
 * broader trust chips and the fuller "Why Our Pricing Works" cards further
 * down the page, both of which stay as-is). */
export function TrustStrip() {
  const t = useTranslations("pricing");
  return (
    <div className="glass flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl px-6 py-4 sm:min-h-[64px]">
      {pricingTrustStrip.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: easePremium }}
            className="flex items-center gap-2"
          >
            <Icon className="text-brand-blue h-4 w-4 shrink-0" aria-hidden />
            <span className="text-body-sm text-foreground-secondary font-medium">{t(`trustStrip.${item.id}`)}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
