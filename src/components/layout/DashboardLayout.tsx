"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Header, { type HeaderStats } from "./Header";
import MobileMenu from "./MobileMenu";

interface DashboardLayoutProps {
  children: ReactNode;
  headerStats?: HeaderStats;
}

export default function DashboardLayout({ children, headerStats }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-on-surface ">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex flex-col min-w-0">
          <Header stats={headerStats} />

          <main
            className="
            flex
              flex-1
              overflow-y-auto
              pb-28
              lg:pb-8
              px-8
              py-3
            ">
            {children}
          </main>
        </div>
      </div>

      <MobileMenu />
    </div>
  );
}
