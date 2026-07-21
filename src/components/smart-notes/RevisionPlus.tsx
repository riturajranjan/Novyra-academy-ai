import React from "react";

const RevisionPlus = () => {
  return (
    <div className="glass-card inner-glow p-6 rounded-xl">
      <h3 className="text-sm font-mono-sm text-on-surface-variant uppercase tracking-widest mb-6">
        Revision Pulse
      </h3>
      <div className="flex items-center gap-4 mb-8">
        <div className="relative w-20 h-20">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx={40}
              cy={40}
              fill="transparent"
              r={36}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth={8}
            />
            <circle
              className="text-primary"
              cx={40}
              cy={40}
              fill="transparent"
              r={36}
              stroke="currentColor"
              strokeDasharray={226}
              strokeDashoffset={18}
              strokeWidth={8}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold">92%</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-on-surface font-semibold">
            Retention Score
          </p>
          <p className="text-xs text-on-surface-variant">
            Mastery achieved in 3 topics
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs font-mono-sm text-on-surface-variant">
          Forgotten Topics (AI Prediction):
        </p>
        <div className="flex items-center gap-2 text-sm text-error">
          <span className="material-symbols-outlined text-sm">history</span>
          <span>Universal Gravitation Constant</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-sm">history</span>
          <span>Friction Coefficients</span>
        </div>
      </div>
    </div>
  );
};

export default RevisionPlus;
