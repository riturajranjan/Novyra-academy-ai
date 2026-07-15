"use client";

import clsx from "clsx";
import { SchoolClass } from "../../../../types/class";

interface ClassCardProps {
  item: SchoolClass;
  selected: boolean;
  onClick: () => void;
}

export default function ClassCard({ item, selected, onClick }: ClassCardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `
        class-card group flex flex-col items-center justify-center p-stack-md rounded-xl  border border-outline-variant hover:border-primary/50 transition-all duration-300 active:scale-95
        `,
        selected
          ? "scale-95 active-selection bg-surface-container-high border-primary"
          : "border-outline-variant bg-surface-container-low",
      )}
      id="class-5">
      <span
        className={clsx(
          `
        font-headline-lg text-[22px] font-bold  group-hover:text-primary transition-colors
        `,
          selected
            ? "text-primary"
            : "text-on-surface-variant",
        )}>
        {item.title}
      </span>
      <span className="text-mono-sm text-mono-sm opacity-50">
        {item.subjects} Subjects
      </span>
      {selected && item.title == "Class 10" && (
        <div className="mt-2 px-2 py-0.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-[10px] font-bold uppercase tracking-tighter">
          AI Personalized
        </div>
      )}
    </button>
  );
}
