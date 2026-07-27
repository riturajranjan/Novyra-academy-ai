"use client";

export default function DashboardError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="glass-panel premium-border rounded-2xl p-8 text-center max-w-md">
        <h2 className="text-headline-md font-bold mb-2">Something went wrong</h2>
        <p className="text-on-surface-variant text-body-md mb-6">
          We couldn&apos;t load your dashboard. {error.digest ? `(${error.digest})` : ""}
        </p>
        <button
          onClick={() => unstable_retry()}
          className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold hover:brightness-110 transition-all">
          Try again
        </button>
      </div>
    </div>
  );
}
