import type { Metadata } from "next";
import { Users } from "lucide-react";
import { ButtonLink, EmptyState } from "@/components/ui";
import { ChildCard } from "@/components/child-card";
import { listChildren } from "@/lib/domain";
import { requireHousehold } from "@/lib/session";

export const metadata: Metadata = { title: "Children" };
export default async function ChildrenPage() {
  const { household } = await requireHousehold();
  const children = listChildren(household.id);
  return <div className="page"><header className="page-header"><div><p className="eyebrow">Household records</p><h1>Children</h1><p>Review each child’s independent subject and PACE positions.</p></div><ButtonLink href="/children/new">Add a child</ButtonLink></header>
    {children.length ? <div className="grid">{children.map((child) => <ChildCard child={child} key={child.id} />)}</div> : <section className="card"><EmptyState icon={Users} title="Add your first child" description="Choose subjects and starting PACEs to create a useful home view." action={<ButtonLink href="/children/new">Add a child</ButtonLink>} /></section>}
  </div>;
}
