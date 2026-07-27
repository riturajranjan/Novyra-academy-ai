"use client";

export interface HeaderStats {
  streak: number;
  classTitle: string | null;
  avatarUrl: string | null;
}

interface HeaderProps {
  stats?: HeaderStats;
}

export default function Header({ stats }: HeaderProps) {
  return (
    <header
      className="h-20 glass-panel border-b border-white/5 flex items-center justify-between px-margin-desktop z-40"
      style={{
        transform: "translateY(0px)",
        transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
      <div className="flex flex-col flex-1">
        <div className="relative w-full max-w-lg group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="w-full bg-surface-container-low border-transparent focus:border-primary/30 focus:ring-0 rounded-xl pl-10 pr-12 py-2.5 font-body-md text-body-md transition-all"
            placeholder="Ask your AI Teacher..."
            type="text"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary">
            <span className="material-symbols-outlined text-xl">mic</span>
          </button>
        </div>
        <div className="flex gap-4 mt-1.5 ml-1">
          <button className="text-[11px]  text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              calculate
            </span>{" "}
            Find Formula
          </button>
          <button className="text-[11px]  text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">book</span>{" "}
            Search NCERT
          </button>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {stats && stats.streak > 0 && (
          <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-white/5">
            <span
              className="material-symbols-outlined text-orange-400 text-[24px]"
              style={{ fontVariationSettings: '"FILL" 1' }}>
              local_fire_department
            </span>
            <span className=" text-label-md font-bold">
              {stats.streak} {stats.streak === 1 ? "Day" : "Days"}
            </span>
          </div>
        )}
        {stats?.classTitle && (
          <div className="flex items-center gap-2  text-label-md text-on-surface-variant border-r border-white/10 pr-6">
            <span className="font-bold">{stats.classTitle}</span>
          </div>
        )}
        <div className="flex items-center gap-1  text-label-md text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-lg">language</span>
          <span>English</span>
        </div>
        <button className="relative p-2 text-on-surface-variant hover:bg-white/5 rounded-full transition-all">
          <span className="material-symbols-outlined text-[24px]">
            notifications
          </span>
        </button>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 overflow-hidden group-hover:border-primary transition-all bg-surface-container-high flex items-center justify-center">
            {stats?.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="w-full h-full object-cover" src={stats.avatarUrl} alt="Your avatar" />
            ) : (
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">person</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
