"use client";

import Link from "next/link";

import type { Recommendation } from "@/lib/recommendations";

interface AIRecommendationsProps {
  recommendations: Recommendation[];
}

const STYLES_BY_PRIORITY: Record<
  Recommendation["priority"],
  { bg: string; border: string; iconBg: string; iconColor: string; titleColor: string; icon: string }
> = {
  high: {
    bg: "bg-tertiary/5",
    border: "border-tertiary/20",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
    titleColor: "text-tertiary",
    icon: "auto_awesome",
  },
  medium: {
    bg: "bg-primary/5",
    border: "border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    titleColor: "text-primary",
    icon: "lightbulb",
  },
  low: {
    bg: "bg-secondary/5",
    border: "border-secondary/20",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    titleColor: "text-secondary",
    icon: "local_fire_department",
  },
};

export default function AIRecommendations({ recommendations }: AIRecommendationsProps) {
  return (
    <section>
      {/* Heading */}

      <h3 className="text-on-surface-variant  text-xs uppercase tracking-[0.2em] mb-4">
        AI Recommendations
      </h3>

      {recommendations.length === 0 ? (
        <p className="text-on-surface-variant text-sm">Nothing to recommend right now.</p>
      ) : (
        <div className="flex overflow-x-auto hide-scrollbar gap-3 -mx-margin-mobile px-margin-mobile pb-2">
          {recommendations.map((item) => {
            const styles = STYLES_BY_PRIORITY[item.priority];
            const card = (
              <div
                className={`flex-shrink-0 w-64 ${styles.bg} border ${styles.border} rounded-2xl p-4 flex items-center gap-4`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${styles.iconBg}`}>
                  <span className={`material-symbols-outlined ${styles.iconColor}`}>{styles.icon}</span>
                </div>
                <div>
                  <h5 className={`text-xs font-bold uppercase ${styles.titleColor}`}>{item.title}</h5>
                  <p className="text-xs text-on-surface-variant mt-1 leading-5">{item.description}</p>
                </div>
              </div>
            );

            return item.href ? (
              <Link key={item.id} href={item.href} className="flex-shrink-0">
                {card}
              </Link>
            ) : (
              <div key={item.id}>{card}</div>
            );
          })}
        </div>
      )}
    </section>
  );
}
