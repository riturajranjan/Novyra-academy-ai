"use client";

import type { LearningStyle as LearningStyleModel } from "@prisma/client";

import LeftIllustration from "./LeftIllustration";
import RightPanel from "./RightPanel";

interface LearningStyleProps {
  learningStyles: LearningStyleModel[];
  initialSelectedIds: string[];
}

export default function LearningStyle({ learningStyles, initialSelectedIds }: LearningStyleProps) {
  return (
    <>
      <main className="flex min-h-screen ">
        <LeftIllustration />

        <RightPanel learningStyles={learningStyles} initialSelectedIds={initialSelectedIds} />
      </main>
    </>
  );
}
