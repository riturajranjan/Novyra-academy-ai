import { redirect } from "next/navigation";

import { requireUser, getClassesForBoard, getOnboardingProfile } from "@/lib/dal";
import ChooseClass from "@/components/onboarding/class/ChooseClass";

export default async function Page() {
  await requireUser();

  const profile = await getOnboardingProfile();
  if (!profile?.boardId) {
    redirect("/board");
  }

  const classes = await getClassesForBoard(profile.boardId);

  return (
    <ChooseClass
      classes={classes}
      boardTitle={profile.board?.title ?? ""}
      initialClassId={profile.classId ?? null}
    />
  );
}
