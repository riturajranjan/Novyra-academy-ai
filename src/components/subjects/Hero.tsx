"use client";

interface HeroProps {
  subjectTitle: string;
  boardTitle: string | null;
  classTitle: string | null;
}

export default function Hero({ subjectTitle, boardTitle, classTitle }: HeroProps) {
  const contextLabel = [boardTitle, classTitle].filter(Boolean).join(" • ");

  return (
    <div className="col-span-12 md:col-span-8">
      <div className="flex items-center gap-stack-md mb-stack-sm">
        <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full font-mono-sm uppercase tracking-wider font-bold">
          {subjectTitle}
        </span>
        {contextLabel && <span className="text-on-surface-variant font-label-md">• {contextLabel}</span>}
      </div>
      <h2 className="font-display-xl  mb-stack-md leading-tight">{subjectTitle}</h2>
      {/* Quick Action Chips */}
      <div className="flex flex-wrap gap-stack-sm mt-stack-lg">
        <button className="flex items-center gap-unit px-4 py-2 rounded-full glass-card hover:bg-primary hover:text-on-primary text-on-surface-variant transition-all font-label-md">
          <span className="material-symbols-outlined text-sm">smart_toy</span>{" "}
          AI Teacher
        </button>
        <button className="flex items-center gap-unit px-4 py-2 rounded-full glass-card hover:bg-primary hover:text-on-primary text-on-surface-variant transition-all font-label-md">
          <span className="material-symbols-outlined text-sm">mic</span> Voice
          Lesson
        </button>
        <button className="flex items-center gap-unit px-4 py-2 rounded-full glass-card hover:bg-primary hover:text-on-primary text-on-surface-variant transition-all font-label-md">
          <span className="material-symbols-outlined text-sm">quiz</span>{" "}
          Practice Quiz
        </button>
        <button className="flex items-center gap-unit px-4 py-2 rounded-full glass-card hover:bg-primary hover:text-on-primary text-on-surface-variant transition-all font-label-md">
          <span className="material-symbols-outlined text-sm">cards</span>{" "}
          Flashcards
        </button>
        <button className="flex items-center gap-unit px-4 py-2 rounded-full glass-card hover:bg-primary hover:text-on-primary text-on-surface-variant transition-all font-label-md">
          <span className="material-symbols-outlined text-sm">function</span>{" "}
          Formula Sheet
        </button>
      </div>
    </div>
  );
}
