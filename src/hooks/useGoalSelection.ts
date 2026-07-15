"use client";

import { useState } from "react";

export function useGoalSelection() {
  const [selectedScore, setSelectedScore] = useState(95);

  const [selectedGoal, setSelectedGoal] = useState("steady");

  const [examDate, setExamDate] = useState<Date | null>(null);

  const [openCalendar, setOpenCalendar] = useState(false);

  return {
    selectedScore,
    setSelectedScore,

    selectedGoal,
    setSelectedGoal,

    examDate,
    setExamDate,

    openCalendar,
    setOpenCalendar,
  };
}
