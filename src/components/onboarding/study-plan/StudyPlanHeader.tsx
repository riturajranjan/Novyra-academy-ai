"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Zap } from "lucide-react";

export default function StudyPlanHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-margin-desktop h-20 flex justify-between items-center bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm">
      {/* Left */}

      <div className="flex items-center gap-8">
        <span className="text-headline-md font-headline-md font-bold tracking-tight text-on-surface">
          Novyra Academy
        </span>

        <nav className="hidden md:flex gap-6">
          <Link
            href="#"
            className="text-label-md  text-on-surface-variant hover:text-on-surface transition-colors">
            Curriculum
          </Link>

          <Link
            href="#"
            className="text-label-md  text-on-surface-variant hover:text-on-surface transition-colors">
            Resources
          </Link>

          <Link
            href="#"
            className="text-label-md  text-on-surface-variant hover:text-on-surface transition-colors">
            Mentors
          </Link>
        </nav>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/5 rounded-full transition-all active:scale-95">
          <Bell size={20} className="text-primary" />
        </button>

        <button className="p-2 hover:bg-white/5 rounded-full transition-all active:scale-95">
          <Zap size={20} className="text-primary" />
        </button>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 relative">
          <Image
            src="/images/avatar.jpg"
            alt="Student"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
