"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** The full feature-comparison table is expensive real estate — this keeps
 * it out of the default page length behind one compact, always-visible
 * trigger, expanding in place via AnimatePresence rather than a full table
 * rendered up front. */
export function ComparePanel() {
  const t = useTranslations("pricing");
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-strong shadow-card overflow-hidden rounded-hero">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="compare-all-plans-panel"
        className="flex min-h-[100px] w-full flex-col gap-2 p-6 text-left transition-colors duration-fast hover:bg-foreground/[0.02] sm:flex-row sm:items-center sm:justify-between sm:gap-4"
      >
        <div className="flex flex-col gap-1">
          <span className="text-title text-foreground font-semibold">{t("comparePanel.title")}</span>
          <span className="text-body-sm text-foreground-secondary">{t("comparePanel.description")}</span>
        </div>
        <span className="text-body-sm text-brand-blue flex shrink-0 items-center gap-1.5 font-semibold">
          {open ? t("comparePanel.closeLabel") : t("comparePanel.openLabel")}
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-base", open && "rotate-180")} aria-hidden />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="compare-all-plans-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easePremium }}
            className="overflow-hidden"
          >
            <div className="border-border-subtle border-t p-4 pt-5 sm:p-6 sm:pt-5">
              <ComparisonTable />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
