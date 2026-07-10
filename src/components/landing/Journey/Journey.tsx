export default function Journey() {
  return (
    <section
      className="py-section-gap px-margin-desktop max-w-container-max mx-auto transition-all duration-1000 ease-out opacity-100 translate-y-0"
      id="how-it-works">
      <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
        <h2 className="font-headline-lg text-on-surface text-[40px]">
          Your Visual Learning Journey
        </h2>
        <p className="font-body-lg text-on-surface-variant">
          A streamlined path from curiosity to complete subject mastery, powered
          by AI at every step.
        </p>
      </div>
      <div className="relative px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
          {/* Journey Steps */}
          <div className="relative flex flex-col items-center text-center timeline-step group">
            <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:[#c0c1ff33] group-hover:[#c0c1ff80] group-hover:scale-110 transition-all">
              <span className="material-symbols-outlined text-primary text-[24px]">
                app_registration
              </span>
            </div>
            <h5 className="font-bold text-on-surface mb-2">Choose Board</h5>
            <p className="text-[12px] text-on-surface-variant">
              CBSE, BSEB or Foundation
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center timeline-step group">
            <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#4cd7f633] group-hover:border-[#4cd7f680] group-hover:scale-110 transition-all">
              <span className="material-symbols-outlined text-tertiary text-[24px]">
                subject
              </span>
            </div>
            <h5 className="font-bold text-on-surface mb-2">Select Subject</h5>
            <p className="text-[12px] text-on-surface-variant">
              Science, Math, Bio &amp; more
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center timeline-step group">
            <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#b8c4ff33] group-hover:border-[#b8c4ff80] group-hover:scale-110 transition-all">
              <span className="material-symbols-outlined text-secondary text-[24px]">
                play_circle
              </span>
            </div>
            <h5 className="font-bold text-on-surface mb-2">Start AI Lesson</h5>
            <p className="text-[12px] text-on-surface-variant">
              Animated &amp; Interactive
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center timeline-step group">
            <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#c0c1ff33] group-hover:border-[#c0c1ff80] group-hover:scale-110 transition-all">
              <span className="material-symbols-outlined text-primary text-[24px]">
                forum
              </span>
            </div>
            <h5 className="font-bold text-on-surface mb-2">Talk with AI</h5>
            <p className="text-[12px] text-on-surface-variant">
              Personal Dr. Nova sessions
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center timeline-step group">
            <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#4cd7f633] group-hover:border-[#4cd7f680] group-hover:scale-110 transition-all">
              <span className="material-symbols-outlined text-tertiary text-[24px]">
                quiz
              </span>
            </div>
            <h5 className="font-bold text-on-surface mb-2">Practice</h5>
            <p className="text-[12px] text-on-surface-variant">
              Smart adaptive questions
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center timeline-step group">
            <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#b8c4ff33] group-hover:border-[#b8c4ff80] group-hover:scale-110 transition-all">
              <span className="material-symbols-outlined text-secondary text-[24px]">
                history_edu
              </span>
            </div>
            <h5 className="font-bold text-on-surface mb-2">AI Revision</h5>
            <p className="text-[12px] text-on-surface-variant">
              Focus on forgotten concepts
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center timeline-step group">
            <div className="w-16 h-16 rounded-2xl bg-[#c0c1ff33] border border-[#c0c1ff80] flex items-center justify-center mb-6 scale-110 shadow-lg shadow-[#c0c1ff33]">
              <span className="material-symbols-outlined text-primary text-[24px] font-bold">
                emoji_events
              </span>
            </div>
            <h5 className="font-bold text-primary mb-2">Exam Ready</h5>
            <p className="text-[12px] text-on-surface-variant">
              Top board performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
