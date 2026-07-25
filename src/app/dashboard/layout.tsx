import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { getCurrentUser, getOnboardingProfile, getFirstIncompleteStep, onboardingStepPath } from "@/lib/dal";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();
  if (!user) {
    return children;
  }

  const profile = await getOnboardingProfile();
  const incompleteStep = getFirstIncompleteStep(profile);
  if (incompleteStep) {
    redirect(onboardingStepPath(incompleteStep));
  }

  return children;
}
