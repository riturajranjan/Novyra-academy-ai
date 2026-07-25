"use client";

import React, { useTransition } from "react";

import { logout } from "@/app/actions/auth";

const DangerZone = () => {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(() => {
      logout();
    });
  };

  return (
    <>
      <div className="md:hidden pt-4">
        <div className="bg-error-container/10 border border-error/20 rounded-2xl overflow-hidden">
          <button
            onClick={handleSignOut}
            disabled={isPending}
            className="w-full flex items-center justify-between p-4 active:bg-error-container/20 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-error/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-error">
                  logout
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-label-md text-label-md text-error font-semibold">
                  Sign Out
                </h4>
                <p className="text-[12px] text-error/60">
                  Device session will end
                </p>
              </div>
            </div>
          </button>
          <button className="w-full flex items-center justify-between p-4 border-t border-error/10 active:bg-error-container/20 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-error/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-error/70">
                  delete_forever
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-label-md text-label-md text-error/70">
                  Delete Account
                </h4>
              </div>
            </div>
          </button>
        </div>
        <div className="mt-stack-lg text-center pb-safe">
          <p className="text-[11px] text-on-surface-variant font-mono-sm opacity-50 uppercase tracking-[2px]">
            Novyra Academy AI v2.4.1 (Stable Build)
          </p>
        </div>
      </div>
      <section className="hidden md:block space-y-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-error">warning</span>
          <h4 className="font-headline-md text-headline-md text-error">
            Danger Zone
          </h4>
        </div>
        <div className="border border-error/20 bg-error-container/5 rounded-2xl p-1 overflow-hidden">
          <div className="bg-surface-container-lowest/80 backdrop-blur-xl p-6 rounded-[calc(1.5rem-4px)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="font-headline-md text-headline-md text-on-surface mb-2">
                  Reset AI Personalization
                </p>
                <p className="text-on-surface-variant font-body-md">
                  This will wipe your learning history and AI tutor preferences.
                  This action cannot be undone.
                </p>
              </div>
              <button className="px-6 py-2.5 border border-error/50 text-error rounded-xl font-label-md hover:bg-error/10 transition-all">
                Reset Everything
              </button>
            </div>
            <div className="h-[1px] bg-white/5 my-6" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="font-headline-md text-headline-md text-error mb-2">
                  Delete Account
                </p>
                <p className="text-on-surface-variant font-body-md">
                  Permanently remove all your data, progress, and certificates
                  from Novyra Academy.
                </p>
              </div>
              <button className="px-6 py-2.5 bg-error text-on-error rounded-xl font-label-md hover:brightness-110 transition-all">
                Delete Forever
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DangerZone;
