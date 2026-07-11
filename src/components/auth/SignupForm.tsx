"use client";

import { useState } from "react";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      email,
      password,
      rememberMe,
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
            <NameField />
            <EmailField value={email} onChange={setEmail} />

            <PasswordField
              value={password}
              onChange={setPassword}
              isforget={false}
            />

            <ConfirmPasswordField />
            <TermsCheckbox />

            <ContinueButton loading={loading} title="Create Free Account" />
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
