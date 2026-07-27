"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Recommendation } from "@/lib/recommendations";

interface RecommendedActionsProps {
  recommendations: Recommendation[];
}

const STYLES_BY_PRIORITY: Record<Recommendation["priority"], { text: string; bg: string; border: string; badgeBg: string }> = {
  high: { text: "text-tertiary", bg: "bg-tertiary/5", border: "border-tertiary/20", badgeBg: "bg-tertiary/20" },
  medium: { text: "text-primary", bg: "bg-primary/5", border: "border-primary/20", badgeBg: "bg-primary/20" },
  low: { text: "text-cyan-400", bg: "bg-cyan-400/5", border: "border-cyan-400/20", badgeBg: "bg-cyan-400/20" },
};

export default function RecommendedActions({ recommendations }: RecommendedActionsProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <span
          className="material-symbols-outlined text-tertiary"
          style={{ fontVariationSettings: '"FILL" 1' }}>
          auto_awesome
        </span>
        <h3 className=" text-label-md font-bold uppercase tracking-tight text-on-surface-variant">
          Recommended Actions
        </h3>
      </div>
      {recommendations.length === 0 ? (
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-on-surface-variant text-body-md">
          Nothing to recommend right now — you&apos;re all caught up.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {recommendations.map((recommendation) => {
            const styles = STYLES_BY_PRIORITY[recommendation.priority];
            const content = (
              <>
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-headline-md text-headline-md ${styles.text}`}>{recommendation.title}</h4>
                  <span className={`px-2 py-1 ${styles.badgeBg} ${styles.text} rounded text-[10px] font-bold uppercase`}>
                    {recommendation.priority}
                  </span>
                </div>
                <p className="text-body-md text-on-surface-variant mb-4">{recommendation.description}</p>
                <div className={`flex items-center gap-2 ${styles.text} text-label-md font-bold`}>
                  View
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </>
            );

            return recommendation.href ? (
              <Link
                key={recommendation.id}
                href={recommendation.href}
                className={`text-left p-6 rounded-2xl border ${styles.border} ${styles.bg} hover:brightness-110 transition-all group relative overflow-hidden block`}>
                {content}
              </Link>
            ) : (
              <div
                key={recommendation.id}
                className={`text-left p-6 rounded-2xl border ${styles.border} ${styles.bg} group relative overflow-hidden`}>
                {content}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
