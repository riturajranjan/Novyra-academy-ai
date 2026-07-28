import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  BadgePercent,
  Blocks,
  Building2,
  Cloud,
  Code2,
  HelpCircle,
  LayoutDashboard,
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
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

export interface NavFeatured {
  title: string;
  description: string;
  href: string;
  cta: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  children?: NavLeaf[];
  featured?: NavFeatured;
}

export const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
    icon: Building2,
    children: [
      {
        label: "About Us",
        href: "/about#about-us",
        description: "Who we are and what drives us.",
        icon: Building2,
      },
      {
        label: "Our Mission",
        href: "/about#mission",
        description: "What we're building toward.",
        icon: Target,
      },
      {
        label: "Why Choose Us",
        href: "/about#why-choose-us",
        description: "What sets Novyra apart.",
        icon: Sparkles,
      },
      {
        label: "FAQ",
        href: "/about#faq",
        description: "Common questions, answered.",
        icon: HelpCircle,
      },
      {
        label: "Location",
        href: "/about#location",
        description: "Find our office and hours.",
        icon: MapPin,
      },
    ],
    featured: {
      title: "Meet the team",
      description: "The people building Novyra Technologies.",
      href: "/about#team",
      cta: "Explore About",
    },
  },
  {
    label: "Services",
    href: "/services",
    icon: Code2,
    children: [
      {
        label: "Web Design & Development",
        href: "/services/web-design-development",
        description: "Websites built for craft and speed.",
        icon: Code2,
      },
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "Growth-focused marketing strategy.",
        icon: Megaphone,
      },
      {
        label: "Web Applications",
        href: "/services/web-applications",
        description: "Custom apps for real workflows.",
        icon: AppWindow,
      },
      {
        label: "Graphic Design",
        href: "/services/graphic-design",
        description: "Visual identity that stands out.",
        icon: PenTool,
      },
      {
        label: "SaaS Development",
        href: "/services/saas-development",
        description: "Full-stack SaaS product builds.",
        icon: Cloud,
      },
    ],
    featured: {
      title: "Not sure where to start?",
      description: "Tell us about your project and we'll recommend a path.",
      href: "/contact",
      cta: "Talk to us",
    },
  },
  { label: "Solutions", href: "/solutions", icon: Blocks },
  { label: "Products", href: "/products", icon: Package },
  { label: "Pricing", href: "/pricing", icon: BadgePercent },
  { label: "Blog", href: "/blog", icon: Newspaper },
  { label: "Clients", href: "/clients", icon: Users },
  { label: "Contact Us", href: "/contact", icon: Mail },
];
