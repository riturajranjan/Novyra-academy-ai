"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

import DesktopClassroom from "./DesktopClassroom";
import MobileClassroom from "./MobileClassroom";

export default function ClassroomPage() {
  return (
    <>
      {/* Mobile */}

      <MobileClassroom />

      {/* Desktop */}

      <div className="lg:block  hidden ">
        <DashboardLayout>
          <DesktopClassroom />
        </DashboardLayout>
      </div>
    </>
  );
}
