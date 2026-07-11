"use client";

import { useState } from "react";

interface PasswordFieldProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function ConfirmPasswordField({
  value,
  onChange,
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="  text-on-surface-variant">Confirm Password</label>
      </div>
      <div className="relative">
        <input
          className="w-full bg-surface-container-low border border-white/10 rounded-md px-4 py-2 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/30"
          id="password-input"
          placeholder="••••••••"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
        <button
          className="absolute right-4 top-6 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-surface"
          type="button">
          <span className="material-symbols-outlined" id="password-toggle-icon">
            visibility
          </span>
        </button>
      </div>
    </div>
  );
}
