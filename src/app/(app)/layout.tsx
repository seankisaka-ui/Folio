import { AppShell } from "@/components/app-shell";
import { requireHousehold } from "@/lib/session";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { user, household } = await requireHousehold();
  return <AppShell userName={user.name} householdName={household.name}>{children}</AppShell>;
}
