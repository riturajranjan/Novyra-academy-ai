import { redirect } from "next/navigation";
import ChooseHeader from "@/components/common/ChooseHeader";
import { ReactNode } from "react";

import { getCurrentUser, isOnboardingComplete } from "@/lib/dal";

export default async function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getCurrentUser();

  if (user && (await isOnboardingComplete())) {
    redirect("/dashboard");
  }

  return (
    <>
      <ChooseHeader />
      <main className="min-h-screen md:pt-16 text-white overflow-hidden">
        {children}
      </main>
    </>
  );
}
