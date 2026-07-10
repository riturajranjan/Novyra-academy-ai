import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400">
        <Sparkles className="h-5 w-5 text-white" />
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-tight text-white">
          Novyra Academy
        </h1>

        <p className="text-xs text-slate-400">AI Learning Platform</p>
      </div>
    </div>
  );
}
