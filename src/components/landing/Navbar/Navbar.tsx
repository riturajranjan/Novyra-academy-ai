"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const route = useRouter();
  return (
    <nav className="fixed top-0 w-full z-[100] bg-surface/60 backdrop-blur-2xl border-b border-white/5 h-20">
      <div className="max-w-container-max mx-auto px-margin-desktop flex items-center justify-between h-full">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-primary text-[28px]">
              auto_awesome
            </span>
          </div>
          <span className="font-headline-md text-[22px] font-extrabold tracking-tight text-on-surface">
            Novyra Academy AI
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-semibold"
            href="#how-it-works">
            How It Works
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-semibold"
            href="#subjects">
            Subjects
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-semibold"
            href="#parents">
            Parents
          </a>
          <button
            onClick={() => route.push("/login")}
            className="bg-primary text-on-primary px-7 py-3 rounded-xl  font-bold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 transition-all">
            Start Learning Free
          </button>
        </div>
      </div>
    </nav>
  );
}
