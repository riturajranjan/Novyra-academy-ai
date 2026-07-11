import { LucideIcon } from "lucide-react";

export interface Board {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  icon: LucideIcon;
  features: string[];
}
