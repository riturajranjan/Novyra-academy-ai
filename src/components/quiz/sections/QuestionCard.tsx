import { question } from "@/constants/quiz";
import AnswerOptions from "./AnswerOptions";

export default function QuestionCard() {
  return (
    <>
      <section className="md:hidden mb-stack-lg">
        <div className="bg-surface-container-low rounded-xl p-stack-md border border-outline-variant/30">
          <p className="font-body-lg text-on-surface mb-stack-lg leading-relaxed">
            A particle of mass{" "}
            <span className="font-mono-sm text-primary">m</span> is confined in
            a one-dimensional box of length{" "}
            <span className="font-mono-sm text-primary">L</span>. What is the
            probability of finding the particle in the middle third of the box
            in the <span className="italic">n = 1</span> state?
          </p>
          {/* Interactive Figure Placeholder */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-container-lowest border border-white/5 mb-stack-md flex items-center justify-center group cursor-pointer">
            <div className="relative z-10 flex flex-col items-center">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-2">
                analytics
              </span>
              <span className="font-label-md text-on-surface-variant text-[13px]">
                Tap to interact with wave function
              </span>
            </div>
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 border-[1px] border-white/5 pointer-events-none rounded-lg" />
          </div>
        </div>
      </section>

      <section className="hidden md:block glass-card rounded-2xl p-stack-lg inner-glow relative overflow-hidden">
        <div className="flex justify-between items-center mb-stack-md">
          <div className="flex gap-2">
            <span className="bg-primary/10 border border-primary/20 text-primary-fixed-dim text-[10px] px-2 py-0.5 rounded font-mono-sm uppercase tracking-wider">
              Board Question
            </span>
            <span className="bg-tertiary/10 border border-tertiary/20 text-tertiary text-[10px] px-2 py-0.5 rounded font-mono-sm uppercase tracking-wider">
              NCERT Aligned
            </span>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-all">
            <span className="material-symbols-outlined" data-icon="bookmark">
              bookmark
            </span>
          </button>
        </div>
        <div className="space-y-stack-lg">
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            A block of mass{" "}
            <span className="text-primary font-bold">m = 5kg</span> is resting
            on a rough horizontal surface with coefficient of static friction{" "}
            <span className="text-tertiary font-bold">μs = 0.4</span>. A force
            vector <span className="italic">F</span> is applied at an angle of
            30° above the horizontal. Calculate the minimum magnitude of force{" "}
            <span className="italic">F</span> required to just start the block
            moving.
          </p>
          {/* Interactive SVG Diagram Placeholder */}
          <div className="relative w-full aspect-video rounded-xl bg-surface-container-lowest border border-white/5 flex items-center justify-center group overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
            <div className="z-10 flex flex-col items-center text-center p-6 bg-surface-container/40 backdrop-blur-md rounded-lg border border-white/10">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-2"
                data-icon="architecture">
                architecture
              </span>
              <span className="font-label-md text-label-md text-on-surface-variant">
                Force Vector Interaction Diagram
              </span>
              <p className="text-[12px] opacity-60">
                Interactive simulation active
              </p>
            </div>
          </div>
        </div>
        {/* Answer Options */}
        <div className="mt-stack-lg grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <AnswerOptions question={question} />
        </div>
      </section>
    </>
  );
}
