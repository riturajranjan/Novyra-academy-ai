"use client";

import { ArrowLeft, Bolt } from "lucide-react";
import { useRouter } from "next/navigation";

interface FooterProps {
  onBack?: () => void;
  onContinue?: () => void;
}

export default function Footer({ onBack, onContinue }: FooterProps) {
  return (
    <footer
      className="
        mt-8
        flex
        flex-col
        gap-5
        border-t
        border-white/10
        pt-8

        lg:flex-row
        lg:items-center
        lg:justify-between
      ">
      {/* Back */}

      <button
        onClick={onBack}
        className="
          md:flex
          items-center
          gap-2
          rounded-xl
          px-5
          py-3
          text-[#9CA3AF]
          transition-all
          hover:bg-white/5
          hover:text-white
          hidden 
        ">
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Right */}

      <div
        className="
          flex
          flex-col
          gap-5

          lg:flex-row
          lg:items-center
        ">
        {/* Status */}

        <div className="hidden text-right lg:block">
          <p className="font-medium text-white">System Ready</p>

          <p className="text-xs text-[#9CA3AF]">Optimized for your profile</p>
        </div>

        {/* CTA */}

        <button
          onClick={onContinue}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            bg-gradient-to-r
            from-[#8083FF]
            to-[#4CD7F6]
            px-8
            py-4
            font-semibold
            text-[#1000A9]
            shadow-[0_0_25px_rgba(128,131,255,.35)]
            transition-all
            duration-300
            hover:shadow-[0_0_35px_rgba(76,215,246,.45)]
          ">
          {/* Shine */}

          <span
            className="
              absolute
              inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />

          <span className="relative z-10 flex items-center gap-3">
            Launch My AI Classroom
            <Bolt
              size={18}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </span>
        </button>
      </div>
    </footer>
  );
}
