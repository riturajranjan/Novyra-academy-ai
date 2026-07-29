"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { faqCategories, type FaqCategory } from "@/content/faq";

interface FaqCategoryTabsProps {
  active: FaqCategory;
  onSelect: (category: FaqCategory) => void;
}

/** Premium glass pill tabs with a spring-animated selection indicator —
 * horizontally scrollable so it stays swipeable on mobile. Tab identity and
 * comparison (`active`/`onSelect`) always use the stable `FaqCategory` id;
 * only the rendered label is translated. */
export function FaqCategoryTabs({ active, onSelect }: FaqCategoryTabsProps) {
  const t = useTranslations("faq");

  return (
    <div
      role="tablist"
      aria-label={t("categoryTabs.ariaLabel")}
      className="glass flex max-w-full gap-1.5 overflow-x-auto rounded-pill p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {faqCategories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(category)}
            className="text-caption relative flex min-h-11 shrink-0 items-center rounded-pill px-4 py-2 font-medium whitespace-nowrap transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {isActive ? (
              <motion.span
                layoutId="faq-category-active"
                className="bg-gradient-brand absolute inset-0 rounded-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span className={cn("relative", isActive ? "text-white" : "text-foreground-secondary")}>
              {t(`categories.${category}`)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
