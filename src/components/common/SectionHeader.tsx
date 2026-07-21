interface SectionHeaderProps {
  label: string;
  title?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({
  label,
  title,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-5">
      <div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-on-surface-variant font-bold">
          {label}
        </p>

        {title && <h2 className="mt-2 text-xl font-bold">{title}</h2>}
      </div>

      {action}
    </div>
  );
}
