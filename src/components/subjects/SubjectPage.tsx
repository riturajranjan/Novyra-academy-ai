"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

import DesktopSubject from "./DesktopSubject";
import MobileSubject from "./MobileSubject";

export default function SubjectPage() {
  return (
    <>
      {/* Mobile */}

      <MobileSubject />



      <div className="hidden lg:block">
        <DashboardLayout>
          <DesktopSubject />
        </DashboardLayout>
      </div>
    </>
  );
}
