import React from "react";

const Appearance = () => {
  return (
    <>
      {" "}
      <div className="hidden">
        <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5">
          <button className="w-full flex items-center justify-between p-4 active:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-variant/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant">
                  help
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-label-md text-label-md text-on-surface">
                  Help &amp; Support
                </h4>
                <p className="text-[12px] text-on-surface-variant">
                  Tutorials, FAQs, Contact
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">
              chevron_right
            </span>
          </button>
        </div>
      </div>
      <section className="hidden md:block space-y-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">
            palette
          </span>
          <h4 className="font-headline-md text-headline-md">Appearance</h4>
        </div>
        <div className="glass-card rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className="font-label-md text-label-md text-on-surface-variant block">
                Theme
              </span>
              <div className="flex flex-col gap-3">
                <label className="flex items-center justify-between p-3 bg-surface-container-low border border-primary/40 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined">dark_mode</span>
                    <span className="font-label-md">Dark Obsidian</span>
                  </div>
                  <input
                    defaultChecked
                    className="text-primary focus:ring-0"
                    name="theme"
                    type="radio"
                  />
                </label>
                <label className="flex items-center justify-between p-3 border border-white/5 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined">
                      light_mode
                    </span>
                    <span className="font-label-md">Pristine White</span>
                  </div>
                  <input
                    className="text-primary focus:ring-0"
                    name="theme"
                    type="radio"
                  />
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <span className="font-label-md text-label-md text-on-surface-variant block">
                Typography
              </span>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[12px] font-label-md">Font Size</span>
                    <span className="text-[12px] font-mono-sm text-primary">
                      16px
                    </span>
                  </div>
                  <input
                    className="w-full h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                    type="range"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md">
                    High Contrast
                  </span>
                  <button className="w-12 h-6 bg-surface-container-high rounded-full relative p-1 transition-colors">
                    <div className="w-4 h-4 bg-on-surface-variant rounded-full" />
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <span className="font-label-md text-label-md text-on-surface-variant block">
                System
              </span>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md">
                    Reduced Motion
                  </span>
                  <button className="w-12 h-6 bg-primary rounded-full relative p-1 transition-colors">
                    <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md">
                    Glassmorphism
                  </span>
                  <button className="w-12 h-6 bg-primary rounded-full relative p-1 transition-colors">
                    <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appearance;
