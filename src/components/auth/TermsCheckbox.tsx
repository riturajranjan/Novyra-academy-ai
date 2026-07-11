interface TermsCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function TermsCheckbox({
  checked,
  onChange,
}: TermsCheckboxProps) {
  return (
    <label className="flex items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-5 w-5 accent-primary"
      />

      <span className="text-sm text-slate-400">
        I agree to the <span className="text-primary">Terms & Conditions</span>{" "}
        and <span className="text-primary">Privacy Policy</span>
      </span>
    </label>
  );
}
