export default function HeroUsers() {
  return (
    <div className="mt-12 flex items-center gap-6">
      <div className="flex -space-x-3">
        <div className="h-12 w-12 rounded-full border-2 border-[#08111F] bg-slate-500"></div>

        <div className="h-12 w-12 rounded-full border-2 border-[#08111F] bg-slate-400"></div>

        <div className="h-12 w-12 rounded-full border-2 border-[#08111F] bg-slate-600"></div>
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Trusted by 50,000+ Students
        </h4>

        <p className="text-sm text-slate-400">
          Average performance improvement of 3.4×
        </p>
      </div>
    </div>
  );
}
