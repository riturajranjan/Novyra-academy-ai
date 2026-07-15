import { LearningStyle } from "@/types/learning-style";
import {
  BookOpen,
  Eye,
  Mic,
  Wrench,
  MessageSquare,
  RefreshCcw,
} from "lucide-react";

export const learningStyles: LearningStyle[] = [
  {
    id: "reading",
    title: "Reading",
    description: "Detailed explanations, Smart Notes",
    icon: "menu_book",
    color: "#C0C1FF",
  },

  {
    id: "visual",
    title: "Visual Learning",
    description: "Diagrams, Animations",
    icon: "movie",
    color: "#45D9FF",
  },

  {
    id: "voice",
    title: "Voice Learning",
    description: "AI Teacher, Audio Lessons",
    icon: "podcasts",
    color: "#B8C4FF",
  },

  {
    id: "practice",
    title: "Practice First",
    description: "Exercises, Problem Solving",
    icon: "science",
    color: "#FFB4AB",
  },

  {
    id: "conversation",
    title: "AI Conversation",
    description: "Interactive Chat, Doubts",
    icon: "forum",
    color: "#C0C1FF",
  },

  {
    id: "revision",
    title: "Revision Mode",
    description: "Flashcards, Memory Tricks",
    icon: "quiz",
    color: "#45D9FF",
  },
];
