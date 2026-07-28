import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GlowBorder } from "@/components/ui/glow-border";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { BokehBackground } from "@/components/ui/bokeh-background";
import { Hero } from "@/components/sections/hero";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { SolutionAdvisor } from "@/components/sections/solution-advisor";

const colorTokens = [
  { name: "Blue", className: "bg-brand-blue" },
  { name: "Purple", className: "bg-brand-purple" },
  { name: "Cyan", className: "bg-brand-cyan" },
  { name: "Pink", className: "bg-brand-pink" },
  { name: "Emerald", className: "bg-brand-emerald" },
];

const typeScale = [
  { label: "display-2xl", className: "text-display-2xl" },
  { label: "display-xl", className: "text-display-xl" },
  { label: "display-lg", className: "text-display-lg" },
  { label: "headline", className: "text-headline" },
  { label: "title-lg", className: "text-title-lg" },
  { label: "title", className: "text-title" },
  { label: "body-lg", className: "text-body-lg" },
  { label: "body", className: "text-body" },
  { label: "body-sm", className: "text-body-sm" },
  { label: "caption", className: "text-caption" },
];

const radii = [
  { label: "sm", className: "rounded-sm" },
  { label: "md", className: "rounded-md" },
  { label: "lg", className: "rounded-lg" },
  { label: "xl", className: "rounded-xl" },
  { label: "2xl", className: "rounded-2xl" },
  { label: "pill", className: "rounded-pill" },
];

const shadows = [
  { label: "card", className: "shadow-card" },
  { label: "card-hover", className: "shadow-card-hover" },
  { label: "glow-blue", className: "shadow-glow-blue" },
  { label: "glow-purple", className: "shadow-glow-purple" },
  { label: "glow-pink", className: "shadow-glow-pink" },
];

export default function DesignSystemPreview() {
  return (
    <main className="relative flex-1 pb-32">
      <Hero />
      <ServicesShowcase />
      <SolutionAdvisor />

      <Container className="flex flex-col gap-24 pt-24">
        <SectionHeading
          eyebrow="Design System — Work in Progress"
          title="Component &amp; token reference"
          description="Everything below is the shared design system the rest of the site is composed from — not final page content."
          align="left"
        />
        <section>
          <SectionHeading
            eyebrow="Foundations"
            title="Color tokens"
            description="Brand accents, theme-aware across light and dark."
            align="left"
          />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {colorTokens.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-3">
                <div className={`h-16 w-16 rounded-2xl shadow-card ${c.className}`} />
                <span className="text-caption text-foreground-secondary">{c.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Foundations"
            title="Typography"
            description="Geist Sans, tuned tracking per size for an Apple-like display scale."
            align="left"
          />
          <div className="mt-8 flex flex-col gap-4">
            {typeScale.map((t) => (
              <div key={t.label} className="border-border-subtle flex items-baseline gap-6 border-b pb-4">
                <span className="text-caption text-foreground-secondary w-28 shrink-0 font-mono">
                  {t.label}
                </span>
                <span className={`${t.className} font-semibold`}>Novyra Technologies</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Foundations"
            title="Radius &amp; shadow"
            align="left"
          />
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {radii.map((r) => (
              <div
                key={r.label}
                className={`bg-surface border-border-subtle flex h-20 items-center justify-center border text-caption text-foreground-secondary ${r.className}`}
              >
                {r.label}
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {shadows.map((s) => (
              <div
                key={s.label}
                className={`bg-surface flex h-20 items-center justify-center rounded-xl text-caption text-foreground-secondary ${s.className}`}
              >
                {s.label}
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl py-20">
          <BokehBackground />
          <SectionHeading
            eyebrow="Backgrounds"
            title="Bokeh &amp; aurora"
            description="Decorative, theme-aware, paused under prefers-reduced-motion."
          />
        </section>

        <section>
          <SectionHeading
            eyebrow="Components"
            title="Glass &amp; spotlight cards"
            align="left"
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard>
              <h3 className="text-title font-semibold">GlassCard</h3>
              <p className="text-body-sm text-foreground-secondary mt-2">
                Translucent surface for compact content blocks.
              </p>
            </GlassCard>
            <SpotlightCard>
              <h3 className="text-title font-semibold">SpotlightCard</h3>
              <p className="text-body-sm text-foreground-secondary mt-2">
                Move your pointer over this card to see the highlight follow it.
              </p>
            </SpotlightCard>
            <GlowBorder>
              <div className="p-6">
                <h3 className="text-title font-semibold">GlowBorder</h3>
                <p className="text-body-sm text-foreground-secondary mt-2">
                  Animated gradient border, brightens on hover.
                </p>
              </div>
            </GlowBorder>
          </div>
          <div className="mt-6">
            <GlassPanel>
              <h3 className="text-title-lg font-semibold">GlassPanel</h3>
              <p className="text-body text-foreground-secondary mt-2 max-w-xl">
                Larger, section-level glass surface for dashboard previews and
                feature panels.
              </p>
            </GlassPanel>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Components" title="Buttons" align="left" />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <GradientButton>Gradient</GradientButton>
            <Button variant="glass">Glass</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>
      </Container>
    </main>
  );
}
