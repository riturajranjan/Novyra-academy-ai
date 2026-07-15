"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroButtons() {
  const route = useRouter();
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <button
        onClick={() => route.push("/login")}
        className="flex items-center gap-2 rounded-2xl bg-indigo-500 px-8 py-4 font-semibold text-white transition hover:bg-indigo-400">
        Start Learning Free
        <ArrowRight size={18} />
      </button>

      <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
        Watch Demo
      </button>
    </div>
  );
}
