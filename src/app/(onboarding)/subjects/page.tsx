import { redirect } from "next/navigation";

import { requireUser, getSubjectsForBoardClass, getOnboardingProfile } from "@/lib/dal";
import ChooseSubjects from "@/components/onboarding/subjects/ChooseSubjects";

export default async function SubjectsPage() {
  await requireUser();

  const profile = await getOnboardingProfile();
  if (!profile?.boardId) {
    redirect("/board");
  }
  if (!profile.classId) {
    redirect("/class");
  }

  const subjects = await getSubjectsForBoardClass(profile.boardId, profile.classId);

  return (
    <ChooseSubjects
      subjects={subjects}
      initialSelectedSubjectIds={profile.subjects.map((row) => row.subjectId)}
    />
  );
}
