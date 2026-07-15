import ChooseHeader from "@/components/common/ChooseHeader";
import { ReactNode } from "react";

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ChooseHeader />
      <main className="min-h-screen md:pt-16 text-white overflow-hidden">
        {children}
      </main>
    </>
  );
}
