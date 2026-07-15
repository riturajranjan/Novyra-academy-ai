"use client";

export default function FloatingAIOrb() {
  return (
    <button
      className="
      fixed

      bottom-24

      right-6

      z-50

      lg:hidden

      w-16

      h-16

      rounded-full

      bg-primary

      flex

      items-center

      justify-center

      text-on-primary

      orb-glow

      group

      active:scale-90

      transition-all

      duration-300
    ">
      {/* Pulse */}

      <div
        className="
        absolute

        inset-0

        rounded-full

        bg-primary

        animate-pulse-subtle
      "
      />

      {/* Outer Glow */}

      <div
        className="
        absolute

        -inset-1

        rounded-full

        bg-primary/20

        scale-110
      "
      />

      {/* Icon */}

      <span
        className="
        material-symbols-outlined

        text-3xl

        relative

        z-10

        group-hover:rotate-12

        transition-transform
      "
        style={{
          fontVariationSettings: "'FILL' 1",
        }}>
        auto_awesome
      </span>
    </button>
  );
}
