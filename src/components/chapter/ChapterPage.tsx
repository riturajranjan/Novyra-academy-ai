"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

import DesktopChapter from "./DesktopChapter";
import MobileChapter from "./MobileChapter";

export default function ChapterPage() {
  return (
    <>
      {/* Mobile */}

      <MobileChapter />

      {/* Desktop */}

      <div className="hidden lg:block">
        <DashboardLayout>
          <DesktopChapter />
        </DashboardLayout>
      </div>
    </>
  );
}
