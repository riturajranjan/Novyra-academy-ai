import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill text-body-sm font-medium transition-[transform,box-shadow,background-color,border-color] duration-fast ease-soft hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] active:translate-y-0",
  {
    variants: {
      variant: {
        gradient:
          "bg-gradient-brand text-white shadow-glow-blue hover:shadow-glow-purple",
        glass:
          "glass text-foreground hover:border-brand-blue/40",
        outline:
          "border border-border-subtle text-foreground hover:bg-foreground/5",
        ghost: "text-foreground hover:bg-foreground/5",
        link: "text-brand-blue underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-body",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "gradient",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
