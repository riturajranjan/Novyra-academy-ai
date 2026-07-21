import React from "react";
import { MobileHeader } from "../dashboard/mobile";
import MobileMenu from "../layout/MobileMenu";
import ProgressHero from "./ProgressHero";
import ProgressCard from "./ProgressCard";
import ProgressAI from "./ProgressAI";
import ExamReadiness from "./ExamReadiness";

const MobileProgressroom = () => {
  return (
    <>
      <MobileHeader />
      <main className="pt-20 px-margin-mobile flex flex-col gap-stack-lg md:hidden bg-[#0b1326]">
        <ProgressHero />
        <ProgressCard />
        <ExamReadiness />
        <ProgressAI />
        <MobileMenu />
      </main>
    </>
  );
};

export default MobileProgressroom;
