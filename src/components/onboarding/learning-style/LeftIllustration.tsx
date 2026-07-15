"use client";

import Image from "next/image";

export default function LeftIllustration() {
  return (
    <>
      <section className="hidden lg:flex flex-1 relative flex-col justify-center px-margin-desktop overflow-hidden border-r border-white/5">
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <div className="relative mb-stack-lg">
            {/* Central AI Avatar Placeholder */}
            <div className="w-64 h-64 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center p-4">
              <Image
                className="w-full h-full object-contain"
                alt="A premium 3D illustration of Dr. Nova, a futuristic AI teacher character with flowing ethereal data trails. The character has a friendly robotic face and is surrounded by floating holographic symbols like atoms and books. The lighting is dominated by deep indigo and cyan bioluminescence against an obsidian void, creating a professional and enlightened academic atmosphere."
                src="/learning.jpg"
                height={250}
                width={250}
              />
            </div>
            {/* Floating Elements */}
            <div
              className="absolute -top-10 -left-10 animate-float"
              style={{ animationDelay: "0s" }}>
              <div className="p-3 bg-surface-container-high rounded-xl border border-white/10 shadow-2xl">
                <span className="material-symbols-outlined text-primary text-3xl">
                  auto_stories
                </span>
              </div>
            </div>
            <div
              className="absolute top-0 -right-8 animate-float"
              style={{ animationDelay: "1.5s" }}>
              <div className="p-3 bg-surface-container-high rounded-xl border border-white/10 shadow-2xl">
                <span className="material-symbols-outlined text-tertiary text-3xl">
                  psychology
                </span>
              </div>
            </div>
            <div
              className="absolute bottom-10 -left-12 animate-float"
              style={{ animationDelay: "0.8s" }}>
              <div className="p-3 bg-surface-container-high rounded-xl border border-white/10 shadow-2xl">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  lightbulb
                </span>
              </div>
            </div>
            <div
              className="absolute -bottom-8 right-0 animate-float"
              style={{ animationDelay: "2.2s" }}>
              <div className="p-3 bg-surface-container-high rounded-xl border border-white/10 shadow-2xl">
                <span className="material-symbols-outlined text-primary text-3xl">
                  mic
                </span>
              </div>
            </div>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">
            Let's personalize the way you learn.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Choose the learning styles that help you understand concepts best.
          </p>
        </div>
      </section>
    </>
  );
}
