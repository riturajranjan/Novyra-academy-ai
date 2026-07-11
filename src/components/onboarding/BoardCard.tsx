"use client";

import type { Board } from "@/types/onboarding";
import clsx from "clsx";

interface BoardCardProps {
  board: Board;
  selected: boolean;
  onClick: () => void;
}

export default function BoardCard({
  board,
  selected,
  onClick,
}: BoardCardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "group flex flex-col items-start p-stack-sm  md:p-stack-lg rounded-xl border border-white/10 bg-surface-container-low transition-all duration-300 hover:scale-[1.02] glow-border text-left relative overflow-hidden",
        selected && board.title === "CBSE" && "border-primary bg-primary/5",
        selected && board.title === "BSEB" && "border-tertiary bg-tertiary/5",
      )}
      id="card-cbse">
      <div className="absolute top-3 right-3">
        <span
          className={clsx(
            `px-3 py-1 rounded-full  text-xs`,
            board.badge === "Recommended"
              ? "bg-primary/20 text-primary"
              : "bg-cyan-500/20 text-cyan-300",
          )}>
          {board?.badge}
        </span>
      </div>
      <div className="flex md:hidden gap-3">
        {" "}
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-stack-md group-hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined text-primary text-2xl">
            school
          </span>
        </div>
        <div>
          <h3 className="text-[18px]  text-on-surface">{board?.title}</h3>
          <p className="text-[15px] text-on-surface-variant mb-4">
            {board?.subtitle}
          </p>
        </div>
      </div>

      <div className="w-12 h-12   rounded-lg bg-primary/10 hidden md:flex items-center justify-center mb-stack-md group-hover:bg-primary/20 transition-colors">
        <span className="material-symbols-outlined text-primary text-3xl">
          school
        </span>
      </div>

      <h3 className="font-headline-md  hidden md:flex  text-on-surface mb-1">
        {board?.title}
      </h3>
      <p className="font-body-md  hidden md:flex text-on-surface-variant mb-4">
        {board?.subtitle}
      </p>

      <ul className="space-y-2 hidden md:block">
        {board?.features?.map((item) => {
          return (
            <li
              key={item}
              className="flex items-center gap-2  text-on-surface-variant/80">
              <span className="material-symbols-outlined text-sm text-tertiary">
                check_circle
              </span>{" "}
              {item}
            </li>
          );
        })}
      </ul>
      <div
        className={`absolute bottom-3 right-3 ${selected ? "" : "hidden"}`}
        id="check-cbse">
        <span
          className={clsx(
            "material-symbols-outlined text-3xl",
            selected && board.title === "CBSE" && "text-primary",
            selected && board.title === "BSEB" && "text-tertiary",
          )}
          style={{ fontVariationSettings: '"FILL" 1' }}>
          check_circle
        </span>
      </div>
    </button>
  );
}
