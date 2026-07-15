"use client";

import LeftIllustration from "./LeftIllustration";
import RightPanel from "./RightPanel";

export default function AIPersonalization() {
  return (
    <main className="min-h-screen bg-[#070B1A]">

      <div className="lg:flex lg:min-h-screen">
        <LeftIllustration />

        <RightPanel />
      </div>
    </main>
  );
}
