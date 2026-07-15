import React from "react";

const LeftSectionGoal = () => {
  return (
    <section className="hidden lg:flex w-2/5 flex-col justify-center p-margin-desktop relative overflow-hidden neural-bg border-r border-white/5">
      <div className="relative z-10 max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 border border-primary/20 text-primary mb-stack-lg">
          <span
            className="material-symbols-outlined text-sm"
            style={{ fontVariationSettings: '"FILL" 1' }}>
            auto_awesome
          </span>
          <span className=" text-label-md uppercase tracking-wider">
            AI Precision Planning
          </span>
        </div>
        <h1 className="font-display-xl text-display-xl mb-stack-md leading-tight">
          Let&apos;s Build Your{" "}
          <span className="text-primary">Success Plan</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
          Dr. Nova is analyzing 2.4M data points to tailor a roadmap that
          guarantees your excellence.
        </p>
        {/* Illustration */}
        <div className="relative h-80 flex items-center justify-center">
          {/* Dr. Nova Placeholder */}
          <div className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-primary to-tertiary opacity-20 blur-3xl" />
          <img
            className="w-64 h-64 object-contain animate-float relative z-10"
            data-alt="A highly detailed 3D digital illustration of a friendly AI tutor named Dr. Nova, a glowing humanoid figure made of light and data particles. She is surrounded by floating icons: a crystalline rocket taking off, a neon-blue brain with pulsing neural pathways, and sparkling golden stars. The background is a dark obsidian space with a subtle white neural network web. The lighting is ethereal and high-contrast with indigo and cyan highlights."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCokF0ud0blCEUu7fE1w2q3aKpzVaC2JZPBTOTGL2wabH5rfRwzWso7LF52EC1eP3xkeVELnefMZBvMwL_I3F6QLRQFgR0cp7M0lZpZO3rwxzE5xYac-UeJLAShRacbgbcBdcLoNd9hbunIvJqhcoEmTv8jJvT7SNRPwyf2peMpMJ3trAUrtbCkFA3IlOi2Mem9umNbis3hvpcvDd_DYVN8g-7YXDpn3QTUgoMGWJY-4F0c_4-gEC9_pOFeqlitcqHQ3yjKrKJyoWA"
          />
          {/* Floating Orbs */}
          <div className="absolute top-10 left-20 w-4 h-4 bg-primary rounded-full blur-sm animate-pulse" />
          <div className="absolute bottom-10 right-20 w-6 h-6 bg-tertiary rounded-full blur-md opacity-60" />
        </div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
    </section>
  );
};

export default LeftSectionGoal;
