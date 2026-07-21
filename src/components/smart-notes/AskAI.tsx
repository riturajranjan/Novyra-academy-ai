import React from "react";

const AskAI = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
        <span className="material-symbols-outlined text-primary">search</span>
      </div>
      <input
        className="w-full bg-surface-container-low border border-white/10 rounded-full pl-16 pr-6 py-5 text-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all shadow-xl"
        placeholder="Ask your notes anything..."
        type="text"
      />
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button className="bg-surface-variant/50 hover:bg-surface-variant p-2 rounded-lg text-primary transition-all">
          <span
            className="material-symbols-outlined text-[24px]"
            style={{ fontVariationSettings: '"FILL" 1' }}>
            spark
          </span>
        </button>
      </div>
    </div>
  );
};

export default AskAI;
