import React from "react";
import AuthLayout from "./AuthLayout";
import AuthSidebar from "./AuthSidebar";
import AuthCard from "./AuthCard";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <AuthLayout>
      <div className="flex">
        <AuthSidebar />
        <AuthCard>
          <LoginForm />
        </AuthCard>
      </div>
    </AuthLayout>
  );
};

export default Login;
