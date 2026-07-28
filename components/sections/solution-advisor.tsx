"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AdvisorProgress } from "@/components/advisor/advisor-progress";
import { AdvisorQuestion } from "@/components/advisor/advisor-question";
import { AdvisorResult } from "@/components/advisor/advisor-result";
import {
  needOptions,
  goalOptions,
  stageOptions,
  getRecommendation,
  type StageId,
} from "@/content/solution-advisor";
import { easePremium } from "@/lib/motion";

const stepLabels = ["Need", "Goal", "Stage"];

interface Answers {
  need?: string;
  goal?: string;
  stage?: StageId;
}

/** A 3-question advisor that recommends one of Novyra's five real service
 * lines — never a fabricated offering, and never a price. */
export function SolutionAdvisor() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const result = useMemo(() => {
    if (!answers.need || !answers.goal || !answers.stage) return null;
    return getRecommendation(answers.need, answers.goal, answers.stage);
  }, [answers]);

  function selectNeed(id: string) {
    setAnswers((a) => ({ ...a, need: id }));
    setStep(1);
  }
  function selectGoal(id: string) {
    setAnswers((a) => ({ ...a, goal: id }));
    setStep(2);
  }
  function selectStage(id: string) {
    setAnswers((a) => ({ ...a, stage: id as StageId }));
    setStep(3);
  }
  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }
  function restart() {
    setAnswers({});
    setStep(0);
  }

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <AuroraBackground />

      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Business Solution Advisor"
          title="Find the Right Solution for Your Business"
          description="Answer a few quick questions and we'll recommend the best digital solution for your goals."
        />

        {step < 3 ? (
          <div className="flex w-full flex-col items-center gap-8">
            <AdvisorProgress steps={stepLabels} currentStep={step} />

            <div className="w-full max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.4, ease: easePremium }}
                >
                  {step === 0 ? (
                    <AdvisorQuestion
                      question="What do you need?"
                      options={needOptions}
                      selectedId={answers.need}
                      onSelect={selectNeed}
                    />
                  ) : null}
                  {step === 1 ? (
                    <AdvisorQuestion
                      question="What is your primary goal?"
                      options={goalOptions}
                      selectedId={answers.goal}
                      onSelect={selectGoal}
                    />
                  ) : null}
                  {step === 2 ? (
                    <AdvisorQuestion
                      question="Project Stage"
                      options={stageOptions}
                      selectedId={answers.stage}
                      onSelect={selectStage}
                    />
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>

            {step > 0 ? (
              <button
                type="button"
                onClick={goBack}
                className="text-caption text-foreground-secondary hover:text-foreground font-medium transition-colors duration-fast"
              >
                ← Back
              </button>
            ) : null}
          </div>
        ) : result ? (
          <AdvisorResult result={result} onRestart={restart} />
        ) : null}
      </Container>
    </section>
  );
}
