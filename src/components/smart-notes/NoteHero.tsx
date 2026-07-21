import React from "react";

const NoteHero = () => {
  return (
    <>
      <div className="glass-panel md:hidden p-stack-md rounded-2xl flex justify-between items-center overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-1">
            Newton&apos;s Laws
          </h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary" />
            <p className="font-label-md text-label-md text-tertiary">
              Revision Due Tomorrow
            </p>
          </div>
        </div>
        <div className="relative z-10 text-right">
          <div className="text-primary font-mono-sm text-mono-sm mb-1">
            78% Mastery
          </div>
          <div className="w-16 h-1 bg-white/10 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full"
              style={{ width: "78%" }}
            />
          </div>
        </div>
        {/* Subtle graphic background for the card */}
        <div className="absolute right-[-20px] top-[-20px] opacity-10">
          <span
            className="material-symbols-outlined text-[100px]"
            style={{ fontVariationSettings: '"FILL" 1' }}>
            school
          </span>
        </div>
      </div>
      <div
        className="hidden md:block glass-card inner-glow p-8 rounded-xl relative overflow-hidden group"
        style={{ transform: "translateY(0px)" }}>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-mono-sm uppercase tracking-wider">
              Physics
            </span>
            <span className="text-on-surface-variant text-sm">• Unit 4</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-6">
            Current Chapter: Newton&apos;s Laws
          </h1>
          <div className="flex items-center gap-10 mb-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold ai-gradient-text">18</span>
              <span className="text-sm text-on-surface-variant">AI Notes</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold ai-gradient-text">12</span>
              <span className="text-sm text-on-surface-variant">
                Flashcards
              </span>
            </div>
            <div className="flex-1" />
            <button className="bg-primary hover:brightness-110 text-on-primary px-stack-lg py-4 rounded-lg font-bold transition-all shadow-primary-container/20 shadow-xl flex items-center gap-2">
              <span>Continue Revision</span>
              <span className="material-symbols-outlined">play_arrow</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteHero;
