"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import Progress from "./Progress";
import MobileProgressroom from "./MobileProgressroom";

export default function ProgressRoom() {
  return (
    <>
      {/* Mobile */}

      <MobileProgressroom />

      {/* Desktop */}

      <div className="lg:block  hidden ">
        <DashboardLayout>
          <Progress />
        </DashboardLayout>
      </div>
    </>
  );
}
