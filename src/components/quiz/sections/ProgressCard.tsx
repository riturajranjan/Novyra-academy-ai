export default function ProgressCard() {
  return (
    <section className="glass-card rounded-2xl p-stack-md">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-label-md font-label-md text-on-surface-variant">
              Current Accuracy
            </span>
            <span className="text-label-md font-label-md text-on-surface font-bold">
              92%
            </span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[92%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-label-md font-label-md text-on-surface-variant">
              Confidence Level
            </span>
            <span className="text-label-md font-label-md text-on-surface font-bold">
              High
            </span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full learning-velocity-gradient w-[75%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
