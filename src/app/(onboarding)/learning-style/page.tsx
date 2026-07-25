import { redirect } from "next/navigation";

import { requireUser, getLearningStyles, getOnboardingProfile } from "@/lib/dal";
import LearningStyle from "@/components/onboarding/learning-style/LearningStyle";

export default async function Page() {
  await requireUser();

  const profile = await getOnboardingProfile();
  if (!profile?.boardId) redirect("/board");
  if (!profile.classId) redirect("/class");
  if (profile.subjects.length === 0) redirect("/subjects");

  const learningStyles = await getLearningStyles();

  return (
    <LearningStyle
      learningStyles={learningStyles}
      initialSelectedIds={profile.learningStyles.map((row) => row.learningStyleId)}
    />
  );
}
