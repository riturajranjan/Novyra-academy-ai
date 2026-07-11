interface DividerProps {
  text?: string;
}

export default function Divider({ text = "OR " }: DividerProps) {
  return (
    <div className="my-2 flex items-center gap-4">
      <div className="h-px flex-1 bg-white/10" />

      <span className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
        {text}
      </span>

      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}
