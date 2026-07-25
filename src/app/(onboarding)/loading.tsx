export default function OnboardingLoading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-surface text-on-surface-variant">
      <div className="flex flex-col items-center gap-4">
        <span className="material-symbols-outlined animate-spin text-primary text-[32px]">
          progress_activity
        </span>
        <p className="text-label-md">Loading your progress…</p>
      </div>
    </div>
  );
}
