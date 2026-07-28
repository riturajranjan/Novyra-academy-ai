"use client";

import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import { pricingBadges } from "@/content/pricing";
import { easePremium } from "@/lib/motion";

/** The small row of glass checkmark badges below the section subtitle. */
export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {pricingBadges.map((label, i) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05, ease: easePremium }}
          className="border-border-subtle bg-surface/60 text-body-sm text-foreground-secondary flex items-center gap-1.5 rounded-full border px-4 py-2 font-medium backdrop-blur-md"
        >
          <CircleCheck className="text-brand-emerald h-4 w-4" aria-hidden />
          {label}
        </motion.span>
      ))}
    </div>
  );
}
