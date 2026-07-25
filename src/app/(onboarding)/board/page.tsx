import { requireUser, getBoards, getOnboardingProfile } from "@/lib/dal";
import ChooseBoard from "@/components/onboarding/ChooseBoard";

export default async function Page() {
  await requireUser();

  const [boards, profile] = await Promise.all([getBoards(), getOnboardingProfile()]);

  return <ChooseBoard boards={boards} initialBoardId={profile?.boardId ?? null} />;
}
