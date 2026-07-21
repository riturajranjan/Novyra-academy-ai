"use client";

import { useState } from "react";

const tabs = ["Learn", "Practice", "Revision", "Exam"];

export default function LearningTabs() {
  const [activeTab, setActiveTab] = useState("Learn");

  return (
    <div className="p-1 bg-surface-container-highest/50 rounded-2xl inline-flex w-full overflow-x-auto no-scrollbar border border-white/5">
      {tabs?.map((item) => {
        return (
          <button
            onClick={() => setActiveTab(item)}
            key={item}
            className={`flex-1 py-3 px-6 rounded-xl  font-medium whitespace-nowrap  transition-colors whitespace-nowrap
            shadow-lg
            ${item === activeTab ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-white"}`}>
            {item}
          </button>
        );
      })}

      <button className="flex-1 py-3 px-6 rounded-xl text-on-surface-variant hover:text-white transition-colors whitespace-nowrap flex items-center justify-center gap-2">
        <span
          className="material-symbols-outlined text-tertiary text-[24px]"
          data-icon="auto_awesome">
          auto_awesome
        </span>
        Ask AI
      </button>
    </div>
  );
}
