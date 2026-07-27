"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import type { DashboardData } from "@/lib/contentDal";

import MissionControlHero from "./desktop/MissionControlHero";
import MissionPath from "./desktop/MissionPath";
import ContinueLearning from "./desktop/ContinueLearning";
import RecommendedActions from "./desktop/RecommendedActions";
import LearningAnalytics from "./desktop/LearningAnalytics";
import MobileDashboard from "./mobile/MobileDashboard";

interface DashboardProps {
  data: DashboardData;
}

export default function Dashboard({ data }: DashboardProps) {
  return (
    <>
      <MobileDashboard data={data} />{" "}
      <div className="hidden lg:block">
        <DashboardLayout
          headerStats={{
            streak: data.progressMetrics.streak,
            classTitle: data.academicProfile.classTitle,
            avatarUrl: data.user.image,
          }}>
          <div className="space-y-6">
            {/* Hero */}

            <MissionControlHero
              userName={data.user.name}
              continueLearning={data.continueLearning}
              todayGoalPercent={data.todayGoalPercent}
              progressMetrics={data.progressMetrics}
            />

            {/* Mission + Continue */}

            <div className="flex flex-col lg:flex-row gap-gutter">
              <div className="flex-1 space-y-gutter">
                <MissionPath
                  studyPlan={data.studyPlan}
                  continueLearning={data.continueLearning}
                  todayGoalPercent={data.todayGoalPercent}
                />

                <RecommendedActions recommendations={data.recommendations} />

                <LearningAnalytics
                  subjects={data.subjects}
                  progressMetrics={data.progressMetrics}
                  weeklyStudyMinutes={data.weeklyStudyMinutes}
                />
              </div>

              <ContinueLearning recommendations={data.recommendations} activities={data.activities} />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </>
  );
}
