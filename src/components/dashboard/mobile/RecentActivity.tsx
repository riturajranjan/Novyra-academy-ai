"use client";

import type { DashboardActivity } from "@/lib/contentDal";
import { ACTIVITY_TYPE_ICONS, formatRelativeTime } from "@/lib/activityDisplay";

interface RecentActivityProps {
  activities: DashboardActivity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <section>
      <h3 className="text-on-surface-variant text-xs uppercase tracking-[0.2em] mb-4">Recent Activity</h3>
      {activities.length === 0 ? (
        <p className="text-on-surface-variant text-sm">No activity yet — complete a lesson or quiz to see it here.</p>
      ) : (
        <div className="glass-card rounded-2xl p-5 border border-white/5 space-y-4">
          {activities.slice(0, 5).map((activity) => (
            <div key={activity.id} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-base">
                  {ACTIVITY_TYPE_ICONS[activity.type]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{activity.title}</p>
                <p className="text-[10px] text-on-surface-variant">{formatRelativeTime(activity.createdAt)}</p>
              </div>
              {activity.xp > 0 && (
                <span className="text-[10px] font-bold text-tertiary shrink-0">+{activity.xp} XP</span>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
