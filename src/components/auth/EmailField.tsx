
interface EmailFieldProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function EmailField({ value, onChange }: EmailFieldProps) {
  return (
    <div className="space-y-2">
      <label className="  text-on-surface-variant">Email Address</label>
      <input
        className="w-full bg-surface-container-low border border-white/10 rounded-md px-4 py-2 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/30"
        placeholder="arjun@novyra.ai"
        type="email"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
