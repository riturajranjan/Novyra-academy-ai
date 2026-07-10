import React from "react";

const LearningJourney = () => {
  return (
    <section className="py-section-gap px-margin-desktop bg-[#131b2e4d] border-y border-white/5 transition-all duration-1000 ease-out opacity-100 translate-y-0">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-headline-lg text-on-surface text-[40px]">
            Tailored Learning Modes
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            Every brain works differently. Choose the mode that fits your
            current goal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Learn Mode */}
          <div className="glass-panel p-8 rounded-[32px] text-center card-hover group cursor-pointer border-primary/10">
            <div className="w-16 h-16 rounded-2xl bg-[#c0c1ff1a] flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-all">
              <span className="material-symbols-outlined text-primary text-[36px]">
                local_library
              </span>
            </div>
            <h5 className="font-bold text-on-surface text-[20px] mb-3">
              Learn Mode
            </h5>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Highly visual, interactive AI-led video lessons that feel like a
              story.
            </p>
          </div>
          {/* Practice Mode */}
          <div className="glass-panel p-8 rounded-[32px] text-center card-hover group cursor-pointer border-tertiary/10">
            <div className="w-16 h-16 rounded-2xl bg-[#4cd7f61a] flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-all">
              <span className="material-symbols-outlined text-tertiary text-[36px]">
                fitness_center
              </span>
            </div>
            <h5 className="font-bold text-on-surface text-[20px] mb-3">
              Practice Mode
            </h5>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Dynamic difficulty. The more you get right, the harder it gets.
            </p>
          </div>
          {/* Revision Mode */}
          <div className="glass-panel p-8 rounded-[32px] text-center card-hover group cursor-pointer border-secondary/10">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-all">
              <span className="material-symbols-outlined text-secondary text-[36px]">
                style
              </span>
            </div>
            <h5 className="font-bold text-on-surface text-[20px] mb-3">
              Revision Mode
            </h5>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              AI creates flashcards and summaries based on your weak points.
            </p>
          </div>
          {/* Exam Mode */}
          <div className="glass-panel p-8 rounded-[32px] text-center card-hover group cursor-pointer border-primary/10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-all">
              <span className="material-symbols-outlined text-primary text-[36px]">
                assignment
              </span>
            </div>
            <h5 className="font-bold text-on-surface text-[20px] mb-3">
              Exam Mode
            </h5>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Full length mock board exams with AI-graded analytics and
              feedback.
            </p>
          </div>
          {/* Doubt Mode */}
          <div className="glass-panel p-8 rounded-[32px] text-center card-hover group cursor-pointer border-tertiary/10">
            <div className="w-16 h-16 rounded-2xl bg-[#4cd7f61a] flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-all">
              <span className="material-symbols-outlined text-tertiary text-[36px]">
                contact_support
              </span>
            </div>
            <h5 className="font-bold text-on-surface text-[20px] mb-3">
              Doubt Mode
            </h5>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              24/7 instant voice or text clarifications in your own language.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
