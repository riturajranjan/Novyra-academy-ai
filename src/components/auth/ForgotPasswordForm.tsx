"use client";

import { useState, useTransition } from "react";

import { requestPasswordReset } from "@/app/actions/auth";
import AIMessage from "./AIMessage";
import ContinueButton from "./ContinueButton";
import EmailField from "./EmailField";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.set("email", email);

    startTransition(async () => {
      const result = await requestPasswordReset(undefined, formData);
      if (result?.error) {
        setError(result.error);
      } else {
        setSubmitted(true);
      }
    });
  };

  return (
    <>
      <div className="w-full max-w-md flex flex-col gap-stack-lg">
        <div className="glass-card inner-glow p-stack-lg md:p-10 rounded-3xl flex flex-col gap-6">
          <AIMessage />

          {submitted ? (
            <p className="text-on-surface-variant" role="status">
              If an account exists for that email, a reset link has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <EmailField value={email} onChange={setEmail} />

              {error && (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}

              <ContinueButton loading={isPending} title="Reset Your Password" />
            </form>
          )}
        </div>
      </div>
    </>
  );
}
