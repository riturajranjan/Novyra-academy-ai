import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  BadgePercent,
  Blocks,
  Building2,
  Cloud,
  Code2,
  HelpCircle,
  Mail,
  MapPin,
  Megaphone,
  Newspaper,
  Package,
  PenTool,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export interface NavLeaf {
  id: string;
  href: string;
  icon: LucideIcon;
}

export interface NavFeatured {
  id: string;
  href: string;
}

export interface NavItem {
  id: string;
  href: string;
  icon: LucideIcon;
  children?: NavLeaf[];
  featured?: NavFeatured;
}

/** Structural data only — every label/description/title/cta string lives in
 * messages/{locale}/nav.json, keyed by `id`, so this file doesn't change
 * per locale. `id` is also what drives active/hover/open state in the nav
 * components (translated `label` text can't be used as a stable key or
 * identity — it differs per locale). */
export const navItems: NavItem[] = [
  {
    id: "about",
    href: "/about",
    icon: Building2,
    children: [
      { id: "aboutUs", href: "/about#about-us", icon: Building2 },
      { id: "mission", href: "/about#mission", icon: Target },
      { id: "whyChooseUs", href: "/about#why-choose-us", icon: Sparkles },
      { id: "faq", href: "/about#faq", icon: HelpCircle },
      { id: "location", href: "/about#location", icon: MapPin },
    ],
    featured: { id: "about", href: "/about#team" },
  },
  {
    id: "services",
    href: "/services",
    icon: Code2,
    children: [
      { id: "webDesign", href: "/services/web-design-development", icon: Code2 },
      { id: "digitalMarketing", href: "/services/digital-marketing", icon: Megaphone },
      { id: "webApplications", href: "/services/web-applications", icon: AppWindow },
      { id: "graphicDesign", href: "/services/graphic-design", icon: PenTool },
      { id: "saasDevelopment", href: "/services/saas-development", icon: Cloud },
    ],
    featured: { id: "services", href: "/contact" },
  },
  { id: "solutions", href: "/solutions", icon: Blocks },
  { id: "products", href: "/products", icon: Package },
  { id: "pricing", href: "/pricing", icon: BadgePercent },
  { id: "blog", href: "/blog", icon: Newspaper },
  { id: "clients", href: "/clients", icon: Users },
  { id: "contact", href: "/contact", icon: Mail },
];
