"use client";

import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCtaBackground } from "@/components/contact-cta/contact-cta-background";
import { HeroGlassCard } from "@/components/contact-cta/hero-glass-card";
import { QuickContactCard } from "@/components/contact-cta/quick-contact-card";
import { ValueCard } from "@/components/contact-cta/value-card";
import { CtaTimeline } from "@/components/contact-cta/cta-timeline";
import { TrustMetrics } from "@/components/contact-cta/trust-metrics";
import { ContactInfoPanel } from "@/components/contact-cta/contact-info-panel";
import { ctaTrustBadges, quickContactCards, contactValueCards } from "@/content/contact-cta";
import { easePremium } from "@/lib/motion";

/** The final conversion section before the footer — the most visually
 * elaborate section on the page by design. */
export function ContactCta() {
  return (
    <section id="contact" className="relative isolate py-14 md:py-32">
      <ContactCtaBackground />

      <Container className="flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            eyebrow="Let's Build Something Amazing"
            title="Ready to Transform Your Business?"
            description="Whether you need a premium business website, a scalable SaaS platform, AI automation, or a custom web application, our team is ready to bring your vision to life."
          />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {ctaTrustBadges.map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "150px" }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: easePremium }}
                className="border-border-subtle bg-surface/60 text-body-sm text-foreground-secondary flex items-center gap-1.5 rounded-full border px-4 py-2 font-medium backdrop-blur-md"
              >
                <CircleCheck className="text-brand-emerald h-4 w-4" aria-hidden />
                {label}
              </motion.span>
            ))}
          </div>
        </div>

        <HeroGlassCard />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickContactCards.map((card, i) => (
            <QuickContactCard key={card.id} card={card} index={i} />
          ))}
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="text-title-lg text-foreground font-semibold">Why Contact Novyra?</h3>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactValueCards.map((card, i) => (
              <ValueCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>

        {/* Same process steps already shown in Our Process and the
         * Recommended Roadmap — kept for desktop context, hidden on mobile
         * to avoid repeating the same timeline a third time on a page
         * that's already long there. */}
        <div className="hidden md:block">
          <CtaTimeline />
        </div>

        <TrustMetrics />

        <ContactInfoPanel />
      </Container>
    </section>
  );
}
