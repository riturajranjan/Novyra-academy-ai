import clsx from "clsx";
import React from "react";

interface ClassCardProps {
  item: SchoolClass;
  selected: boolean;
  onClick: () => void;
}

const ClassCardMobile = ({ item, selected, onClick }: ClassCardProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        `glass-card p-stack-md rounded-xl flex items-center justify-between transition-all duration-300 cursor-pointer active:scale-[0.98] hover:border-primary/50
              `,
        selected
          ? "active-selection bg-surface-container-high border-primary"
          : "border-outline-variant bg-surface-container-low",
      )}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-lg bg-secondary-container flex items-center justify-center font-bold text-headline-md text-primary">
          {item?.id}
        </div>
        <div>
          <h3 className="font-bold text-on-surface">{item?.title}</h3>
          <p className="text-xs text-on-surface-variant line-clamp-1">
            {item?.subtitle}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="material-symbols-outlined text-[14px] text-tertiary">
              auto_stories
            </span>
            <span className="text-[12px] text-tertiary ">
              {item?.chapters} Chapters
            </span>
          </div>
        </div>
      </div>
      <div className="selection-indicator">
        {/*   rounded-full p-1 */}
        {selected ? (
          <span
            className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-1 text-[22px]"
            style={{ fontVariationSettings: '"FILL" 1' }}>
            check_circle
          </span>
        ) : (
          <div className=" w-6 h-6 rounded-full border-2 border-white/10 " />
        )}
      </div>
    </div>

    // font-variation-settings:&quot;FILL&quot; 1
  );
};

export default ClassCardMobile;
