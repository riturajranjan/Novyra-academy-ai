interface ProgressBarProps {
  value: number;
  className?: string;
}

export default function ProgressBar({
  value,
  className = "",
}: ProgressBarProps) {
  return (
    <div className={`h-2 rounded-full bg-white/5 overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full bg-primary transition-all duration-700"
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}
