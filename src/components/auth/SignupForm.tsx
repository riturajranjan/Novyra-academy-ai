"use client";

import { useState, useTransition } from "react";

import { signup } from "@/app/actions/auth";
import AIMessage from "./AIMessage";
import AuthFooter from "./AuthFooter";
import ContinueButton from "./ContinueButton";
import Divider from "./Divider";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import SocialButtons from "./SocialButtons";
import NameField from "./NameField";
import ConfirmPasswordField from "./ConfirmPasswordField";
import TermsCheckbox from "./TermsCheckbox";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("confirmPassword", confirmPassword);
    if (termsAccepted) formData.set("termsAccepted", "on");

    startTransition(async () => {
      const result = await signup(undefined, formData);
      if (result?.error) setError(result.error);
    });
  };

  return (
    <>
      <div className="w-full max-w-md flex flex-col gap-stack-lg">
        <div className="glass-card inner-glow p-stack-lg md:p-10 rounded-3xl flex flex-col gap-6">
          <AIMessage />

          <SocialButtons />

          <Divider />

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <NameField value={name} onChange={setName} />
            <EmailField value={email} onChange={setEmail} />

            <PasswordField
              value={password}
              onChange={setPassword}
              isforget={false}
            />

            <ConfirmPasswordField
              value={confirmPassword}
              onChange={setConfirmPassword}
            />
            <TermsCheckbox checked={termsAccepted} onChange={setTermsAccepted} />

            {error && (
              <p className="text-sm text-red-400" role="alert">
                {error}
              </p>
            )}

            <ContinueButton loading={isPending} title="Create Free Account" />
          </form>
        </div>
      </div>

      <AuthFooter
        text="Already have an account?"
        linkText="Sign In"
        href="/login"
      />
    </>
  );
}
