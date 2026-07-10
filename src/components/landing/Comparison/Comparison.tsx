export default function Comparison() {
  return (
    <section
      className="py-section-gap px-margin-desktop bg-surface-dim relative overflow-hidden transition-all duration-1000 ease-out opacity-100 translate-y-0"
      id="comparison">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-headline-lg text-on-surface text-[48px]">
            Why Students Learn{" "}
            <span className="text-gradient-primary">Faster</span> with Novyra
          </h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">
            Traditional learning is a passive marathon. Novyra is an interactive
            sprint to mastery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Learning Card */}
          <div className="glass-panel p-10 rounded-[40px] bg-[#ffffff05] border-[#ffffff0d] opacity-80 hover:opacity-100 transition-all">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-[#ffb4ab1a] flex items-center justify-center">
                <span className="material-symbols-outlined text-error text-[32px]">
                  timer_off
                </span>
              </div>
              <h4 className="text-on-surface text-[24px] font-bold">
                Traditional Learning
              </h4>
            </div>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-error mt-1 text-[24px]">
                  cancel
                </span>
                <div>
                  <p className="font-bold text-on-surface">Passive Watching</p>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Staring at pre-recorded videos for hours with zero
                    interaction.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-error mt-1 text-[24px]">
                  cancel
                </span>
                <div>
                  <p className="font-bold text-on-surface">
                    Fixed Learning Pace
                  </p>
                  <p className="text-sm text-on-surface-variant mt-1">
                    If you don&apos;t understand something, the video keeps playing.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-error mt-1 text-[24px]">
                  cancel
                </span>
                <div>
                  <p className="font-bold text-on-surface">
                    Delayed Doubt Solving
                  </p>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Waiting 24 hours or more for a mentor to answer your doubt.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* Novyra Academy AI Card */}
          <div
            className="glass-panel1 p-10 rounded-[40px] bg-[#c0c1ff0d] border-[#c0c1ff33] shadow-2xl shadow-[#c0c1ff1a] relative overflow-hidden">
            <div className="absolute top-0 right-0 px-6 py-2 bg-[#c0c1ff] text-on-primary font-bold text-[10px] uppercase tracking-[0.2em] rounded-bl-3xl">
              The Future
            </div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-[#c0c1ff33] flex items-center justify-center pulse-orb">
                <span className="material-symbols-outlined text-primary text-[32px]">
                  auto_awesome
                </span>
              </div>
              <h4 className="text-on-surface text-[24px] font-bold">
                Novyra Academy AI
              </h4>
            </div>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary mt-1 text-[24px]">
                  check_circle
                </span>
                <div>
                  <p className="font-bold text-on-surface text-[18px]">
                    1:1 AI Interaction
                  </p>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Real-time conversations with Dr. Nova. It&apos;s like having a
                    private tutor at home.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary mt-1 text-[24px]">
                  check_circle
                </span>
                <div>
                  <p className="font-bold text-on-surface text-[18px]">
                    Adaptive Intelligence
                  </p>
                  <p className="text-sm text-on-surface-variant mt-1">
                    The system identifies your weak spots and explains them
                    until you master them.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary mt-1 text-[24px]">
                  check_circle
                </span>
                <div>
                  <p className="font-bold text-on-surface text-[18px]">
                    Instant Trilingual Doubts
                  </p>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Voice your doubts in Hindi or Hinglish and get instant clear
                    explanations.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
