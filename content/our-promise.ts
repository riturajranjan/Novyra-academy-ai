import type { LucideIcon } from "lucide-react";
import {
  Building2,
  CalendarCheck,
  FileCode2,
  GraduationCap,
  HeartPulse,
  Landmark,
  LifeBuoy,
  MessagesSquare,
  Receipt,
  ShieldCheck,
  Store,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import type { AccentColor } from "@/content/hero-screens";

/** "Our Promise" replaces a conventional testimonials section. Novyra is a
 * new studio with no completed client engagements yet, so there are no real
 * quotes, ratings, or review-platform badges to show honestly. Every claim
 * here is a forward-looking operating commitment (how we work) rather than a
 * backward-looking track record (who we've worked with, what they said). */

export interface TrustBarItem {
  label: string;
  detail: string;
  icon: LucideIcon;
}

export const trustBarItems: TrustBarItem[] = [
  { label: "Direct Access", detail: "No account managers", icon: MessagesSquare },
  { label: "Fixed-Price Clarity", detail: "Know the cost upfront", icon: Wallet },
  { label: "Weekly Demos", detail: "See real progress weekly", icon: CalendarCheck },
  { label: "Full Code Ownership", detail: "Every line handed to you", icon: FileCode2 },
  { label: "Post-Launch Support", detail: "We stay on after launch", icon: LifeBuoy },
];

export const featuredCommitment = {
  eyebrow: "How We Work",
  title: "You'll Never Wonder What's Happening",
  description:
    "Most agencies go quiet between kickoff and delivery. We don't. Every project runs on a rhythm you can see into from day one — no status emails standing in for a real answer.",
  bullets: [
    "Weekly demo calls on working software, not slide decks",
    "A shared task board you can check anytime, day or night",
    "Direct chat access to the engineers building it — not a rotating account manager",
    "Every commit visible in a shared repository from the first day",
  ],
  metric: { label: "First Response Commitment", value: "<24h" },
};

export interface CommitmentCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: AccentColor;
  /** Out of 6 grid columns — controls the bento asymmetry. */
  span: number;
}

export const commitmentCards: CommitmentCard[] = [
  {
    id: "direct-communication",
    title: "Direct Communication",
    description: "Talk to the engineers actually building your product — not a relay through an account manager.",
    icon: MessagesSquare,
    accent: "blue",
    span: 3,
  },
  {
    id: "fixed-pricing",
    title: "Fixed & Transparent Pricing",
    description: "A fixed quote before work starts, and no surprise invoices once it's underway.",
    icon: Receipt,
    accent: "emerald",
    span: 3,
  },
  {
    id: "weekly-demos",
    title: "Weekly Progress Demos",
    description: "See real, working progress every week — never a status email standing in for a demo.",
    icon: CalendarCheck,
    accent: "purple",
    span: 2,
  },
  {
    id: "code-ownership",
    title: "Full Source Code Ownership",
    description: "Every line of code is yours, handed over in full — no vendor lock-in.",
    icon: FileCode2,
    accent: "cyan",
    span: 2,
  },
  {
    id: "post-launch-support",
    title: "Post-Launch Support Window",
    description: "A defined support period after launch to fix issues and tune performance.",
    icon: LifeBuoy,
    accent: "amber",
    span: 2,
  },
  {
    id: "auditable-stack",
    title: "Modern, Auditable Stack",
    description: "Every technology choice is documented and explainable — no inherited legacy black boxes.",
    icon: ShieldCheck,
    accent: "pink",
    span: 6,
  },
];

export interface FocusArea {
  label: string;
  icon: LucideIcon;
}

/** Industries the team designs and builds for — a statement of focus and
 * capability, not a roster of past clients. */
export const focusAreas: FocusArea[] = [
  { label: "Healthcare", icon: HeartPulse },
  { label: "Education", icon: GraduationCap },
  { label: "Real Estate", icon: Building2 },
  { label: "Hospitality", icon: UtensilsCrossed },
  { label: "Retail", icon: Store },
  { label: "Finance", icon: Landmark },
];
