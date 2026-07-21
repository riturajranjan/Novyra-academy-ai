"use client";

import { Search, RotateCcw, RotateCw, Tag, Box } from "lucide-react";

export default function LearningCanvas() {
  return (
    <section className="mt-6">
      <div
        className="
        relative

        h-[620px]

        overflow-hidden

        rounded-3xl

        border

        border-white/10

        bg-[#0D1426]
      ">
        {/* Grid Background */}

        <div
          className="
          absolute

          inset-0

          opacity-40

          bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]

          bg-[size:48px_48px]
        "
        />

        {/* Physics Box */}

        <div
          className="
          absolute

          left-1/2

          top-1/2

          -translate-x-1/2

          -translate-y-1/2
        ">
          {/* Force Label */}

          <div
            className="
            absolute

            -top-24

            left-1/2

            -translate-x-1/2

            glass-card

            rounded-2xl

            px-6

            py-4
          ">
            <p className="text-sm font-semibold">NORMAL FORCE</p>

            <p className="mt-1 text-xl font-bold">(N)</p>
          </div>

          {/* Object */}

          <div
            className="
            h-36

            w-36

            rounded-[36px]

            bg-gradient-to-br

            from-primary

            to-indigo-300

            shadow-[0_0_80px_rgba(170,170,255,.35)]

            flex

            items-center

            justify-center
          ">
            <Box size={54} className="text-[#162046]" />
          </div>

          {/* Object Label */}

          <div className="mt-8 text-center">
            <h3
              className="
              text-xl

              font-bold

              tracking-[0.18em]
            ">
              OBJECT : 10KG
            </h3>

            <div
              className="
              mx-auto

              mt-3

              h-2

              w-36

              rounded-full

              bg-white/10
            ">
              <div
                className="
                h-full

                w-2/5

                rounded-full

                bg-primary
              "
              />
            </div>
          </div>

          {/* External Force */}

          <div
            className="
            absolute

            top-10

            left-full

            ml-10

            glass-card

            rounded-xl

            px-5

            py-4
          ">
            <span
              className="
              text-lg

              font-bold

              text-tertiary
            ">
              Fext = 50N
            </span>
          </div>
        </div>

        {/* Right Cards */}

        <div
          className="
          absolute

          right-10

          top-28

          space-y-6
        ">
          <div
            className="
            glass-card

            rounded-2xl

            p-6

            w-64
          ">
            <p
              className="
              text-xs

              uppercase

              tracking-[0.2em]

              text-on-surface-variant
            ">
              Newton&apos;s 1st Law
            </p>

            <h2
              className="
              mt-4

              text-5xl

              font-bold
            ">
              ΣF = 0
            </h2>
          </div>

          <div
            className="
            glass-card

            rounded-2xl

            p-6

            w-64
          ">
            <p
              className="
              text-xs

              uppercase

              tracking-[0.2em]

              text-on-surface-variant
            ">
              Friction Coefficient
            </p>

            <h2
              className="
              mt-4

              text-5xl

              font-bold
            ">
              μ = 0.35
            </h2>
          </div>
        </div>

        {/* Toolbar */}

        <div
          className="
          absolute

          bottom-8

          left-1/2

          -translate-x-1/2

          glass-card

          rounded-2xl

          px-6

          py-3
        ">
          <div className="flex items-center gap-5">
            <button className="icon-button">
              <Search size={20} />
            </button>

            <button className="icon-button">
              <RotateCcw size={20} />
            </button>

            <button className="icon-button">
              <RotateCw size={20} />
            </button>

            <div className="h-8 w-px bg-white/10" />

            <button
              className="
              flex

              items-center

              gap-2

              rounded-xl

              bg-primary/10

              px-5

              py-3

              text-primary
            ">
              <Tag size={18} />
              Labels
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
