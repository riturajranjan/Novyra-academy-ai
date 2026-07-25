import { Coffee, Zap, Hammer, Brain, Sparkles, type LucideIcon } from "lucide-react";

/**
 * DB-backed rows (DailyGoal.icon, Board.icon, ...) store a Lucide icon
 * *name* rather than a component, since the data is server-fetched. This
 * maps the seeded name strings back to their components for the few
 * places that render an actual <Icon /> rather than a text/ligature icon.
 */
export const lucideIconsByName: Record<string, LucideIcon> = {
  Coffee,
  Zap,
  Hammer,
  Brain,
  Sparkles,
};

export const DEFAULT_ICON_NAME = "Sparkles";
