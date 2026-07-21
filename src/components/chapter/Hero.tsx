"use client";

import { Clock3, Star } from "lucide-react";

interface HeroProps {
  mobile?: boolean;
}

export default function Hero({ mobile = false }: HeroProps) {
  return (
    <div
      className="
        relative group
      ">
      <div
        className="
          bg-gradient-to-r from-primary/20 to-tertiary/20
          rounded-2xl
          opacity-30
          absolute -inset-0.5 blur group-hover:opacity-50 transition
        "></div>
      <div
        className="
          flex flex-col
          p-8
          rounded-2xl
          relative glass-panel inner-glow justify-between items-start gap-6
          md:flex-row md:items-center
        ">
        <div>
          <div
            className="
              flex
              mb-2
              items-center gap-3
            ">
            <span
              className="
                px-3 py-1
                text-primary  tracking-wider
                bg-primary/10
                rounded-full border border-primary/20
                uppercase
                text-[12px] md:text-[14px]
              ">
              Physics • Unit 2
            </span>
            <span
              className="
                text-on-surface-variant text-mono-sm
              ">
              CBSE Class 11
            </span>
          </div>
          <h2
            className="
              mb-4
           font-headline-md  text-headline-md  md:font-headline-lg md:text-headline-lg text-white
            ">
            Chapter 4: Newton&apos;s Laws of Motion
          </h2>
          <div
            className="
              flex
              items-center gap-6
            ">
            <div
              className="
                flex
                items-center gap-2
              ">
              <span
                data-icon="schedule"
                className="
                  text-tertiary text-lg
                  material-symbols-outlined
                ">
                schedule
              </span>
              <span
                className="
                  text-on-surface-variant md:font-label-md text-[12px] md:text-[14px]
                ">
                18m remaining
              </span>
            </div>
            <div
              className="
                flex
                items-center gap-2
              ">
              <span
                data-icon="star"
                className="
                  text-primary text-lg
                  material-symbols-outlined
                ">
                star
              </span>
              <span
                className="
                  text-on-surface-variant font-label-md text-[12px] md:text-[14px]
                ">
                18% weightage
              </span>
            </div>
          </div>
        </div>
        <div
          className="
            flex flex-col
            w-full
            items-end gap-2
            md:w-auto
          ">
          <div
            className="
              flex
              w-full
              mb-1
              justify-between
              md:w-32
            ">
            <span
              className="
                text-mono-sm text-on-surface-variant
              ">
              Progress
            </span>
            <span
              className="
                text-mono-sm text-primary font-bold
              ">
              75%
            </span>
          </div>
          <div
            className="
              overflow-hidden
              w-full h-2
              bg-white/5
              rounded-full
              md:w-32
            ">
            <div
              className="
                h-full w-[75%]
                bg-primary
                rounded-full
                shadow-[0_0_10px_rgba(192,193,255,0.5)]
              "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
