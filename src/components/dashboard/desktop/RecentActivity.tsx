"use client";

import type { DashboardActivity } from "@/lib/contentDal";
import { ACTIVITY_TYPE_ICONS, formatRelativeTime } from "@/lib/activityDisplay";

interface RecentActivityProps {
  activities: DashboardActivity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="glass-panel premium-border rounded-2xl p-6">
      <h3 className="text-label-md font-bold mb-6 flex items-center justify-between">
        Recent Activity
        <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">
          {activities.length} {activities.length === 1 ? "Event" : "Events"}
        </span>
      </h3>
      {activities.length === 0 ? (
        <p className="text-on-surface-variant text-label-md">
          No activity yet — complete a lesson or quiz to see it here.
        </p>
      ) : (
        <ul className="space-y-4">
          {activities.slice(0, 6).map((activity) => (
            <li key={activity.id} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  {ACTIVITY_TYPE_ICONS[activity.type]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-label-md font-medium truncate">{activity.title}</p>
                <p className="text-[10px] text-on-surface-variant">{formatRelativeTime(activity.createdAt)}</p>
              </div>
              {activity.xp > 0 && (
                <span className="text-[10px] font-bold text-tertiary shrink-0">+{activity.xp} XP</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
