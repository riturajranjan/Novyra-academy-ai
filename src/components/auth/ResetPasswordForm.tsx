"use client";

import { useState, useTransition } from "react";

import { resetPassword } from "@/app/actions/auth";
import AIMessage from "./AIMessage";
import ContinueButton from "./ContinueButton";
import PasswordField from "./PasswordField";
import ConfirmPasswordField from "./ConfirmPasswordField";

interface ResetPasswordFormProps {
  token: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!token) {
      setError("This reset link is invalid or has expired");
      return;
    }

    const formData = new FormData();
    formData.set("token", token);
    formData.set("password", password);
    formData.set("confirmPassword", confirmPassword);

    startTransition(async () => {
      const result = await resetPassword(undefined, formData);
      if (result?.error) setError(result.error);
    });
  };

  return (
    <div className="w-full max-w-md flex flex-col gap-stack-lg">
      <div className="glass-card inner-glow p-stack-lg md:p-10 rounded-3xl flex flex-col gap-6">
        <AIMessage />

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <PasswordField value={password} onChange={setPassword} />
          <ConfirmPasswordField value={confirmPassword} onChange={setConfirmPassword} />

          {error && (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          )}

          <ContinueButton loading={isPending} title="Set New Password" />
        </form>
      </div>
    </div>
  );
}
