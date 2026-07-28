import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Clock,
  Code2,
  Compass,
  FileSearch,
  Handshake,
  Layers,
  LifeBuoy,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Rocket,
  TestTube2,
  Users,
} from "lucide-react";
import type { AccentColor } from "@/content/hero-screens";

export const ctaTrustBadges = ["Free Consultation", "Custom Proposal", "No Hidden Charges", "Fast Response", "Dedicated Team"];

export const heroCard = {
  eyebrow: "Let's Build Something Amazing",
  title: "Let's Turn Your Idea Into Reality",
  description:
    "Share your project goals, and we'll recommend the best technology, timeline, and solution tailored to your business.",
};

export interface QuickContactCard {
  id: string;
  title: string;
  detail: string;
  note: string;
  icon: LucideIcon;
  accent: AccentColor;
  href: string;
}

/** Real contact channels, not placeholder copy — matching the business
 * contact details Novyra actually publishes. */
export const quickContactCards: QuickContactCard[] = [
  {
    id: "schedule-call",
    title: "Schedule a Call",
    detail: "Book a free strategy session.",
    note: "Available Monday–Saturday",
    icon: Calendar,
    accent: "blue",
    href: "/contact",
  },
  {
    id: "email",
    title: "Email Us",
    detail: "hello@novyratech.in",
    note: "Typical response within 24 hours.",
    icon: Mail,
    accent: "purple",
    href: "mailto:hello@novyratech.in",
  },
  {
    id: "call",
    title: "Call Us",
    detail: "+91 7903724407",
    note: "Speak directly with our team.",
    icon: Phone,
    accent: "cyan",
    href: "tel:+917903724407",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    detail: "Start a conversation instantly.",
    note: "Quick project discussion.",
    icon: MessageCircle,
    accent: "emerald",
    href: "https://wa.me/917903724407",
  },
];

export interface ContactValueCard {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: AccentColor;
}

export const contactValueCards: ContactValueCard[] = [
  {
    title: "Free Discovery Session",
    description: "Understand your requirements before spending anything.",
    icon: Compass,
    accent: "blue",
  },
  {
    title: "Expert Consultation",
    description: "Receive recommendations from experienced developers.",
    icon: Users,
    accent: "purple",
  },
  {
    title: "Transparent Planning",
    description: "Clear pricing, realistic timelines, and defined milestones.",
    icon: Layers,
    accent: "cyan",
  },
  {
    title: "Long-Term Partnership",
    description: "We continue supporting your product after launch.",
    icon: Handshake,
    accent: "amber",
  },
];

export interface CtaTimelineStep {
  label: string;
  icon: LucideIcon;
}

export const ctaTimeline: CtaTimelineStep[] = [
  { label: "Discovery", icon: Compass },
  { label: "Proposal", icon: FileSearch },
  { label: "Design", icon: Palette },
  { label: "Development", icon: Code2 },
  { label: "Testing", icon: TestTube2 },
  { label: "Launch", icon: Rocket },
  { label: "Support", icon: LifeBuoy },
];

export interface TrustMetric {
  label: string;
  value: string;
}

/** Only verifiable, forward-looking facts — a real technology count and
 * real operating commitments (100% custom development, 24h response, full
 * code ownership) — plus a deliberately non-numeric "Growing Portfolio" for
 * project count, since Novyra doesn't have a project history to cite as a
 * number yet. */
export const trustMetrics: TrustMetric[] = [
  { label: "Projects Planned", value: "Growing Portfolio" },
  { label: "Modern Technologies", value: "19" },
  { label: "Custom Development", value: "100%" },
  { label: "Average Response Time", value: "24 Hours" },
  { label: "Source Code Ownership", value: "100%" },
];

export interface ContactDetail {
  label: string;
  value: string;
  icon: LucideIcon;
}

export const contactDetails: ContactDetail[] = [
  { label: "Business Email", value: "hello@novyratech.in", icon: Mail },
  { label: "Phone", value: "+91 7903724407", icon: Phone },
  { label: "Location", value: "India", icon: MapPin },
  { label: "Working Hours", value: "Monday – Saturday, 9:00 AM – 7:00 PM IST", icon: Clock },
];
