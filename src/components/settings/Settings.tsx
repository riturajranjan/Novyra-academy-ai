import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import DesktopSetting from "./DesktopSetting";
import { MobileHeader } from "../dashboard/mobile";
import MobileMenu from "../layout/MobileMenu";
import MobileSetting from "./MobileSetting";

const Settings = () => {
  return (
    <>
      <div className=" hidden lg:block">
        <DashboardLayout>
          <DesktopSetting />
        </DashboardLayout>
      </div>
      <div className=" md:hidden ">
        <MobileHeader />
        <MobileSetting />
        <MobileMenu />
      </div>
    </>
  );
};

export default Settings;
