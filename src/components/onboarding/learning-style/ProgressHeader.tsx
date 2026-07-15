"use client";

interface ProgressHeaderProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressHeader({
  currentStep,
  totalSteps,
}: ProgressHeaderProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-[#0B1326]/95 backdrop-blur-xl border-b border-white/5">
        <div className="px-6 pt-6 pb-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] uppercase tracking-[0.18em] font-semibold text-[#C0C1FF]">
                Step {currentStep} of {totalSteps}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`h-[5px] rounded-full transition-all duration-300 ${
                    index < currentStep ? "w-8 bg-[#C0C1FF]" : "w-8 bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 h-[5px] rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#C0C1FF] transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </header>

      {/* Desktop Header */}

      <header className="hidden lg:flex fixed top-0 left-0 right-0 z-50 h-20 px-10 border-b border-white/5 bg-[#0B1326]/90 backdrop-blur-xl items-center justify-between">
        <h2 className="font-semibold text-white text-[22px]">Nova Academy</h2>

        <div className="flex items-center gap-5">
          <p className="text-[#C7C4D7] text-[15px]">
            Step {currentStep} of {totalSteps}
          </p>

          <div className="w-36 h-[6px] rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#C0C1FF]"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
