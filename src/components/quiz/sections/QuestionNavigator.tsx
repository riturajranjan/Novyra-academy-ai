export default function QuestionNavigator() {
  return (
    <section className="glass-card rounded-2xl p-stack-md">
      <div className="flex justify-between items-center mb-stack-md">
        <h3 className="font-label-md text-label-md font-bold text-on-surface-variant uppercase tracking-wider">
          Question Navigator
        </h3>
        <span className="text-[12px] text-on-surface-variant">8 of 25</span>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {/* Question circles */}
        {/* Completed */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20 text-green-400 border border-green-500/30 text-[12px] font-mono-sm">
          01
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20 text-green-400 border border-green-500/30 text-[12px] font-mono-sm">
          02
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20 text-green-400 border border-green-500/30 text-[12px] font-mono-sm">
          03
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20 text-green-400 border border-green-500/30 text-[12px] font-mono-sm">
          04
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20 text-green-400 border border-green-500/30 text-[12px] font-mono-sm">
          05
        </div>
        {/* Flagged/Current */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[12px] font-mono-sm relative">
          06
          <span
            className="absolute -top-1 -right-1 material-symbols-outlined text-[10px] fill-current"
            data-icon="flag">
            flag
          </span>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20 text-green-400 border border-green-500/30 text-[12px] font-mono-sm">
          07
        </div>
        {/* Current */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-on-primary border-2 border-primary shadow-[0_0_15px_rgba(128,131,255,0.4)] text-[12px] font-bold font-mono-sm">
          08
        </div>
        {/* Remaining */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-on-surface-variant text-[12px] font-mono-sm">
          09
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-on-surface-variant text-[12px] font-mono-sm">
          10
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-on-surface-variant text-[12px] font-mono-sm">
          11
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-on-surface-variant text-[12px] font-mono-sm">
          12
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-on-surface-variant text-[12px] font-mono-sm">
          13
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-on-surface-variant text-[12px] font-mono-sm">
          14
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-on-surface-variant text-[12px] font-mono-sm">
          15
        </div>
        {/* ...truncated for design layout */}
      </div>
      <div className="mt-stack-md flex flex-wrap gap-x-4 gap-y-2 pt-stack-md border-t border-white/5">
        <div className="flex items-center gap-1.5 text-[10px] text-on-surface-variant uppercase">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          Completed
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-on-surface-variant uppercase">
          <div className="w-2 h-2 rounded-full bg-orange-500" />
          Flagged
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-on-surface-variant uppercase">
          <div className="w-2 h-2 rounded-full bg-primary" />
          Current
        </div>
      </div>
    </section>
  );
}
