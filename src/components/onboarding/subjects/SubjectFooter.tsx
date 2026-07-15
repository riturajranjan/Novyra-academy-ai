"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface SubjectFooterProps {
  selectedCount: number;
  onBack: () => void;
  onNext: () => void;
}

export default function SubjectFooter({
  selectedCount,
  onBack,
  onNext,
}: SubjectFooterProps) {
  return (
    <>
      <footer className="fixed hidden md:block lg:static bottom-0 right-0 w-full glass-panel border-t border-white/5 py-stack-md px-margin-desktop z-50">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="md:flex hidden items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors  px-4 py-2 rounded-xl border border-white/5 bg-surface-variant/20">
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </button>
          <div className="flex items-center gap-stack-md">
            <span
              className="text-on-surface-variant  text-label-md"
              id="selection-count">
              {selectedCount === 0
                ? "No Subject Selected"
                : `${selectedCount} Subject${
                    selectedCount > 1 ? "s" : ""
                  } Selected`}
            </span>
            <button
              disabled={selectedCount === 0}
              onClick={onNext}
              className="bg-primary text-on-primary font-bold px-8 py-3 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              id="continue-btn">
              Continue
            </button>
          </div>
        </div>
      </footer>
      <footer className="fixed md:hidden bottom-0 left-0 w-full p-margin-mobile bg-surface/60 backdrop-blur-md z-40">
        <button
          className="w-full h-[56px] gradient-button rounded-xl text-on-primary font-headline-md text-[18px] shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-[0.96]"
          id="continue-btn"
          disabled={selectedCount === 0}
          onClick={onNext}>
          <span>Continue</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </footer>
    </>
  );
}
