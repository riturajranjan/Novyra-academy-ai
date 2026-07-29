import type { LucideIcon } from "lucide-react";
import { Layers, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import type { AccentColor } from "@/content/hero-screens";

export interface HeroBadgeItem {
  id: string;
  accent: AccentColor;
}

/** The floating four-dot badge above the headline. Structural only — label
 * text lives in messages/{locale}/hero.json under `badge.items.<id>`. */
export const heroBadgeItems: HeroBadgeItem[] = [
  { id: "websites", accent: "blue" },
  { id: "saas", accent: "purple" },
  { id: "ai", accent: "pink" },
  { id: "growth", accent: "cyan" },
];

export interface HeroTrustItem {
  id: string;
  icon: LucideIcon;
}

/** A flat row of honest capability claims — never a star rating or fake
 * review. Label text lives in messages/{locale}/hero.json under
 * `trust.items.<id>`. */
export const heroTrustItems: HeroTrustItem[] = [
  { id: "growingPortfolio", icon: TrendingUp },
  { id: "modernSaasDevelopment", icon: Layers },
  { id: "aiPowered", icon: Sparkles },
  { id: "enterpriseReady", icon: ShieldCheck },
];
