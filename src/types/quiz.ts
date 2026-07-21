export type Difficulty = "easy" | "medium" | "hard";

export type QuestionStatus =
  | "unvisited"
  | "visited"
  | "answered"
  | "flagged"
  | "current";

export interface Option {
  id: string;
  label: "A" | "B" | "C" | "D";
  text: string;
}

export interface Question {
  id: number;
  subject: string;
  chapter: string;
  difficulty: Difficulty;

  title: string;

  description: string;

  options: Option[];

  correctAnswer: string;

  selectedAnswer?: string;

  bookmarked?: boolean;

  flagged?: boolean;

  image?: string;

  explanation?: string;

  aiHint?: string;

  timeLimit: number;

  marks: number;
}

export interface QuestionNavigatorItem {
  id: number;

  status: QuestionStatus;
}

export interface QuizStats {
  totalQuestions: number;

  answered: number;

  remaining: number;

  flagged: number;

  scorePrediction: number;

  confidence: number;

  learningVelocity: number;
}

export interface TimerState {
  totalSeconds: number;

  remainingSeconds: number;

  isRunning: boolean;
}

export interface AIHint {
  title: string;

  description: string;

  xpCost: number;

  type: "small" | "visual" | "translate";
}
