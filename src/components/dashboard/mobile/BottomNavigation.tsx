"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "grid_view",
    fill: true,
  },
  {
    title: "Courses",
    href: "/subjects",
    icon: "menu_book",
    fill: false,
  },
  {
    title: "Stats",
    href: "/progress",
    icon: "analytics",
    fill: false,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: "account_circle",
    fill: false,
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[60] bg-background/80 backdrop-blur-2xl border-t border-white/5 safe-area-inset-bottom lg:hidden">
      <div className="max-w-md mx-auto flex justify-around items-center h-20 relative">
        {/* Handle */}

        <div className="w-16 h-1 bg-surface-container-highest rounded-full absolute top-2 left-1/2 -translate-x-1/2 opacity-20" />

        {navigation.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex flex-col items-center gap-1 group transition-colors ${
                active
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}>
              <span
                className="material-symbols-outlined"
                style={{
                  fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0",
                }}>
                {item.icon}
              </span>

              <span className="text-[10px] font-medium">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
