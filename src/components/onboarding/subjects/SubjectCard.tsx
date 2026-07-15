"use client";

import clsx from "clsx";
import { BookOpen, Zap, CheckCircle2 } from "lucide-react";

export interface SubjectCardProps {
  title: string;
  description: string;
  chapters: number;
  level: string;
  badge?: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export default function SubjectCard({
  title,
  description,
  chapters,
  level,
  badge = "AI READY",
  icon,
  selected,
  onClick,
}: SubjectCardProps) {
  return (
    <>
      <div
        className={clsx(
          `
        subject-card hidden md:block group cursor-pointer glass-panel p-stack-md rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 relative overflow-hidden
        `,
          selected ? "selected-card  border-primary/50  shadow-primary/20" : "",
        )}
        onClick={onClick}>
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[28px]">
              {icon}
            </span>
          </div>
          <div className="bg-secondary-container/30 text-on-secondary-container px-2 py-0.5 rounded-full  text-[10px] uppercase tracking-wider">
            {badge}
          </div>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
          {title}
        </h3>
        <p className="text-on-surface-variant text-label-md mb-4">
          {description}
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center text-on-surface-variant text-label-md gap-1">
            <span className="material-symbols-outlined text-[16px]">
              menu_book
            </span>
            {chapters} Chapters
          </div>
          <div className="w-1 h-1 rounded-full bg-outline-variant" />
          <div className="flex items-center text-on-surface-variant text-label-md gap-1">
            <span className="material-symbols-outlined text-[16px]">bolt</span>
            {level}
          </div>
        </div>
        {/* Selected State Checkmark (Hidden by default) */}
        <div className="checkmark absolute top-4 right-4 bg-primary text-on-primary rounded-full p-0.5 shadow-lg hidden">
          <span className="material-symbols-outlined text-[18px]">check</span>
        </div>
      </div>

      <button
        onClick={onClick}
        className={clsx(
          `
       glass-card md:hidden  w-full p-stack-md rounded-xl text-left flex items-center gap-4 active:scale-[0.98] 
        `,
          selected
            ? " subject-active "
            : "",
        )}>
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[32px]">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-headline-md text-[18px] text-on-surface">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              <span
                className="material-symbols-outlined text-[14px] text-primary"
                style={{ fontVariationSettings: '"FILL" 1' }}>
                star
              </span>
              <span
                className="material-symbols-outlined text-[14px] text-primary"
                style={{ fontVariationSettings: '"FILL" 1' }}>
                star
              </span>
              <span
                className="material-symbols-outlined text-[14px] text-primary"
                style={{ fontVariationSettings: '"FILL" 1' }}>
                star
              </span>
              <span className="material-symbols-outlined text-[14px] text-outline">
                star
              </span>
            </div>
            <span className=" text-[12px] text-on-surface-variant">
              {chapters} Chapters
            </span>
          </div>
        </div>
        {selected && (
          <span className="material-symbols-outlined check-icon text-primary text-[24px]">
            check_circle
          </span>
        )}
      </button>
    </>
  );
}
