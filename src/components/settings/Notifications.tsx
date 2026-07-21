import React from "react";

const Notifications = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">
            notifications_active
          </span>
          <h4 className="font-headline-md text-headline-md">Notifications</h4>
        </div>
        <div className="glass-card rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-label-md text-label-md text-on-surface">
                Quiz Reminders
              </p>
              <p className="text-[12px] text-on-surface-variant">
                Alerts for pending weekly tests
              </p>
            </div>
            <button className="w-12 h-6 bg-primary rounded-full relative p-1">
              <div className="w-4 h-4 bg-white rounded-full ml-auto" />
            </button>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-label-md text-label-md text-on-surface">
                Homework Help
              </p>
              <p className="text-[12px] text-on-surface-variant">
                AI assistance availability alerts
              </p>
            </div>
            <button className="w-12 h-6 bg-primary rounded-full relative p-1">
              <div className="w-4 h-4 bg-white rounded-full ml-auto" />
            </button>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-label-md text-label-md text-on-surface">
                Daily Goal Milestones
              </p>
              <p className="text-[12px] text-on-surface-variant">
                Celebrate your study achievements
              </p>
            </div>
            <button className="w-12 h-6 bg-surface-container-high rounded-full relative p-1">
              <div className="w-4 h-4 bg-on-surface-variant rounded-full" />
            </button>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">
            verified_user
          </span>
          <h4 className="font-headline-md text-headline-md">Security</h4>
        </div>
        <div className="glass-card rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary">
                key
              </span>
              <div>
                <p className="font-label-md text-label-md text-on-surface">
                  Two-Factor Auth
                </p>
                <p className="text-[12px] text-on-surface-variant text-primary">
                  Enabled via Google Auth
                </p>
              </div>
            </div>
            <button className="px-4 py-1.5 bg-surface-container-high border border-white/5 rounded-lg text-[12px] font-label-md">
              Manage
            </button>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">devices</span>
              <div>
                <p className="font-label-md text-label-md text-on-surface">
                  Active Devices
                </p>
                <p className="text-[12px] text-on-surface-variant">
                  MacBook Pro, iPhone 15
                </p>
              </div>
            </div>
            <button className="px-4 py-1.5 bg-surface-container-high border border-white/5 rounded-lg text-[12px] font-label-md">
              View All
            </button>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">history</span>
              <div>
                <p className="font-label-md text-label-md text-on-surface">
                  Login History
                </p>
                <p className="text-[12px] text-on-surface-variant">
                  Last active: 2 hours ago
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
              chevron_right
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;
