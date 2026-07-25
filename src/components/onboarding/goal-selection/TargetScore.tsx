"use client";

import type { TargetScore as TargetScoreModel } from "@prisma/client";
import { useGoalSelection } from "@/hooks/useGoalSelection";

import TargetScoreCard from "./TargetScoreCard";

interface TargetScoreProps {
  targetScores: TargetScoreModel[];
}

export default function TargetScore({ targetScores }: TargetScoreProps) {
  const { selectedScore, setSelectedScore } = useGoalSelection();

  if (targetScores.length === 0) return null;

  return (
    <section className="mb-8">
      <div className="space-y-3 ">
        <div className="space-y-stack-md ">
          <label className=" text-label-md text-on-surface-variant flex justify-between">
            <span>TARGET PERCENTILE / SCORE</span>
            <span className="text-primary">Aspirant Mode</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {targetScores.map((item) => (
              <TargetScoreCard
                key={item.id}
                score={item.score}
                title={item.title}
                desc={item.desc}
                selected={selectedScore === item.id}
                onClick={() => setSelectedScore(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
