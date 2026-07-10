import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
      <span className="flex h-2 w-2 rounded-full bg-[#c0c1ff] animate-ping"></span>

      <span className="text-[#c0c1ff] font-mono-sm text-[12px] font-bold uppercase tracking-[0.2em]">
        Next-Gen Learning Experience
      </span>
    </div>
  );
}
