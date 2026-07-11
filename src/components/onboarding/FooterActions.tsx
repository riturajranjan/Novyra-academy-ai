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
    <div
      className="
        mt-10
        flex
        flex-col-reverse
        gap-4

        border-t
        border-white/10
        pt-6

        sm:flex-row
        sm:items-center
        sm:justify-between
      ">
      {/* Back Button */}

      <button
        type="button"
        onClick={onBack}
        className="
          flex
          h-12
          items-center
          justify-center
          gap-2

          rounded-xl

          border
          border-white/10

          px-6

          text-white

          transition-all

          hover:bg-white/5
        ">
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Continue Button */}

      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="
          flex
          h-12
          items-center
          justify-center
          gap-2

          rounded-xl

          bg-primary

          px-8

          font-semibold
          text-white

          transition-all

          hover:scale-[1.02]

          disabled:cursor-not-allowed
          disabled:opacity-40
        ">
        {nextLabel}

        <ArrowRight size={18} />
      </button>
    </div>
  );
}
