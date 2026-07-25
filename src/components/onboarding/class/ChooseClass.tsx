"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { SchoolClass } from "@prisma/client";

import useClass from "@/hooks/useClass";
import { saveClassSelection } from "@/app/actions/onboarding";

import DesktopHero from "./DesktopHero";

import ClassGrid from "./ClassGrid";
import AIClassInfo from "./AIClassInfo";

import FooterActions from "../FooterActions";
import MobileHeader from "./MobileHeader";

interface ChooseClassProps {
  classes: SchoolClass[];
  boardTitle: string;
  initialClassId: number | null;
}

export default function ChooseClass({ classes, boardTitle, initialClassId }: ChooseClassProps) {
  const router = useRouter();

  const { selectedClass, setSelectedClass } = useClass(initialClassId);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleContinue = () => {
    if (isPending || selectedClass === null) return;
    const classId = selectedClass;
    setError(null);

    startTransition(async () => {
      const result = await saveClassSelection(classId);
      if (result?.error) {
        setError(result.error);
        return;
      }
      router.push("/subjects");
    });
  };

  const currentClass = useMemo(() => {
    return classes.find((item) => item.id === selectedClass) ?? null;
  }, [classes, selectedClass]);

  if (classes.length === 0) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-surface">
        <p className="text-on-surface-variant text-body-md" role="status">
          No classes are available for your selected board right now.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex-grow flex  h-screen">
        <DesktopHero step={2} totalSteps={8} />

        <section className="w-full lg:w-7/12 flex flex-col justify-center overflow-scroll items-center bg-surface p-margin-mobile md:p-margin-desktop overflow-y-auto">
          <div className="w-full max-w-2xl overflow-scroll">
            <section className="mb-stack-lg md:hidden">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">
                Choose Your Class
              </h1>
              <p className="text-on-surface-variant leading-relaxed">
                Select your class to personalize your AI learning journey.
                We&apos;ll tailor your curriculum accordingly.
              </p>
            </section>

            <div className="glass-card-desk inner-glow rounded-xl md:p-stack-lg shadow-2xl flex flex-col gap-stack-lg">
              <div className="text-center md:text-left hidden md:block">
                <h2 className=" text-headline-md mb-2">Choose Your Class</h2>
              </div>
              {/* Class Grid */}
              <ClassGrid
                classes={classes}
                selectedClass={selectedClass}
                onSelect={setSelectedClass}
              />
              {/* AI Preview Panel */}
              {currentClass && (
                <AIClassInfo
                  className={currentClass.title}
                  board={boardTitle}
                  chapters={currentClass.chapterCount}
                  subjectCount={currentClass.subjectCount}
                />
              )}
              {error && (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}
              {/* Actions */}
              <FooterActions
                onBack={() => router.push("/board")}
                onNext={handleContinue}
                nextDisabled={isPending || selectedClass === null}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
