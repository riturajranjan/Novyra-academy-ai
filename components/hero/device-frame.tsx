import type { ReactNode } from "react";

type DeviceType = "macbook" | "tablet" | "phone";

interface DeviceFrameProps {
  type: DeviceType;
  children: ReactNode;
}

/** Minimal CSS-only device chrome (MacBook / tablet / phone) wrapping a
 * live mini product preview — part of the floating device ecosystem. */
export function DeviceFrame({ type, children }: DeviceFrameProps) {
  if (type === "macbook") {
    return (
      <div className="flex h-full w-full flex-col items-center">
        <div className="border-border-subtle bg-background/40 relative w-full flex-1 overflow-hidden rounded-t-md border">
          <span
            className="bg-foreground-secondary/30 absolute left-1/2 top-0.5 h-0.5 w-0.5 -translate-x-1/2 rounded-full"
            aria-hidden
          />
          {children}
        </div>
        <div className="bg-foreground-secondary/15 h-1.5 w-[110%] rounded-b-md" aria-hidden />
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div className="border-border-subtle bg-background/40 flex h-full w-full flex-col items-center gap-1 overflow-hidden rounded-xl border p-1">
        <div className="w-full flex-1 overflow-hidden rounded-md">{children}</div>
        <span className="bg-foreground-secondary/25 h-1 w-4 shrink-0 rounded-full" aria-hidden />
      </div>
    );
  }

  return (
    <div className="border-border-subtle bg-background/40 flex h-full w-full flex-col items-center gap-1 overflow-hidden rounded-2xl border p-1">
      <span className="bg-foreground-secondary/30 h-1 w-6 shrink-0 rounded-full" aria-hidden />
      <div className="w-full flex-1 overflow-hidden rounded-lg">{children}</div>
      <span className="bg-foreground-secondary/25 h-1 w-5 shrink-0 rounded-full" aria-hidden />
    </div>
  );
}
