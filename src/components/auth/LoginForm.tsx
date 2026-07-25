"use client";

import { useState, useTransition } from "react";

import { login } from "@/app/actions/auth";
import AIMessage from "./AIMessage";
import AuthFooter from "./AuthFooter";
import ContinueButton from "./ContinueButton";
import Divider from "./Divider";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import RememberMe from "./RememberMe";
import SocialButtons from "./SocialButtons";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.set("email", email);
    formData.set("password", password);
    formData.set("rememberMe", String(rememberMe));

    startTransition(async () => {
      const result = await login(undefined, formData);
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
            <EmailField value={email} onChange={setEmail} />

            <PasswordField
              value={password}
              onChange={setPassword}
              isforget={true}
            />

            <RememberMe checked={rememberMe} onChange={setRememberMe} />

            {error && (
              <p className="text-sm text-red-400" role="alert">
                {error}
              </p>
            )}

            <ContinueButton loading={isPending} title="Continue Learning" />
          </form>
        </div>
      </div>

      <AuthFooter
        text="Don't have an account?"
        linkText="Create Free Account"
        href="/signin"
      />
    </>
  );
}
