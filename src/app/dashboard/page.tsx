import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/dal";
import { getDashboardData } from "@/lib/contentDal";
import Dashboard from "@/components/dashboard/Dashboard";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const data = await getDashboardData();
  if (!data) redirect("/login");

  return <Dashboard data={data} />;
}
