"use client";

interface StudyPlanFooterProps {
  onEdit?: () => void;
  onStart: () => void;
}

export default function StudyPlanFooter({
  onEdit,
  onStart,
}: StudyPlanFooterProps) {
  return (
    <div className="flex flex-col gap-4 items-center pb-5 md:pb-20">
      <button
        onClick={onStart}
        className="gradient-button w-full max-w-md h-10 md:h-16 rounded-xl md:text-headline-md font-bold flex items-center justify-center gap-3 active:scale-[0.98]">
        <span>🚀 Launch My AI Classroom</span>
      </button>
      <button
        onClick={onEdit}
        className="text-on-surface-variant hover:text-on-surface text-label-md font-bold transition-colors">
        Modify Study Plan
      </button>
    </div>
  );
}
