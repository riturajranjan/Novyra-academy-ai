import type { LucideIcon } from "lucide-react";
import { Building2, Globe, GraduationCap, HeartPulse, LayoutDashboard, UtensilsCrossed } from "lucide-react";
import type { AccentColor } from "@/content/hero-screens";

export type CaseStudyFilter = "All" | "Healthcare" | "Education" | "Business" | "SaaS" | "eCommerce" | "CRM" | "AI";

export const filters: CaseStudyFilter[] = ["All", "Healthcare", "Education", "Business", "SaaS", "eCommerce", "CRM", "AI"];

export interface ConceptBuild {
  id: string;
  category: Exclude<CaseStudyFilter, "All">;
  industryLabel: string;
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  timeline: string;
  icon: LucideIcon;
  accent: AccentColor;
}

/** These are concept explorations, not completed client engagements —
 * Novyra is a new studio without a real project history to cite yet, so
 * nothing here claims a real client, a real measured outcome, or a real
 * launch date. Timelines match the same estimates already used in the
 * Solution Advisor for consistency. */
export const conceptBuilds: ConceptBuild[] = [
  {
    id: "hospital-platform",
    category: "Healthcare",
    industryLabel: "Healthcare",
    title: "Hospital Management Platform",
    description:
      "A concept exploration for how a multi-department hospital could centralise patient records, scheduling, and staff access in one platform.",
    highlights: ["6 core modules", "Role-based dashboards for every staff type", "Built for HIPAA-conscious data handling"],
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    timeline: "8–10 weeks",
    icon: HeartPulse,
    accent: "cyan",
  },
  {
    id: "school-erp",
    category: "Education",
    industryLabel: "Education",
    title: "School ERP Platform",
    description: "A concept for managing attendance, fees, and communication across students, teachers, and parents in one place.",
    highlights: ["Parent-teacher portal", "Attendance & fee tracking", "Role-based access for every user type"],
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    timeline: "8–10 weeks",
    icon: GraduationCap,
    accent: "emerald",
  },
  {
    id: "restaurant-website",
    category: "Business",
    industryLabel: "Hospitality",
    title: "Restaurant Website",
    description: "A concept for a premium restaurant presence — menu, reservations, and location, built to load instantly on mobile.",
    highlights: ["Mobile-first menu browsing", "Reservation request flow", "Built for local SEO"],
    techStack: ["Next.js", "Tailwind CSS"],
    timeline: "2–4 weeks",
    icon: UtensilsCrossed,
    accent: "amber",
  },
  {
    id: "real-estate-crm",
    category: "CRM",
    industryLabel: "Real Estate",
    title: "Real Estate CRM",
    description: "A concept CRM for tracking listings, leads, and follow-ups across a real estate sales team.",
    highlights: ["Pipeline & lead tracking", "Listing management dashboard", "Team-wide visibility on follow-ups"],
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    timeline: "6–8 weeks",
    icon: Building2,
    accent: "purple",
  },
  {
    id: "business-website",
    category: "Business",
    industryLabel: "Business",
    title: "Business Website",
    description: "A concept for a premium business presence built to establish credibility and generate qualified enquiries.",
    highlights: ["Conversion-focused page structure", "Lead capture built in", "SEO-ready from day one"],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    timeline: "2–4 weeks",
    icon: Globe,
    accent: "blue",
  },
  {
    id: "ai-saas-dashboard",
    category: "SaaS",
    industryLabel: "SaaS",
    title: "AI SaaS Dashboard",
    description: "A concept for a multi-tenant SaaS dashboard with AI-assisted workflows layered into everyday admin tasks.",
    highlights: ["Multi-tenant architecture", "AI-assisted workflow automation", "Usage analytics built in"],
    techStack: ["Next.js", "Node.js", "OpenAI", "PostgreSQL"],
    timeline: "6–9 weeks",
    icon: LayoutDashboard,
    accent: "pink",
  },
];

/** The generic delivery process every concept (and every real project)
 * would move through — not a specific historical timeline for a specific
 * past client. */
export const processSteps = ["Discovery", "Design", "Development", "Testing", "Launch", "Growth"];

export const techStackBadges = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "OpenAI", "AWS", "Vercel"];
