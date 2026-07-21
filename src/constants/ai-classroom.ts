import { LearningMode, JourneyStep, ModuleCard } from "./types";

export const learningModes: LearningMode[] = [
  { id: "learn", title: "Learn" },
  { id: "practice", title: "Practice" },
  { id: "revision", title: "Revision" },
  { id: "exam", title: "Exam" },
  { id: "doubt", title: "Doubt" },
];

export const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "Introduction",
    status: "completed",
  },
  {
    id: 2,
    title: "Newton's 1st",
    status: "current",
  },
  {
    id: 3,
    title: "2nd Law",
    status: "locked",
  },
  {
    id: 4,
    title: "Practice",
    status: "locked",
  },
  {
    id: 5,
    title: "Quiz",
    status: "locked",
  },
];

export const modules: ModuleCard[] = [
  {
    id: 1,
    title: "Newton's First Law",
    description:
      "An object at rest remains at rest, and an object in motion remains in motion unless acted upon by an external force.",

    analogy:
      "Think of a lazy cat lying on the sofa. It won't move until someone pushes it.",

    formula: "ΣF = 0",
  },
];
