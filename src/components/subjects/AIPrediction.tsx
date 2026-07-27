"use client";

interface AIPredictionProps {
  subjectTitle: string;
  progressPercent: number;
}

export default function AIPrediction({ subjectTitle, progressPercent }: AIPredictionProps) {
  return (
    <div className="glass-card p-stack-lg rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
      <div className="flex items-center gap-stack-md mb-stack-md">
        <span className="material-symbols-outlined ai-sparkle">
          auto_awesome
        </span>
        <span className="font-mono-sm font-bold uppercase text-primary">
          AI Prediction
        </span>
      </div>
      <p className="font-label-md text-on-surface mb-stack-md">Your real progress in {subjectTitle} so far:</p>
      <div className="space-y-stack-sm">
        <div className="flex justify-between items-center p-stack-sm bg-white/5 rounded-lg">
          <span className="text-sm">Progress</span>
          <span className="font-bold text-primary">{progressPercent}%</span>
        </div>
      </div>
    </div>
  );
}
