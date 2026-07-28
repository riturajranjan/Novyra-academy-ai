"use client";

import { useState } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { RippleLink } from "@/components/ui/ripple-link";
import { PricingBackground } from "@/components/pricing/pricing-background";
import { TrustBadges } from "@/components/pricing/trust-badges";
import { PricingToggle } from "@/components/pricing/pricing-toggle";
import { PricingCard } from "@/components/pricing/pricing-card";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { PricingTimeline } from "@/components/pricing/pricing-timeline";
import { ValueCard } from "@/components/pricing/value-card";
import { pricingPlans, valueCards, type BillingMode } from "@/content/pricing";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [mode, setMode] = useState<BillingMode>("project");

  return (
    <section id="pricing" className="relative isolate overflow-hidden py-24 sm:py-32">
      <PricingBackground />

      <Container className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-8">
          <SectionHeading
            eyebrow="Pricing"
            title={
              <>
                Transparent Pricing That
                <br className="hidden sm:block" />{" "}
                <span className="text-gradient-brand">
                  Grows With Your Business
                </span>
              </>
            }
            description="Choose the engagement model that best fits your business. Every project includes premium UI/UX, modern development standards, and dedicated support with no hidden costs."
          />
          <TrustBadges />
          <PricingToggle active={mode} onSelect={setMode} />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} mode={mode} index={i} />
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-caption text-foreground-secondary text-center font-semibold tracking-wide uppercase">
            Feature Comparison
          </p>
          <ComparisonTable />
        </div>

        <PricingTimeline />

        {/* why our pricing works */}
        <div className="glass-strong shadow-card relative flex flex-col gap-8 overflow-hidden rounded-[32px] p-8 sm:p-10">
          <div
            aria-hidden
            className="bg-brand-emerald/10 pointer-events-none absolute -inset-20 -z-10 rounded-full blur-3xl"
          />
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="text-title-lg text-foreground font-semibold">
              Why Our Pricing Works
            </h3>
            <p className="text-body-sm text-foreground-secondary max-w-xl">
              A pricing model built around clarity, not surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((card, i) => (
              <ValueCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>

        {/* final CTA */}
        <div className="glass-strong shadow-card relative flex flex-col items-center gap-6 overflow-hidden rounded-[28px] p-8 text-center sm:flex-row sm:justify-between sm:p-10 sm:text-left">
          <div
            aria-hidden
            className="bg-gradient-brand pointer-events-none absolute -inset-16 -z-10 rounded-full opacity-20 blur-3xl"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-title-lg text-foreground font-semibold">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-body-sm text-foreground-secondary max-w-md">
              Let&apos;s discuss your project and create a solution tailored to
              your business goals.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <RippleLink
              href="/contact"
              className={cn(
                buttonVariants({ variant: "gradient", size: "lg" }),
                "group relative w-full overflow-hidden sm:w-auto",
              )}>
              <span
                aria-hidden
                className="bg-gradient-shimmer pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              Book Free Consultation
              <ArrowRight
                className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-0.5"
                aria-hidden
              />
            </RippleLink>
            <RippleLink
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group w-full sm:w-auto",
              )}>
              <FileText className="h-4 w-4" aria-hidden />
              Request Custom Quote
            </RippleLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
