import React from "react";

const StudySchedule = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
      {/* SECTION 3: Study Schedule */}
      <div className="space-y-stack-md">
        <label className=" text-label-md text-on-surface-variant">
          STUDY SCHEDULE
        </label>
        <div className="flex p-1 bg-surface-container-low rounded-xl border border-white/5">
          <button className="flex-1 py-2 text-xs rounded-lg hover:bg-white/5 transition-all border-primary bg-primary/10 ring-1 ring-primary/30 text-primary">
            Morning
          </button>
          <button className="flex-1 py-2 text-xs rounded-lg bg-primary text-on-primary font-medium shadow-sm border-white/10">
            Afternoon
          </button>
          <button className="flex-1 py-2 text-xs rounded-lg hover:bg-white/5 transition-all border-white/10">
            Evening
          </button>
          <button className="flex-1 py-2 text-xs rounded-lg hover:bg-white/5 transition-all border-white/10">
            Flexible
          </button>
        </div>
      </div>
      {/* SECTION 4: Target Exam */}
      <div className="space-y-stack-md">
        <label className=" text-label-md text-on-surface-variant">
          HOW MUCH TIME CAN YOU STUDY?
        </label>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          <button className="p-3 rounded-xl border hover:bg-white/5 transition-all text-sm border-white/10">
            30m
          </button>
          <button className="p-3 rounded-xl border hover:bg-white/5 transition-all text-sm border-white/10">
            45m
          </button>
          <button className="p-3 rounded-xl border hover:bg-white/5 transition-all text-sm border-white/10">
            1h
          </button>
          <button className="p-3 rounded-xl border font-bold transition-all text-sm border-white/10">
            2h <span className="block text-[8px] opacity-70">AI REC</span>
          </button>
          <button className="p-3 rounded-xl border hover:bg-white/5 transition-all text-sm border-white/10">
            3h
          </button>
          <button className="p-3 rounded-xl border hover:bg-white/5 transition-all text-sm border-primary bg-primary/10 ring-1 ring-primary/30 text-primary">
            Flex
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;
