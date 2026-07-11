"use client";

interface RememberMeProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function RememberMe({
  checked = false,
  onChange,
}: RememberMeProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="w-4 h-4 rounded bg-surface-container-low border-white/10 text-primary focus:ring-primary/50"
        id="remember"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <label className="  text-on-surface-variant" htmlFor="remember">
        Remember me for 30 days
      </label>
    </div>
  );
}
