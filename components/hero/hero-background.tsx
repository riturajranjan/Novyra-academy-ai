import { AuroraBackground } from "@/components/ui/aurora-background";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { LightRays } from "@/components/ui/light-rays";
import { BokehBackground } from "@/components/ui/bokeh-background";
import { Particles } from "@/components/hero/particles";

/** Dark cinematic backdrop: layered mesh gradient, top light rays, a
 * slowly-shifting aurora wash with grid overlay, colored bokeh blobs (blue
 * + purple radial light), drifting particles, and a faint noise texture —
 * then a top and bottom fade so the section blends cleanly into the navbar
 * above and the next section below. Every layer here is an existing,
 * already-tuned background primitive; nothing new is introduced besides
 * the composition, the noise layer, and the fade edges. */
export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <GradientMesh />
      <LightRays />
      <AuroraBackground />
      <BokehBackground />
      <Particles />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay" />
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/4 bg-gradient-to-b to-transparent" />
      <div className="from-background via-background/50 pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t to-transparent" />
    </div>
  );
}
