import React from "react";

const Learning = () => {
  return (
    <>
      <div className="md:hidden">
        <p className="px-2 mb-3 font-label-md text-label-md text-primary uppercase tracking-widest text-[11px]">
          AI Experience
        </p>
        <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5">
          <div className="w-full flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">
                  smart_toy
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-label-md text-label-md text-on-surface">
                  AI Tutor Personality
                </h4>
                <p className="text-[12px] text-on-surface-variant">
                  Socratic, Mentor, or Coach
                </p>
              </div>
            </div>
            <div
              className="relative inline-block w-12 h-6 rounded-full bg-surface-container-high transition-colors duration-200 ease-in-out cursor-pointer"
              onclick="this.querySelector('.toggle-knob').classList.toggle('translate-x-6'); this.classList.toggle('bg-primary');">
              <div className="toggle-knob absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200 ease-in-out shadow-sm" />
            </div>
          </div>
          <button className="w-full flex items-center justify-between p-4 active:bg-white/5 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  psychology
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-label-md text-label-md text-on-surface">
                  Knowledge Hub
                </h4>
                <p className="text-[12px] text-on-surface-variant">
                  Stored Context &amp; Memory
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-active:translate-x-1 transition-transform">
              chevron_right
            </span>
          </button>
        </div>
      </div>
      <div className="lg:col-span-7 hidden md:flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">
            psychology
          </span>
          <h4 className="font-headline-md text-headline-md">
            Learning &amp; AI Prefs
          </h4>
        </div>
        <div className="glass-card rounded-2xl p-6 flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="font-label-md text-label-md text-on-surface-variant">
                Learning Style
              </span>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-primary/20 border border-primary text-primary rounded-lg font-label-md">
                  Visual
                </button>
                <button className="flex-1 py-2 bg-surface-container-low border border-white/5 text-on-surface-variant rounded-lg font-label-md hover:border-white/20">
                  Auditory
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <span className="font-label-md text-label-md text-on-surface-variant">
                Explanation Depth
              </span>
              <select className="w-full bg-surface-container-low border border-white/5 rounded-lg px-4 py-2 font-body-md text-on-surface">
                <option>Intuitive (Conceptual)</option>
                <option selected>Visual (Flowcharts/Diagrams)</option>
                <option>Detailed (Step-by-step)</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-label-md text-label-md text-on-surface-variant">
                Daily Goal (2 Hours)
              </span>
              <span className="font-mono-sm text-mono-sm text-primary">
                60% Completed
              </span>
            </div>
            <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-gradient-to-r from-primary to-tertiary" />
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-white/5">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary">
                refresh
              </span>
              <div>
                <p className="font-label-md text-label-md text-on-surface">
                  Revision Frequency
                </p>
                <p className="text-[12px] text-on-surface-variant">
                  Weekly spaced-repetition
                </p>
              </div>
            </div>
            <button className="text-primary font-label-md">Change</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learning;
