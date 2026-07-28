import type { ReactNode } from "react";

type DeviceType = "macbook" | "tablet" | "phone";

interface DeviceFrameProps {
  type: DeviceType;
  children: ReactNode;
}

/** Static specular highlight across the device's screen — a fixed diagonal
 * sheen (not animated, cheap) so each device reads as premium glass rather
 * than a flat mockup. */
function ReflectionSheen() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 opacity-60 dark:opacity-40"
      style={{
        background: "linear-gradient(115deg, rgba(255,255,255,0.35) 0%, transparent 22%, transparent 78%, rgba(255,255,255,0.12) 100%)",
      }}
    />
  );
}

/** Minimal CSS-only device chrome (MacBook / tablet / phone) wrapping a
 * live mini product preview — part of the floating device ecosystem. */
export function DeviceFrame({ type, children }: DeviceFrameProps) {
  if (type === "macbook") {
    return (
      <div className="flex h-full w-full flex-col items-center">
        <div className="border-border-subtle bg-background/40 relative w-full flex-1 overflow-hidden rounded-t-md border">
          <span
            className="bg-foreground-secondary/30 absolute left-1/2 top-0.5 z-20 h-0.5 w-0.5 -translate-x-1/2 rounded-full"
            aria-hidden
          />
          {children}
          <ReflectionSheen />
        </div>
        <div className="bg-foreground-secondary/15 h-1.5 w-[110%] rounded-b-md" aria-hidden />
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div className="border-border-subtle bg-background/40 flex h-full w-full flex-col items-center gap-1 overflow-hidden rounded-xl border p-1">
        <div className="relative w-full flex-1 overflow-hidden rounded-md">
          {children}
          <ReflectionSheen />
        </div>
        <span className="bg-foreground-secondary/25 h-1 w-4 shrink-0 rounded-full" aria-hidden />
      </div>
    );
  }

  return (
    <div className="border-border-subtle bg-background/40 flex h-full w-full flex-col items-center gap-1 overflow-hidden rounded-2xl border p-1">
      <span className="bg-foreground-secondary/30 h-1 w-6 shrink-0 rounded-full" aria-hidden />
      <div className="relative w-full flex-1 overflow-hidden rounded-lg">
        {children}
        <ReflectionSheen />
      </div>
      <span className="bg-foreground-secondary/25 h-1 w-5 shrink-0 rounded-full" aria-hidden />
    </div>
  );
}
