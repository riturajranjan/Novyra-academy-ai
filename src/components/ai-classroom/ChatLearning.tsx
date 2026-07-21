import React from "react";

const ChatLearning = () => {
  return (
    <div className="flex-1 overflow-y-auto px-margin-desktop space-y-12 pb-40 scroll-smooth">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        {/* AI Structured Learning Module */}
        <div className="flex items-start gap-8 group animate-in slide-in-from-bottom-6 duration-700">
          <div className="novyra-orb flex-shrink-0 mt-2" />
          <div className="flex-1 space-y-8">
            <div className="glass-card overflow-hidden rounded-[24px] shadow-2xl bg-surface-container-low/40">
              {/* Module Header */}
              <div className="bg-primary/10 border-b border-white/5 px-8 py-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      layers
                    </span>
                    <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-primary">
                      Core Mastery Module
                    </span>
                  </div>
                  <span className="text-mono-sm text-on-surface-variant/40">
                    Mod 1.1
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-on-surface tracking-tight">
                  Newton&apos;s First Law: The Law of Inertia
                </h3>
              </div>
              {/* Module Content */}
              <div className="p-10 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* The Concept */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">
                          menu_book
                        </span>
                      </div>
                      <span className="text-label-md font-bold uppercase tracking-wider">
                        The Concept
                      </span>
                    </div>
                    <p className="text-lg text-on-surface/90 leading-relaxed font-medium">
                      An object at rest remains at rest, and an object in motion
                      remains in motion at{" "}
                      <span className="text-primary underline underline-offset-4 decoration-primary/30">
                        constant velocity
                      </span>{" "}
                      unless acted on by a net unbalanced force.
                    </p>
                  </div>
                  {/* Real World Analogy */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-tertiary">
                      <div className="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">
                          lightbulb
                        </span>
                      </div>
                      <span className="text-label-md font-bold uppercase tracking-wider">
                        Real-world Analogy
                      </span>
                    </div>
                    <div className="p-6 bg-tertiary/5 rounded-2xl border-l-4 border-tertiary/40">
                      <p className="text-body-md text-on-surface-variant leading-relaxed italic">
                        &quot;Think of a lazy cat on a couch. It won&apos;t move until the
                        sound of a food bowl (the external force) changes its
                        state of rest!&quot;
                      </p>
                    </div>
                  </div>
                </div>
                {/* Key Formula */}
                <div className="bg-surface-container-highest/30 p-8 rounded-[20px] border border-white/5 flex items-center justify-between group/formula hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <span className="material-symbols-outlined text-3xl">
                        functions
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-on-surface-variant opacity-50 block tracking-widest mb-1">
                        Fundamental Equation
                      </span>
                      <span className="text-3xl font-mono font-bold text-on-surface">
                        ΣF = 0 <span className="text-primary/40">⇒</span> Δv = 0
                      </span>
                    </div>
                  </div>
                  <button className="px-5 py-2.5 rounded-xl border border-primary/30 text-primary text-label-md font-bold hover:bg-primary hover:text-on-primary transition-all">
                    Analyze Proof
                  </button>
                </div>
                {/* Exam Tip */}
                <div className="bg-amber-400/5 border border-amber-400/20 p-6 rounded-[20px] flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl">
                      verified
                    </span>
                  </div>
                  <div>
                    <span className="text-label-md font-bold text-amber-400 block mb-2 uppercase tracking-wider">
                      Exam Strategy
                    </span>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      When explaining Inertia, always specify it&apos;s a property of
                      **mass**. Heavier objects have more inertia. In board
                      exams, mention &quot;absence of friction&quot; when discussing
                      objects in constant motion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Learning Action Bar */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 text-label-md font-bold transition-all flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-primary">
                  auto_fix_high
                </span>{" "}
                Simplify Concept
              </button>
              <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-tertiary/50 hover:bg-tertiary/5 text-label-md font-bold transition-all flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-tertiary">
                  translate
                </span>{" "}
                Translate to Hindi
              </button>
              <button className="ml-auto px-8 py-3 rounded-2xl bg-primary text-on-primary font-bold text-label-md hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
                Proceed to 2nd Law{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        {/* Thinking State (Dynamic) */}
        <div className="flex items-center gap-4 py-8 opacity-60">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="thinking-indicator text-primary">
              <div className="thinking-dot" />
              <div className="thinking-dot" />
              <div className="thinking-dot" />
            </div>
          </div>
          <span className="text-label-md font-medium text-on-surface-variant italic">
            Visualizing Force Vectors for your next example...
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatLearning;
