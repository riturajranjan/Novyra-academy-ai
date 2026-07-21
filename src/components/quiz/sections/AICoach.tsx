export default function AICoach() {
  return (
    <>
      <div
        className="fixed md:hidden bottom-32 left-margin-mobile right-margin-mobile z-40 transition-transform duration-500 transform translate-y-0"
        id="aiCoach">
        <div className="glass-panel rounded-2xl p-4 shadow-2xl border border-primary/20 ai-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/40 bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A highly detailed close-up portrait of Dr. Nova, a futuristic AI mentor with glowing bioluminescent circuits on her temples. She has a serene expression, silvery translucent skin, and is set against a dark, minimalist laboratory background with deep indigo and cyan light leaks. The aesthetic is ultra-premium, sleek, and intellectually sophisticated."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFUrjDi4hGKNI-uSHQPpL3UgrmiVO1hhGYRXolURvJ7uuSh7w-_VTefqdGAEGDSJG9NBINDHW5BGp9bnwlMufyAe95_vrU9CZcQs_z5IGDzPa_6PPy7utSaR51ApXS2fBtyuN3nRWh5ZcsVKm5iHom5w5qcM3Xbb3FUvoKlVaouq9Vx1qsK_mV-LmXNWevvxDUwZPVFw-sQME2mOYtapOqM-pZjDXkGx3OnDOMJPZ0_laEd48FjrRU9Q1k7opP4VsmZIdJEmwMJpY"
                />
              </div>
              <div>
                <h4 className="font-headline-md text-[14px] text-primary">
                  Dr. Nova
                </h4>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  <span className="text-[10px] uppercase font-bold tracking-tighter text-on-surface-variant">
                    Thinking...
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-surface-container-high hover:bg-primary/20 text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  lightbulb
                </span>
              </button>
              <button
                className="p-2 rounded-full bg-surface-container-high hover:bg-surface-variant transition-colors"
                id="toggleCoach">
                <span className="material-symbols-outlined text-[20px]">
                  expand_less
                </span>
              </button>
            </div>
          </div>
          <div
            className="space-y-3"
            id="coachContent"
            style={{ height: 0, opacity: 0, overflow: "hidden" }}>
            <div className="bg-surface-container-lowest/50 p-3 rounded-lg border border-white/5">
              <p className="text-label-md text-on-surface-variant italic">
                "Recall the probability density function for an infinite square
                well. You'll need to integrate |ψ₁|² from L/3 to 2L/3..."
              </p>
            </div>
            {/* Voice Waveform */}
            <div className="flex items-center justify-center gap-1 h-6">
              <div
                className="waveform-bar w-1 bg-primary rounded-full"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="waveform-bar w-1 bg-primary-container rounded-full"
                style={{ animationDelay: "0.1s" }}
              />
              <div
                className="waveform-bar w-1 bg-tertiary rounded-full"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="waveform-bar w-1 bg-primary rounded-full"
                style={{ animationDelay: "0.3s" }}
              />
              <div
                className="waveform-bar w-1 bg-primary-container rounded-full"
                style={{ animationDelay: "0.4s" }}
              />
              <div
                className="waveform-bar w-1 bg-tertiary rounded-full"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="md:block hidden glass-card rounded-2xl p-stack-md border-primary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span
            className="material-symbols-outlined text-6xl text-primary"
            data-icon="smart_toy">
            smart_toy
          </span>
        </div>
        <div className="flex items-center gap-stack-md mb-stack-md">
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-2 border-primary p-0.5">
              <img
                className="w-full h-full rounded-full object-cover"
                data-alt="A sophisticated AI persona avatar named Dr. Nova, designed with a sleek, minimalist obsidian helmet and soft glowing cyan lens. The background is a futuristic neural network visualization in deep blues and purples. Dr. Nova's design is calm and encouraging, representing a high-end educational assistant in the Novyra Academy ecosystem."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRravKfiRz-6f_7jZo_UAQp37C_mmRjVtf4x5dcJJua6-9vWastmUx5f3LIzDf3eFiDX2upYDoS7t9qxtyEUgAyp0QiX3yMkkSWaAnffsCp-kgH8JU8BHRhOs6ZhqxNTAmGQZbdIfdpEmFPTfezieNjJVaPCfML2ARIs9BdJ8yktLZ7O-LHhGyMKuEfgexqWcqXKyvC9O5SRst0rIutfjy9yp32hezPN3r1Ciun_t6ctJ_YqYtBukzHoxs8qPa8XXs1yBp4V1Fmbs"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-surface flex items-center justify-center">
              <div
                className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
                style={{
                  boxShadow: "rgba(34, 197, 94, 0.8) 0px 0px 8.11747px",
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="font-headline-md text-label-md font-bold text-on-surface">
              Dr. Nova
            </h3>
            <p className="text-[12px] text-tertiary">Exam Coach Active</p>
          </div>
        </div>
        <div className="bg-surface-container-low/50 rounded-xl p-stack-md mb-stack-md min-h-[100px]">
          <div className="flex gap-1 mb-2">
            <div
              className="waveform-bar w-1 bg-primary/60 rounded-full"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="waveform-bar w-1 bg-primary rounded-full"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="waveform-bar w-1 bg-tertiary rounded-full"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="waveform-bar w-1 bg-primary/60 rounded-full"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
          <p className="text-body-md text-on-surface text-[14px] leading-relaxed italic">
            "Think about how Friction affects the net force here... Resolving
            the vertical components of F will change the Normal force, and thus
            the friction..."
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-lg border border-white/5 hover:bg-primary/10 hover:border-primary/30 transition-all text-[13px]">
            <span className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-sm text-primary"
                data-icon="lightbulb">
                lightbulb
              </span>
              Small Hint
            </span>
            <span className="text-[10px] text-on-surface-variant">-2 XP</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-lg border border-white/5 hover:bg-tertiary/10 hover:border-tertiary/30 transition-all text-[13px]">
            <span className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-sm text-tertiary"
                data-icon="visibility">
                visibility
              </span>
              Visual Hint
            </span>
            <span className="text-[10px] text-on-surface-variant">-5 XP</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-all text-[13px]">
            <span className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="translate">
                translate
              </span>
              Explain in Hindi
            </span>
            <span className="text-[10px] text-on-surface-variant">Free</span>
          </button>
        </div>
      </section>
    </>
  );
}
