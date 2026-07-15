"use client";

import MobileHeader from "./MobileHeader";
import QuickActionChips from "./QuickActionChips";
import TodaysMission from "./TodaysMission";
import LearningJourney from "./LearningJourney";
import AIRecommendations from "./AIRecommendations";
import StatsSection from "./StatsSection";
import AITutorWidget from "./AITutorWidget";

import BottomNavigation from "./BottomNavigation";
import FloatingAIOrb from "./FloatingAIOrb";

export default function MobileDashboard() {
  return (
    <div className="lg:hidden min-h-screen bg-background text-on-background">
      {/* Header */}

      <MobileHeader />

      {/* Content */}

      <main className="pt-20 px-margin-mobile flex flex-col gap-6 max-w-md mx-auto pb-32">
        <QuickActionChips />

        <TodaysMission />

        <LearningJourney />

        <AIRecommendations />

        <StatsSection />

        <AITutorWidget />
      </main>

      {/* Floating AI */}

      <FloatingAIOrb />

      {/* Bottom Navigation */}

      <BottomNavigation />
    </div>
  );
}
