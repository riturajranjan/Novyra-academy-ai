import { ReactNode } from "react";
import clsx from "clsx";

interface AuthCardProps {
  children: ReactNode;
  className?: string;
}

export default function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div
      className={clsx(
        "flex-1 flex flex-col min-h-screen items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface relative",
        className,
      )}>
      {children}
    </div>
  );
}
