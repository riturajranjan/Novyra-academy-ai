import React from "react";
import Profile from "./Profile";
import PersonalInformation from "./PersonalInformation";
import Learning from "./Learning";
import AIPersona from "./AIPersona";
import Appearance from "./Appearance";
import Notifications from "./Notifications";
import Subscription from "./Subscription";
import DangerZone from "./DangerZone";

const MobileSetting = () => {
  return (
    <>
      <div className="pt-14 pb-stack-lg px-margin-mobile max-w-lg mx-auto bg-[#0b1326]">
        <Profile />
        <div className="space-y-6">
          <PersonalInformation />
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <Learning /> {/* AI Prefs */}
          <AIPersona />
        </section>

        <Subscription />
        <Appearance />

        <DangerZone />
      </div>
    </>
  );
};

export default MobileSetting;
