import Image from "next/image";
import ProgressHeader from "../ProgressHeader";

interface DesktopHeroProps {
  step: number;
  totalSteps: number;
}

export default function DesktopHero({ step, totalSteps }: DesktopHeroProps) {
  return (
    <>
      <aside className="hidden lg:flex w-5/12 relative overflow-hidden bg-surface-container-lowest flex-col justify-center px-margin-desktop">
        <div className="absolute inset-0 z-0" />
        <div className="absolute inset-0 z-10 floating-particles">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full blur-sm animate-pulse" />
          <div
            className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-tertiary/40 rounded-full blur-sm animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-2/3 left-1/2 w-2 h-2 bg-secondary/40 rounded-full blur-sm animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 space-y-stack-lg max-w-lg">
          {/* Preview */}

          <div className="relative w-full aspect-square max-w-[400px] mx-auto animate-float">
            <Image
              src="/chooseclass.jpg"
              alt="Choose Class"
              width={520}
              height={420}
              priority
              className="
             w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(192,193,255,0.4)]
            "
            />
          </div>

          {/* Text */}
          <div className="space-y-stack-md">
            <h1 className="font-headline-lg text-headline-lg leading-tight">
              Let&apos;s build your personalized classroom.
            </h1>
            <p className="text-on-surface-variant text-body-lg font-body-lg">
              Choose your class to unlock a customized AI learning experience
              tailored to your specific curriculum and goals.
            </p>
          </div>
        </div>

        {/* Bottom Progress */}
        <div className="pt-stack-lg">
          <div className="flex items-center gap-stack-md">
            <span className=" text-mono-sm text-primary uppercase tracking-widest">
              STEP {step} OF {totalSteps}
            </span>
            <div className="flex-grow h-1 bg-surface-container-high rounded-full overflow-hidden">
              <div
                className="h-full w-1/4 bg-gradient-to-r from-primary to-tertiary"
                style={{
                  width: `${(step / totalSteps) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
