"use client";

import { Brain, Sparkles, Rocket, Database } from "lucide-react";
import Image from "next/image";

export default function LeftIllustration() {
  return (
    <section className="relative hidden w-5/12 overflow-hidden border-r border-white/5 bg-[#070B1A] lg:flex">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-[#8083FF]/10 blur-[140px]" />

        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
            [background-size:24px_24px]
          "
        />
      </div>

      {/* Floating Icons */}

      <Sparkles
        size={34}
        className="absolute left-16 top-32 animate-float text-[#8083FF]/50"
      />

      <Rocket
        size={28}
        className="absolute right-16 top-48 animate-float text-cyan-400/40"
      />

      <Database
        size={34}
        className="absolute bottom-44 left-10 animate-float text-[#B8C4FF]/40"
      />

      {/* Content */}

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-14">
        {/* AI Circle */}

        <div className="relative">
          {/* Glow */}

          <div className="absolute inset-0 rounded-full bg-[#8083FF]/20 blur-[90px]" />

          {/* Outer Ring */}

          <div
            className="
              relative
              flex
              h-[360px]
              w-[360px]
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-[#151D31]
            ">
            {/* Middle Ring */}

            <div
              className="
                flex
                h-[270px]
                w-[270px]
                items-center
                justify-center
                rounded-full
                border
                border-[#8083FF]/20
                bg-[#1B2440]
              ">
              {/* Avatar */}

              <div
                className="
                  flex
                  h-[180px]
                  w-[180px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border-2
                  border-[#C0C1FF]
                ">
                <Image
                  src="/drnovya.jpg"
                  alt="Dr Nova"
                  className="h-full w-full object-cover"
                  height={200}
                  width={200}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}

        <h1
          className="
            mt-14
            text-center
            text-[58px]
            font-semibold
            leading-[64px]
            tracking-[-0.03em]
            text-white
          ">
          Your AI Teacher Is
          <br />
          <span className="text-[#C0C1FF]">Getting Ready.</span>
        </h1>

        {/* Description */}

        <p
          className="
            mt-8
            max-w-[520px]
            text-center
            text-[22px]
            leading-9
            text-[#9CA3AF]
          ">
          Dr. Nova is analyzing your learning profile to build an AI classroom
          designed only for you.
        </p>
      </div>
    </section>
  );
}
