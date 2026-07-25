"use client";

import { useRouter } from "next/navigation";

const CTA = () => {
  const router = useRouter();

  return (
    <section className="py-section-gap px-margin-desktop transition-all duration-1000 ease-out opacity-100 translate-y-0">
      <div className="max-w-container-max mx-auto">
        <div className="relative glass-panel1 rounded-[60px] p-16 md:p-24 text-center overflow-hidden border-white/15 bg-gradient-to-br from-primary/20 via-surface-container-low to-tertiary/20 shadow-4xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[12px] uppercase tracking-widest">
              Limited Time: Free 7-Day Trial
            </div>
            <h2 className="font-display-xl text-[56px] md:text-[80px] leading-tight text-on-surface">
              Meet Your AI Teacher <br className="hidden md:block" />{" "}
              <span className="text-gradient-primary">Today</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Join 50,000+ students who have accelerated their learning by 3x.
              Dr. Nova is ready to help you top your exams.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <button
                onClick={() => router.push("/login")}
                className="bg-primary text-on-primary px-12 py-6 rounded-[24px] font-extrabold text-[20px] hover:shadow-3xl hover:shadow-primary/50 hover:-translate-y-1 transition-all w-full sm:w-auto active:scale-95">
                Start Learning Free
              </button>
              <button className="bg-surface/50 backdrop-blur-xl text-on-surface px-12 py-6 rounded-[24px] font-extrabold text-[20px] border border-white/10 hover:bg-white/10 transition-all w-full sm:w-auto group">
                Try AI Teacher Demo
                <span className="material-symbols-outlined align-middle ml-2 group-hover:rotate-45 transition-transform">
                  bolt
                </span>
              </button>
            </div>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500">
                  check_circle
                </span>
                <span className="text-sm text-on-surface-variant font-medium">
                  No Credit Card
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500">
                  check_circle
                </span>
                <span className="text-sm text-on-surface-variant font-medium">
                  Join in 30 Seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
