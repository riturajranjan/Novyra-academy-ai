"use client";

import { useMemo, useState } from "react";
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
import { faqEntries, faqTrustBadges, type FaqCategory } from "@/content/faq";
import { easePremium } from "@/lib/motion";

export function Faq() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategory>("General");
  const [openId, setOpenId] = useState<string | null>(
    faqEntries[0]?.id ?? null,
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqEntries.filter((entry) => {
      const matchesCategory = entry.category === category;
      const matchesQuery =
        !q ||
        entry.question.toLowerCase().includes(q) ||
        entry.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="faq" className="relative isolate py-14 md:py-32">
      <FaqBackground />

      <Container className="flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know Before Starting Your Project"
            description="We've answered the most common questions about pricing, timelines, development, support, and our workflow. If you still have questions, our team is always happy to help."
          />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {faqTrustBadges.map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                {label}
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
                    No questions match &quot;{query}&quot; — try a different
                    search or category.
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
