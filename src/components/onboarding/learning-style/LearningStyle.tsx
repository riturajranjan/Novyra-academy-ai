"use client";

import LeftIllustration from "./LeftIllustration";
import RightPanel from "./RightPanel";

export default function LearningStyle() {
  return (
    <>
      <main className="flex min-h-screen ">
        <LeftIllustration />

        <RightPanel />
      </main>
    </>
  );
}
