import { BookOpenCheck } from "lucide-react";
import { Card } from "@/components/ui";
import { ProgressPageForm } from "@/components/progress-page-form";
import { listChildren } from "@/lib/domain";
import { requireHousehold } from "@/lib/session";

export default async function LogProgressPage({ searchParams }: { searchParams: Promise<{ child?: string; subject?: string }> }) {
  const query = await searchParams;
  const { household } = await requireHousehold();
  const children = listChildren(household.id);
  const assignments = children.flatMap((child) => child.subjects.map((subject) => ({ id: subject.id, childId: child.id, childName: child.displayName, subjectName: subject.subjectName, pace: subject.currentPace, pageTo: subject.pageTo, totalPages: subject.totalPages })));
  const initial = query.subject || assignments.find((item) => item.childId === query.child)?.id;
  return <div className="page"><header className="page-header"><div><p className="eyebrow">Frequent action</p><h1>Log progress</h1><p>Record pages, a completed stage, or a note for the current PACE.</p></div></header><div className="grid-2"><Card><div className="card-body"><ProgressPageForm assignments={assignments} initialId={initial} /></div></Card><Card><div className="card-body stack"><BookOpenCheck size={32} aria-hidden="true" /><h2>What happens next</h2><p>Folio saves this update against the current PACE and keeps it in the activity trail. Logging a completed Self Test marks the PACE ready for its test score.</p><p className="muted">A progress update never changes another subject or advances a PACE.</p></div></Card></div></div>;
}
