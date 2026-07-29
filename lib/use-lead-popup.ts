"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "novyra:lead-popup:shown-this-session";
const DISMISSED_UNTIL_KEY = "novyra:lead-popup:dismissed-until";
const SUBMITTED_KEY = "novyra:lead-popup:submitted";

const SHOW_DELAY_MS = 3000;
const DISMISS_COOLDOWN_MS = 24 * 60 * 60 * 1000;

/** Drives the lead popup's show/hide lifecycle:
 * - never again once the form has been submitted (until someone clears
 *   localStorage — that's the "manually reset" the spec asks for)
 * - not shown for 24h after being dismissed unanswered
 * - at most once per browser session otherwise
 * - appears 3s after mount if none of the above suppress it
 *
 * Storage access is wrapped in try/catch since private-browsing modes can
 * throw on read/write — in that case the popup just behaves as if it has
 * no memory (shows once per page load), which is a safe fallback rather
 * than a crash. Nothing here runs during SSR since it's all inside effects
 * and event handlers, so there's no hydration mismatch risk. */
export function useLeadPopupTrigger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(SUBMITTED_KEY) === "true") return;
      const dismissedUntil = Number(localStorage.getItem(DISMISSED_UNTIL_KEY) ?? 0);
      if (dismissedUntil > Date.now()) return;
      if (sessionStorage.getItem(SESSION_KEY) === "true") return;
    } catch {
      // Storage unavailable — fall through and show on this load anyway.
    }

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {
        // Nothing to do — worst case it can show again next load.
      }
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      localStorage.setItem(DISMISSED_UNTIL_KEY, String(Date.now() + DISMISS_COOLDOWN_MS));
    } catch {
      // Best-effort — if storage is unavailable there's no cooldown to persist.
    }
  }

  function markSubmitted() {
    try {
      localStorage.setItem(SUBMITTED_KEY, "true");
    } catch {
      // Best-effort — see above.
    }
  }

  return { open, dismiss, markSubmitted };
}
