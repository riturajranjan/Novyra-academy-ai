"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LayoutDashboard, BookOpen, Bot, BarChart3, User } from "lucide-react";

const navigation = [
  {
    title: "Home",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Subjects",
    href: "/subjects",
    icon: BookOpen,
  },
  {
    title: "AI",
    href: "/ai-teacher",
    icon: Bot,
  },
  {
    title: "Progress",
    href: "/progress",
    icon: BarChart3,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <nav
      className="
      fixed
      bottom-5
      left-4
      right-4

      z-50

      lg:hidden

      rounded-3xl

      bg-[#10192D]/90

      backdrop-blur-2xl

      border
      border-white/10

      shadow-2xl
    ">
      <div className="grid grid-cols-5 h-20">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="
              flex
              flex-col
              items-center
              justify-center
              gap-1
            ">
              <div
                className={`
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                transition-all

                ${
                  active
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "text-white/50"
                }
                `}>
                <Icon size={22} />
              </div>

              <span
                className={`
                text-[11px]
                font-medium

                ${active ? "text-white" : "text-white/50"}
                `}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
