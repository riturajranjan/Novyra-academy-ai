"use client";

import { useEffect, useState } from "react";

export default function SuccessMeter() {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const [offset, setOffset] = useState(circumference);

  const progress = 93;

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(circumference - (progress / 100) * circumference);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
        relative
        mb-8
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#151D31]
        p-6
        shadow-[0_15px_40px_rgba(0,0,0,.35)]
      ">
      {/* Glow */}

      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#8083FF]/10 blur-3xl" />

      <div className="relative flex items-center gap-6">
        {/* Progress */}

        <div className="relative h-24 w-24">
          <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#31394D"
              strokeWidth="6"
            />

            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#C0C1FF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                transition: "stroke-dashoffset 1s ease",
              }}
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[24px] font-semibold text-white">93%</span>
          </div>
        </div>

        {/* Text */}

        <div>
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#C0C1FF]
            ">
            Success Probability
          </p>

          <p
            className="
              mt-2
              max-w-[180px]
              text-[15px]
              leading-6
              text-[#9CA3AF]
            ">
            Based on your current pace and selected target.
          </p>
        </div>
      </div>
    </section>
  );
}
