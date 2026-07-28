import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { AnimatedBadge } from "@/components/ui/animated-badge";
import { RotatingKeyword } from "@/components/ui/rotating-keyword";
import { Magnetic } from "@/components/ui/magnetic";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { RippleLink } from "@/components/ui/ripple-link";
import { buttonVariants } from "@/components/ui/button";
import { HeroScene } from "@/components/hero/hero-scene";
import { cn } from "@/lib/utils";

/** Placeholder copy — swap for real Novyra copy once available. */
export function Hero() {
  return (
    <section className="relative isolate min-h-[46rem] w-full max-w-full overflow-hidden md:min-h-[64rem]">
      <div className="absolute inset-0 -z-10">
        <HeroScene />
      </div>
      <div className="from-background via-background/60 pointer-events-none absolute inset-x-0 top-0 -z-10 h-2/3 bg-gradient-to-b to-transparent" />

      <Container className="flex flex-col items-center gap-6 pb-24 pt-28 text-center sm:pt-36">
        <AnimatedBadge dotColor="purple">Websites · SaaS · AI · Growth</AnimatedBadge>
        <h1 className="text-display-lg sm:text-display-2xl max-w-3xl font-semibold text-balance text-foreground">
          Technology built for <RotatingKeyword /> that move fast
        </h1>
        <p className="text-body-lg text-foreground-secondary max-w-2xl text-pretty">
          Novyra Technologies designs and builds websites, SaaS products, and
          AI-powered platforms for healthcare, education, and growing
          businesses.
        </p>
        <div className="flex w-full max-w-sm flex-col items-stretch gap-3 min-[430px]:max-w-none min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:items-center min-[430px]:justify-center">
          <Magnetic className="w-full min-[430px]:w-auto">
            <AnimatedGradientBorder className="w-full min-[430px]:w-auto">
              <RippleLink href="/contact" className={cn(buttonVariants({ variant: "gradient", size: "lg" }), "w-full min-[430px]:w-auto")}>
                Start a Project
              </RippleLink>
            </AnimatedGradientBorder>
          </Magnetic>
          <Magnetic className="w-full min-[430px]:w-auto">
            <AnimatedGradientBorder className="w-full min-[430px]:w-auto">
              <RippleLink
                href="/services"
                className={cn(buttonVariants({ variant: "glass", size: "lg" }), "group w-full min-[430px]:w-auto")}
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-0.5" />
              </RippleLink>
            </AnimatedGradientBorder>
          </Magnetic>
        </div>
      </Container>
    </section>
  );
}
