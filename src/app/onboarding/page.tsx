import { redirect } from "next/navigation";
import { StatefulForm } from "@/components/action-form";
import { AddChildForm } from "@/components/add-child-form";
import { Logo } from "@/components/ui";
import { createHouseholdAction } from "@/app/actions";
import { getDb } from "@/lib/db";
import { listSubjects } from "@/lib/domain";
import { requireUser } from "@/lib/session";

export default async function OnboardingPage() {
  const user = await requireUser();
  const household = getDb().prepare(`SELECT h.* FROM households h JOIN household_members hm ON hm.household_id=h.id WHERE hm.user_id=? LIMIT 1`).get(user.id) as { id: string; name: string } | undefined;
  if (household) {
    const count = getDb().prepare("SELECT count(*) AS count FROM children WHERE household_id=? AND status='active'").get(household.id) as { count: number };
    if (count.count > 0) redirect("/dashboard");
  }
  return <main className="auth-shell">
    <section className="auth-brand"><Logo /><div><p className="eyebrow" style={{ color: "var(--sidebar-heading)" }}>Set up your records</p><h1>{household ? "Add your first child." : "Name your homeschool."}</h1><p>A short setup gives you a useful home view immediately. You can add more children and subjects later.</p></div><small>Your academic records stay separate from other households.</small></section>
    <section className="auth-panel"><div className="auth-card">
      <p className="eyebrow">{household ? "Step 2 of 2" : "Step 1 of 2"}</p>
      <h1>{household ? "Child and starting PACEs" : "Create your household"}</h1>
      {!household ? <StatefulForm action={createHouseholdAction} submitLabel="Continue to child setup"><div className="field"><label htmlFor="name">Homeschool or household name</label><input className="control" id="name" name="name" placeholder="e.g. Mukasa Homeschool" required /><p className="helper">This appears on reports and in your account.</p></div></StatefulForm> : <AddChildForm subjects={listSubjects(household.id)} />}
    </div></section>
  </main>;
}
