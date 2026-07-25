"use client";

import { useState, useTransition } from "react";
import type { LearningStyle } from "@prisma/client";
import { useLearningStyle } from "@/hooks/useLearningStyle";
import LearningCard from "./LearningCard";
import NovaMessage from "./NovaMessage";
import { useRouter } from "next/navigation";
import { saveLearningStyleSelection } from "@/app/actions/onboarding";

interface RightPanelProps {
  learningStyles: LearningStyle[];
  initialSelectedIds: string[];
}

export default function RightPanel({ learningStyles, initialSelectedIds }: RightPanelProps) {
  const { selected, toggle } = useLearningStyle(initialSelectedIds);

  const route = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const selectedTitles = learningStyles
    .filter((item) => selected.includes(item.id))
    .map((item) => item.title);

  const handleContinue = () => {
    if (isPending || selected.length === 0) return;
    setError(null);

    startTransition(async () => {
      const result = await saveLearningStyleSelection(selected);
      if (result?.error) {
        setError(result.error);
        return;
      }
      route.push("/goal-selection");
    });
  };

  return (
    <>
      <section className="flex-1 flex flex-col justify-center items-center px-4 md:px-margin-desktop py-stack-lg bg-surface-container-lowest/50">
        <div
          className="
       w-full max-w-3xl glass-card-desk rounded-2xl  md:p-stack-lg relative
        ">
          <header className="mb-stack-lg text-center hidden md:block">
            <h2 className=" text-headline-md text-on-surface mb-2">
              How do you learn best?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Select one or more learning styles. Dr. Nova will adapt lessons
              automatically.
            </p>
          </header>

          <section className="mb-stack-lg md:hidden">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">
              Choose Your Learning Style
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tell Dr. Nova how you learn best.
            </p>
          </section>

          {learningStyles.length === 0 ? (
            <p className="text-on-surface-variant text-body-md mb-stack-lg" role="status">
              No learning styles are available right now.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-stack-lg">
              {learningStyles.map((item) => (
                <LearningCard
                  key={item.id}
                  item={item}
                  selected={selected.includes(item.id)}
                  onClick={() => toggle(item.id)}
                />
              ))}
            </div>
          )}

          <NovaMessage selected={selectedTitles} />

          {error && (
            <p className="text-sm text-red-400 mb-stack-md" role="alert">
              {error}
            </p>
          )}

          <div className="flex justify-between items-center pt-stack-md border-t border-white/5">
            <button onClick={()=>route.push("/subjects")} className="hidden px-6 py-3 text-on-surface-variant hover:text-on-surface transition-colors  md:flex items-center gap-2">
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </button>
            <button
              className="w-auto px-10 py-3 bg-primary text-on-primary rounded-lg  font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 shadow-lg shadow-primary/20"
              disabled={selected?.length === 0 || isPending}
              id="continue-btn" onClick={handleContinue}>
              {isPending ? "Saving..." : "Continue"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
