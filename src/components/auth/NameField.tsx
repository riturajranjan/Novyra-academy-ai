"use client";

import { User } from "lucide-react";

interface NameFieldProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function NameField({ value, onChange }: NameFieldProps) {
  return (
    <div className="space-y-2">
      <label className="  text-on-surface-variant">Full Name</label>
      <input
        className="w-full bg-surface-container-low border border-white/10 rounded-md px-4 py-2 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/30"
        placeholder="Ritu Raj Ranjan"
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
