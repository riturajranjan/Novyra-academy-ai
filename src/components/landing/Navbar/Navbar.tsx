"use client";

import { Menu } from "lucide-react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#0b132699] backdrop-blur-2xl border-b border-white/5 h-20">
      {/* <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <Navigation />

        <div className="hidden items-center gap-4 lg:flex">
          <button className="text-sm font-medium text-slate-300 hover:text-white">
            Login
          </button>

          <button className="rounded-2xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400">
            Start Learning Free
          </button>
        </div>

        <button className="lg:hidden">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div> */}

      <div className="max-w-[1280px] pl-[48px] pr-[48px] mx-auto px-margin-desktop flex items-center justify-between h-full">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-[#c0c1ff33] flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-[#c0c1ff] text-[28px]">
              auto_awesome
            </span>
          </div>
          <span className="font-headline-md text-[22px] font-extrabold tracking-tight text-on-surface">
            Novyra Academy AI
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a
            className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors text-[14px] font-semibold"
            href="#how-it-works">
            How It Works
          </a>
          <a
            className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors text-[14px] font-semibold"
            href="#subjects">
            Subjects
          </a>
          <a
            className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors text-[14px] font-semibold"
            href="#parents">
            Parents
          </a>
          <button className="bg-[#c0c1ff] text-[#1000a9] px-7 py-3 rounded-xl font-label-md font-bold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 transition-all">
            Start Learning Free
          </button>
        </div>
      </div>
    </nav>
  );
}
