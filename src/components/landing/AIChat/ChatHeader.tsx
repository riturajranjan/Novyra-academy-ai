import { Mic, Settings } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-[20px] bg-gradient-to-br from-primary to-tertiary flex items-center justify-center pulse-orb relative">
          <span className="material-symbols-outlined text-[#1000a9] text-[32px]">
            face_6
          </span>
        </div>

        <div>
          <h3 className="font-[700] text-[18px] text-[#dae2fd]">Dr. Nova</h3>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[11px] text-[#c0c1ff] font-bold uppercase tracking-widest">
              AI Teacher • Online
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
          <Mic size={18} />
        </button>

        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
          <Settings size={18} />
        </button>
      </div>
    </div>
  );
}
