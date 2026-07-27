"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Bot,
  FileText,
  ClipboardCheck,
  Bookmark,
  BarChart3,
  Trophy,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
  },
  {
    title: "Subjects",
    href: "/subject",
    icon: "menu_book",
  },
  {
    title: "AI Teacher",
    href: "/ai-teacher",
    icon: "psychology",
  },
  {
    title: "Notes",
    href: "/notes",
    icon: "edit_note",
  },
];

const progress = [
  {
    title: "Quiz",
    href: "/quiz",
    icon: ClipboardCheck,
  },
  {
    title: "Bookmarks",
    href: "/bookmarks",
    icon: Bookmark,
  },
  {
    title: "Progress",
    href: "/progress",
    icon: BarChart3,
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: Trophy,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-white/5 bg-surface-container-lowest flex flex-col z-50">
      <div className="p-stack-lg flex items-center gap-stack-sm">
        <span
          className="material-symbols-outlined text-primary text-headline-md"
          style={{ fontVariationSettings: '"FILL" 1' }}>
          school
        </span>
        <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">
          Novyra
        </span>
      </div>
      <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto custom-scrollbar">
        <div className="text-on-surface-variant font-bold  text-label-md px-3 py-2 uppercase tracking-wider opacity-50">
          Main
        </div>
        {menu?.map((item) => {
          return (
            <Link
              key={item?.title}
              className={`
                flex
                 items-center gap-3 
                px-3 py-2.5
                 rounded-xl
                 
                 
                transition-all
                 duration-200 
                 hover:bg-white/5
                 
               ${pathname?.includes(item?.href) ? " text-primary bg-primary-container/10" : "text-on-surface-variant "}`}
              href={item?.href}>
              <span
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: '"FILL" 1' }}>
                {item?.icon}
              </span>
              <span className=" text-label-md font-bold">{item?.title}</span>
            </Link>
          );
        })}

        <a
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-on-surface-variant hover:bg-white/5 transition-all duration-200"
          href="#">
          <span className="material-symbols-outlined text-[24px]">
            insights
          </span>
          <span className=" text-label-md font-bold">Progress</span>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-on-surface-variant hover:bg-white/5 transition-all duration-200"
          href="#">
          <span className="material-symbols-outlined text-[24px]">
            workspace_premium
          </span>
          <span className=" text-label-md font-bold">Achievements</span>
        </a>
        <div className="mt-auto pt-6 border-t border-white/5">
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-on-surface-variant hover:bg-white/5 transition-all duration-200"
            href="#">
            <span className="material-symbols-outlined text-[24px]">
              settings
            </span>
            <span className=" text-label-md font-bold">Settings</span>
          </a>
        </div>
      </nav>
    </aside>
  );
}
