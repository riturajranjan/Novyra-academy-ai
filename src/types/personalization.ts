export interface PersonalizationStep {
  id: number;
  title: string;
  status: "completed" | "active" | "pending";
}

export interface InsightCard {
  title: string;
  value: string;
}
