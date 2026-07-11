import { ArrowRight } from "lucide-react";

interface ContinueButtonProps {
  loading?: boolean;
  title: string;
}

export default function ContinueButton({
  loading = false,
  title,
}: ContinueButtonProps) {
  return (
    <button className="glow-button w-full bg-primary-container text-[#fff] font-bold py-2 rounded-md text-md flex items-center justify-center gap-2 mt-2">
      {title}
      <span className="material-symbols-outlined">arrow_forward</span>
    </button>
  );
}
