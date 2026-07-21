"use client";

import { useState } from "react";

import Hero from "./Hero";
import LearningModes from "./LearningModes";
import BottomActions from "./BottomActions";
import VoiceOverlay from "./VoiceOverlay";
import MobileMenu from "../layout/MobileMenu";
import Header from "../layout/Header";
import { MobileHeader } from "../dashboard/mobile";

export default function MobileClassroom() {
  const [voiceOpen, setVoiceOpen] = useState(false);

  return (
    <>
       <MobileHeader />
      <main
        className="
        lg:hidden

        px-margin-mobile

        pt-20

        pb-72

        space-y-6
      ">
        {/* Hero */}

        <Hero />

        <div className="space-y-stack-lg">
          <LearningModes />
        </div>
      </main>

      <BottomActions />
      <MobileMenu />

      <VoiceOverlay open={voiceOpen} onClose={() => setVoiceOpen(false)} />
    </>
  );
}
