export default function StatusChips() {
  return (
    <div className="mt-8 pt-8 border-t border-white/10">
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-[10px] font-bold text-[#c0c1ff] uppercase tracking-wider">
          Concept Clarity: 92%
        </span>
        <span className="px-3 py-1 rounded-full bg-[#4cd7f633] border border-[#4cd7f64d] text-[10px] font-bold text-[#4cd7f6] uppercase tracking-wider">
          Exam Confidence: High
        </span>
        <span className="px-3 py-1 rounded-full bg-[#b8c4ff33] border border-[#b8c4ff4d] text-[10px] font-bold text-[#b8c4ff] uppercase tracking-wider">
          Focus Mode: ON
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#222a3d66] rounded-2xl p-4 border border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#c0c1ff1a] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#dae2fd]">
              draw
            </span>
          </div>
          <span className="text-[12px] font-bold text-[#dae2fd]">
            Physics Diagram
          </span>
        </div>
        <div className="bg-[#222a3d66] rounded-2xl p-4 border border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[##4cd7f61a] flex items-center justify-center">
            <span className="material-symbols-outlined text-[##4cd7f6]">
              quiz
            </span>
          </div>
          <span
            className="text-[12px] font-bold text-[#dae2fd]">
            Adaptive Quiz
          </span>
        </div>
      </div>
    </div>
  );
}
