import React from "react";

const PersonalInformation = () => {
  return (
    <>
      <div className="md:hidden">
        <p className="px-2 mb-3 font-label-md text-label-md text-primary uppercase tracking-widest text-[11px]">
          Core Configuration
        </p>
        <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5">
          <button className="w-full flex items-center justify-between p-4 active:bg-white/5 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  person
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-label-md text-label-md text-on-surface">
                  Personal Information
                </h4>
                <p className="text-[12px] text-on-surface-variant">
                  Identity, Email &amp; Socials
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-active:translate-x-1 transition-transform">
              chevron_right
            </span>
          </button>
          <button className="w-full flex items-center justify-between p-4 active:bg-white/5 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary">
                  school
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-label-md text-label-md text-on-surface">
                  Academic Preferences
                </h4>
                <p className="text-[12px] text-on-surface-variant">
                  Syllabus, Board &amp; Difficulty
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-active:translate-x-1 transition-transform">
              chevron_right
            </span>
          </button>
        </div>
      </div>
      <section className="hidden md:block space-y-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">person</span>
          <h4 className="font-headline-md text-headline-md">
            Personal Information
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <label className="block">
              <span className="font-label-md text-label-md text-on-surface-variant block mb-2">
                Full Name
              </span>
              <input
                className="w-full bg-surface-container-low border border-white/5 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-0 transition-colors"
                type="text"
                defaultValue="Arjun Singh"
              />
            </label>
            <label className="block">
              <span className="font-label-md text-label-md text-on-surface-variant block mb-2">
                Email Address
              </span>
              <input
                className="w-full bg-surface-container-low border border-white/5 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-0 transition-colors"
                type="email"
                defaultValue="arjun.singh@example.edu"
              />
            </label>
          </div>
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <label className="block">
              <span className="font-label-md text-label-md text-on-surface-variant block mb-2">
                Phone Number
              </span>
              <input
                className="w-full bg-surface-container-low border border-white/5 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-0 transition-colors"
                type="tel"
                defaultValue="+91 98765 43210"
              />
            </label>
            <label className="block">
              <span className="font-label-md text-label-md text-on-surface-variant block mb-2">
                Current School
              </span>
              <input
                className="w-full bg-surface-container-low border border-white/5 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-0 transition-colors"
                type="text"
                defaultValue="The Doon School, Dehradun"
              />
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalInformation;
