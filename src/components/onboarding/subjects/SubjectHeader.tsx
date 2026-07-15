"use client";

export default function SubjectHeader() {
  return (
    <header className="fixed hidden top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 px-margin-mobile py-stack-md md:flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span
          className="material-symbols-outlined text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}>
          auto_awesome
        </span>

        <span className="font-headline-md text-primary font-bold text-[20px]">
          Novyra
        </span>
      </div>

      <div className="step-pill px-3 py-1 rounded-full flex items-center gap-2">
        <span className=" text-on-surface-variant text-[12px]">
          Step 3 of 8
        </span>

        <div className="w-12 h-1.5 bg-surface-container rounded-full overflow-hidden">
          <div className="w-[37.5%] h-full bg-primary"></div>
        </div>
      </div>
    </header>
  );
}
