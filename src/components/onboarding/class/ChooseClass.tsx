"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";

import useClass from "@/hooks/useClass";
import { classes } from "@/constants/classes";

import DesktopHero from "./DesktopHero";

import ClassGrid from "./ClassGrid";
import AIClassInfo from "./AIClassInfo";

import FooterActions from "../FooterActions";
import MobileHeader from "./MobileHeader";

export default function ChooseClass() {
  const router = useRouter();

  const { selectedClass, setSelectedClass } = useClass();

  const currentClass = useMemo(() => {
    return classes.find((item) => item.id === selectedClass);
  }, [selectedClass]);

  if (!currentClass) return null;

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
                selectedClass={selectedClass}
                onSelect={setSelectedClass}
              />
              {/* AI Preview Panel */}
              <AIClassInfo
                className={currentClass.title}
                board="CBSE"
                chapters={currentClass.chapters}
                subjects={["Physics", "Chemistry", "Biology", "Mathematics"]}
              />
              {/* Actions */}
              <FooterActions
                onBack={() => router.push("/board")}
                onNext={() => router.push("/subjects")}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
