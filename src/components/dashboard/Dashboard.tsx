"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

import MissionControlHero from "./desktop/MissionControlHero";
import MissionPath from "./desktop/MissionPath";
import ContinueLearning from "./desktop/ContinueLearning";
import RecommendedActions from "./desktop/RecommendedActions";
import LearningAnalytics from "./desktop/LearningAnalytics";
import ProactiveAI from "./desktop/ProactiveAI";
import Timeline from "./desktop/Timeline";
import MobileDashboard from "./mobile/MobileDashboard";

export default function Dashboard() {
  return (
    <>
      <MobileDashboard />{" "}
      <div className="hidden lg:block">
        <DashboardLayout>
          <div className="space-y-6">
            {/* Hero */}

            <MissionControlHero />

            {/* Mission + Continue */}

            <div className="flex flex-col lg:flex-row gap-gutter">
              <div className="flex-1 space-y-gutter">
                <MissionPath />

                <RecommendedActions />

                <LearningAnalytics />
              </div>

              <ContinueLearning />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </>
  );
}
