import { ArrowRight, Clock3 } from "lucide-react";
import type { ReactNode } from "react";
import { ButtonLink, Card, initials, StatusBadge, formatRelativeDate } from "@/components/ui";
import type { ChildView } from "@/lib/domain";

export function ChildCard({ child }: { child: ChildView }) {
  const ready = child.subjects.filter((subject) => subject.status === "ready_for_test").length;
  const latest = child.subjects.map((subject) => subject.latestProgress).filter(Boolean).sort().at(-1) ?? null;
  return <Card><div className="card-body stack">
    <div className="child-heading"><span className="avatar">{initials(child.displayName)}</span><div><h3>{child.displayName}</h3><p className="muted">{child.level || "Level not set"}</p></div></div>
    {ready ? <span className="badge badge-warning">{ready} {ready === 1 ? "test" : "tests"} ready</span> : <span className="badge"><Clock3 size={16} aria-hidden="true" />{formatRelativeDate(latest)}</span>}
    <div className="stack">{child.subjects.slice(0, 4).map((subject) => <div className="subject-strip" key={subject.id}><span>{subject.subjectName}</span><strong className="num">PACE {subject.currentPace}</strong></div>)}</div>
  </div><div className="card-footer"><ButtonLink href={`/children/${child.id}`} variant="outline" className="btn-block">Open {child.displayName.split(" ")[0]}’s record <ArrowRight size={18} aria-hidden="true" /></ButtonLink></div></Card>;
}

export function PaceCard({ subject, passMark, action }: { childName: string; subject: ChildView["subjects"][number]; passMark: number; action?: ReactNode }) {
  const percent = subject.pageTo && subject.totalPages ? Math.min(100, Math.round((subject.pageTo / subject.totalPages) * 100)) : 0;
  return <Card className="pace-card"><div className="card-body stack">
    <div className="row" style={{ justifyContent: "space-between" }}><span className="eyebrow">{subject.subjectName}</span><StatusBadge status={subject.status} /></div>
    <div><span className="secondary">PACE </span><span className="pace-number num">{subject.currentPace}</span></div>
    {subject.status === "passed" ? <div><p className="stat-value num">{subject.testScore}%</p><p className="muted">Pass mark {passMark}%</p></div> : <><div className="row" style={{ justifyContent: "space-between" }}><strong>Pages completed</strong><span className="num">{subject.pageTo ?? 0}{subject.totalPages ? ` of ${subject.totalPages}` : ""}</span></div><div className="progress-track" role="progressbar" aria-label={`${subject.subjectName} pages`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent} aria-valuetext={subject.totalPages ? `${subject.pageTo ?? 0} of ${subject.totalPages} pages` : "No page total set"}><span style={{ width: `${percent}%` }} /></div></>}
    <p className="muted">{formatRelativeDate(subject.latestProgress)}</p>
  </div>{action && <div className="card-footer">{action}</div>}</Card>;
}
