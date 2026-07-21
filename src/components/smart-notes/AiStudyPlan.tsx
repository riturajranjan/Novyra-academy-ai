import React from "react";

const AiStudyPlan = () => {
  return (
    <div className="glass-card inner-glow p-6 rounded-xl bg-primary/5 border-primary/20">
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary">
          auto_awesome
        </span>
        <h4 className="font-bold text-sm text-on-surface">AI Study Path</h4>
      </div>
      <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
        Based on your retention score, the AI recommends taking a 5-minute quiz
        on &quot;Forces in Equilibrium&quot; to solidify your foundation.
      </p>
      <button className="w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-xs font-bold transition-all border border-primary/20">
        Start Suggested Quiz
      </button>
    </div>
  );
};

export default AiStudyPlan;
