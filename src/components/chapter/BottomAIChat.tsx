"use client";

import { Bot, Send } from "lucide-react";

export default function BottomAIChat() {
  return (
    <footer
      className="
      lg:hidden

      fixed

      bottom-0

      left-0

      right-0

      z-50

      glass-card

      border-t

      border-primary/20

      rounded-t-3xl

      px-5

      pt-5

      pb-7
    ">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="
            relative

            h-12

            w-12

            rounded-full

            bg-gradient-to-br

            from-primary

            to-tertiary

            flex

            items-center

            justify-center

            animate-pulse
          ">
            <Bot size={22} className="text-white" />

            <span
              className="
              absolute

              -bottom-1

              -right-1

              h-3

              w-3

              rounded-full

              bg-green-500

              border-2

              border-background
            "
            />
          </div>

          <div>
            <h4 className="font-semibold">Dr. Nova AI</h4>

            <p className="text-xs text-on-surface-variant">
              Streaming explanation...
            </p>
          </div>
        </div>

        {/* Voice Animation */}

        <div className="flex items-end gap-1 h-7">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="
              w-1

              rounded-full

              bg-primary

              animate-pulse
            "
              style={{
                height: `${8 + (i % 4) * 5}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* AI Bubble */}

      <div
        className="
        mt-5

        rounded-2xl

        bg-surface-container

        border

        border-white/5

        p-4
      ">
        <p
          className="
          italic

          leading-7

          text-on-surface
        ">
          &quot;Think of the wave function not as a physical wave, but as a map of
          possibilities. The highest peaks show where the particle is most
          likely to be.&quot;
        </p>
      </div>

      {/* Input */}

      <div className="relative mt-5">
        <input
          type="text"
          placeholder="Ask Dr. Nova..."
          className="
          w-full

          h-14

          rounded-full

          bg-background

          border

          border-white/10

          pl-6

          pr-14

          outline-none

          focus:border-primary
        "
        />

        <button
          className="
          absolute

          right-2

          top-1/2

          -translate-y-1/2

          h-10

          w-10

          rounded-full

          bg-primary

          text-on-primary

          flex

          items-center

          justify-center
        ">
          <Send size={18} />
        </button>
      </div>
    </footer>
  );
}
