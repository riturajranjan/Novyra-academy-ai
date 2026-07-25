"use client";

import { createContext, createElement, useContext, useState, type ReactNode } from "react";

interface GoalSelectionContextValue {
  selectedScore: number | null;
  setSelectedScore: (score: number) => void;

  selectedGoal: string | null;
  setSelectedGoal: (goal: string) => void;

  examDate: Date | null;
  setExamDate: (date: Date | null) => void;

  openCalendar: boolean;
  setOpenCalendar: (open: boolean) => void;

  // Derived from the user's real subject selections; shared read-only
  // across TargetScore/BuildLearningPath/Quote so they don't each refetch.
  subjectCount: number;
  totalChapters: number;
}

const GoalSelectionContext = createContext<GoalSelectionContextValue | null>(null);

interface GoalSelectionProviderProps {
  children: ReactNode;
  initialTargetScoreId: number | null;
  initialDailyGoalId: string | null;
  initialExamDate: Date | null;
  subjectCount: number;
  totalChapters: number;
}

export function GoalSelectionProvider({
  children,
  initialTargetScoreId,
  initialDailyGoalId,
  initialExamDate,
  subjectCount,
  totalChapters,
}: GoalSelectionProviderProps) {
  const [selectedScore, setSelectedScore] = useState<number | null>(initialTargetScoreId);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(initialDailyGoalId);
  const [examDate, setExamDate] = useState<Date | null>(initialExamDate);
  const [openCalendar, setOpenCalendar] = useState(false);

  return createElement(
    GoalSelectionContext.Provider,
    {
      value: {
        selectedScore,
        setSelectedScore,
        selectedGoal,
        setSelectedGoal,
        examDate,
        setExamDate,
        openCalendar,
        setOpenCalendar,
        subjectCount,
        totalChapters,
      },
    },
    children
  );
}

export function useGoalSelection() {
  const context = useContext(GoalSelectionContext);
  if (!context) {
    throw new Error("useGoalSelection must be used within a GoalSelectionProvider");
  }
  return context;
}
