"use client";

import { journeySteps } from "@/constants/ai-classroom";
import { Check, ClipboardCheck } from "lucide-react";

export default function JourneyStepper() {
  return (
    <section className="mt-8">
      <div className="relative">
        {/* Progress Line */}

        <div className="absolute left-0 right-0 top-6 h-px bg-white/10" />

        <div className="relative flex items-start justify-between">
          {journeySteps.map((step) => {
            const completed = step.status === "completed";

            const current = step.status === "current";

            const quiz = step.title === "Quiz";

            return (
              <div
                key={step.id}
                className="
                flex

                flex-col

                items-center

                min-w-[110px]
              ">
                {/* Circle */}

                <div
                  className={`
                    relative

                    z-10

                    flex

                    h-12

                    w-12

                    items-center

                    justify-center

                    rounded-full

                    border-4

                    border-background

                    transition-all

                    ${
                      completed
                        ? "bg-green-500 shadow-lg shadow-green-500/30"
                        : current
                          ? "bg-primary shadow-[0_0_35px_rgba(170,170,255,.45)]"
                          : "bg-surface-container-high"
                    }
                  `}>
                  {completed ? (
                    <Check size={20} className="text-white" />
                  ) : quiz ? (
                    <ClipboardCheck size={18} className="text-on-surface" />
                  ) : (
                    <span
                      className={`
                        text-sm

                        font-bold

                        ${
                          current
                            ? "text-on-primary"
                            : "text-on-surface-variant"
                        }
                      `}>
                      {String(step.id).padStart(2, "0")}
                    </span>
                  )}
                </div>

                {/* Title */}

                <span
                  className={`
                    mt-4

                    text-xs

                    uppercase

                    tracking-[0.18em]

                    text-center

                    ${
                      completed
                        ? "text-green-400"
                        : current
                          ? "text-primary"
                          : "text-on-surface-variant"
                    }
                  `}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
