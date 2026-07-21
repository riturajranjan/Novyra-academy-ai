interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
}

export default function Chip({ children, active }: ChipProps) {
  return (
    <button
      className={`
        px-4
        py-2
        rounded-full
        border
        border-white/10
        text-xs
        font-bold
        transition-all
        ${
          active
            ? "bg-primary/10 text-primary"
            : "bg-surface-container text-on-surface-variant"
        }
      `}>
      {children}
    </button>
  );
}
