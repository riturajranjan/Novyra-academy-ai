interface ProgressHeaderProps {
  step: number;
  totalSteps: number;
}

export default function ProgressHeader({
  step,
  totalSteps,
}: ProgressHeaderProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full">
      {/* Top Row */}
      <div className="mb-5 flex items-center justify-between">
        <span className="font-headline-md text-headline-md font-bold text-primary">
          Nova Academy
        </span>

        <span
          className="
            text-sm
            font-medium
            text-slate-400

            lg:text-base
          ">
          Step {step} of {totalSteps}
        </span>
      </div>

      {/* Progress */}
      <div className="relative h-[6px] w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            rounded-full

            bg-gradient-to-r
            from-cyan-400
            to-sky-300

            transition-all
            duration-500
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}
