import React from "react";
import AuthLayout from "./AuthLayout";
import AuthSidebar from "./AuthSidebar";
import AuthCard from "./AuthCard";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div className="flex">
        <AuthSidebar />
        <AuthCard>
          <ForgotPasswordForm />
        </AuthCard>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
