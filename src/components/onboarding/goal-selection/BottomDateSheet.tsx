"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { useGoalSelection } from "@/hooks/useGoalSelection";
import { saveGoalSelection } from "@/app/actions/onboarding";

const BottomDateSheet = () => {
  const route = useRouter();
  const { selectedScore, selectedGoal, examDate } = useGoalSelection();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const canContinue = selectedScore !== null && selectedGoal !== null;

  const handleBuildLearningPath = () => {
    if (isPending || selectedScore === null || selectedGoal === null) return;
    const targetScoreId = selectedScore;
    const dailyGoalId = selectedGoal;
    setError(null);

    startTransition(async () => {
      const result = await saveGoalSelection({
        targetScoreId,
        dailyGoalId,
        examDate: examDate ? examDate.toISOString() : null,
      });
      if (result?.error) {
        setError(result.error);
        return;
      }
      route.push("/ai-personalization");
    });
  };

  return (
    <div className="fixed  bottom-0 right-0 w-full lg:w-3/5 bg-background/80 backdrop-blur-xl border-t border-white/5 p-6 z-40 flex justify-between items-center px-margin-desktop">
      <button
        onClick={() => route.push("/learning-style")}
        className="md:flex hidden items-center gap-2 px-8 py-3 rounded-full hover:bg-white/5 transition-all text-on-surface-variant">
        <span className="material-symbols-outlined">arrow_back</span>
        <span>Back</span>
      </button>
      {error && (
        <p className="text-sm text-red-400 absolute -top-8 left-1/2 -translate-x-1/2" role="alert">
          {error}
        </p>
      )}
      <button
        onClick={handleBuildLearningPath}
        disabled={isPending || !canContinue}
        className="group relative px-4 w-full md:w-auto  text-center md:px-12 py-4 rounded-full bg-primary text-on-primary font-bold overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25 disabled:opacity-40 disabled:cursor-not-allowed">
        <span className="relative z-10 flex text-center items-center gap-2">
          {isPending ? "Saving..." : "Build My Learning Path"}
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            bolt
          </span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </button>
    </div>
  );
};

export default BottomDateSheet;
