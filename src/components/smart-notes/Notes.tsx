import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import DashbordLayout from "./DashbordLayout";
import MobileLayout from "./MobileLayout";
import { MobileHeader } from "../dashboard/mobile";
import MobileMenu from "../layout/MobileMenu";

const Notes = () => {
  return (
    <>
      <div className=" hidden lg:block">
        <DashboardLayout>
          <DashbordLayout />
        </DashboardLayout>
      </div>
      <div className=" md:hidden ">
        <MobileHeader />
        <MobileLayout />
        <MobileMenu />
      </div>
    </>
  );
};

export default Notes;
