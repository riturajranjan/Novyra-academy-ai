import { redirect } from "next/navigation";

import {
  getCurrentUser,
  getOnboardingProfile,
  getFirstMissingRequirementStep,
  onboardingStepPath,
} from "@/lib/dal";
import { generateStudyPlan } from "@/lib/studyPlan";
import StudyPlan from "@/components/onboarding/study-plan/StudyPlan";

export default async function StudyPlanPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const profile = await getOnboardingProfile();
  const missingStep = getFirstMissingRequirementStep(profile);
  if (missingStep) {
    redirect(onboardingStepPath(missingStep));
  }

  const subjects = profile!.subjects.map((row) => row.subject);
  const totalChapters = subjects.reduce((sum, subject) => sum + subject.chapterCount, 0);

  const plan = generateStudyPlan({
    subjects: subjects.map((subject) => ({ id: subject.id, title: subject.title })),
    dailyGoalId: profile!.dailyGoalId,
    learningStyleIds: profile!.learningStyles.map((row) => row.learningStyleId),
  });

  return (
    <StudyPlan
      studentName={user.name ?? "Student"}
      boardTitle={profile!.board!.title}
      classTitle={profile!.schoolClass!.title}
      subjectTitles={subjects.map((subject) => subject.title)}
      targetScore={profile!.targetScore ? profile!.targetScore.score : null}
      dailyGoalTitle={profile!.dailyGoal?.title ?? ""}
      dailyGoalDuration={profile!.dailyGoal?.duration ?? ""}
      examDate={profile!.examDate ?? null}
      totalChapters={totalChapters}
      plan={plan}
    />
  );
}
