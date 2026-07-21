"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Flag, Save, SendHorizonal } from "lucide-react";

interface QuizFooterProps {
  isFirstQuestion?: boolean;
  isLastQuestion?: boolean;
  loading?: boolean;

  onPrevious?: () => void;
  onNext?: () => void;
  onFlag?: () => void;
  onSaveExit?: () => void;
  onSubmit?: () => void;

  className?: string;
}

export default function QuizFooter({
  isFirstQuestion = false,
  isLastQuestion = false,
  loading = false,
  onPrevious,
  onNext,
  onFlag,
  onSaveExit,
  onSubmit,
  className,
}: QuizFooterProps) {
  return (
    <footer
      className={cn(
        "rounded-3xl border border-outline-variant bg-surface-container p-5",
        className,
      )}>
      {/* Desktop */}

      <div className="hidden items-center justify-between lg:flex">
        <div className="flex gap-3">
          <button
            type="button"
            disabled={isFirstQuestion || loading}
            onClick={onPrevious}
            className="flex items-center gap-2 rounded-xl border border-outline-variant px-5 py-3 transition hover:bg-surface-container-high disabled:opacity-50">
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={onFlag}
            className="flex items-center gap-2 rounded-xl border border-outline-variant px-5 py-3 transition hover:bg-surface-container-high">
            <Flag className="h-4 w-4" />
            Flag
          </button>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            disabled={loading}
            onClick={onSaveExit}
            className="flex items-center gap-2 rounded-xl border border-outline-variant px-5 py-3 transition hover:bg-surface-container-high">
            <Save className="h-4 w-4" />
            Save & Exit
          </button>

          {isLastQuestion ? (
            <button
              type="button"
              disabled={loading}
              onClick={onSubmit}
              className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90">
              <SendHorizonal className="h-4 w-4" />
              Submit Quiz
            </button>
          ) : (
            <button
              type="button"
              disabled={loading}
              onClick={onNext}
              className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90">
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile */}

      <div className="flex flex-col gap-3 lg:hidden">
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            disabled={isFirstQuestion || loading}
            onClick={onPrevious}
            className="rounded-xl border border-outline-variant py-3 transition hover:bg-surface-container-high disabled:opacity-50">
            Previous
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={onNext}
            className="rounded-xl bg-primary py-3 font-medium text-primary-foreground transition hover:opacity-90">
            {isLastQuestion ? "Submit" : "Next"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            disabled={loading}
            onClick={onFlag}
            className="rounded-xl border border-outline-variant py-3 transition hover:bg-surface-container-high">
            Flag
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={onSaveExit}
            className="rounded-xl border border-outline-variant py-3 transition hover:bg-surface-container-high">
            Save
          </button>
        </div>
      </div>
    </footer>
  );
}
