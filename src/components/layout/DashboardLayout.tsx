"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-on-surface ">
      <div className="flex">
        {/* Sidebar */}

        <Sidebar />

        {/* Main */}

        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}

          <Header />

          {/* Content */}

          <main
            className="
              flex-1

              overflow-y-auto

              px-4
              py-6

              lg:px-8
              lg:py-8

              pb-28
              lg:pb-8
            ">
            {children}
          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}

      <MobileMenu />
    </div>
  );
}
