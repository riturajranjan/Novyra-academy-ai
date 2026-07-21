"use client";

import { X } from "lucide-react";

interface VoiceOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function VoiceOverlay({ open, onClose }: VoiceOverlayProps) {
  if (!open) return null;

  return (
    <div
      className="
      fixed

      inset-0

      z-[999]

      flex

      flex-col

      items-center

      justify-center

      bg-background/95

      backdrop-blur-3xl
    ">
      {/* Glow */}

      <div
        className="
        absolute

        h-[340px]

        w-[340px]

        rounded-full

        bg-primary/15

        blur-[120px]
      "
      />

      {/* AI Orb */}

      <div className="relative z-10">
        <div
          className="
          h-36

          w-36

          rounded-full

          bg-gradient-to-br

          from-primary

          via-indigo-400

          to-tertiary

          shadow-[0_0_100px_rgba(192,193,255,.45)]

          animate-pulse
        "
        />
      </div>

      {/* Wave */}

      <div
        className="
        relative

        z-10

        mt-16

        flex

        items-end

        gap-2

        h-24
      ">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="
            w-2

            rounded-full

            bg-primary

            animate-pulse
          "
            style={{
              height: `${18 + (i % 6) * 12}px`,
              animationDelay: `${i * 0.08}s`,
            }}
          />
        ))}
      </div>

      {/* Text */}

      <div className="relative z-10 mt-12 text-center">
        <h2
          className="
          text-4xl

          font-bold

          ai-gradient-text
        ">
          I'm Listening...
        </h2>

        <p
          className="
          mt-5

          max-w-md

          leading-8

          text-on-surface-variant
        ">
          Ask anything about Physics.
          <br />
          Example:
          <br />
          &quot;Explain Superposition using real-life examples.&quot;
        </p>
      </div>

      {/* Close */}

      <button
        onClick={onClose}
        className="
        relative

        z-10

        mt-24

        flex

        h-16

        w-16

        items-center

        justify-center

        rounded-full

        border

        border-white/10

        bg-surface-container-high

        hover:bg-primary/10

        transition-all
      ">
        <X size={28} />
      </button>
    </div>
  );
}
