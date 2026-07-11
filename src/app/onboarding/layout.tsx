import { ReactNode } from "react";

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#07111F] text-white overflow-hidden">
      {children}
    </main>
  );
}
