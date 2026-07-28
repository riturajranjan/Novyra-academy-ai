import type { LucideIcon } from "lucide-react";
import { CalendarClock, MessageCircle, Sparkles } from "lucide-react";

export const footerHero = {
  description:
    "Whether you're launching your first website, building an enterprise platform, or creating an AI-powered product, Novyra Technologies is ready to help you build something exceptional.",
};

export interface FooterCta {
  label: string;
  icon: LucideIcon;
  href: string;
  variant: "gradient" | "glass" | "outline";
}

export const footerCtas: FooterCta[] = [
  { label: "Book Free Consultation", icon: Sparkles, href: "/contact", variant: "gradient" },
  { label: "Schedule Discovery Call", icon: CalendarClock, href: "/contact", variant: "glass" },
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/917903724407", variant: "outline" },
];

export const companyInfo = {
  name: "Novyra Technologies",
  description: "Building premium digital products for ambitious businesses worldwide.",
  email: "hello@novyratech.in",
  phone: "+91 7903724407",
  location: "India",
};

export interface FooterLink {
  label: string;
  href: string;
  disabled?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

/** Links that already exist on this page use an in-page anchor so they
 * actually resolve today; links to pages that don't exist yet follow the
 * same future-route naming already established in content/nav.ts, so the
 * footer and the main nav stay architecturally consistent. */
export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Solutions", href: "/solutions" },
      { label: "Case Studies", href: "/#case-studies" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/#contact" },
      { label: "Careers (Coming Soon)", href: "/careers", disabled: true },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Business Websites", href: "/services/business-websites" },
      { label: "Custom Web Applications", href: "/services/web-applications" },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "AI Development", href: "/services/ai-development" },
      { label: "Healthcare Solutions", href: "/services/healthcare-solutions" },
      { label: "School ERP", href: "/services/school-erp" },
      { label: "Hospital ERP", href: "/services/hospital-erp" },
      { label: "CRM Systems", href: "/services/crm-systems" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "SEO Optimization", href: "/services/seo-optimization" },
      { label: "Website Redesign", href: "/services/website-redesign" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Project Process", href: "/#process" },
      { label: "Technology Stack", href: "/#why-choose-novyra" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Free Consultation", href: "/#contact" },
      { label: "Website Audit", href: "/audit" },
      { label: "Roadmap Planner", href: "/roadmap-planner" },
    ],
  },
];

export interface TechCapsule {
  name: string;
  color: string;
}

/** Trimmed to the 12 highest-signal technologies — the full stack lives in
 * Why Choose Novyra's Trusted Technologies grid, so the footer only needs a
 * quick-glance chip row, not the complete list. */
export const techCapsules: TechCapsule[] = [
  { name: "React", color: "#22D3EE" },
  { name: "Next.js", color: "#94A3B8" },
  { name: "TypeScript", color: "#3B82F6" },
  { name: "Node.js", color: "#22C55E" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "Framer Motion", color: "#A78BFA" },
  { name: "PostgreSQL", color: "#3B82F6" },
  { name: "MongoDB", color: "#22C55E" },
  { name: "AWS", color: "#F97316" },
  { name: "Docker", color: "#2563EB" },
  { name: "Vercel", color: "#94A3B8" },
  { name: "OpenAI", color: "#94A3B8" },
];

export interface SocialLink {
  label: string;
  id: "linkedin" | "github" | "instagram" | "facebook" | "x" | "youtube";
  href: string;
  disabled?: boolean;
}

/** Real handles haven't been shared yet, so every link points to "#" for
 * now rather than guessing a URL — wire these up to the real profiles once
 * they exist. YouTube stays disabled per the spec's own "Coming Soon". */
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", id: "linkedin", href: "#" },
  { label: "GitHub", id: "github", href: "#" },
  { label: "Instagram", id: "instagram", href: "#" },
  { label: "Facebook", id: "facebook", href: "#" },
  { label: "X (Twitter)", id: "x", href: "#" },
  { label: "YouTube (Coming Soon)", id: "youtube", href: "#", disabled: true },
];

export const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];
