"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import SubjectHeader from "./SubjectHeader";
import SubjectHero from "./SubjectHero";
import SubjectGrid from "./SubjectGrid";
import AIRecommendation from "./AIRecommendation";
import SubjectFooter from "./SubjectFooter";

const subjectMap: Record<number, string> = {
  1: "Physics",
  2: "Chemistry",
  3: "Biology",
  4: "Mathematics",
  5: "Social Science",
  6: "English",
  7: "Hindi",
  8: "Computer Science",
};

export default function ChooseSubjects() {
  const router = useRouter();

  const [selectedSubjects, setSelectedSubjects] = useState<number[]>([1, 2, 4]);

  const toggleSubject = (id: number) => {
    setSelectedSubjects((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const selectedNames = selectedSubjects.map((id) => subjectMap[id]);

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

          <SubjectGrid
            selectedSubjects={selectedSubjects}
            toggleSubject={toggleSubject}
          />

          {/* AI */}

          <AIRecommendation selectedSubjects={selectedNames} />
        </div>

        <SubjectFooter
          selectedCount={selectedSubjects.length}
          onBack={() => router.push("/class")}
          onNext={() => router.push("/learning-style")}
        />
      </section>
    </div>
  );
}
