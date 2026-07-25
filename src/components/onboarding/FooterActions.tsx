"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface FooterActionsProps {
  onBack?: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
  nextLabel?: string;
}

export default function FooterActions({
  onBack,
  onNext,
  nextDisabled = false,
  nextLabel = "Continue",
}: FooterActionsProps) {
  return (
    <>
      <div className="hidden md:flex justify-between items-center mt-stack-md">
        <button
          onClick={onBack}
          className="px-stack-lg py-stack-md  text-label-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2 group">
          <span
            className="material-symbols-outlined transition-transform group-hover:-translate-x-1"
            data-icon="arrow_back">
            arrow_back
          </span>
          Back
        </button>
        <button
          onClick={onNext}
          disabled={nextDisabled}
          className=" px-stack-lg py-stack-md bg-primary text-on-primary font-bold rounded-xl shadow-[0_0_20px_rgba(192,193,255,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
          {nextLabel}
          <span className="material-symbols-outlined" data-icon="arrow_forward">
            arrow_forward
          </span>
        </button>
      </div>
      <div
        className="fixed md:hidden bottom-0 left-0 w-full p-margin-mobile bg-gradient-to-t
      from-background via-background/95 to-transparent z-40">
        <button
          onClick={onNext}
          disabled={nextDisabled}
          className="w-full  py-4 px-6 rounded-full bg-primary-container text-on-primary-container font-bold text-body-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed">
          {nextLabel}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </>
  );
}
