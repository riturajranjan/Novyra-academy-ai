import type { LucideIcon } from "lucide-react";
import {
  Award,
  GraduationCap,
  Globe,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  Lightbulb,
  Megaphone,
  Palette,
  Rocket,
  Rows3,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Sprout,
  Target,
  TrendingUp,
  UserCog,
  Users,
  Workflow,
} from "lucide-react";

export interface AdvisorOption {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  /** Short at-a-glance badge — only populated for Step 1 options. */
  badge?: string;
  /** Approximate timeline range — only populated for Step 1 options; the
   * roadmap result later refines this per project stage. */
  timeline?: string;
}

/** Step 1 — what the visitor wants to build. Every option maps back to one
 * of Novyra's five real service lines, never an invented offering. */
export const needOptions: AdvisorOption[] = [
  {
    id: "business-website",
    label: "Business Website",
    description: "Build trust and generate inquiries",
    icon: Globe,
    badge: "Popular Choice",
    timeline: "2–4 Weeks",
  },
  {
    id: "ecommerce",
    label: "eCommerce Store",
    description: "Sell products online",
    icon: ShoppingCart,
    badge: "Fast Launch",
    timeline: "4–6 Weeks",
  },
  {
    id: "hospital-software",
    label: "Hospital Platform",
    description: "Digitise healthcare operations",
    icon: HeartPulse,
    badge: "Enterprise Ready",
    timeline: "8–10 Weeks",
  },
  {
    id: "school-erp",
    label: "School ERP",
    description: "Manage academics and administration",
    icon: GraduationCap,
    badge: "Enterprise Ready",
    timeline: "8–10 Weeks",
  },
  {
    id: "saas-product",
    label: "SaaS Product",
    description: "Launch a scalable platform",
    icon: LayoutDashboard,
    badge: "Scalable Platform",
    timeline: "6–9 Weeks",
  },
  {
    id: "crm",
    label: "CRM System",
    description: "Organise leads and customers",
    icon: Users,
    badge: "Best for Teams",
    timeline: "6–8 Weeks",
  },
  {
    id: "branding",
    label: "Brand Identity",
    description: "Create a professional visual system",
    icon: Palette,
    badge: "Fast Launch",
    timeline: "2–3 Weeks",
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    description: "Build visibility and generate leads",
    icon: Megaphone,
    badge: "Popular Choice",
    timeline: "3–4 Weeks",
  },
];

/** Step 2 — the outcome that matters most right now. Used to surface a
 * relevant focus note on the result, not to change which service is
 * recommended. */
export const goalOptions: AdvisorOption[] = [
  {
    id: "generate-leads",
    label: "Generate More Leads",
    description: "Turn visitors into enquiries",
    icon: Target,
    badge: "🚀 Fast Growth",
    timeline: "2–4 Weeks",
  },
  {
    id: "sell-online",
    label: "Sell Online",
    description: "Open a direct online sales channel",
    icon: ShoppingBag,
    badge: "⭐ Popular",
    timeline: "4–6 Weeks",
  },
  {
    id: "automate-operations",
    label: "Automate Operations",
    description: "Remove manual, repetitive work",
    icon: Workflow,
    badge: "🤖 AI Recommended",
    timeline: "6–8 Weeks",
  },
  {
    id: "launch-mvp",
    label: "Launch an MVP",
    description: "Prove the concept with the smallest scope",
    icon: Rocket,
    badge: "⚡ Quick Launch",
    timeline: "3–5 Weeks",
  },
  {
    id: "improve-brand",
    label: "Improve Brand Presence",
    description: "Build a consistent, recognisable identity",
    icon: Sparkles,
    badge: "🏢 Enterprise",
    timeline: "2–3 Weeks",
  },
  {
    id: "manage-customers",
    label: "Manage Customers",
    description: "Keep every lead and client organised",
    icon: UserCog,
    badge: "📈 High ROI",
    timeline: "6–8 Weeks",
  },
  {
    id: "improve-seo",
    label: "Improve SEO Visibility",
    description: "Rank higher for the searches that matter",
    icon: LineChart,
    badge: "⭐ Popular",
    timeline: "3–4 Weeks",
  },
  {
    id: "scale-product",
    label: "Scale an Existing Product",
    description: "Grow what's already working",
    icon: TrendingUp,
    badge: "🚀 Fast Growth",
    timeline: "8–10 Weeks",
  },
];

export type StageId = "idea" | "starting" | "growing" | "scaling" | "established";

/** Step 3 — where the business is today. Shifts the estimated-timeline
 * range only. */
