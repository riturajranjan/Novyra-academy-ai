import React from "react";

const Subscription = () => {
  return (
    <>
      {" "}
      <div className="md:hidden">
        <div className="glass-card rounded-2xl overflow-hidden border-primary/20 relative">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <button className="w-full flex items-center justify-between p-4 active:bg-primary/10 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary fill-icon">
                  star
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-label-md text-label-md text-on-surface font-bold">
                  Novyra Elite
                </h4>
                <p className="text-[12px] text-primary">Manage Subscription</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                Active
              </span>
              <span className="material-symbols-outlined text-on-surface-variant">
                chevron_right
              </span>
            </div>
          </button>
        </div>
      </div>
      <section className="space-y-6 hidden md:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              subscriptions
            </span>
            <h4 className="font-headline-md text-headline-md">
              Subscription &amp; Billing
            </h4>
          </div>
          <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full font-mono-sm text-mono-sm">
            Monthly Plan
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 glass-card rounded-2xl p-6 overflow-hidden relative">
            {/* Premium Gradient Edge */}
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
              <div>
                <p className="text-on-surface-variant font-label-md text-label-md mb-1">
                  Current Plan
                </p>
                <h5 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                  Novyra Pro Student
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: '"FILL" 1' }}>
                    verified
                  </span>
                </h5>
                <p className="text-on-surface-variant text-body-md mt-2">
                  Next billing date: 15 Oct, 2024 (₹999/mo)
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-label-md hover:brightness-110 transition-all">
                  Manage Plan
                </button>
                <button className="px-6 py-2.5 bg-surface-container-high border border-white/5 rounded-xl font-label-md">
                  View Invoice
                </button>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex justify-between items-center text-[12px] font-label-md">
                <span className="text-on-surface-variant uppercase tracking-wider">
                  AI Credits Used
                </span>
                <span className="text-on-surface">4,250 / 10,000</span>
              </div>
              <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full w-[42.5%] bg-primary shadow-[0_0_12px_rgba(192,193,255,0.4)]" />
              </div>
            </div>
          </div>
          <div className="md:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between">
            <h6 className="font-label-md text-label-md text-on-surface-variant">
              Quick Actions
            </h6>
            <div className="space-y-3 mt-4">
              <button className="w-full flex items-center justify-between p-3 bg-surface-container-low hover:bg-white/5 rounded-xl border border-white/5 transition-colors">
                <span className="text-body-md">Payment Method</span>
                <span className="material-symbols-outlined text-[20px]">
                  credit_card
                </span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-surface-container-low hover:bg-white/5 rounded-xl border border-white/5 transition-colors">
                <span className="text-body-md">Billing History</span>
                <span className="material-symbols-outlined text-[20px]">
                  history
                </span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-surface-container-low hover:bg-white/5 rounded-xl border border-white/5 transition-colors">
                <span className="text-body-md text-error">Cancel Pro</span>
                <span className="material-symbols-outlined text-[20px] text-error">
                  close
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscription;
