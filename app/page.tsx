import { Hero } from "@/components/sections/hero";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { SolutionAdvisor } from "@/components/sections/solution-advisor";
import { WhyChooseNovyra } from "@/components/sections/why-choose-novyra";
import { CaseStudies } from "@/components/sections/case-studies";
import { OurPromise } from "@/components/sections/our-promise";
import { OurProcess } from "@/components/sections/our-process";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";

export default function DesignSystemPreview() {
  return (
    <main className="relative flex-1">
      <Hero />
      <ServicesShowcase />
      <SolutionAdvisor />
      <WhyChooseNovyra />
      <CaseStudies />
      <OurPromise />
      <OurProcess />
      <Pricing />
      <Faq />
      <ContactCta />
    </main>
  );
}
