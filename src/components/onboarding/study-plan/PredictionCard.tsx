"use client";

interface PredictionCardProps {
  targetScore: string | null;
}

export default function PredictionCard({ targetScore }: PredictionCardProps) {
  const numeric = targetScore ? parseInt(targetScore, 10) : 0;
  const radius = 58;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(numeric, 100) / 100) * circumference;

  return (
    <div className="glass-panel rounded-xl p-stack-lg flex flex-col items-center justify-center text-center">
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="text-white/5"
            cx={64}
            cy={64}
            fill="transparent"
            r={radius}
            stroke="currentColor"
            strokeWidth={stroke}
          />
          <circle
            className="text-tertiary"
            cx={64}
            cy={64}
            fill="transparent"
            r={radius}
            stroke="currentColor"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeWidth={stroke}
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-headline-md font-bold">{targetScore ?? "--"}</span>
          <span className="text-[10px] text-on-surface-variant uppercase">
            Target
          </span>
        </div>
      </div>
      <p className="text-label-md font-bold text-on-surface">Your Goal</p>
      <p className="text-mono-sm text-on-surface-variant mt-2">
        The score you&apos;re working toward
      </p>
    </div>
  );
}
