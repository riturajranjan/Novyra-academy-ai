"use client";

import Image from "next/image";

export default function SubjectHero() {
  return (
    <aside
      className="
        hidden lg:flex flex-1 relative flex-col justify-center px-margin-desktop bg-surface-container-lowest overflow-hidden
      ">
      {/* Background Glow */}

      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-tertiary/10 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <div className="mb-stack-lg inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary  text-label-md">
          <span className="material-symbols-outlined text-[16px]">
            identity_platform
          </span>
          Step 3 of 8: Subject Selection
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md leading-tight">
          Choose Your <span className="text-primary">Subjects</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-section-gap leading-relaxed max-w-md">
          Select the subjects you want Dr. Nova to personalize for your learning
          journey. Our AI tailors every module to your specific interests.
        </p>
        {/* Floating Illustration Space */}
        <div className="relative w-full h-[400px]">
          {/* Dr. Nova Illustration Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center overflow-hidden relative group">
              <Image
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                alt="A highly detailed cinematic 3D render of Dr. Nova, a futuristic female AI tutor with translucent holographic skin and glowing internal circuitry. She wears elegant minimalist academic robes. The background is a dark, tech-infused study with soft indigo and teal volumetric lighting. She has a serene, welcoming expression, embodying enlightened intelligence and modern academia."
                src="/choosesub.jpg"
                height={200}
                width={200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
          {/* Floating Icons (Manual Positioning) */}
          <div
            className="absolute top-10 left-10 floating"
            style={{ animationDelay: "0s" }}>
            <div className="glass-panel p-4 rounded-2xl shadow-xl">
              <span className="material-symbols-outlined text-primary text-[32px]">
                science
              </span>
            </div>
          </div>
          <div
            className="absolute top-0 right-20 floating"
            style={{ animationDelay: "1s" }}>
            <div className="glass-panel p-4 rounded-2xl shadow-xl">
              <span className="material-symbols-outlined text-tertiary text-[32px]">
                biotech
              </span>
            </div>
          </div>
          <div
            className="absolute bottom-10 left-20 floating"
            style={{ animationDelay: "1.5s" }}>
            <div className="glass-panel p-4 rounded-2xl shadow-xl">
              <span className="material-symbols-outlined text-secondary text-[32px]">
                functions
              </span>
            </div>
          </div>
          <div
            className="absolute bottom-20 right-10 floating"
            style={{ animationDelay: "0.5s" }}>
            <div className="glass-panel p-4 rounded-2xl shadow-xl">
              <span className="material-symbols-outlined text-on-secondary-container text-[32px]">
                dns
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
