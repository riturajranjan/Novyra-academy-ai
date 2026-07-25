"use client";

import LeftIllustration from "./LeftIllustration";
import RightPanel from "./RightPanel";

interface AIPersonalizationProps {
  studentName: string;
  boardTitle: string;
  classTitle: string;
  subjectTitles: string[];
  learningStyleTitles: string[];
  dailyGoalMinutes: number;
  totalChapters: number;
}

export default function AIPersonalization(props: AIPersonalizationProps) {
  return (
    <main className="min-h-screen bg-[#070B1A]">
      <div className="lg:flex lg:min-h-screen">
        <LeftIllustration />

        <RightPanel {...props} />
      </div>
    </main>
  );
}
