import { auth } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function requireUser() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) redirect("/sign-in");
  return session.user;
}

export async function getOptionalUser() {
  const session = await auth.api.getSession({ headers: await headers() });
  return session?.user ?? null;
}

export async function requireHousehold() {
  const user = await requireUser();
  const household = getDb().prepare(`
    SELECT h.* FROM households h
    JOIN household_members hm ON hm.household_id = h.id
    WHERE hm.user_id = ? ORDER BY hm.created_at LIMIT 1
  `).get(user.id) as { id: string; name: string; pass_mark: number } | undefined;
  if (!household) redirect("/onboarding");
  return { user, household };
}

export function assertHouseholdMembership(userId: string, householdId: string) {
  const row = getDb().prepare("SELECT 1 FROM household_members WHERE user_id = ? AND household_id = ?").get(userId, householdId);
  if (!row) throw new Error("You do not have access to this household.");
}
