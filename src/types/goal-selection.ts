import { LucideIcon } from "lucide-react";

export interface TargetScore {
  id: number;
  title: string;
}

export interface DailyGoal {
  id: string;
  title: string;
  duration: string;
  icon: LucideIcon;
}
