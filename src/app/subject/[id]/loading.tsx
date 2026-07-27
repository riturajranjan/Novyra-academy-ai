export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="glass-panel premium-border rounded-2xl p-8 w-full max-w-md text-center animate-pulse">
        <div className="h-4 w-32 mx-auto rounded bg-white/10 mb-4" />
        <div className="h-3 w-48 mx-auto rounded bg-white/5" />
      </div>
    </div>
  );
}
