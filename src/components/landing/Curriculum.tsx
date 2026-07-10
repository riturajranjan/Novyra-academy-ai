import React from "react";

const Curriculum = () => {
  return (
    <section
      className="py-section-gap px-margin-desktop max-w-container-max mx-auto transition-all duration-1000 ease-out opacity-100 translate-y-0"
      id="subjects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl space-y-4">
          <h2 className="font-headline-lg text-on-surface text-[40px]">
            Board-Ready Curriculums
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Every chapter is meticulously mapped to CBSE and State Board
            requirements with AI-powered interactive layers.
          </p>
        </div>
        <button className="bg-surface-container-high text-primary font-bold px-8 py-4 rounded-2xl border border-white/5 flex items-center gap-3 hover:bg-surface-variant transition-all">
          View All Subjects{" "}
          <span className="material-symbols-outlined">east</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Physics */}
        <div className="glass-panel p-8 rounded-[32px] border-white/5 card-hover group cursor-pointer">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-primary text-[36px]">
              science
            </span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[22px] font-bold text-on-surface">Physics</h3>
            <span className="bg-primary/20 text-primary text-[10px] px-2.5 py-1 rounded-lg font-extrabold uppercase tracking-widest">
              AI Ready
            </span>
          </div>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            45 Chapters • 1.2k Interactive Concepts
          </p>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[75%] rounded-full shadow-lg shadow-primary/40" />
          </div>
        </div>
        {/* Chemistry */}
        <div className="glass-panel p-8 rounded-[32px] border-white/5 card-hover group cursor-pointer">
          <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-tertiary text-[36px]">
              experiment
            </span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[22px] font-bold text-on-surface">Chemistry</h3>
            <span className="bg-tertiary/20 text-tertiary text-[10px] px-2.5 py-1 rounded-lg font-extrabold uppercase tracking-widest">
              AI Ready
            </span>
          </div>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            38 Chapters • 900 AI Experiments
          </p>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-tertiary w-[45%] rounded-full shadow-lg shadow-tertiary/40" />
          </div>
        </div>
        {/* Biology */}
        <div className="glass-panel p-8 rounded-[32px] border-white/5 card-hover group cursor-pointer">
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-secondary text-[36px]">
              vital_signs
            </span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[22px] font-bold text-on-surface">Biology</h3>
            <span className="bg-secondary/20 text-secondary text-[10px] px-2.5 py-1 rounded-lg font-extrabold uppercase tracking-widest">
              AI Ready
            </span>
          </div>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            52 Chapters • 1.5k Visual Models
          </p>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-[90%] rounded-full shadow-lg shadow-secondary/40" />
          </div>
        </div>
        {/* Math */}
        <div className="glass-panel p-8 rounded-[32px] border-white/5 card-hover group cursor-pointer">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-primary text-[36px]">
              calculate
            </span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[22px] font-bold text-on-surface">
              Mathematics
            </h3>
            <span className="bg-primary/20 text-primary text-[10px] px-2.5 py-1 rounded-lg font-extrabold uppercase tracking-widest">
              AI Ready
            </span>
          </div>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            30 Chapters • 800 Step-by-Step Solvers
          </p>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[25%] rounded-full shadow-lg shadow-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
