import React from "react";

const FlashCard = () => {
  return (
    <div className="flex flex-col gap-stack-md">
      <div className="flex justify-between items-center px-2">
        <h3 className="font-headline-md text-on-surface">Flashcards</h3>
        <span className="text-xs text-primary font-mono-sm">12 Remaining</span>
      </div>
      {/* Flashcard UI */}
      <div className="group perspective-1000 h-64 cursor-pointer relative">
        <div className="glass-card inner-glow p-8 rounded-2xl h-full flex flex-col items-center justify-center text-center relative border-primary/20 bg-primary/5 transition-all duration-500 transform hover:scale-105 active:scale-95">
          <div className="absolute top-4 right-6">
            <span
              className="material-symbols-outlined text-on-surface-variant"
              style={{ fontVariationSettings: '"FILL" 1' }}>
              bookmark
            </span>
          </div>
          <p className="text-xs font-mono-sm text-primary uppercase mb-4">
            Physics: Newton&apos;s 2nd Law
          </p>
          <h2 className="text-xl font-bold text-on-surface leading-tight px-4">
            What is the relationship between force, mass, and acceleration?
          </h2>
          <div className="mt-8 flex flex-col items-center">
            <button className="bg-surface-variant/30 hover:bg-primary text-on-surface hover:text-on-primary px-8 py-2 rounded-full text-sm font-semibold transition-all border border-white/10">
              Flip Card
            </button>
            <span className="text-[10px] text-on-surface-variant mt-4 font-mono-sm">
              Press Space to reveal
            </span>
          </div>
          {/* Spaced Repetition Indicator */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary" />
            <span className="text-[10px] text-on-surface-variant uppercase font-mono-sm">
              Review Tomorrow
            </span>
          </div>
        </div>
      </div>
      {/* Flashcard Stack Effect */}
      <div className="h-2 glass-card mx-4 rounded-b-xl opacity-50" />
      <div className="h-2 glass-card mx-8 rounded-b-xl opacity-30" />
    </div>
  );
};

export default FlashCard;
