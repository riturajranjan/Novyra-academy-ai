"use client";

import Image from "next/image";

export default function AITutorWidget() {
  return (
    <section className="mb-4">
      <div className="bg-primary/5 rounded-3xl p-5 border border-primary/10 relative overflow-hidden">
        <div className="flex items-start gap-4">
          {/* Avatar */}

          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/30">
              <Image
                src="/user.jpg"
                alt="AI Tutor"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mic */}

            <div
              className="
              absolute
              -bottom-1
              -right-1

              w-5
              h-5

              rounded-full

              bg-primary

              border-2

              border-background

              flex

              items-center

              justify-center
            ">
              <span className="material-symbols-outlined text-[12px] text-on-primary">
                mic
              </span>
            </div>
          </div>

          {/* Content */}

          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-sm font-bold">AI Tutor</h4>

              {/* Wave */}

              <div className="flex items-center gap-[2px] h-4">
                <div
                  className="waveform-bar"
                  style={{
                    animationDelay: "0s",
                  }}
                />

                <div
                  className="waveform-bar"
                  style={{
                    animationDelay: "0.2s",
                  }}
                />

                <div
                  className="waveform-bar"
                  style={{
                    animationDelay: "0.4s",
                  }}
                />

                <div
                  className="waveform-bar"
                  style={{
                    animationDelay: "0.1s",
                  }}
                />

                <div
                  className="waveform-bar"
                  style={{
                    animationDelay: "0.3s",
                  }}
                />
              </div>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed italic">
              &quot;Arjun, you&apos;re 15 minutes from hitting your Physics
              goal. Ready to finalize?&quot;
            </p>

            <div className="flex gap-2 mt-4">
              <button
                className="
                px-4
                py-2

                bg-primary

                text-on-primary

                text-xs

                font-bold

                rounded-lg

                shadow-sm
              ">
                Let&apos;s go
              </button>

              <button
                className="
                px-4
                py-2

                bg-white/5

                rounded-lg

                border

                border-white/5

                text-on-surface-variant

                text-xs

                font-medium
              ">
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
