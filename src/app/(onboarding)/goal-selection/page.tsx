import { redirect } from "next/navigation";

import { requireUser, getDailyGoals, getTargetScores, getOnboardingProfile } from "@/lib/dal";
import GoalSelection from "@/components/onboarding/goal-selection/GoalSelection";

export default async function Page() {
  await requireUser();

  const profile = await getOnboardingProfile();
  if (!profile?.boardId) redirect("/board");
  if (!profile.classId) redirect("/class");
  if (profile.subjects.length === 0) redirect("/subjects");
  if (profile.learningStyles.length === 0) redirect("/learning-style");

  const [dailyGoals, targetScores] = await Promise.all([getDailyGoals(), getTargetScores()]);

  const totalChapters = profile.subjects.reduce(
    (sum, row) => sum + row.subject.chapterCount,
    0
  );

  return (
    <GoalSelection
      dailyGoals={dailyGoals}
      targetScores={targetScores}
      initialTargetScoreId={profile.targetScoreId ?? null}
      initialDailyGoalId={profile.dailyGoalId ?? null}
      initialExamDate={profile.examDate ?? null}
      subjectCount={profile.subjects.length}
      totalChapters={totalChapters}
    />
  );
}
