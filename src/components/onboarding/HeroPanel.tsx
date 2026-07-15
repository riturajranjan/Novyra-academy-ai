import Image from "next/image";
import ProgressHeader from "./ProgressHeader";

interface HeroPanelProps {
  step: number;
  totalSteps: number;
}

export default function HeroPanel({ step, totalSteps }: HeroPanelProps) {
  return (
    <aside className="relative z-10 flex flex-col h-full">
      {/* Illustration */}

      <div className="flex-1 h-full flex flex-col justify-center items-center relative">
        <div className="relative w-full max-w-lg aspect-square floating">
          <Image
            src="/board.jpg"
            alt="Board Preview"
            width={560}
            height={420}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-stack-md max-w-md text-center lg:text-left">
          <h1 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-stack-sm">
            Let&apos;s personalize your learning journey
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Choose your academic board so Dr. Nova can create a personalized
            curriculum, AI lessons and adaptive quizzes.
          </p>
        </div>
      </div>
      <ProgressHeader step={step} totalSteps={totalSteps} />
    </aside>
  );
}
