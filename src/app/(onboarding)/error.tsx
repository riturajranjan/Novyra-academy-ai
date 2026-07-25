"use client";

export default function OnboardingError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-surface text-on-surface">
      <div className="flex flex-col items-center gap-4 text-center max-w-sm px-6">
        <span className="material-symbols-outlined text-error text-[32px]">
          error
        </span>
        <p className="text-body-md text-on-surface-variant">
          Something went wrong loading this step. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-2 rounded-lg bg-primary text-on-primary-container font-bold hover:brightness-110 transition-all">
          Try Again
        </button>
      </div>
    </div>
  );
}
