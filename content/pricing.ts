import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code2,
  Compass,
  Landmark,
  LifeBuoy,
  Palette,
  Rocket,
  Rows3,
  Sparkles,
  TestTube2,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import type { AccentColor } from "@/content/hero-screens";

export const pricingBadges = ["Free Consultation", "Transparent Pricing", "Custom Proposal", "No Hidden Charges"];

export type BillingMode = "project" | "retainer";

export const billingModes: { id: BillingMode; label: string }[] = [
  { id: "project", label: "Project Based" },
  { id: "retainer", label: "Monthly Retainer" },
];

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  accent: AccentColor;
  featured?: boolean;
  priceLabel: string;
  price: Record<BillingMode, string>;
  priceSuffix: Record<BillingMode, string>;
  inheritsFrom?: string;
  features: string[];
  cta: string;
  ctaHref: string;
}

/** Retainer figures are placeholder monthly-equivalent estimates — the spec
 * only supplied project-based pricing, so these are a reasonable starting
 * point to edit once real retainer terms are set, not a claim already
 * committed to a client. */
export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for startups and small businesses.",
    icon: Rocket,
    accent: "blue",
    priceLabel: "Starting From",
    price: { project: "₹29,999", retainer: "₹12,999" },
    priceSuffix: { project: "+", retainer: "+/mo" },
    features: [
      "Responsive Website",
      "Modern UI Design",
      "Mobile Optimized",
      "Contact Forms",
      "Basic SEO",
      "CMS Integration",
      "Performance Optimized",
      "Google Analytics",
      "2 Weeks Support",
    ],
    cta: "Get Started",
    ctaHref: "/contact",
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Most popular for scaling businesses.",
    icon: Sparkles,
    accent: "purple",
    featured: true,
    priceLabel: "Starting From",
    price: { project: "₹79,999", retainer: "₹34,999" },
    priceSuffix: { project: "+", retainer: "+/mo" },
    inheritsFrom: "Starter",
    features: [
      "Premium UI/UX",
      "Custom Development",
      "Advanced SEO",
      "Blog System",
      "Dashboard",
      "API Integration",
      "AI Features",
      "Authentication",
      "Analytics Dashboard",
      "Performance Optimization",
      "Security Hardening",
      "One Month Support",
    ],
    cta: "Book Free Consultation",
    ctaHref: "/contact",
  },
  {
    id: "business",
    name: "Business",
    tagline: "Ideal for growing businesses.",
    icon: Briefcase,
    accent: "cyan",
    priceLabel: "Starting From",
    price: { project: "₹1,49,999", retainer: "₹64,999" },
    priceSuffix: { project: "+", retainer: "+/mo" },
    inheritsFrom: "Professional",
    features: [
      "CRM",
      "ERP",
      "Automation",
      "AI Integration",
      "Payment Gateway",
      "Notifications",
      "Reports",
      "Multi-user Roles",
      "Cloud Deployment",
      "Training Sessions",
    ],
    cta: "Schedule Consultation",
    ctaHref: "/contact",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Large organizations.",
    icon: Landmark,
    accent: "amber",
    priceLabel: "",
    price: { project: "Custom Pricing", retainer: "Custom Pricing" },
    priceSuffix: { project: "", retainer: "" },
    features: [
      "Dedicated Team",
      "Architecture Planning",
      "Enterprise Security",
      "DevOps",
      "Monitoring",
      "SLA Support",
      "Priority Development",
      "Unlimited Scalability",
      "Dedicated Project Manager",
      "Ongoing Maintenance",
    ],
    cta: "Talk To Sales",
    ctaHref: "/contact",
  },
];

export type CompareValue = true | false | string;

export interface CompareRow {
  label: string;
  values: Record<string, CompareValue>;
}

export const compareRows: CompareRow[] = [
  { label: "Responsive Design", values: { starter: true, professional: true, business: true, enterprise: true } },
  { label: "SEO", values: { starter: "Basic", professional: "Advanced", business: "Advanced", enterprise: "Advanced" } },
  { label: "CMS", values: { starter: true, professional: true, business: true, enterprise: true } },
  { label: "Dashboard", values: { starter: false, professional: true, business: true, enterprise: true } },
  { label: "AI Integration", values: { starter: false, professional: "Basic", business: true, enterprise: true } },
  { label: "Payment Gateway", values: { starter: false, professional: false, business: true, enterprise: true } },
  { label: "API Support", values: { starter: false, professional: true, business: true, enterprise: true } },
  { label: "Analytics", values: { starter: "Basic", professional: "Advanced", business: true, enterprise: true } },
  { label: "Performance", values: { starter: true, professional: true, business: true, enterprise: true } },
  { label: "Security", values: { starter: false, professional: "Hardened", business: true, enterprise: "Enterprise-Grade" } },
  { label: "Hosting Assistance", values: { starter: false, professional: false, business: true, enterprise: true } },
  { label: "Maintenance", values: { starter: "2 Weeks", professional: "1 Month", business: "1 Month", enterprise: "Ongoing" } },
  { label: "Training", values: { starter: false, professional: false, business: true, enterprise: true } },
];

export interface TimelineStep {
  label: string;
  icon: LucideIcon;
}

export const pricingTimeline: TimelineStep[] = [
  { label: "Discovery", icon: Compass },
  { label: "Planning", icon: Rows3 },
  { label: "Design", icon: Palette },
  { label: "Development", icon: Code2 },
  { label: "Testing", icon: TestTube2 },
  { label: "Launch", icon: Rocket },
  { label: "Support", icon: LifeBuoy },
];

export interface ValueCard {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: AccentColor;
}

export const valueCards: ValueCard[] = [
  { title: "Transparent Pricing", description: "No hidden charges — the quote you agree to is the quote you pay.", icon: Wallet, accent: "blue" },
  { title: "Scalable Packages", description: "Start where it makes sense and upgrade any time as your needs grow.", icon: TrendingUp, accent: "purple" },
  { title: "Dedicated Team", description: "Real engineers and designers on your project, not a rotating pool.", icon: Users, accent: "cyan" },
  { title: "Post Launch Support", description: "We stay on after launch to fix issues and help things run smoothly.", icon: LifeBuoy, accent: "amber" },
];

