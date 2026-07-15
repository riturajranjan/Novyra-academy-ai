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
    <div className="pt-stack-lg">
      <div className="flex items-center gap-stack-md">
        <span className=" text-mono-sm text-primary uppercase tracking-widest">
          STEP {step} OF {totalSteps}
        </span>
        <div className="flex-grow h-1 bg-surface-container-high rounded-full overflow-hidden">
          <div
            className="h-full w-1/4 bg-gradient-to-r from-primary to-tertiary"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
