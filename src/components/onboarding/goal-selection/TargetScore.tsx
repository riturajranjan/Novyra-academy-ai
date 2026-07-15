"use client";

import { useGoalSelection } from "@/hooks/useGoalSelection";

import TargetScoreCard from "./TargetScoreCard";
import { targetScores } from "@/constants/targetScores";

export default function TargetScore() {
  const { selectedScore, setSelectedScore } = useGoalSelection();

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
