import React from "react";

const Achivement = () => {
  return (
    <div className="glass-card rounded-xl p-stack-lg flex flex-col">
      <h3 className="font-headline-md text-headline-md mb-6">Achievements</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-primary shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-primary text-2xl"
              style={{ fontVariationSettings: '"FILL" 1' }}>
              workspace_premium
            </span>
          </div>
          <p className="text-[10px] mt-2 font-label-md text-center text-on-surface-variant uppercase">
            7 Day Streak
          </p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-tertiary shadow-lg shadow-tertiary/10 group-hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-tertiary text-2xl"
              style={{ fontVariationSettings: '"FILL" 1' }}>
              rocket_launch
            </span>
          </div>
          <p className="text-[10px] mt-2 font-label-md text-center text-on-surface-variant uppercase">
            Physics Master
          </p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-primary-container shadow-lg shadow-primary-container/10 group-hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-primary-container text-2xl"
              style={{ fontVariationSettings: '"FILL" 1' }}>
              cognition
            </span>
          </div>
          <p className="text-[10px] mt-2 font-label-md text-center text-on-surface-variant uppercase">
            Deep Focus
          </p>
        </div>
        <div className="flex flex-col items-center grayscale opacity-40">
          <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant">
            <span className="material-symbols-outlined text-outline-variant text-2xl">
              trophy
            </span>
          </div>
          <p className="text-[10px] mt-2 font-label-md text-center text-on-surface-variant uppercase">
            Top 1%
          </p>
        </div>
        <div className="flex flex-col items-center grayscale opacity-40">
          <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant">
            <span className="material-symbols-outlined text-outline-variant text-2xl">
              history_edu
            </span>
          </div>
          <p className="text-[10px] mt-2 font-label-md text-center text-on-surface-variant uppercase">
            Author
          </p>
        </div>
        <div className="flex flex-col items-center grayscale opacity-40">
          <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant">
            <span className="material-symbols-outlined text-outline-variant text-2xl">
              school
            </span>
          </div>
          <p className="text-[10px] mt-2 font-label-md text-center text-on-surface-variant uppercase">
            Graduate
          </p>
        </div>
      </div>
      <button className="mt-8 text-primary font-label-md flex items-center justify-center gap-2 hover:underline">
        View All Awards{" "}
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </button>
    </div>
  );
};

export default Achivement;
