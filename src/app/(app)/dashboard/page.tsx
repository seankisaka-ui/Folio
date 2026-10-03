import type { Metadata } from "next";
import { AlertTriangle, CheckCircle2, Clock3, NotebookPen } from "lucide-react";
import { ButtonLink, Card } from "@/components/ui";
import { ChildCard } from "@/components/child-card";
import { dashboardSummary } from "@/lib/domain";
import { requireHousehold } from "@/lib/session";

export const metadata: Metadata = { title: "Home" };

function describeActivity(row: Record<string, unknown>) {
  const details = JSON.parse(String(row.details_json || "{}"));
  const name = row.display_name || "A child";
  const subject = row.subject_name || "a subject";
  if (row.action === "progress_logged") return `${name} logged progress in ${subject}`;
  if (row.action === "pace_ready_for_test") return `${name} is ready for the ${subject} PACE Test`;
  if (row.action === "pace_test_recorded") return `${name} recorded ${details.score}% in ${subject}`;
  if (row.action === "child_advanced") return `${name} advanced to ${subject} PACE ${details.nextPace}`;
  if (row.action === "child_created") return `${name} was added to the household`;
  return "Household records were updated";
}

export default async function DashboardPage() {
  const { user, household } = await requireHousehold();
  const summary = dashboardSummary(household.id);
  const firstName = user.name.split(" ")[0];
  return <div className="page">
    <header className="page-header"><div><p className="eyebrow">{household.name}</p><h1>Good day, {firstName}</h1><p>{summary.children.length} {summary.children.length === 1 ? "child" : "children"} · {summary.readyCount} {summary.readyCount === 1 ? "PACE test" : "PACE tests"} ready</p></div><ButtonLink href="/log"><NotebookPen size={20} aria-hidden="true" />Log progress</ButtonLink></header>
    <section className="grid-3" aria-label="Household summary">
      <Card className="stat"><p className="secondary">PACE tests ready</p><p className="stat-value num">{summary.readyCount}</p><p className="muted">Open a child record to save a result.</p></Card>
      <Card className="stat"><p className="secondary">Completed PACEs</p><p className="stat-value num">{summary.completedCount}</p><p className="muted">Permanent records across the household.</p></Card>
      <Card className="stat"><p className="secondary">Active children</p><p className="stat-value num">{summary.children.length}</p><p className="muted">Each subject keeps its own current PACE.</p></Card>
    </section>
    <section className="section"><div className="row" style={{ justifyContent: "space-between" }}><h2>Children</h2><ButtonLink href="/children/new" variant="outline">Add a child</ButtonLink></div><div className="grid">{summary.children.map((child) => <ChildCard child={child} key={child.id} />)}</div></section>
    <section className="section grid-2"><Card><div className="card-header"><h2>Needs attention</h2></div><div className="card-body stack">{summary.readyCount ? summary.children.flatMap((child) => child.subjects.filter((subject) => subject.status === "ready_for_test").map((subject) => <a className="activity" href={`/children/${child.id}`} key={subject.id}><span className="activity-icon"><AlertTriangle size={20} aria-hidden="true" /></span><span><strong>Record {child.displayName}’s {subject.subjectName} test</strong><br /><span className="muted">PACE {subject.currentPace} · Ready for test</span></span></a>)) : <div className="empty"><CheckCircle2 size={32} aria-hidden="true" /><h3>Nothing needs attention</h3><p className="muted">Ready tests will appear here.</p></div>}</div></Card>
      <Card><div className="card-header"><h2>Recent activity</h2></div><div className="card-body">{summary.activity.length ? summary.activity.map((row) => <div className="activity" key={String(row.id)}><span className="activity-icon">{row.action === "progress_logged" ? <NotebookPen size={18} aria-hidden="true" /> : <Clock3 size={18} aria-hidden="true" />}</span><span><p>{describeActivity(row)}</p><time dateTime={String(row.created_at)}>{new Intl.DateTimeFormat("en", { day: "numeric", month: "short" }).format(new Date(String(row.created_at)))}</time></span></div>) : <p className="muted">Activity will appear after you start recording progress.</p>}</div></Card></section>
  </div>;
}