export const stageOptions: (AdvisorOption & { id: StageId })[] = [
  { id: "idea", label: "Idea Stage", description: "Planning something new", icon: Lightbulb },
  { id: "starting", label: "Starting", description: "Launching the business", icon: Sprout },
  { id: "growing", label: "Growing", description: "Getting consistent customers", icon: TrendingUp },
  { id: "scaling", label: "Scaling", description: "Expanding systems and operations", icon: Rows3 },
  { id: "established", label: "Established", description: "Improving an existing organisation", icon: Award },
];

interface NeedRecommendation {
  service: string;
  serviceId: string;
  insight: string;
  technology: string[];
  deliverables: string[];
  roadmap: string[];
  timelineByStage: Record<StageId, string>;
}

const recommendations: Record<string, NeedRecommendation> = {
  "business-website": {
    service: "Business Website Growth Package",
    serviceId: "web-design",
    insight:
      "Great choice. A professional website can help establish trust, explain your services clearly and turn visitors into inquiries.",
    technology: ["Next.js", "Tailwind CSS", "Framer Motion"],
    deliverables: [
      "Responsive business website",
      "Custom UI design",
      "Contact and WhatsApp integration",
      "SEO-ready structure",
      "Analytics setup",
      "CMS or admin support",
    ],
    roadmap: [
      "Brand and UX Planning",
      "Premium Website Design",
      "Next.js Development",
      "Lead Capture Setup",
      "Basic SEO and Analytics",
      "Launch and Support",
    ],
    timelineByStage: {
      idea: "3–4 weeks",
      starting: "3–5 weeks",
      growing: "4–5 weeks",
      scaling: "5–6 weeks",
      established: "5–7 weeks",
    },
  },
  ecommerce: {
    service: "eCommerce Launch Package",
    serviceId: "web-development",
    insight:
      "Selling online works best with a frictionless path from product to checkout — that's the thread running through this build.",
    technology: ["Next.js", "Stripe", "Headless commerce backend"],
    deliverables: [
      "Product catalog & search",
      "Cart & checkout flow",
      "Payment integration",
      "Order management dashboard",
      "Mobile-optimised storefront",
      "Analytics setup",
    ],
    roadmap: [
      "Catalog and UX Planning",
      "Storefront Design",
      "Next.js Storefront Build",
      "Payments and Checkout",
      "Order Management Setup",
      "Launch and Support",
    ],
    timelineByStage: {
      idea: "5–6 weeks",
      starting: "5–7 weeks",
      growing: "6–8 weeks",
      scaling: "8–10 weeks",
      established: "8–12 weeks",
    },
  },
  "hospital-software": {
    service: "Hospital Platform Package",
    serviceId: "saas-development",
    insight:
      "Healthcare platforms succeed on clarity — clean records, fast scheduling, and access that matches each role.",
    technology: ["Next.js", "Node.js", "PostgreSQL"],
    deliverables: [
      "Patient records module",
      "Appointment scheduling",
      "Staff & admin dashboards",
      "Role-based access control",
      "Reporting views",
      "Deployment & support",
    ],
    roadmap: [
      "Workflow and Data Planning",
      "Platform UX Design",
      "Core Records Development",
      "Scheduling and Roles Setup",
      "Reporting Dashboards",
      "Launch and Support",
    ],
    timelineByStage: {
      idea: "8–9 weeks",
      starting: "8–10 weeks",
      growing: "10–12 weeks",
      scaling: "12–16 weeks",
      established: "14–20 weeks",
    },
  },
  "school-erp": {
    service: "School ERP Package",
    serviceId: "saas-development",
    insight:
      "A good school platform gives every group — admin, teachers, parents — exactly the view they need, nothing more.",
    technology: ["Next.js", "Node.js", "PostgreSQL"],
    deliverables: [
      "Student & attendance management",
      "Fee & admin dashboard",
      "Parent-teacher portal",
      "Role-based access control",
      "Reporting views",
      "Deployment & support",
    ],
    roadmap: [
      "Workflow and Data Planning",
      "Platform UX Design",
      "Core Records Development",
      "Portal and Roles Setup",
      "Reporting Dashboards",
      "Launch and Support",
    ],
    timelineByStage: {
      idea: "8–9 weeks",
      starting: "8–10 weeks",
      growing: "10–12 weeks",
      scaling: "12–15 weeks",
      established: "13–18 weeks",
    },
  },
  "saas-product": {
    service: "SaaS Launch Package",
    serviceId: "saas-development",
    insight:
      "Launching a platform is about proving the core loop first, then layering in billing and scale once it's working.",
    technology: ["Next.js", "Node.js", "PostgreSQL", "Stripe billing"],
    deliverables: [
      "Multi-tenant architecture",
      "Subscription billing",
      "Admin & user dashboards",
      "API layer",
      "Onboarding flow",
      "Deployment & support",
    ],
    roadmap: [
      "Product and Architecture Planning",
      "Core Platform UX Design",
      "Multi-tenant Development",
      "Billing and Onboarding Setup",
      "Admin Dashboards",
      "Launch and Support",
    ],
    timelineByStage: {
      idea: "6–7 weeks",
      starting: "6–9 weeks",
      growing: "9–11 weeks",
      scaling: "11–14 weeks",
      established: "12–16 weeks",
    },
  },
  crm: {
    service: "CRM Platform Package",
    serviceId: "saas-development",
    insight:
      "A CRM only earns its keep if the team actually uses it — so this build centers a clean, searchable customer record.",
    technology: ["Next.js", "Node.js", "PostgreSQL"],
    deliverables: [
      "Contact & pipeline management",
      "Sales dashboard",
      "Role-based access control",
      "Reporting views",
      "Notifications & reminders",
      "Deployment & support",
    ],
    roadmap: [
      "Workflow and Pipeline Planning",
      "CRM UX Design",
      "Core Records Development",
      "Pipeline and Roles Setup",
      "Reporting Dashboards",
      "Launch and Support",
    ],
    timelineByStage: {
      idea: "6–7 weeks",
      starting: "6–8 weeks",
      growing: "8–10 weeks",
      scaling: "10–13 weeks",
      established: "11–15 weeks",
    },
  },
  branding: {
    service: "Brand Identity Package",
    serviceId: "graphic-design",
    insight:
      "A strong identity is the fastest way to look established — this path builds a system you can reuse everywhere.",
    technology: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    deliverables: [
      "Logo suite & brand guidelines",
      "Business card & stationery designs",
      "Social media template kit",
      "Editable source files",
    ],
    roadmap: [
      "Brand Discovery",
      "Logo and Identity Design",
      "Brand Guidelines",
      "Collateral and Templates",
      "Handover and Support",
    ],
    timelineByStage: {
      idea: "2–3 weeks",
      starting: "2–3 weeks",
      growing: "3–4 weeks",
      scaling: "3–5 weeks",
      established: "4–6 weeks",
    },
  },
  "digital-marketing": {
    service: "Digital Marketing Package",
    serviceId: "digital-marketing",
    insight:
      "Visibility compounds — the earlier tracking and content are in place, the faster the rest of this pays off.",
    technology: ["Google Ads", "Meta Ads Manager", "SEO Tooling", "Analytics"],
    deliverables: [
      "SEO audit & roadmap",
      "Ad campaign setup & tracking",
      "Content calendar",
      "Monthly performance dashboard",
    ],
    roadmap: [
      "Audit and Strategy",
      "Tracking and Analytics Setup",
      "Campaign and Content Setup",
      "Launch and Optimisation",
      "Monthly Reporting",
    ],
    timelineByStage: {
      idea: "3–4 weeks to launch",
      starting: "3–4 weeks to launch",
      growing: "2–3 weeks to launch",
      scaling: "4–5 weeks to launch",
      established: "4–6 weeks to launch",
    },
  },
};

