"use client";

import Image from "next/image";

export default function StudyPlanHero() {
  return (
    <section
      className=" hidden
      w-[40%] relative md:flex flex-col items-center justify-center px-16 border-r border-white/5 bg-surface-container-lowest
    ">
      {/* Glow */}

      {/* <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-tertiary/10 blur-[120px]" /> */}

      {/* Content */}

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* AI Illustration */}

        <div className="relative w-80 h-96 mb-8 group">
          <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />

          <Image
            src="/studyplan.jpg"
            alt="AI Teacher"
            fill
            className="object-contain relative z-20"
            priority
          />
        </div>

        {/* Heading */}

        <h1
          className="
          text-headline-lg font-headline-lg text-on-surface mb-4
        ">
          Your AI Study Plan
          <br />
          Is Ready
        </h1>

        {/* Description */}

        <p
          className="
          text-body-lg font-body-lg text-on-surface-variant max-w-sm mb-12
        ">
          Dr. Nova has created a personalized roadmap designed specifically for
          your goals.
        </p>

        {/* Progress */}

        <div
          className="
          flex

          flex-col

          items-center

          gap-4

          w-full

          max-w-xs
        ">
          <div
            className="
            flex

            justify-between

            w-full

            text-label-md

            text-on-surface-variant
          ">
            <span>Setup Progress</span>

            <span className="text-primary font-bold">Step 8 of 8</span>
          </div>

          <div
            className="
            w-full

            h-2

            bg-surface-container-highest

            rounded-full

            overflow-hidden
          ">
            <div
              className="
              h-full

              w-full

              bg-gradient-to-r

              from-primary

              to-tertiary
            "
            />
          </div>

          {/* Pagination */}

          <div className="flex gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-primary/20" />

            <div className="w-2 h-2 rounded-full bg-primary/20" />

            <div className="w-2 h-2 rounded-full bg-primary/20" />

            <div className="w-8 h-2 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
