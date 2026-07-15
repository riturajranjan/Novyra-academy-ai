import { LearningStyle } from "@/types/learning-style";
import clsx from "clsx";

interface Props {
  item: LearningStyle;
  selected: boolean;
  onClick: () => void;
}

const LearningCard = ({ item, selected, onClick }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(
          `
            glass-card w-full p-stack-md rounded-xl flex items-center gap-stack-md text-left group md:hidden
              `,
          selected ? " subject-active " : "",
        )}>
        <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-active:scale-90 transition-transform">
          <span
            className="material-symbols-outlined text-[24px]"
            style={{ fontVariationSettings: '"FILL" 1' }}>
            {item?.icon}
          </span>
        </div>
        <div className="flex-grow">
          <h3 className="font-headline-md text-body-lg text-on-surface">
            {item?.title}
          </h3>
          <p className=" text-label-md text-on-surface-variant">
            {item?.description}
          </p>
        </div>
        {selected && (
          <div className="selection-indicator  transition-opacity">
            <span className="material-symbols-outlined text-primary text-[24px]">
              check_circle
            </span>
          </div>
        )}
      </button>
      <button
        className={clsx(
          `
            hidden  selection-card p-stack-sm rounded-xl text-left border border-white/5 md:flex flex-col gap-2 group 
              `,
          selected ? " subject-active " : "",
        )}
        onClick={onClick}>
        <div className="flex justify-between items-start">
          <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform text-[24px]">
            {item?.icon}
          </span>
          <div className="h-5 w-5 rounded-full border-2 border-white/10 flex items-center justify-center check-indicator">
            {selected && (
              <span className="material-symbols-outlined text-[14px] text-primary">
                check
              </span>
            )}
          </div>
        </div>
        <h3 className=" text-bold  font-bold text-on-surface text-[16px]">
          {item?.title}
        </h3>
        <p className="text-xs text-on-surface-variant leading-snug">
          {item?.description}
        </p>
      </button>
    </>
  );
};

export default LearningCard;
