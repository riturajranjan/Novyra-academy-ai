"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  online?: boolean;
  ai?: boolean;
  className?: string;
}

const sizes: Record<AvatarSize, string> = {
  xs: "h-8 w-8",
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-20 w-20",
};

export default function Avatar({
  src,
  alt,
  name,
  size = "md",
  online = false,
  ai = false,
  className,
}: AvatarProps) {
  const initials =
    name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ?? "?";

  return (
    <div className={cn("relative shrink-0", sizes[size], className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-full border",
          ai
            ? "border-primary shadow-[0_0_24px_rgba(192,193,255,0.35)]"
            : "border-outline-variant",
          sizes[size],
        )}>
        {src ? (
          <Image
            src={src}
            alt={alt ?? name ?? "Avatar"}
            fill
            className="object-cover"
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              bg-surface-container-high
              font-semibold
              text-on-surface
            ">
            {initials}
          </div>
        )}
      </div>

      {online && (
        <span
          className="
            absolute
            bottom-0
            right-0
            h-3
            w-3
            rounded-full
            border-2
            border-background
            bg-emerald-500
          "
        />
      )}
    </div>
  );
}
