import type { LucideIcon } from "lucide-react";
import {
  Building2,
  GraduationCap,
  Globe,
  HeartPulse,
  LayoutDashboard,
  Megaphone,
  Palette,
  Rocket,
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
  icon: LucideIcon;
}

/** Question 1 — what the visitor needs built. Drives the recommended
 * service; every option maps back to one of Novyra's five real service
 * lines, never an invented offering. */
export const needOptions: AdvisorOption[] = [
  { id: "business-website", label: "Business Website", icon: Globe },
  { id: "ecommerce", label: "eCommerce", icon: ShoppingCart },
  { id: "hospital-software", label: "Hospital Software", icon: HeartPulse },
  { id: "school-erp", label: "School ERP", icon: GraduationCap },
  { id: "saas-product", label: "SaaS Product", icon: LayoutDashboard },
  { id: "crm", label: "CRM", icon: Users },
  { id: "branding", label: "Branding", icon: Palette },
  { id: "digital-marketing", label: "Digital Marketing", icon: Megaphone },
];

/** Question 2 — primary goal. Used only to surface a relevant focus note on
 * the result, not to change which service is recommended. */
export const goalOptions: AdvisorOption[] = [
  { id: "generate-leads", label: "Generate Leads", icon: Target },
  { id: "sell-online", label: "Sell Online", icon: ShoppingBag },
  { id: "automate-operations", label: "Automate Operations", icon: Workflow },
  { id: "improve-brand", label: "Improve Brand", icon: Sparkles },
  { id: "launch-mvp", label: "Launch MVP", icon: Rocket },
  { id: "manage-customers", label: "Manage Customers", icon: UserCog },
];

export type StageId = "new-business" | "existing-business" | "scaling";

/** Question 3 — project stage. Shifts the estimated-timeline range only. */
export const stageOptions: (AdvisorOption & { id: StageId })[] = [
  { id: "new-business", label: "New Business", icon: Sprout },
  { id: "existing-business", label: "Existing Business", icon: Building2 },
  { id: "scaling", label: "Scaling", icon: TrendingUp },
];

interface NeedRecommendation {
  service: string;
  serviceId: string;
  technology: string[];
  deliverables: string[];
  timelineByStage: Record<StageId, string>;
}

const recommendations: Record<string, NeedRecommendation> = {
  "business-website": {
    service: "Web Design",
    serviceId: "web-design",
    technology: ["Next.js", "Tailwind CSS", "Framer Motion"],
    deliverables: ["Responsive marketing site", "On-page SEO structure", "Lead capture forms", "CMS-ready content blocks"],
    timelineByStage: {
      "new-business": "3–4 weeks",
      "existing-business": "4–5 weeks",
      scaling: "5–7 weeks",
    },
  },
  ecommerce: {
    service: "Web Development",
    serviceId: "web-development",
    technology: ["Next.js", "Stripe", "Headless commerce backend"],
    deliverables: ["Product catalog & search", "Cart & checkout flow", "Payment integration", "Order management dashboard"],
    timelineByStage: {
      "new-business": "5–7 weeks",
      "existing-business": "6–8 weeks",
      scaling: "8–12 weeks",
    },
  },
  "hospital-software": {
    service: "SaaS Development",
    serviceId: "saas-development",
    technology: ["Next.js", "Node.js", "PostgreSQL"],
    deliverables: ["Patient records module", "Appointment scheduling", "Staff & admin dashboards", "Role-based access control"],
    timelineByStage: {
      "new-business": "8–10 weeks",
      "existing-business": "10–14 weeks",
      scaling: "14–20 weeks",
    },
  },
  "school-erp": {
    service: "SaaS Development",
    serviceId: "saas-development",
    technology: ["Next.js", "Node.js", "PostgreSQL"],
    deliverables: ["Student & attendance management", "Fee & admin dashboard", "Parent-teacher portal", "Role-based access control"],
    timelineByStage: {
      "new-business": "8–10 weeks",
      "existing-business": "10–13 weeks",
      scaling: "13–18 weeks",
    },
  },
  "saas-product": {
    service: "SaaS Development",
    serviceId: "saas-development",
    technology: ["Next.js", "Node.js", "PostgreSQL", "Stripe billing"],
    deliverables: ["Multi-tenant architecture", "Subscription billing", "Admin & user dashboards", "API layer"],
    timelineByStage: {
      "new-business": "6–9 weeks",
      "existing-business": "9–12 weeks",
      scaling: "12–16 weeks",
    },
  },
  crm: {
    service: "SaaS Development",
    serviceId: "saas-development",
    technology: ["Next.js", "Node.js", "PostgreSQL"],
    deliverables: ["Contact & pipeline management", "Sales dashboard", "Role-based access control", "Reporting views"],
    timelineByStage: {
      "new-business": "6–8 weeks",
      "existing-business": "8–11 weeks",
      scaling: "11–15 weeks",
    },
  },
  branding: {
    service: "Graphic Design",
    serviceId: "graphic-design",
    technology: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    deliverables: ["Logo suite & brand guidelines", "Business card & stationery designs", "Social media template kit", "Editable source files"],
    timelineByStage: {
      "new-business": "2–3 weeks",
      "existing-business": "3–4 weeks",
      scaling: "4–6 weeks",
    },
  },
  "digital-marketing": {
    service: "Digital Marketing",
    serviceId: "digital-marketing",
    technology: ["Google Ads", "Meta Ads Manager", "SEO Tooling", "Analytics"],
    deliverables: ["SEO audit & roadmap", "Ad campaign setup & tracking", "Content calendar", "Monthly performance dashboard"],
    timelineByStage: {
      "new-business": "3–4 weeks to launch",
      "existing-business": "2–3 weeks to launch",
      scaling: "4–6 weeks to launch",
    },
  },
};

const focusByGoal: Record<string, string> = {
  "generate-leads": "Emphasize lead-capture forms and calls to action throughout the build.",
  "sell-online": "Prioritize a frictionless checkout and payment experience.",
  "automate-operations": "Focus on workflows that remove manual, repetitive work first.",
  "improve-brand": "Lead with visual identity and consistency across every touchpoint.",
  "launch-mvp": "Trim scope to the smallest version that proves the concept.",
  "manage-customers": "Center the build around a clear, searchable customer record.",
};

export interface AdvisorResult {
  service: string;
  serviceId: string;
  technology: string[];
  timeline: string;
  deliverables: string[];
  focus: string;
}

export function getRecommendation(needId: string, goalId: string, stageId: StageId): AdvisorResult | null {
  const rec = recommendations[needId];
  if (!rec) return null;
  return {
    service: rec.service,
    serviceId: rec.serviceId,
    technology: rec.technology,
    timeline: rec.timelineByStage[stageId],
    deliverables: rec.deliverables,
    focus: focusByGoal[goalId] ?? "",
  };
}