const focusByGoal: Record<string, string> = {
  "generate-leads": "Emphasize lead-capture forms and calls to action throughout the build.",
  "sell-online": "Prioritize a frictionless checkout and payment experience.",
  "automate-operations": "Focus on workflows that remove manual, repetitive work first.",
  "launch-mvp": "Trim scope to the smallest version that proves the concept.",
  "improve-brand": "Lead with visual identity and consistency across every touchpoint.",
  "manage-customers": "Center the build around a clear, searchable customer record.",
  "improve-seo": "Prioritize on-page structure and content that ranks.",
  "scale-product": "Focus on the systems and performance headroom growth needs next.",
};

interface RoadmapPhaseInfo {
  description: string;
  status: string;
}

/** One entry per unique roadmap phase name used across every
 * recommendation — a short, factual elaboration of what that phase
 * involves, plus a category chip. Several phase names repeat across
 * services (e.g. "Launch and Support"), so this is keyed by title rather
 * than duplicated per-service. */
const ROADMAP_PHASE_INFO: Record<string, RoadmapPhaseInfo> = {
  "Brand and UX Planning": { description: "Define the brand direction and user experience before design begins.", status: "Planning" },
  "Premium Website Design": { description: "Design every page with a premium, conversion-ready visual system.", status: "Design" },
  "Next.js Development": { description: "Build the site on a fast, modern, production-grade stack.", status: "Development" },
  "Lead Capture Setup": { description: "Wire up forms and calls-to-action that turn visits into enquiries.", status: "Setup" },
  "Basic SEO and Analytics": { description: "Structure pages for search and connect analytics tracking.", status: "Setup" },
  "Launch and Support": { description: "Deploy to production and provide guidance after launch.", status: "Launch" },
  "Catalog and UX Planning": { description: "Map the product catalog and the end-to-end shopping journey.", status: "Planning" },
  "Storefront Design": { description: "Design a storefront built to convert browsers into buyers.", status: "Design" },
  "Next.js Storefront Build": { description: "Build the storefront on a fast, modern, production-grade stack.", status: "Development" },
  "Payments and Checkout": { description: "Integrate secure payments and a frictionless checkout flow.", status: "Setup" },
  "Order Management Setup": { description: "Set up order tracking and fulfilment for the storefront.", status: "Setup" },
  "Workflow and Data Planning": { description: "Map the core workflows and the data model the platform runs on.", status: "Planning" },
  "Platform UX Design": { description: "Design an interface tailored to how each role actually works.", status: "Design" },
  "Core Records Development": { description: "Build the core records system the whole platform relies on.", status: "Development" },
  "Scheduling and Roles Setup": { description: "Configure scheduling and role-based access for every user type.", status: "Setup" },
  "Reporting Dashboards": { description: "Build dashboards that turn platform data into clear reporting.", status: "Development" },
  "Portal and Roles Setup": { description: "Configure the parent-teacher portal and role-based access.", status: "Setup" },
  "Product and Architecture Planning": { description: "Define the product scope and the architecture it's built on.", status: "Planning" },
  "Core Platform UX Design": { description: "Design the core product experience for every user role.", status: "Design" },
  "Multi-tenant Development": { description: "Build the multi-tenant architecture the platform runs on.", status: "Development" },
  "Billing and Onboarding Setup": { description: "Set up subscription billing and a smooth onboarding flow.", status: "Setup" },
  "Admin Dashboards": { description: "Build admin dashboards for managing the platform day to day.", status: "Development" },
  "Workflow and Pipeline Planning": { description: "Map the sales pipeline and the workflows around it.", status: "Planning" },
  "CRM UX Design": { description: "Design an interface built around a clear, searchable customer record.", status: "Design" },
  "Pipeline and Roles Setup": { description: "Configure the sales pipeline and role-based access controls.", status: "Setup" },
  "Brand Discovery": { description: "Understand the brand, audience, and positioning before design begins.", status: "Planning" },
  "Logo and Identity Design": { description: "Design the logo suite and core visual identity.", status: "Design" },
  "Brand Guidelines": { description: "Document how the identity is used consistently everywhere.", status: "Design" },
  "Collateral and Templates": { description: "Design a reusable kit of social and print collateral.", status: "Development" },
  "Handover and Support": { description: "Deliver final source files and guidance for ongoing use.", status: "Launch" },
  "Audit and Strategy": { description: "Audit the current presence and define the growth strategy.", status: "Planning" },
  "Tracking and Analytics Setup": { description: "Set up tracking so every channel's performance is measurable.", status: "Setup" },
  "Campaign and Content Setup": { description: "Build out ad campaigns and the content calendar behind them.", status: "Setup" },
  "Launch and Optimisation": { description: "Launch campaigns and begin optimising based on real results.", status: "Launch" },
  "Monthly Reporting": { description: "Deliver clear, recurring reporting on performance each month.", status: "Launch" },
};

export function getRoadmapPhaseInfo(title: string): RoadmapPhaseInfo {
  return ROADMAP_PHASE_INFO[title] ?? { description: "Part of the delivery plan for this project.", status: "Planning" };
}

export interface AdvisorResult {
  service: string;
  serviceId: string;
  insight: string;
  technology: string[];
  timeline: string;
  deliverables: string[];
  roadmap: string[];
  focus: string;
}

export function getInsight(needId: string): string | undefined {
  return recommendations[needId]?.insight;
}

export function getRecommendation(needId: string, goalId: string, stageId: StageId): AdvisorResult | null {
  const rec = recommendations[needId];
  if (!rec) return null;
  return {
    service: rec.service,
    serviceId: rec.serviceId,
    insight: rec.insight,
    technology: rec.technology,
    timeline: rec.timelineByStage[stageId],
    deliverables: rec.deliverables,
    roadmap: rec.roadmap,
    focus: focusByGoal[goalId] ?? "",
  };
}
