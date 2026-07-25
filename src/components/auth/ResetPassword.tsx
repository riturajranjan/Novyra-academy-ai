import AuthLayout from "./AuthLayout";
import AuthSidebar from "./AuthSidebar";
import AuthCard from "./AuthCard";
import ResetPasswordForm from "./ResetPasswordForm";

interface ResetPasswordProps {
  token: string;
}

export default function ResetPassword({ token }: ResetPasswordProps) {
  return (
    <AuthLayout>
      <div className="flex">
        <AuthSidebar />
        <AuthCard>
          <ResetPasswordForm token={token} />
        </AuthCard>
      </div>
    </AuthLayout>
  );
}
