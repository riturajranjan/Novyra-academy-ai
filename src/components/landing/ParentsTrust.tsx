
const ParentsTrust = () => {
  return (
    <section
      className="py-section-gap px-margin-desktop max-w-container-max mx-auto transition-all duration-1000 ease-out opacity-100 translate-y-0"
      id="parents">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-headline-lg text-on-surface text-[44px]">
            Parents Trust <br />
            <span className="text-gradient-primary">Novyra Academy AI</span>
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            We believe education is a partnership. We provide parents with
            complete transparency into their child&apos;s growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  analytics
                </span>
              </div>
              <div>
                <p className="font-bold text-on-surface">
                  Weekly Progress Reports
                </p>
                <p className="text-sm text-on-surface-variant mt-1">
                  Deep insights into subject mastery and time spent.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  shield_person
                </span>
              </div>
              <div>
                <p className="font-bold text-on-surface">Safe AI Environment</p>
                <p className="text-sm text-on-surface-variant mt-1">
                  Zero toxicity. 100% focused on educational outcomes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  insights
                </span>
              </div>
              <div>
                <p className="font-bold text-on-surface">
                  Performance Insights
                </p>
                <p className="text-sm text-on-surface-variant mt-1">
                  AI predicts board exam scores based on current trends.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  notifications_active
                </span>
              </div>
              <div>
                <p className="font-bold text-on-surface">Milestone Alerts</p>
                <p className="text-sm text-on-surface-variant mt-1">
                  Celebrate your child&apos;s learning wins with live notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="glass-panel p-8 rounded-[40px] border-white/10 relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-500 overflow-hidden">
                <img
                  alt="Parent"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHCTsrT7oL6VH8TuPbPd6o44QqPtbku9ou0QSTQcL6JvTuzjF34yiycXEtRJS70V0J-lNPRDtBOIBiLRQU6f4pJmr4MVsv_OAKic8_7FMFTXff3szxIRe8yFfsX_8TNIy9EVq1Re0jwSOWR0aL28PWixy3y0WunlFvn7JI14IHdeec4ypKGl1MO54O3F-iBR_HEv7yKnlYdcHwiyyBzY7XJ4jBVRgHJvMvxUoRynuDaXUlhAbbgB-hXTCe4j80hwFYGwnstvZpYRE"
                />
              </div>
              <div>
                <p className="font-bold text-on-surface">
                  Parent Dashboard Preview
                </p>
                <p className="text-[12px] text-green-500 font-bold uppercase tracking-widest">
                  Active Monitoring
                </p>
              </div>
            </div>
            {/* Sample Data Viz */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">
                    Aryan&apos;s Physics Mastery
                  </span>
                  <span className="text-[#c0c1ff] font-bold">88%</span>
                </div>
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c0c1ff] rounded-full"
                    style={{ width: "88%" }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">
                    Weekly Study Goal
                  </span>
                  <span className="text-[#4cd7f6] font-bold">Completed</span>
                </div>
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4cd7f6] rounded-full"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="text-[12px] italic text-on-surface-variant">
                  &quot;Aryan cleared 12 doubts about Newton&apos;s Laws this week. His
                  confidence score improved by 15%.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-tertiary/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ParentsTrust;
