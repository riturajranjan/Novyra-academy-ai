"use client";

import { useState } from "react";

import AIMessage from "./AIMessage";
import AuthFooter from "./AuthFooter";
import ContinueButton from "./ContinueButton";
import Divider from "./Divider";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import RememberMe from "./RememberMe";
import SocialButtons from "./SocialButtons";

export default function ForgotPasswordForm() {
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <EmailField value={email} onChange={setEmail} />

            {/* <PasswordField value={password} onChange={setPassword} /> */}

            <ContinueButton loading={loading} title="Reset Your Password" />
          </form>
        </div>
      </div>
    </>
  );
}
