import React from "react";
import Profile from "./Profile";
import PersonalInformation from "./PersonalInformation";
import Learning from "./Learning";
import AIPersona from "./AIPersona";
import Appearance from "./Appearance";
import Notifications from "./Notifications";
import Subscription from "./Subscription";
import DangerZone from "./DangerZone";

const DesktopSetting = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-6 md:px-margin-desktop py-stack-lg space-y-12 pb-32">
      {/* Section 1: Profile Header */}
      <Profile />
      {/* Section 2: Personal Info */}
      <PersonalInformation />
      {/* Section 3 & 4: AI & Academic Preferences (Bento Grid) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Academic Prefs */}
        <Learning />
        {/* AI Prefs */}
        <AIPersona />
      </section>
      {/* Section 5: Appearance */}
      <Appearance />
      {/* Section 6 & 7: Notifications & Security */}
      <Notifications />
      {/* Section 8: Subscription */}
      <Subscription />
      {/* Section 9: Danger Zone */}
      <DangerZone />
      {/* Footer Copyright */}
      {/* <footer className="pt-12 text-center text-on-surface-variant/40 font-mono-sm text-[12px]">
        <p>© 2024 Novyra Academy AI • All Rights Reserved</p>
        <div className="mt-2 flex justify-center gap-4">
          <a className="hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            System Status
          </a>
        </div>
      </footer> */}
    </div>
  );
};

export default DesktopSetting;
