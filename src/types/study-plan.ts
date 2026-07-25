export type StudyTaskType =
  | "reading"
  | "visual"
  | "voice"
  | "practice"
  | "conversation"
  | "revision";

export interface StudyPlanTask {
  subjectId: number;
  subjectTitle: string;
  minutes: number;
  taskType: StudyTaskType;
}

export interface StudyPlanDay {
  dayOfWeek: number;
  label: string;
  tasks: StudyPlanTask[];
  totalMinutes: number;
}

export interface StudyPlan {
  dailyMinutes: number;
  subjects: { id: number; title: string }[];
  days: StudyPlanDay[];
  totalWeeklyMinutes: number;
}
