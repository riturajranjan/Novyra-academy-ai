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
  accent: AccentColor;
}

/** A row of honest capability claims, shown as glass pills — never a star
 * rating or fake review. Label text lives in messages/{locale}/hero.json
 * under `trust.items.<id>`. */
export const heroTrustItems: HeroTrustItem[] = [
  { id: "growingPortfolio", icon: TrendingUp, accent: "blue" },
  { id: "modernSaasDevelopment", icon: Layers, accent: "purple" },
  { id: "aiPowered", icon: Sparkles, accent: "pink" },
  { id: "enterpriseReady", icon: ShieldCheck, accent: "emerald" },
];
