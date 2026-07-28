import type { LucideIcon } from "lucide-react";
import { Bug, Code2, MessageCircleQuestion, PenTool, Rocket, Route } from "lucide-react";
import type { AccentColor } from "@/content/hero-screens";

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  icon: LucideIcon;
  accent: AccentColor;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    icon: MessageCircleQuestion,
    accent: "blue",
    description: "We understand your business, audience, goals, challenges, required features, and expected outcome.",
    deliverables: ["Requirement discussion", "Business analysis", "Project scope", "Feature planning"],
  },
  {
    id: "strategy",
    number: "02",
    title: "Strategy",
    icon: Route,
    accent: "cyan",
    description: "We create the right digital strategy, project roadmap, technology plan, and content structure.",
    deliverables: ["Solution roadmap", "User journey", "Technical planning", "Timeline definition"],
  },
  {
    id: "design",
    number: "03",
    title: "UI/UX Design",
    icon: PenTool,
    accent: "purple",
    description: "We design a premium, responsive, and conversion-focused interface aligned with your brand.",
    deliverables: ["Wireframes", "Visual direction", "Responsive UI", "Interactive prototype"],
  },
  {
    id: "development",
    number: "04",
    title: "Development",
    icon: Code2,
    accent: "pink",
    description: "We build the approved experience using scalable architecture, modern technologies, and reusable components.",
    deliverables: ["Frontend development", "Backend integration", "Admin dashboard", "API and database setup"],
  },
  {
    id: "testing",
    number: "05",
    title: "Testing",
    icon: Bug,
    accent: "amber",
    description: "We thoroughly test performance, responsiveness, accessibility, security, and critical user journeys.",
    deliverables: ["Device testing", "Browser testing", "Performance checks", "Bug fixing"],
  },
  {
    id: "launch",
    number: "06",
    title: "Launch & Support",
    icon: Rocket,
    accent: "emerald",
    description: "We deploy the project, configure essential tools, provide guidance, and support the product after launch.",
    deliverables: ["Production deployment", "Analytics setup", "Basic SEO setup", "Post-launch support"],
  },
];
