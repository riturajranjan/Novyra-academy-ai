"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { RippleLink } from "@/components/ui/ripple-link";
import { PromiseBackground } from "@/components/promise/promise-background";
import { TrustBar } from "@/components/promise/trust-bar";
import { FeaturedCommitment } from "@/components/promise/featured-commitment";
import { CommitmentCard } from "@/components/promise/commitment-card";
import { FocusMarquee } from "@/components/promise/focus-marquee";
import { commitmentCards } from "@/content/our-promise";
import { cn } from "@/lib/utils";

/** "Our Promise" — stands in for a testimonials section. Novyra is a new
 * studio without completed client engagements yet, so there are no real
 * quotes, star ratings, review-platform badges, or client logos to show
 * honestly. Every element here is a verifiable, forward-looking operating
 * commitment instead — the same premium interaction design a testimonials
 * section would use, without inventing the people behind it. */
export function OurPromise() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <PromiseBackground />

      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Our Promise"
          title={
            <>
              No Track Record to Show Yet.
              <br className="hidden sm:block" /> <span className="text-gradient-brand">A Standard to Hold To.</span>
            </>
          }
          description="Novyra is a new studio, so we won't invent client stories we don't have. Here's exactly how we operate — commitments you can hold us to from the very first project."
        />

        <TrustBar />

        <FeaturedCommitment />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-6">
          {commitmentCards.map((card, i) => (
            <CommitmentCard key={card.id} card={card} index={i} />
          ))}
        </div>

        <FocusMarquee />

        {/* founding-client CTA */}
        <div className="glass-strong shadow-card relative flex flex-col items-center gap-6 overflow-hidden rounded-[28px] p-8 text-center sm:flex-row sm:justify-between sm:p-10 sm:text-left">
          <div
            aria-hidden
            className="bg-gradient-brand pointer-events-none absolute -inset-16 -z-10 rounded-full opacity-20 blur-3xl"
          />
          <div className="flex flex-col gap-2">
            <span className="text-caption text-brand-emerald inline-flex w-fit items-center gap-1.5 font-semibold tracking-wide uppercase sm:mx-0">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Founding Clients
            </span>
            <h3 className="text-title-lg text-foreground font-semibold">Be Among Our First Partners</h3>
            <p className="text-body-sm text-foreground-secondary max-w-md">
              Being new means founding clients get the whole team&apos;s attention, not a fraction of it — no account
              layers, no legacy baggage, just focused execution.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <RippleLink
              href="/contact"
              className={cn(buttonVariants({ variant: "gradient", size: "lg" }), "group relative w-full overflow-hidden sm:w-auto")}
            >
              <span
                aria-hidden
                className="bg-gradient-shimmer pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-0.5" aria-hidden />
            </RippleLink>
            <RippleLink href="/services" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}>
              See Our Process
            </RippleLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
