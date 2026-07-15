import React from "react";

const Recommendation = () => {
  return (
    <div className="hidden md:block mb-stack-lg">
      <span className=" text-label-md text-on-surface-variant block mb-2">
        Recommended for your goals:
      </span>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs  rounded-full">
          Engineering Core
        </span>
        <span className="px-3 py-1 bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs  rounded-full">
          Fast-Track
        </span>
        <span className="px-3 py-1 bg-secondary/10 border border-secondary/20 text-secondary text-xs  rounded-full">
          Conceptual Mastery
        </span>
      </div>
    </div>
  );
};

export default Recommendation;
