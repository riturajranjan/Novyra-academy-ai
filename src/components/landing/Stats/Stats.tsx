export default function Stats() {
  return (
    <section className="py-16 bg-surface-container-lowest/40 border-y border-white/5 relative overflow-hidden transition-all duration-1000 ease-out opacity-100 translate-y-0">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left relative z-10">
        <div className="space-y-2 group">
          <p className="text-primary text-[32px] font-extrabold group-hover:scale-110 transition-transform origin-left">
            50,000+
          </p>
          <p className="text-on-surface-variant text-[12px] font-bold tracking-[0.2em] uppercase">
            Active Learners
          </p>
        </div>
        <div className="space-y-2 group">
          <p className="text-tertiary text-[32px] font-extrabold group-hover:scale-110 transition-transform origin-left">
            100%
          </p>
          <p className="text-on-surface-variant text-[12px] font-bold tracking-[0.2em] uppercase">
            Curriculum Mapped
          </p>
        </div>
        <div className="space-y-2 group">
          <p className="text-secondary text-[32px] font-extrabold group-hover:scale-110 transition-transform origin-left">
            Trilingual
          </p>
          <p className="text-on-surface-variant text-[12px] font-bold tracking-[0.2em] uppercase">
            Language Support
          </p>
        </div>
        <div className="space-y-2 group">
          <p className="text-primary text-[32px] font-extrabold group-hover:scale-110 transition-transform origin-left">
            24/7
          </p>
          <p className="text-on-surface-variant text-[12px] font-bold tracking-[0.2em] uppercase">
            Instant Doubt Help
          </p>
        </div>
      </div>
    </section>
  );
}
