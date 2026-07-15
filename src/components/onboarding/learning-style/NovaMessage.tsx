import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface Props {
  selected: string[];
}

const NovaMessage = ({ selected }: Props) => {
  const hasSubjects = selected.length > 0;
  return (
    <>
      <div
        className={clsx(
          `
       transform transition-all duration-500 mb-8 md:hodden
            `,
          hasSubjects
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 hidden translate-y-4 scale-95 pointer-events-none",
        )}
        id="nova-feedback">
        <div className="relative overflow-hidden glass-card rounded-2xl border-primary/20 p-stack-md bg-primary-container/10">
          {/* Background AI Glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl ai-pulse" />
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span
                className="material-symbols-outlined text-on-primary-container text-[20px]"
                style={{ fontVariationSettings: '"FILL" 1' }}>
                smart_toy
              </span>
            </div>
            <div>
              <h4 className=" text-label-md text-primary font-bold mb-1">
                Dr. Nova AI
              </h4>
              <p
                className="font-body-md text-body-md text-on-surface italic leading-relaxed"
                id="feedback-text">
                Awesome! I&apos;ll optimize your curriculum for{" "}
                <span className="text-primary font-bold">
                  {selected.join(", ")}
                </span>{" "}
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          `
         p-stack-md bg-white/5 rounded-xl border border-white/10 hidden md:flex gap-4 items-start mb-stack-lg
            `,
          hasSubjects
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 hidden translate-y-4 scale-95 pointer-events-none",
        )}>
        <div className="w-10 h-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            alt="A small circular avatar of an AI assistant with a sleek, minimalist glowing eye interface, styled with neon indigo accents against a dark slate background, professional and approachable."
            src="/drnovya.jpg"
            height={100}
            width={100}
          />
        </div>
        <div>
          <div className="text-primary font-bold text-xs uppercase tracking-wider mb-1">
            Dr. Nova AI
          </div>
          {selected?.length > 0 ? (
            <p className="text-on-surface text-sm italic" id="ai-feedback">
              &quot;Perfect! I&apos;ll teach using AI{" "}
              <span className="text-primary font-bold">
                {selected.join(", ")}
              </span>{" "}
              . This hybrid approach will accelerate your comprehension.&quot;
            </p>
          ) : (
            <p className="text-on-surface text-sm italic" id="ai-feedback">
              &quot;I&apos;m waiting to hear how you&apos;d like to learn!
              Select your preferences above.&quot;
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default NovaMessage;
