"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { RippleLink } from "@/components/ui/ripple-link";
import { PricingBackground } from "@/components/pricing/pricing-background";
import { PricingToggle } from "@/components/pricing/pricing-toggle";
import { PlanSelectorCard } from "@/components/pricing/plan-selector-card";
import { PlanSpotlight } from "@/components/pricing/plan-spotlight";
import { ComparePanel } from "@/components/pricing/compare-panel";
import { TrustStrip } from "@/components/pricing/trust-strip";
import { PricingTimeline } from "@/components/pricing/pricing-timeline";
import { ValueCard } from "@/components/pricing/value-card";
import { pricingPlans, valueCards, type BillingMode } from "@/content/pricing";
import { cn } from "@/lib/utils";

const DEFAULT_PLAN_ID = pricingPlans.find((p) => p.featured)?.id ?? pricingPlans[0].id;

/** Home/End aren't native radio-group keyboard behavior (only the arrow
 * keys and wraparound are) — this fills that one gap. Arrow keys, Tab-in/
 * Tab-out, and Space all come from the native `<input type="radio">`s
 * themselves and need no JS. */
function handleRadioGroupKeyDown(e: React.KeyboardEvent<HTMLDivElement>, onSelect: (id: string) => void) {
  if (e.key !== "Home" && e.key !== "End") return;
  const inputs = e.currentTarget.querySelectorAll<HTMLInputElement>('input[type="radio"]');
  if (inputs.length === 0) return;
  e.preventDefault();
  const target = e.key === "Home" ? inputs[0] : inputs[inputs.length - 1];
  target.focus();
  onSelect(target.value);
}

/** A compact, interactive plan selector — one reusable spotlight for
 * whichever plan is selected, plus small selector cards for the other
 * three, rather than four long equal-height cards. Replaces the previous
 * four-card grid + always-visible comparison table, which pushed this
 * section's height well past what a plan-selection decision needs.
 *
 * Built as a single-selection radiogroup, not tabs: a plan is "chosen", not
 * a tab with a separate content panel, and the previous tab pattern was
 * invalid anyway (the selected plan was filtered out of the tablist to
 * make room for the spotlight, so the accessible option set never actually
 * matched the visual one). All four plans render in every tier now,
 * including the selected one — see PlanSelectorCard. */
export function Pricing() {
  const t = useTranslations("pricing");
  const [mode, setMode] = useState<BillingMode>("project");
  const [selectedId, setSelectedId] = useState<string>(DEFAULT_PLAN_ID);

  const selectedPlan = pricingPlans.find((p) => p.id === selectedId) ?? pricingPlans[0];

  return (
    <section id="pricing" className="relative isolate overflow-hidden py-14 md:py-20">
      <PricingBackground />

      <Container className="flex flex-col gap-6 md:gap-7">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={
              <>
                {t("heading.line1")}
                <br className="hidden sm:block" />{" "}
                <span className="text-gradient-brand">{t("heading.highlight")}</span>
              </>
            }
            description={t("description")}
          />
          <div className="pt-1">
            <PricingToggle active={mode} onSelect={setMode} />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-5">
          {/* Below `lg`: a horizontal scroll-snap radiogroup for all four
              plans, with the selected plan's spotlight underneath. */}
          <div
            role="radiogroup"
            aria-label={t("radiogroupAriaLabel")}
            onKeyDown={(e) => handleRadioGroupKeyDown(e, setSelectedId)}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
          >
            {pricingPlans.map((plan, i) => (
              <PlanSelectorCard
                key={plan.id}
                plan={plan}
                mode={mode}
                isSelected={plan.id === selectedId}
                onSelect={setSelectedId}
                layout="row"
                groupName="pricing-plan-mobile"
                index={i}
              />
            ))}
          </div>
          <div className="lg:hidden">
            <PlanSpotlight plan={selectedPlan} mode={mode} panelId="pricing-spotlight-panel-mobile" />
          </div>

          {/* `lg`+: all four compact selectors stacked left (including the
              selected one — see PlanSelectorCard's doc comment), spotlight
              right. */}
          <div
            role="radiogroup"
            aria-label={t("radiogroupAriaLabel")}
            onKeyDown={(e) => handleRadioGroupKeyDown(e, setSelectedId)}
            className="hidden gap-5 lg:grid"
            style={{ gridTemplateColumns: "minmax(280px, 0.34fr) minmax(0, 0.66fr)" }}
          >
            <div className="flex flex-col gap-3.5">
              {pricingPlans.map((plan, i) => (
                <PlanSelectorCard
                  key={plan.id}
                  plan={plan}
                  mode={mode}
                  isSelected={plan.id === selectedId}
                  onSelect={setSelectedId}
                  layout="stack"
                  groupName="pricing-plan-desktop"
                  index={i}
                />
              ))}
            </div>
            <PlanSpotlight plan={selectedPlan} mode={mode} panelId="pricing-spotlight-panel-desktop" />
          </div>
        </div>

        <div className="mx-auto mt-4 flex w-full max-w-[1240px] flex-col gap-5 md:mt-5">
          <ComparePanel />
          <TrustStrip />
        </div>

        <PricingTimeline />

        {/* why our pricing works */}
        <div className="glass-strong shadow-card relative flex flex-col gap-6 overflow-hidden rounded-2xl p-6 sm:p-10 md:gap-8">
          <div
            aria-hidden
            className="bg-brand-emerald/10 pointer-events-none absolute -inset-20 -z-10 rounded-full blur-3xl"
          />
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="text-title-lg text-foreground font-semibold">
              {t("whyItWorks.heading")}
            </h3>
            <p className="text-body-sm text-foreground-secondary max-w-xl">
              {t("whyItWorks.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((card, i) => (
              <ValueCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>

        {/* final CTA */}
        <div className="glass-strong shadow-card relative flex flex-col items-center gap-5 overflow-hidden rounded-hero p-6 text-center sm:flex-row sm:justify-between sm:p-10 sm:text-left md:gap-6">
          <div
            aria-hidden
            className="bg-gradient-brand pointer-events-none absolute -inset-16 -z-10 rounded-full opacity-20 blur-3xl"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-title-lg text-foreground font-semibold">
              {t("finalCta.heading")}
            </h3>
            <p className="text-body-sm text-foreground-secondary max-w-md">
              {t("finalCta.description")}
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
              {t("finalCta.primaryCta")}
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
              {t("finalCta.secondaryCta")}
            </RippleLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
