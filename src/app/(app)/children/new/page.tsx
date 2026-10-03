import { AddChildForm } from "@/components/add-child-form";
import { Card } from "@/components/ui";
import { listSubjects } from "@/lib/domain";
import { requireHousehold } from "@/lib/session";

export default async function NewChildPage() {
  const { household } = await requireHousehold();
  return <div className="page"><header className="page-header"><div><p className="eyebrow">Step 1 of 1</p><h1>Add a child</h1><p>Create the child, assign subjects, and set each starting PACE.</p></div></header><Card className="form-card"><div className="card-body"><AddChildForm subjects={listSubjects(household.id)} /></div></Card></div>;
}
