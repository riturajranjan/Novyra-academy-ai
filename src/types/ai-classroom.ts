export interface LearningMode {
  id: string;
  title: string;
}

export interface JourneyStep {
  id: number;
  title: string;
  status: "completed" | "current" | "locked";
}

export interface ModuleCard {
  id: number;
  title: string;
  description: string;
  analogy: string;
  formula: string;
}
