import AuthCard from "./AuthCard";
import AuthLayout from "./AuthLayout";
import AuthSidebar from "./AuthSidebar";
import SignupForm from "./SignupForm";

export default function Signup() {
  return (
    <AuthLayout>
      <div className="flex">
        <AuthSidebar />
        <AuthCard>
          <SignupForm />
        </AuthCard>
      </div>
    </AuthLayout>
  );
}
