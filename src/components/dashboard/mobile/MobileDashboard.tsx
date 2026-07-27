"use client";

import type { DashboardData } from "@/lib/contentDal";

import MobileHeader from "./MobileHeader";
import QuickActionChips from "./QuickActionChips";
import TodaysMission from "./TodaysMission";
import LearningJourney from "./LearningJourney";
import AIRecommendations from "./AIRecommendations";
import StatsSection from "./StatsSection";
import RecentActivity from "./RecentActivity";
import AITutorWidget from "./AITutorWidget";

import BottomNavigation from "./BottomNavigation";
import FloatingAIOrb from "./FloatingAIOrb";

interface MobileDashboardProps {
  data: DashboardData;
}

export default function MobileDashboard({ data }: MobileDashboardProps) {
  return (
    <div className="lg:hidden min-h-screen bg-background text-on-background">
      {/* Header */}

      <MobileHeader streak={data.progressMetrics.streak} />

      {/* Content */}

      <main className="pt-20 px-margin-mobile flex flex-col gap-6 max-w-md mx-auto pb-32">
        <QuickActionChips />

        <TodaysMission continueLearning={data.continueLearning} />

        <LearningJourney subjects={data.subjects} />

        <AIRecommendations recommendations={data.recommendations} />

        <StatsSection weeklyStudyMinutes={data.weeklyStudyMinutes} progressMetrics={data.progressMetrics} />

        <RecentActivity activities={data.activities} />

        <AITutorWidget
          userName={data.user.name}
          todayGoalPercent={data.todayGoalPercent}
          dailyGoalMinutes={data.academicProfile.dailyGoalMinutes}
          todayStudyMinutes={data.todayStudyMinutes}
        />
      </main>

      {/* Floating AI */}

      <FloatingAIOrb />

      {/* Bottom Navigation */}

      <BottomNavigation />
    </div>
  );
}
