"use client";

import { CheckCircle2, Circle, PlayCircle } from "lucide-react";

const missions = [
  {
    title: "Concept Study: Inertia",
    duration: "5 MIN",
    completed: true,
  },
  {
    title: "Watch AI Animation",
    duration: "6 MIN",
    completed: true,
  },
  {
    title: "Interactive Simulation",
    duration: "4 MIN",
    completed: false,
  },
  {
    title: "Quick Revision Quiz",
    duration: "3 MIN",
    completed: false,
  },
];

export default function MissionPath() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        {/* 2. Today's Mission Objectives */}
        <div
          className="glass-panel premium-border rounded-2xl p-6 flex flex-col border-l-4 border-l-tertiary"
          style={{
            transform: "translateY(0px)",
            transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline-md text-headline-md">Mission Path</h3>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-tertiary">
                +500 XP
              </span>
            </div>
          </div>
          <ul className="space-y-4 flex-1">
            <li className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 group hover:border-tertiary/30 transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-tertiary"
                  style={{ fontVariationSettings: '"FILL" 1' }}>
                  check_circle
                </span>
                <span className="text-label-md font-medium">
                  Concept Study: Inertia
                </span>
              </div>
              <span className="text-[10px] text-on-surface-variant">Done</span>
            </li>
            <li className="flex items-center justify-between p-3 rounded-xl bg-tertiary/10 border border-tertiary/20 group hover:border-tertiary/50 transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary">
                  radio_button_checked
                </span>
                <span className="text-label-md font-bold">
                  Practice Questions (10)
                </span>
              </div>
              <span className="text-[10px] text-tertiary font-bold animate-pulse">
                In Progress
              </span>
            </li>
            <li className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 opacity-60 group cursor-not-allowed">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">circle</span>
                <span className="text-label-md font-medium">
                  Mini Quiz: Newton-1
                </span>
              </div>
              <span className="material-symbols-outlined text-sm">lock</span>
            </li>
            <li className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 opacity-60 group cursor-not-allowed">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">circle</span>
                <span className="text-label-md font-medium">
                  Daily Revision Session
                </span>
              </div>
              <span className="material-symbols-outlined text-sm">lock</span>
            </li>
          </ul>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-tertiary" style={{ width: "25%" }} />
            </div>
            <span className="text-[11px] font-bold text-on-surface-variant">
              25% Complete
            </span>
          </div>
        </div>
        {/* 3. Continue Learning */}
        <div
          className="glass-panel premium-border rounded-2xl overflow-hidden flex flex-col group transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/10"
          style={{
            transform: "translateY(0px)",
            transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>
          <div className="relative aspect-video overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCspEtY5r4yiohguEht7Zfe7dIX2p0NVagp3v_8RVi3WPEwdcfP9e1Oj8rxjAf_ea_RXvmHPsZEX1AmRZlIpN1MqwyGmrtqgQl_VqkAtoIbtc4Vt1lt3PmG5KZ3tK3QAOaGArutRW5V6fbqqzqR3jsHo_8XC-e7FpXRXekm8vzJhLikDn5Lx7uq1LmGDXJx_o9olpHjKWGLQue7u48eiZNJZLK8QvVRk8sgT5zPZKN0wBw07NV-g3atck_A0e1R0eXJL_23TgsPwys"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent" />
            <div className="absolute top-4 right-4 flex gap-2">
              <span className="px-2 py-1 bg-surface-dim/80 backdrop-blur rounded text-[10px] font-bold border border-white/10 uppercase">
                PDF + VID
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary font-mono-sm text-[10px] font-bold uppercase tracking-widest">
                  Ongoing Module
                </span>
                <span className="text-[11px] text-on-surface-variant font-medium">
                  12m remaining
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md text-white mb-2 leading-tight">
                Chapter 4: Mechanics
              </h4>
            </div>
          </div>
          <div className="p-6 pt-2 bg-surface-container-low/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full border-4 border-white/5 border-t-primary flex items-center justify-center">
                <span className="text-[11px] font-bold">65%</span>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold mb-0.5">
                  Last Topic
                </p>
                <p className="text-label-md font-medium">
                  Centripetal Force &amp; Inertia
                </p>
              </div>
            </div>
            <button className="w-full bg-primary text-on-primary  py-3.5 rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20 group-hover:ai-glow">
              <span className="font-bold">Resume from Chapter 4</span>
              <span className="material-symbols-outlined text-lg">
                play_circle
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
