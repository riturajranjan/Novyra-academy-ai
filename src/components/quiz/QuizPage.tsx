"use client";

import DashboardLayout from "../layout/DashboardLayout";
import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";

interface QuizPageProps {
  className?: string;
}

export default function QuizPage({ className }: QuizPageProps) {
  return (
    <main
      className={["min-h-screen bg-background", className]
        .filter(Boolean)
        .join(" ")}>
      <div className=" hidden lg:block">
        <DashboardLayout>
          <DesktopLayout />
        </DashboardLayout>
      </div>
      <div className=" md:hidden ">
        <MobileLayout />
      </div>
    </main>
  );
}
