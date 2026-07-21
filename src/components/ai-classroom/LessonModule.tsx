"use client";

import { Brain, Lightbulb, Sigma, GraduationCap, Sparkles } from "lucide-react";

export default function LessonModule() {
  return (
    <section className="mt-8">
      <div
        className="
        glass-card

        inner-glow

        rounded-[32px]

        border

        border-white/10

        overflow-hidden
      ">
        {/* Header */}

        <div
          className="
          flex

          items-center

          gap-5

          p-8

          border-b

          border-white/5
        ">
          <div
            className="
            h-16

            w-16

            rounded-3xl

            bg-gradient-to-br

            from-primary

            to-tertiary

            flex

            items-center

            justify-center

            shadow-[0_0_40px_rgba(192,193,255,.35)]
          ">
            <Sparkles size={30} className="text-white" />
          </div>

          <div>
            <p
              className="
              text-xs

              uppercase

              tracking-[0.25em]

              text-primary

              font-bold
            ">
              AI Classroom
            </p>

            <h2
              className="
              mt-2

              text-3xl

              font-bold
            ">
              Newton&apos;s First Law
            </h2>
          </div>
        </div>

        {/* Body */}

        <div className="space-y-8 p-8">
          {/* Concept */}

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Brain size={20} className="text-primary" />

              <h3 className="font-bold text-xl">Core Concept</h3>
            </div>

            <p
              className="
              leading-8

              text-on-surface-variant
            ">
              An object continues in its state of rest or uniform motion unless
              acted upon by an external force.
            </p>
          </div>

          {/* Formula */}

          <div
            className="
            rounded-3xl

            bg-surface-container-low

            border

            border-white/5

            p-8
          ">
            <div className="flex items-center gap-3 mb-5">
              <Sigma size={20} className="text-tertiary" />

              <span
                className="
                text-xs

                uppercase

                tracking-[0.2em]

                font-bold
              ">
                Formula
              </span>
            </div>

            <h2
              className="
              text-center

              text-6xl

              font-bold

              ai-gradient-text
            ">
              ΣF = 0
            </h2>
          </div>

          {/* Analogy */}

          <div
            className="
            rounded-3xl

            border-l-4

            border-tertiary

            bg-tertiary/5

            p-6
          ">
            <div className="flex gap-3">
              <Lightbulb size={22} className="text-tertiary mt-1" />

              <div>
                <h4 className="font-semibold">Real-life Analogy</h4>

                <p
                  className="
                  mt-3

                  italic

                  leading-8

                  text-on-surface-variant
                ">
                  Imagine sitting in a moving bus. When the driver suddenly
                  brakes, your body keeps moving forward due to inertia.
                </p>
              </div>
            </div>
          </div>

          {/* Exam Tip */}

          <div
            className="
            rounded-3xl

            border

            border-primary/15

            bg-primary/5

            p-6
          ">
            <div className="flex gap-4">
              <GraduationCap size={22} className="text-primary mt-1" />

              <div>
                <h4 className="font-bold">Exam Strategy</h4>

                <p
                  className="
                  mt-3

                  leading-7

                  text-on-surface-variant
                ">
                  In CBSE exams, always mention inertia when explaining Newton&apos;s
                  First Law. Include one practical example to earn full marks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
