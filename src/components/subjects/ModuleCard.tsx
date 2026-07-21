"use client";

import { ArrowRight, Lock, Play, AlertTriangle } from "lucide-react";

interface ModuleCardProps {
  chapter: string;
  title: string;
  description?: string;
  difficulty: string;
  progress: number;
  status: "active" | "weak" | "locked" | "not-started";
  weightage?: string;
}

export default function ModuleCard({
  chapter,
  title,
  description,
  difficulty,
  progress,
  status,
  weightage,
}: ModuleCardProps) {
  const isLocked = status === "locked";
  const isWeak = status === "weak";
  const isActive = status === "active";

  return (
    <div
      className={`
        glass-card

        rounded-3xl

        p-6

        border-l-4

        transition-all

        duration-300

        hover:translate-y-[-2px]

        ${
          isActive
            ? "border-l-tertiary"
            : isWeak
              ? "border-l-error"
              : isLocked
                ? "border-l-white/10 opacity-60"
                : "border-l-primary"
        }
      `}>
      {/* Header */}

      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className={`
                px-2

                py-1

                rounded-md

                text-[10px]

                uppercase

                font-bold

                ${
                  isActive
                    ? "bg-tertiary/10 text-tertiary"
                    : isWeak
                      ? "bg-error/10 text-error"
                      : isLocked
                        ? "bg-white/5 text-on-surface-variant"
                        : "bg-primary/10 text-primary"
                }
              `}>
              {status.replace("-", " ")}
            </span>

            <span
              className="
              px-2

              py-1

              rounded-md

              bg-white/5

              text-[10px]

              uppercase
            ">
              {difficulty}
            </span>
          </div>

          <p className="text-xs uppercase text-on-surface-variant">{chapter}</p>

          <h3 className="mt-2 text-2xl font-bold">{title}</h3>

          {description && (
            <p className="mt-3 text-on-surface-variant leading-7">
              {description}
            </p>
          )}
        </div>

        {/* Progress */}

        <div className="relative h-14 w-14 shrink-0">
          <svg className="h-14 w-14 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              strokeWidth="7"
              className="text-white/10"
              stroke="currentColor"
              fill="none"
            />

            <circle
              cx="50"
              cy="50"
              r="42"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
              stroke="currentColor"
              className={
                isWeak
                  ? "text-error"
                  : isActive
                    ? "text-tertiary"
                    : "text-primary"
              }
              strokeDasharray="264"
              strokeDashoffset={264 - progress * 2.64}
            />
          </svg>

          <span
            className="
            absolute

            inset-0

            flex

            items-center

            justify-center

            text-xs

            font-bold
          ">
            {isLocked ? <Lock size={14} /> : `${progress}%`}
          </span>
        </div>
      </div>

      {/* Footer */}

      {!isLocked && (
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-6 text-sm text-on-surface-variant">
            {weightage && <span>Weightage: {weightage}</span>}
          </div>

          <button
            className={`
              h-11

              px-6

              rounded-xl

              flex

              items-center

              gap-2

              font-semibold

              ${
                isActive
                  ? "bg-primary text-on-primary"
                  : isWeak
                    ? "bg-error text-on-error"
                    : "border border-white/10"
              }
            `}>
            {isActive ? (
              <>
                Resume
                <ArrowRight size={16} />
              </>
            ) : isWeak ? (
              <>
                Review
                <AlertTriangle size={16} />
              </>
            ) : (
              <>
                Start
                <Play size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
