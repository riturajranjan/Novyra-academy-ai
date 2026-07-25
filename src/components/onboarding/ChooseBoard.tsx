"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Board } from "@prisma/client";

import { useBoard } from "@/hooks/useBoard";
import { saveBoardSelection } from "@/app/actions/onboarding";

import HeroPanel from "./HeroPanel";
import BoardCard from "./BoardCard";
import AIHint from "./AIHint";
import ProgressHeader from "./ProgressHeader";
// import FooterActions from "./FooterActions";

interface ChooseBoardProps {
  boards: Board[];
  initialBoardId: string | null;
}

export default function ChooseBoard({ boards, initialBoardId }: ChooseBoardProps) {
  const router = useRouter();

  const { selectedBoard, setSelectedBoard } = useBoard(initialBoardId);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleContinue = () => {
    if (isPending || !selectedBoard) return;
    const boardId = selectedBoard;
    setError(null);

    startTransition(async () => {
      const result = await saveBoardSelection(boardId);
      if (result?.error) {
        setError(result.error);
        return;
      }
      router.push("/class");
    });
  };

  const aiMessage = useMemo(() => {
    switch (selectedBoard) {
      case "cbse":
        return "Excellent choice! I'll personalize your learning experience with NCERT content, AI explanations, chapter-wise quizzes and adaptive practice.";

      case "bseb":
        return "Great! I'll prepare your study plan according to the latest Bihar Board syllabus with previous year questions and smart revision.";

      case "icse":
        return "Perfect! I'll generate concept-focused lessons and deeper explanations based on the ICSE curriculum.";

      default:
        return "Choose your academic board to begin your personalized AI learning journey.";
    }
  }, [selectedBoard]);

  return (
    <>
      <div className="flex h-screen w-full">
        <section className="hidden lg:flex flex-col w-[45%] bg-surface-container-lowest relative overflow-hidden p-margin-desktop neural-bg">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-tertiary/10 rounded-full blur-[100px]" />

          <HeroPanel step={1} totalSteps={8} />
        </section>

        <section className="flex-1 bg-surface flex flex-col items-center justify-center p-gutter relative">
          <div className="w-full pb-4 lg:hidden">
            <ProgressHeader step={1} totalSteps={8} />
          </div>
          <div className="w-full max-w-2xl overflow-scroll">
            <div className="glass-card  rounded-xl p-stack-md md:p-stack-lg border-white/5">
              {boards.length === 0 ? (
                <p className="text-on-surface-variant text-body-md pb-stack-lg" role="status">
                  No boards are available right now. Please check back shortly.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mb-stack-lg">
                  {boards.map((item) => (
                    <BoardCard
                      key={item.id}
                      board={item}
                      selected={selectedBoard === item.id}
                      onClick={() => setSelectedBoard(item.id)}
                    />
                  ))}
                </div>
              )}

              <AIHint message={aiMessage} />
              {error && (
                <p className="text-sm text-red-400 pt-stack-md" role="alert">
                  {error}
                </p>
              )}
              {/* Actions */}
              <div className="flex items-center justify-between gap-stack-md pt-stack-md border-t border-white/5">
                <button className="px-gutter py-2 md:py-3 rounded-lg  text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">arrow_back</span>
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  disabled={isPending || !selectedBoard}
                  className="px-12 py-2 md:py-3 rounded-lg  transition-all duration-300 bg-primary text-on-primary-container hover:brightness-110 shadow-lg shadow-primary/20 disabled:opacity-40 disabled:cursor-not-allowed"
                  id="continue-btn">
                  {isPending ? "Saving..." : "Continue"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
