import NoteHero from "./NoteHero";
import AskAI from "./AskAI";
import SummaryCard from "./SummaryCard";
import InteractiveMind from "./InteractiveMind";


const MobileLayout = () => {
  return (
    <main className="flex-1 px-margin-mobile min-h-screen bg-background  pt-20 pb-32">
      <section className="mb-stack-lg">
        <NoteHero />

        <SummaryCard />

        <InteractiveMind />
      </section>
      <AskAI />
      <button
        className="fixed right-6 bottom-24 z-50 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-2xl ai-glow transition-transform active:scale-90 overflow-hidden"
        style={{ transform: "scale(1)" }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-pulse"></div>
        <span
          className="material-symbols-outlined text-[32px]"
          style={{ fontVariationSettings: '"FILL" 1' }}>
          smart_toy
        </span>
      </button>
    </main>
  );
};

export default MobileLayout;
