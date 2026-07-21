import React from "react";

const AIPersona = () => {
  return (
    <>
      {" "}
      <div className="md:hidden">
        <p className="px-2 mb-3 font-label-md text-label-md text-primary uppercase tracking-widest text-[11px]">
          System
        </p>
        <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5">
          <button className="w-full flex items-center justify-between p-4 active:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-variant/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant">
                  notifications
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-label-md text-label-md text-on-surface">
                  Notifications
                </h4>
                <p className="text-[12px] text-on-surface-variant">
                  Focus Mode &amp; Learning Alerts
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">
              chevron_right
            </span>
          </button>
          <button className="w-full flex items-center justify-between p-4 active:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-variant/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant">
                  security
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-label-md text-label-md text-on-surface">
                  Security &amp; Privacy
                </h4>
                <p className="text-[12px] text-on-surface-variant">
                  2FA, Biometrics &amp; Data
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">
              chevron_right
            </span>
          </button>
        </div>
      </div>
      <div className="lg:col-span-5 hidden md:flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">
            smart_toy
          </span>
          <h4 className="font-headline-md text-headline-md">AI Persona</h4>
        </div>
        <div className="glass-card rounded-2xl p-6 flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-tertiary p-[1px]">
              <div className="w-full h-full rounded-2xl bg-surface flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-3xl text-primary"
                  style={{ fontVariationSettings: '"FILL" 1' }}>
                  robot_2
                </span>
              </div>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface">
                AI Tutor Personality
              </p>
              <p className="font-body-md text-body-md text-primary">
                Professional &amp; Encouraging
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <label className="block">
              <span className="font-label-md text-label-md text-on-surface-variant block mb-2">
                Voice Model
              </span>
              <select className="w-full bg-surface-container-low border border-white/5 rounded-lg px-4 py-2 font-body-md text-on-surface">
                <option>Nova (Dynamic)</option>
                <option>Atlas (Deep)</option>
                <option selected>Lyra (Smooth)</option>
              </select>
            </label>
            <label className="block">
              <span className="font-label-md text-label-md text-on-surface-variant block mb-2">
                Primary Language
              </span>
              <select className="w-full bg-surface-container-low border border-white/5 rounded-lg px-4 py-2 font-body-md text-on-surface">
                <option>English (US)</option>
                <option selected>Bilingual (English/Hindi)</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPersona;
