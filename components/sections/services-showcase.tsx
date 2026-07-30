"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BokehBackground } from "@/components/ui/bokeh-background";
import { ServiceNav } from "@/components/services/service-nav";
import { ServicePreview } from "@/components/services/service-preview";
import { ServiceDetails } from "@/components/services/service-details";
import { ServiceTrustCard } from "@/components/services/service-trust-card";
import { serviceCategories } from "@/content/service-categories";

/** Interactive services showcase — a three-panel switcher (navigation,
 * live preview, details) that collapses to a single stacked column below
 * `lg`. One layout, breakpoint-driven, so mobile/tablet/desktop never drift
 * into separate implementations. */
export function ServicesShowcase() {
  const t = useTranslations("services");
  const [activeId, setActiveId] = useState(serviceCategories[0].id);
  const activeCategory = serviceCategories.find((c) => c.id === activeId) ?? serviceCategories[0];

  return (
    <section className="relative isolate overflow-hidden py-14 md:py-20">
      <BokehBackground className="opacity-70" />

      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow={t("showcase.eyebrow")}
          title={t("showcase.title")}
          description={t("showcase.description")}
        />

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)_300px]">
          <div className="flex flex-col gap-5">
            <ServiceNav categories={serviceCategories} activeId={activeId} onSelect={setActiveId} />
            <div className="hidden md:block">
              <ServiceTrustCard />
            </div>
          </div>

          <ServicePreview category={activeCategory} />

          <div className="md:col-span-2 lg:col-span-1">
            <ServiceDetails category={activeCategory} />
          </div>

          <div className="md:hidden">
            <ServiceTrustCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
