import { redirect } from "next/navigation";

import { getCurrentUser, getFirstSelectedSubjectId } from "@/lib/dal";

/**
 * The flat /subject route used to render the subject UI directly. Old
 * links/bookmarks now land here and get forwarded to a real subject route
 * (or the dashboard, if the user hasn't selected any subjects yet).
 */
export default async function SubjectIndexRedirect() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const firstSubjectId = await getFirstSelectedSubjectId();
  redirect(firstSubjectId ? `/subject/${firstSubjectId}` : "/dashboard");
}
