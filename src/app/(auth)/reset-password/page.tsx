import ResetPassword from "@/components/auth/ResetPassword";

interface ResetPasswordPageProps {
  searchParams: Promise<{ token?: string }>;
}

export default async function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  const { token } = await searchParams;

  return <ResetPassword token={token ?? ""} />;
}
