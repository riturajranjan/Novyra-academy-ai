import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Braces,
  Cloud,
  Gauge,
  Headset,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Palette,
  Search,
  Server,
  Settings2,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { AccentColor } from "@/content/hero-screens";

export interface CapabilityChip {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: AccentColor;
}

/** How the team is actually structured, not a generic skills list. */
export const capabilityChips: CapabilityChip[] = [
  { id: "ui-ux", label: "UI/UX Design", icon: Palette, accent: "purple" },
  { id: "frontend", label: "Frontend", icon: Braces, accent: "blue" },
  { id: "backend", label: "Backend", icon: Server, accent: "cyan" },
  { id: "ai-automation", label: "AI Automation", icon: Sparkles, accent: "emerald" },
  { id: "seo", label: "SEO", icon: Search, accent: "blue" },
  { id: "cloud", label: "Cloud", icon: Cloud, accent: "cyan" },
  { id: "qa", label: "QA", icon: Settings2, accent: "amber" },
  { id: "project-management", label: "Project Management", icon: Workflow, accent: "pink" },
  { id: "api-development", label: "API Development", icon: BarChart3, accent: "purple" },
  { id: "analytics", label: "Analytics", icon: BarChart3, accent: "emerald" },
];

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  accent: AccentColor;
  /** Out of 6 grid columns — controls the bento asymmetry. */
  span: number;
  metric?: { label: string; value: string };
}

/** Every metric here is a technical standard the team builds to, never a
 * claimed historical track record — Novyra doesn't have a client history to
 * cite yet, so nothing here implies one. */
export const featureCards: FeatureCard[] = [
  {
    id: "seo-architecture",
    title: "SEO First Architecture",
    description: "Every build starts with a structure search engines can actually read.",
    bullets: ["Semantic markup and clean URL structure", "Fast, crawlable page architecture", "Structured data where it matters"],
    icon: Search,
    accent: "blue",
    span: 3,
  },
  {
    id: "performance",
    title: "95+ Lighthouse Performance",
    description: "A performance budget the team designs and builds against, not an afterthought.",
    bullets: ["Optimised images and lazy loading", "Minimal JavaScript payloads", "Edge-ready hosting on Vercel"],
    icon: Gauge,
    accent: "cyan",
    span: 3,
    metric: { label: "Performance Score", value: "95+" },
  },
  {
    id: "custom-ui",
    title: "Fully Custom UI/UX",
    description: "Designed around your brand in Figma, never a recycled template.",
    bullets: ["Designed for your brand, not a template", "Responsive across every device"],
    icon: Palette,
    accent: "purple",
    span: 2,
  },
  {
    id: "cms-dashboard",
    title: "CMS & Admin Dashboard",
    description: "Manage content and operations without needing a developer on call.",
    bullets: ["Edit content without touching code", "Role-based access control"],
    icon: LayoutDashboard,
    accent: "amber",
    span: 2,
    metric: { label: "Response Time", value: "<200ms" },
  },
  {
    id: "ai-integrations",
    title: "AI & Third-Party Integrations",
    description: "Payments, CRM, analytics, and AI-assisted workflows wired in cleanly.",
    bullets: ["Payment, CRM, and analytics integrations", "AI-assisted workflows where useful"],
    icon: Sparkles,
    accent: "emerald",
    span: 2,
  },
  {
    id: "post-launch",
    title: "Post-Launch Support",
    description: "Launch day isn't the finish line — the team that built it stays on to support it.",
    bullets: ["Monitoring and bug fixes after launch", "Guidance from the team that built it, not a new one"],
    icon: LifeBuoy,
    accent: "pink",
    span: 6,
  },
];

export interface FeatureStripItem {
  label: string;
  detail: string;
  icon: LucideIcon;
  accent: AccentColor;
}

/** Real capability statements — never a fabricated project count, client
 * satisfaction score, or years-in-business claim. */
export const featureStrip: FeatureStripItem[] = [
  { label: "Full-Stack Engineering", detail: "Every skill under one roof", icon: Layers, accent: "blue" },
  { label: "AI-Powered Development", detail: "Smarter workflows & automation", icon: Sparkles, accent: "purple" },
  { label: "Enterprise Architecture", detail: "Scalable & secure codebase", icon: Shield, accent: "emerald" },
  { label: "Long-Term Partnership", detail: "Support after launch", icon: Headset, accent: "amber" },
];

export interface TechItem {
  name: string;
  color: string;
}

export interface TechCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  items: TechItem[];
}

/** Grouped by discipline rather than one long list. Colors approximate
 * each technology's real brand mark; Next.js and Vercel use a neutral
 * gray rather than pure white so the badge stays visible in light theme
 * too — their real identity is monochrome, not colored. */
export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Braces,
    items: [
      { name: "React", color: "#22D3EE" },
      { name: "Next.js", color: "#94A3B8" },
      { name: "TypeScript", color: "#3B82F6" },
      { name: "JavaScript", color: "#EAB308" },
      { name: "HTML5", color: "#F97316" },
      { name: "Tailwind CSS", color: "#38BDF8" },
      { name: "Framer Motion", color: "#A78BFA" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", color: "#22C55E" },
      { name: "GraphQL", color: "#EC4899" },
      { name: "REST API", color: "#6366F1" },
      { name: "Express.js", color: "#94A3B8" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: Layers,
    items: [
      { name: "PostgreSQL", color: "#3B82F6" },
      { name: "MongoDB", color: "#22C55E" },
      { name: "MySQL", color: "#F97316" },
      { name: "Redis", color: "#EF4444" },
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    icon: Cloud,
    items: [
      { name: "AWS", color: "#F97316" },
      { name: "Docker", color: "#2563EB" },
      { name: "Vercel", color: "#94A3B8" },
      { name: "GitHub Actions", color: "#8B5CF6" },
    ],
  },
];

export interface TrustMetric {
  label: string;
  value: string;
}

/** Only verifiable facts — a real headcount of technologies/disciplines
 * and a real engineering standard (Lighthouse target), never a claimed
 * project count, client-satisfaction score, or uptime figure Novyra has
 * no data to back. */
export const trustMetrics: TrustMetric[] = [
  { label: "Modern Technologies", value: "19" },
  { label: "Engineering Disciplines", value: "4" },
  { label: "Lighthouse Target", value: "95+" },
  { label: "TypeScript Codebase", value: "100%" },
];

/** Honest, capability-based badges only — no invented project counts or
 * years-in-business claims. */
export const heroBadges = ["AI-Powered", "Enterprise-Grade"];

export const teamRoles: { label: string; initials: string; accent: AccentColor }[] = [
  { label: "Design", initials: "UX", accent: "purple" },
  { label: "Frontend", initials: "FE", accent: "blue" },
  { label: "Backend", initials: "BE", accent: "cyan" },
  { label: "QA", initials: "QA", accent: "amber" },
];
