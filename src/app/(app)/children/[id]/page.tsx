import { notFound } from "next/navigation";
import { FileText, NotebookPen } from "lucide-react";
import { PaceCard } from "@/components/child-card";
import { AdvancePaceDialog, CompletePaceDialog, LogProgressDialog } from "@/components/pace-actions";
import { ButtonLink, Card, formatDate, initials, StatusBadge } from "@/components/ui";
import { getChild, getHistory } from "@/lib/domain";
import { requireHousehold } from "@/lib/session";

export default async function ChildPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { household } = await requireHousehold();
  let child;
  try { child = getChild(household.id, id); } catch { notFound(); }
  const history = getHistory(household.id, { childId: id }).filter((record) => ["completed", "passed", "needs_review"].includes(record.status)).slice(0, 6);
  return <div className="page"><header className="page-header"><div className="child-heading"><span className="avatar avatar-lg">{initials(child.displayName)}</span><div><h1>{child.displayName}</h1><p>{child.level || "Level not set"} · {child.subjects.length} active {child.subjects.length === 1 ? "subject" : "subjects"}</p></div></div><div className="header-actions"><ButtonLink href={`/reports?child=${child.id}`} variant="outline"><FileText size={20} aria-hidden="true" />Report</ButtonLink><ButtonLink href={`/log?child=${child.id}`}><NotebookPen size={20} aria-hidden="true" />Log progress</ButtonLink></div></header>
    <section><h2>Current PACEs</h2><div className="grid">{child.subjects.map((subject) => {
      let action = <LogProgressDialog block childSubjectId={subject.id} childName={child.displayName} subjectName={subject.subjectName} paceNumber={subject.currentPace} />;
      if (subject.status === "ready_for_test") action = <CompletePaceDialog childSubjectId={subject.id} childName={child.displayName} subjectName={subject.subjectName} paceNumber={subject.currentPace} passMark={household.pass_mark} />;
      if (subject.status === "passed" && subject.testScore !== null) action = <AdvancePaceDialog childSubjectId={subject.id} childName={child.displayName} subjectName={subject.subjectName} paceNumber={subject.currentPace} score={subject.testScore} />;
      return <PaceCard key={subject.id} childName={child.displayName} subject={subject} passMark={household.pass_mark} action={action} />;
    })}</div></section>
    <section className="section"><div className="row" style={{ justifyContent: "space-between" }}><h2>Recent PACE records</h2><ButtonLink href={`/history?child=${child.id}`} variant="outline">View full history</ButtonLink></div><Card><div className="card-body">{history.length ? history.map((record) => <div className="activity" key={record.id}><span className="activity-icon"><StatusBadge status={record.status} /></span><span><p><strong>{record.subjectName} · PACE {record.paceNumber}</strong></p><p className="muted">{record.testScore !== null ? `${record.testScore}% · ` : ""}{formatDate(record.completionDate || record.startDate)}</p></span></div>) : <p className="muted">Completed PACEs will appear here without replacing the current record.</p>}</div></Card></section>
  </div>;
}
