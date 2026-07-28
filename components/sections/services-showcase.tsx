"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BokehBackground } from "@/components/ui/bokeh-background";
import { ServiceNav } from "@/components/services/service-nav";
import { ServicePreview } from "@/components/services/service-preview";
import { ServiceDetails } from "@/components/services/service-details";
import { serviceCategories } from "@/content/service-categories";

/** Interactive services showcase — a three-panel switcher (navigation,
 * live preview, details) that collapses to a single stacked column below
 * `lg`. One layout, breakpoint-driven, so mobile/tablet/desktop never drift
 * into separate implementations. */
export function ServicesShowcase() {
  const [activeId, setActiveId] = useState(serviceCategories[0].id);
  const activeCategory = serviceCategories.find((c) => c.id === activeId) ?? serviceCategories[0];

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <BokehBackground className="opacity-70" />

      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading
          eyebrow="Our Services"
          title="Build the Right Digital Solution for Your Business"
          description="Explore our services and instantly preview how each solution works, what technologies we use, what you'll receive, and why it's the right choice."
        />

        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[25%_45%_30%] lg:gap-6">
          <ServiceNav categories={serviceCategories} activeId={activeId} onSelect={setActiveId} />
          <ServicePreview category={activeCategory} />
          <ServiceDetails category={activeCategory} />
        </div>
      </Container>
    </section>
  );
}
