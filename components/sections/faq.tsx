"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqBackground } from "@/components/faq/faq-background";
import { FaqSearch } from "@/components/faq/faq-search";
import { FaqCategoryTabs } from "@/components/faq/faq-category-tabs";
import { FaqAccordionItem } from "@/components/faq/faq-accordion-item";
import { FaqInfoPanel } from "@/components/faq/faq-info-panel";
import { FaqTrustBanner } from "@/components/faq/faq-trust-banner";
import { faqEntries, faqTrustBadgeIds, type FaqCategory } from "@/content/faq";
import { easePremium } from "@/lib/motion";

export function Faq() {
  const t = useTranslations("faq");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategory>("General");
  const [openId, setOpenId] = useState<string | null>(
    faqEntries[0]?.id ?? null,
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqEntries.filter((entry) => {
      const matchesCategory = entry.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      // Search against the currently displayed (translated) text, not the
      // English content ids, so search works correctly in every locale.
      const question = t(`entries.${entry.id}.question`).toLowerCase();
      const answer = t(`entries.${entry.id}.answer`).toLowerCase();
      return question.includes(q) || answer.includes(q);
    });
  }, [query, category, t]);

  return (
    <section id="faq" className="relative isolate py-14 md:py-32">
      <FaqBackground />

      <Container className="flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            eyebrow={t("section.eyebrow")}
            title={t("section.title")}
            description={t("section.description")}
          />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {faqTrustBadgeIds.map((id, i) => (
              <motion.span
                key={id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "150px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: easePremium,
                }}
                className="border-border-subtle bg-surface/60 text-body-sm text-foreground-secondary flex items-center gap-1.5 rounded-full border px-4 py-2 font-medium backdrop-blur-md">
                <CircleCheck
                  className="text-brand-emerald h-4 w-4"
                  aria-hidden
                />
                {t(`trustBadges.${id}`)}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-start lg:gap-10">
          <FaqInfoPanel />

          <div className="flex flex-col gap-5 md:gap-6">
            <FaqSearch value={query} onChange={setQuery} />
            <FaqCategoryTabs active={category} onSelect={setCategory} />

            <div className="flex flex-col gap-3">
              <AnimatePresence mode="popLayout">
                {filtered.length > 0 ? (
                  filtered.map((entry, i) => (
                    <FaqAccordionItem
                      key={entry.id}
                      entry={entry}
                      index={i}
                      isOpen={openId === entry.id}
                      onToggle={() =>
                        setOpenId(openId === entry.id ? null : entry.id)
                      }
                    />
                  ))
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-body-sm text-foreground-secondary py-12 text-center">
                    {t("noResults", { query })}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <FaqTrustBanner />
      </Container>
    </section>
  );
}
