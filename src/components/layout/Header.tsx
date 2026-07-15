"use client";

import { Search, Mic, Bell, Globe, Flame } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="h-20 glass-panel border-b border-white/5 flex items-center justify-between px-margin-desktop z-40"
      style={{
        transform: "translateY(0px)",
        transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
      <div className="flex flex-col flex-1">
        <div className="relative w-full max-w-lg group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="w-full bg-surface-container-low border-transparent focus:border-primary/30 focus:ring-0 rounded-xl pl-10 pr-12 py-2.5 font-body-md text-body-md transition-all"
            placeholder="Ask your AI Teacher..."
            type="text"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary">
            <span className="material-symbols-outlined text-xl">mic</span>
          </button>
        </div>
        <div className="flex gap-4 mt-1.5 ml-1">
          <button className="text-[11px]  text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              calculate
            </span>{" "}
            Find Formula
          </button>
          <button className="text-[11px]  text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">book</span>{" "}
            Search NCERT
          </button>
          <button className="text-[11px]  text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              lightbulb
            </span>{" "}
            Explain Newton&apos;s Law
          </button>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-white/5">
          <span
            className="material-symbols-outlined text-orange-400 text-[24px]"
            style={{ fontVariationSettings: '"FILL" 1' }}>
            local_fire_department
          </span>
          <span className=" text-label-md font-bold">7 Days</span>
        </div>
        <div className="flex items-center gap-2  text-label-md text-on-surface-variant border-r border-white/10 pr-6 cursor-pointer">
          <span className="font-bold">Class 10</span>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </div>
        <div className="flex items-center gap-1  text-label-md text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-lg">language</span>
          <span>English</span>
        </div>
        <button className="relative p-2 text-on-surface-variant hover:bg-white/5 rounded-full transition-all">
          <span className="material-symbols-outlined text-[24px]">
            notifications
          </span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-background" />
        </button>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 overflow-hidden group-hover:border-primary transition-all">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-sbmX_-JU9AGAPG1gPSmsoZn3WkJ8P286VLrupYxmwIQ318b0xGkLHT7jgeoqjjNsvCidU1PQafn8tNoAZVLaZ4mkMcVEWlGusvc4X1OGvDvCRC9eSn5b4xAt0iabpuCZneeO04KX19WU4sTOz-2yYJM1UZcMVA5k_T4fb1EbvfVwghE7kc_0AR8JvalzmTowky5VhejJDL_wljYVNRadlFVAhkwRt7KGG3OksROpyTLLFv2zFBViI8-ICDFMgtdq6t87-WzA2EM"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
