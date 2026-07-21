import { Question, QuizStats, QuestionNavigatorItem, AIHint } from "./types";

export const quizStats: QuizStats = {
  totalQuestions: 25,

  answered: 7,

  remaining: 18,

  flagged: 1,

  scorePrediction: 88,

  confidence: 92,

  learningVelocity: 1.2,
};

export const question: Question = {
  id: 8,

  subject: "Physics",

  chapter: "Newton's Laws",

  difficulty: "medium",

  title: "Physics: Newton's Laws of Motion",

  description:
    "A block of mass m = 5kg is resting on a rough horizontal surface...",

  options: [
    {
      id: "1",
      label: "A",
      text: "18.52 N",
    },
    {
      id: "2",
      label: "B",
      text: "19.24 N",
    },
    {
      id: "3",
      label: "C",
      text: "22.10 N",
    },
    {
      id: "4",
      label: "D",
      text: "15.45 N",
    },
  ],

  correctAnswer: "2",

  selectedAnswer: "2",

  bookmarked: false,

  flagged: false,

  explanation: "",

  aiHint: "Resolve the vertical component before calculating friction.",

  marks: 4,

  timeLimit: 120,
};

export const navigator: QuestionNavigatorItem[] = Array.from(
  { length: 25 },
  (_, i) => ({
    id: i + 1,

    status:
      i < 5
        ? "answered"
        : i === 5
          ? "flagged"
          : i === 7
            ? "current"
            : "unvisited",
  }),
);

export const aiHints: AIHint[] = [
  {
    title: "Small Hint",

    description: "Think about the Normal force.",

    xpCost: 2,

    type: "small",
  },

  {
    title: "Visual Hint",

    description: "Show interactive force diagram.",

    xpCost: 5,

    type: "visual",
  },

  {
    title: "Explain in Hindi",

    description: "Translate explanation.",

    xpCost: 0,

    type: "translate",
  },
];
