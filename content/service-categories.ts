import type { LucideIcon } from "lucide-react";
import { Code, LayoutDashboard, LayoutTemplate, Megaphone, Palette } from "lucide-react";
import type { AccentColor } from "@/content/hero-screens";

export type ServiceVisual = "website" | "development" | "saas" | "marketing" | "design";

export interface ServiceCta {
  label: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  /** Short line shown under the label in the navigation. */
  subtitle: string;
  icon: LucideIcon;
  accent: AccentColor;
  description: string;
  /** Who this service line is built for. */
  bestFor: string[];
  /** Outcomes the client gets — never fabricated metrics or client results. */
  keyBenefits: string[];
  /** Representative tools/stack for this service line. */
  technologies: string[];
  /** Concrete artifacts handed over at the end of engagement. */
  deliverables: string[];
  /** Typical engagement length, shown as a range or cadence. */
  timeline: string;
  visual: ServiceVisual;
  /** Destination for the "View Service" action inside this category's panel. */
  cta: ServiceCta;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "web-design",
    label: "Web Design",
    subtitle: "Modern business websites",
    icon: LayoutTemplate,
    accent: "blue",
    description:
      "Premium, conversion-ready design systems that make your brand feel established from the first scroll.",
    bestFor: ["Startups", "Small Businesses", "Personal Brands", "Portfolios"],
    keyBenefits: [
      "Stronger first impression with visitors",
      "Higher on-page engagement and conversion",
      "Consistent brand experience across devices",
      "Faster page loads from lean, modern markup",
    ],
    technologies: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion"],
    deliverables: [
      "Responsive page designs",
      "Reusable UI component library",
      "Interactive prototypes",
      "Handoff-ready design system",
    ],
    timeline: "2–4 Weeks",
    visual: "website",
    cta: { label: "View Portfolio", href: "/portfolio" },
  },
  {
    id: "web-development",
    label: "Web Development",
    subtitle: "Custom scalable applications",
    icon: Code,
    accent: "cyan",
    description: "Custom production-grade web applications built using modern technologies with scalability and performance in mind.",
    bestFor: ["Startups", "Businesses", "Healthcare", "Education"],
    keyBenefits: [
      "Fast, SEO-friendly pages out of the box",
      "Secure by default, built on modern standards",
      "Easy to extend as your business grows",
      "Clean handover with documented code",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    deliverables: [
      "Responsive UI",
      "Admin Panel",
      "Authentication",
      "API Integration",
      "CMS",
      "Deployment",
    ],
    timeline: "3–8 Weeks",
    visual: "development",
    cta: { label: "View Service", href: "/services" },
  },
  {
    id: "saas-development",
    label: "SaaS Development",
    subtitle: "Cloud software platforms",
    icon: LayoutDashboard,
    accent: "purple",
    description: "Full products for healthcare, education, and business — built to scale from day one.",
    bestFor: ["Healthcare Providers", "Educational Institutions", "Growing Businesses", "Multi-location Operations"],
    keyBenefits: [
      "One platform to run daily operations",
      "Role-based access for every user type",
      "Built to scale as usage grows",
      "Actionable reporting out of the box",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "REST/GraphQL APIs"],
    deliverables: [
      "Multi-role dashboard application",
      "Database schema & API layer",
      "Reporting & analytics views",
      "Admin & user management console",
    ],
    timeline: "6–14 Weeks",
    visual: "saas",
    cta: { label: "Request a Quote", href: "/contact" },
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    subtitle: "SEO & Growth",
    icon: Megaphone,
    accent: "pink",
    description: "Growth infrastructure — campaigns, content, and tracking — built and measured honestly.",
    bestFor: ["Local Businesses", "E-commerce Brands", "B2B Companies", "Service Providers"],
    keyBenefits: [
      "Clearer visibility into what's driving results",
      "Consistent lead flow from owned channels",
      "Coordinated content and ad calendars",
      "Transparent, trackable performance reporting",
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "SEO Tooling", "Analytics"],
    deliverables: [
      "SEO audit & growth roadmap",
      "Ad campaign setup & tracking",
      "Content calendar",
      "Monthly performance dashboard",
    ],
    timeline: "Ongoing — Monthly Retainer",
    visual: "marketing",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
  {
    id: "graphic-design",
    label: "Graphic Design",
    subtitle: "Brand identity & creatives",
    icon: Palette,
    accent: "emerald",
    description: "Brand identity that holds up at any size, from a favicon to a billboard.",
    bestFor: ["New Brands", "Rebrands", "Marketing Teams", "Product Launches"],
    keyBenefits: [
      "Consistent, recognizable brand identity",
      "Assets ready for print and digital",
      "Faster turnaround on new marketing material",
      "A cohesive look across every touchpoint",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    deliverables: [
      "Logo suite & brand guidelines",
      "Social media template kit",
      "Business card & stationery designs",
      "Source files in editable formats",
    ],
    timeline: "1–3 Weeks",
    visual: "design",
    cta: { label: "View Portfolio", href: "/portfolio" },
  },
];
