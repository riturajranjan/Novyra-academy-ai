import { redirect } from "next/navigation";

import {
  getCurrentUser,
  getOnboardingProfile,
  getFirstMissingRequirementStep,
  onboardingStepPath,
} from "@/lib/dal";
import { getDailyGoalMinutes } from "@/lib/studyPlan";
import AIPersonalization from "@/components/onboarding/ai-personalization/AIPersonalization";

export default async function Page() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const profile = await getOnboardingProfile();
  const missingStep = getFirstMissingRequirementStep(profile);
  if (missingStep) {
    redirect(onboardingStepPath(missingStep));
  }

  // getFirstIncompleteStep returning null guarantees these are populated.
  const totalChapters = profile!.subjects.reduce((sum, row) => sum + row.subject.chapterCount, 0);

  return (
    <AIPersonalization
      studentName={user.name ?? "Student"}
      boardTitle={profile!.board!.title}
      classTitle={profile!.schoolClass!.title}
      subjectTitles={profile!.subjects.map((row) => row.subject.title)}
      learningStyleTitles={profile!.learningStyles.map((row) => row.learningStyle.title)}
      dailyGoalMinutes={getDailyGoalMinutes(profile!.dailyGoalId)}
      totalChapters={totalChapters}
    />
  );
}
