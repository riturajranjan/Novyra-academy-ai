"use client";

import QuizHeader from "../sections/QuizHeader";
import QuestionCard from "../sections/QuestionCard";
import AICoach from "../sections/AICoach";
import QuestionNavigator from "../sections/QuestionNavigator";
import ProgressCard from "../sections/ProgressCard";
import QuizFooter from "../sections/QuizFooter";

export default function DesktopLayout() {
  return (
    <div className=" min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-desktop py-stack-lg">
        <QuizHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-8 space-y-gutter">
            <QuestionCard />
            <QuizFooter />
          </div>
          <div className="lg:col-span-4 space-y-gutter">
            {" "}
            <AICoach />
            <QuestionNavigator />
            <ProgressCard />
          </div>
        </div>
      </div>
    </div>
  );
}
