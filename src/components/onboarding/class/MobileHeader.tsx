"use client";

import { ArrowLeft, CircleHelp } from "lucide-react";
import ProgressHeader from "../ProgressHeader";

interface MobileHeaderProps {
  onBack?: () => void;
}

export default function MobileHeader({ onBack }: MobileHeaderProps) {
  return (
    <header className="lg:hidden border-b border-white/10 bg-[#07111F] px-5 py-5">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="rounded-xl p-2 transition hover:bg-white/5">
          <ArrowLeft className="text-white" size={22} />
        </button>

        <div className="flex-1 px-6">
          <ProgressHeader step={2} totalSteps={8} />
        </div>

        <button className="rounded-xl p-2 transition hover:bg-white/5">
          <CircleHelp className="text-white" size={22} />
        </button>
      </div>
    </header>
  );
}
