import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Stethoscope,
  TrendingUp,
  Users,
  Brain,
} from "lucide-react";
import type { AccentColor } from "@/content/hero-screens";

export type ProductFrame = "card" | "macbook" | "tablet" | "phone";
export type ProductVisual = "grades" | "counter";

export interface HeroProduct {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: AccentColor;
  frame: ProductFrame;
  /** Only used when frame === "card" — device frames show a live mini
   * MockScreen of the mapped product instead. */
  visual?: ProductVisual;
  /** Index into `heroScreens` — hovering this card jumps the central browser
   * to the matching product screen, and (for device frames) is the exact
   * screen mirrored inside the device itself. */
  screenIndex: number;
}

/** A curated device + card ecosystem showcasing Novyra's real products —
 * three live device mockups (MacBook, tablet, phone) for variety, plus two
 * compact KPI cards. Kept to five total so the hero stays premium and
 * uncluttered rather than a wall of decorative widgets. */
export const heroProducts: HeroProduct[] = [
  {
    id: "hospital-erp",
    label: "Hospital ERP",
    icon: Stethoscope,
    accent: "cyan",
    frame: "macbook",
    screenIndex: 2,
  },
  {
    id: "school-erp",
    label: "School Attendance",
    icon: GraduationCap,
    accent: "purple",
    frame: "card",
    visual: "grades",
    screenIndex: 3,
  },
  {
    id: "crm",
    label: "CRM Leads",
    icon: Users,
    accent: "pink",
    frame: "tablet",
    screenIndex: 4,
  },
  {
    id: "ai-assistant",
    label: "AI Assistant",
    icon: Brain,
    accent: "purple",
    frame: "phone",
    screenIndex: 5,
  },
  {
    id: "analytics",
    label: "Revenue Analytics",
    icon: TrendingUp,
    accent: "blue",
    frame: "card",
    visual: "counter",
    screenIndex: 7,
  },
];
