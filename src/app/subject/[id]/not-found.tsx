import Link from "next/link";

export default function SubjectNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="glass-panel premium-border rounded-2xl p-8 text-center max-w-md">
        <h2 className="text-headline-md font-bold mb-2">Subject not found</h2>
        <p className="text-on-surface-variant text-body-md mb-6">
          This subject doesn&apos;t exist, or it isn&apos;t one of your selected subjects.
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold hover:brightness-110 transition-all">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
