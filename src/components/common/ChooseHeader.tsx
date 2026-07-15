const ChooseHeader = () => {
  return (
    <>
      <header className="fixed hidden  top-0 left-0 w-full z-50 md:flex justify-between items-center px-margin-desktop h-16 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm">
        <div className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
          Novyra Academy AI
        </div>
        <div className="flex items-center gap-gutter">
          <div className="hidden md:flex gap-stack-lg">
            <a
              className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
              href="#">
              Onboarding
            </a>
            <a
              className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-md text-body-md"
              href="#">
              Help
            </a>
          </div>
          <button
            className="material-symbols-outlined text-primary text-2xl active:scale-95 transition-transform"
            data-icon="account_circle">
            account_circle
          </button>
        </div>
      </header>
      <header className="sticky md:hidden top-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-white/5 px-margin-mobile h-16 flex items-center justify-between">
        <button className="w-10 h-10 flex items-center justify-start active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-primary text-[24px]">
            arrow_back_ios
          </span>
        </button>
        <div className="flex flex-col items-center">
          <span className=" text-label-md text-on-surface-variant uppercase tracking-widest">
            Step 2 of 8
          </span>
          <div className="w-24 h-1 bg-surface-variant rounded-full mt-1 overflow-hidden">
            <div className="progress-bar-fill h-full w-[25%] transition-all duration-700" />
          </div>
        </div>
        <div className="w-10 h-10 flex items-center justify-end">
          <span className="material-symbols-outlined text-primary">
            help_outline
          </span>
        </div>
      </header>
    </>
  );
};

export default ChooseHeader;
