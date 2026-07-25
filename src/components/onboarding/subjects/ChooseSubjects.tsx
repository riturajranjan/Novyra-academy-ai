"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Subject } from "@prisma/client";

import SubjectHeader from "./SubjectHeader";
import SubjectHero from "./SubjectHero";
import SubjectGrid from "./SubjectGrid";
import AIRecommendation from "./AIRecommendation";
import SubjectFooter from "./SubjectFooter";
import useSubjects from "@/hooks/useSubjects";
import { saveSubjectsSelection } from "@/app/actions/onboarding";

interface ChooseSubjectsProps {
  subjects: Subject[];
  initialSelectedSubjectIds: number[];
}

export default function ChooseSubjects({ subjects, initialSelectedSubjectIds }: ChooseSubjectsProps) {
  const router = useRouter();

  const { selectedSubjects, toggleSubject } = useSubjects(initialSelectedSubjectIds);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const selectedNames = subjects
    .filter((subject) => selectedSubjects.includes(subject.id))
    .map((subject) => subject.title);

  const handleContinue = () => {
    if (isPending) return;
    setError(null);

    startTransition(async () => {
      const result = await saveSubjectsSelection(selectedSubjects);
      if (result?.error) {
        setError(result.error);
        return;
      }
      router.push("/learning-style");
    });
  };

  return (
    <div className="flex h-screen ">
      <SubjectHero />

      <section className="flex-1 flex flex-col bg-surface overflow-hidden scroll-hide">
        <SubjectHeader />

        {/* Content */}

        <div
          className="
           px-margin-mobile py-[24px] md:p-margin-desktop max-w-3xl mx-auto w-full md:pb-[100px]
            overflow-y-auto
          ">
          {/* Heading */}

          <section className="mb-stack-lg md:hidden">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-stack-sm">
              Choose Your Subjects
            </h1>
            <p className="font-body-md text-on-surface-variant opacity-80">
              Select the subjects you want your AI Teacher to personalize.
            </p>
          </section>

          <div className="mb-stack-lg hidden md:block">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
              Select Your Subjects
            </h2>
            <p className="text-on-surface-variant font-body-md">
              You can select multiple subjects. Dr. Nova will synthesize them
              into a unified curriculum.
            </p>
          </div>

          {/* Grid */}

          {subjects.length === 0 ? (
            <p className="text-on-surface-variant text-body-md py-stack-lg" role="status">
              No subjects are available for your selected board and class right now.
            </p>
          ) : (
            <SubjectGrid
              subjects={subjects}
              selectedSubjects={selectedSubjects}
              toggleSubject={toggleSubject}
            />
          )}

          {/* AI */}

          <AIRecommendation selectedSubjects={selectedNames} />

          {error && (
            <p className="text-sm text-red-400 mt-stack-md" role="alert">
              {error}
            </p>
          )}
        </div>

        <SubjectFooter
          selectedCount={selectedSubjects.length}
          onBack={() => router.push("/class")}
          onNext={handleContinue}
        />
      </section>
    </div>
  );
}
