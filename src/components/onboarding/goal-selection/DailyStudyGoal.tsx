"use client";

import type { DailyGoal } from "@prisma/client";
import { useGoalSelection } from "@/hooks/useGoalSelection";

import DailyGoalCard from "./DailyGoalCard";

const shortLabels: Record<string, string> = {
  light: "30m",
  steady: "1h",
  intense: "2h",
  elite: "4h",
};

interface DailyStudyGoalProps {
  dailyGoals: DailyGoal[];
}

export default function DailyStudyGoal({ dailyGoals }: DailyStudyGoalProps) {
  const { selectedGoal, setSelectedGoal } = useGoalSelection();

  if (dailyGoals.length === 0) return null;

  return (
    <>
      <div className="space-y-stack-md hidden md:block">
        <label className="&quot; text-label-md text-on-surface-variant">
          HOW MUCH TIME CAN YOU STUDY?
        </label>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {dailyGoals.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedGoal(item.id)}
              className={
                selectedGoal === item.id
                  ? "p-3 rounded-xl border font-bold transition-all text-sm border-primary bg-primary/10 ring-1 ring-primary/30 text-primary"
                  : "p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-sm"
              }>
              {shortLabels[item.id] ?? item.title}
            </button>
          ))}
        </div>
      </div>{" "}
      <section className="mb-4 md:mb-8 md:hidden">
        <h2 className="mb-5 text-2xl font-semibold text-white">
          Daily Study Goal
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {dailyGoals.map((item) => (
            <DailyGoalCard
              key={item.id}
              item={item}
              selected={selectedGoal === item.id}
              onClick={() => setSelectedGoal(item.id)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
