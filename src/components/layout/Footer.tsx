import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest/80 py-24 border-t border-white/5">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-primary text-[32px]">
                  auto_awesome
                </span>
              </div>
              <span className="font-headline-md text-[24px] font-extrabold text-on-surface tracking-tight">
                Novyra AI
              </span>
            </div>
            <p className="text-on-surface-variant font-body-md leading-relaxed text-[15px]">
              Democratizing elite education through world-class artificial
              intelligence. Learn anything, anywhere, in your own language, at
              your own pace.
            </p>
            <div className="flex gap-5">
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all border border-white/5"
                href="#">
                <span className="material-symbols-outlined text-[20px]">
                  public
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all border border-white/5"
                href="#">
                <span className="material-symbols-outlined text-[20px]">
                  movie
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all border border-white/5"
                href="#">
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <h4 className="font-extrabold text-on-surface uppercase tracking-[0.1em] text-[14px]">
              Curriculum
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors text-[15px] flex items-center gap-2"
                  href="#">
                  <span className="w-1 h-1 bg-primary rounded-full" /> CBSE
                  Class 9-12
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors text-[15px] flex items-center gap-2"
                  href="#">
                  <span className="w-1 h-1 bg-primary rounded-full" /> Bihar
                  Board (BSEB)
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors text-[15px] flex items-center gap-2"
                  href="#">
                  <span className="w-1 h-1 bg-primary rounded-full" /> NEET/JEE
                  Prep
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors text-[15px] flex items-center gap-2"
                  href="#">
                  <span className="w-1 h-1 bg-primary rounded-full" /> CUET
                  Excellence
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="font-extrabold text-on-surface uppercase tracking-[0.1em] text-[14px]">
              Product
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors text-[15px] flex items-center gap-2"
                  href="#">
                  <span className="w-1 h-1 bg-primary rounded-full" /> Dr. Nova
                  AI Teacher
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors text-[15px] flex items-center gap-2"
                  href="#">
                  <span className="w-1 h-1 bg-primary rounded-full" /> Adaptive
                  Practice
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors text-[15px] flex items-center gap-2"
                  href="#">
                  <span className="w-1 h-1 bg-primary rounded-full" /> Parent
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors text-[15px] flex items-center gap-2"
                  href="#">
                  <span className="w-1 h-1 bg-primary rounded-full" /> Pricing
                  Plans
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="font-extrabold text-on-surface uppercase tracking-[0.1em] text-[14px]">
              Get Started
            </h4>
            <div className="p-6 bg-white/5 rounded-[24px] border border-white/10 space-y-4">
              <p className="text-sm font-bold text-on-surface">
                Ready to top your board exams?
              </p>
              <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95">
                Download Mobile App
              </button>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-on-surface-variant text-sm font-medium">
            © 2024 Novyra Academy AI. Proudly Made in India for the World.
          </p>
          <div className="flex gap-10">
            <a
              className="text-on-surface-variant hover:text-primary transition-all text-sm font-bold"
              href="#">
              Privacy Policy
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-all text-sm font-bold"
              href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
