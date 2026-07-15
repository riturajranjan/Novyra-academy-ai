"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";

import { boards } from "@/constants/boards";
import { useBoard } from "@/hooks/useBoard";

import HeroPanel from "./HeroPanel";
import BoardCard from "./BoardCard";
import AIHint from "./AIHint";
import ProgressHeader from "./ProgressHeader";
// import FooterActions from "./FooterActions";

export default function ChooseBoard() {
  const router = useRouter();

  const { selectedBoard, setSelectedBoard } = useBoard();

  const board = boards.find((item) => item.id === selectedBoard);

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

              <AIHint message={aiMessage} />
              {/* Actions */}
              <div className="flex items-center justify-between gap-stack-md pt-stack-md border-t border-white/5">
                <button className="px-gutter py-2 md:py-3 rounded-lg  text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">arrow_back</span>
                  Back
                </button>
                <button
                  onClick={() => router.push("/class")}
                  className="px-12 py-2 md:py-3 rounded-lg  transition-all duration-300 bg-primary text-on-primary-container hover:brightness-110 shadow-lg shadow-primary/20"
                  id="continue-btn">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
