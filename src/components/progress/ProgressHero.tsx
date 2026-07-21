import React from "react";
import ProgressAI from "./ProgressAI";

const ProgressHero = () => {
  return (
    <>
      <div className="glass-card md:hidden rounded-xl p-stack-md relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <span className="bg-primary/20 text-primary px-2 py-1 rounded text-[10px] font-mono-sm uppercase tracking-wider">
              Current Focus
            </span>
            <span className="text-on-surface-variant font-mono-sm text-[10px]">
              Day 12 / 45
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
            Today&apos;s Mission
          </h2>
          <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
            Master the fundamentals of Quantum Entanglement and complete the
            mid-module simulation.
          </p>
          <button className="w-full bg-primary text-on-primary-container font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all">
            <span>Continue Learning</span>
            <span className="material-symbols-outlined text-[18px]">
              play_arrow
            </span>
          </button>
        </div>
      </div>

      <section className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <div className="lg:col-span-2 glass-card rounded-xl p-stack-lg flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-primary font-label-md mb-2">MISSION CONTROL</p>
            <h2 className="font-headline-lg text-headline-lg mb-1">
              Good Evening Arjun 👋
            </h2>
            <p className="text-on-surface-variant font-body-lg">
              Today&apos;s Mission:{" "}
              <span className="text-on-surface font-semibold">
                Complete Newton&apos;s Laws Revision
              </span>
            </p>
          </div>
          <div className="mt-8 flex flex-col md:flex-row items-end md:items-center justify-between gap-gutter relative z-10">
            <div className="w-full md:w-2/3 space-y-4">
              <div className="flex justify-between items-center text-on-surface-variant font-label-md">
                <span>Overall Mission Progress</span>
                <span className="text-primary font-bold">72%</span>
              </div>
              <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full progress-gradient transition-all duration-1000 ease-out"
                  style={{ width: "72%" }}
                />
              </div>
              <div className="flex gap-stack-lg text-on-surface-variant text-sm font-mono-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">
                    timer
                  </span>{" "}
                  1h 42m study time
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">
                    pending_actions
                  </span>{" "}
                  18m left today
                </div>
              </div>
            </div>
            <div className="flex gap-stack-sm">
              <button className="px-6 py-3 rounded-lg bg-primary text-on-primary font-bold hover:brightness-110 transition-all">
                Continue Learning
              </button>
              <button className="px-6 py-3 rounded-lg border border-primary/20 text-primary font-bold hover:bg-primary/10 transition-all">
                Review Weak Topics
              </button>
            </div>
          </div>
        </div>
        {/* AI Coach Card (Dr. Nova) */}
        <ProgressAI />
      </section>
    </>
  );
};

export default ProgressHero;
