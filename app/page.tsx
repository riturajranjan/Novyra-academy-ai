import { Hero } from "@/components/sections/hero";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { SolutionAdvisor } from "@/components/sections/solution-advisor";
import { WhyChooseNovyra } from "@/components/sections/why-choose-novyra";
import { CaseStudies } from "@/components/sections/case-studies";
import { OurPromise } from "@/components/sections/our-promise";
import { OurProcess } from "@/components/sections/our-process";

export default function DesignSystemPreview() {
  return (
    <main className="relative flex-1 pb-32">
      <Hero />
      <ServicesShowcase />
      <SolutionAdvisor />
      <WhyChooseNovyra />
      <CaseStudies />
      <OurPromise />
      <OurProcess />
    </main>
  );
}
