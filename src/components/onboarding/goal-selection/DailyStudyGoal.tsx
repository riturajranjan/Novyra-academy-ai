"use client";

import { useGoalSelection } from "@/hooks/useGoalSelection";

import DailyGoalCard from "./DailyGoalCard";
import { dailyGoals } from "@/constants/dailyGoals";

export default function DailyStudyGoal() {
  const { selectedGoal, setSelectedGoal } = useGoalSelection();

  return (
    <>
      <div className="space-y-stack-md hidden md:block">
        <label className="&quot; text-label-md text-on-surface-variant">
          HOW MUCH TIME CAN YOU STUDY?
        </label>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          <button className="p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-sm">
            30m
          </button>
          <button className="p-3 rounded-xl border hover:bg-white/5 transition-all text-sm border-white/10">
            45m
          </button>
          <button className="p-3 rounded-xl border hover:bg-white/5 transition-all text-sm border-white/10">
            1h
          </button>
          <button className="p-3 rounded-xl border font-bold transition-all text-sm border-primary bg-primary/10 ring-1 ring-primary/30 text-primary">
            2h <span className="block text-[8px] opacity-70">AI REC</span>
          </button>
          <button className="p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-sm">
            3h
          </button>
          <button className="p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-sm">
            Flex
          </button>
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
