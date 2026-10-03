import { Download } from "lucide-react";
import { formatDate } from "@/components/ui";
import { PrintButton } from "@/components/print-button";
import { getHistory, listChildren } from "@/lib/domain";
import { requireHousehold } from "@/lib/session";

export default async function ReportsPage({ searchParams }: { searchParams: Promise<{ child?: string; from?: string; to?: string }> }) {
  const query = await searchParams;
  const { household } = await requireHousehold();
  const children = listChildren(household.id);
  const records = getHistory(household.id, { childId: query.child, from: query.from, to: query.to }).filter((record) => ["completed", "passed", "needs_review"].includes(record.status));
  const exportQuery = new URLSearchParams(Object.entries(query).filter((entry): entry is [string, string] => Boolean(entry[1]))).toString();
  return <div className="page"><header className="page-header"><div><p className="eyebrow">Derived from saved records</p><h1>Progress report</h1><p>Choose a child and date range, then print or export the result.</p></div><div className="header-actions"><a className="btn btn-outline" href={`/api/export?${exportQuery}`}><Download size={20} aria-hidden="true" />Download CSV</a><PrintButton /></div></header>
    <form className="filters no-print" method="get"><div className="field"><label htmlFor="child">Child</label><select className="control" id="child" name="child" defaultValue={query.child || ""}><option value="">Whole household</option>{children.map((child) => <option value={child.id} key={child.id}>{child.displayName}</option>)}</select></div><div className="field"><label htmlFor="from">From</label><input className="control" id="from" name="from" type="date" defaultValue={query.from} /></div><div className="field"><label htmlFor="to">To</label><input className="control" id="to" name="to" type="date" defaultValue={query.to} /></div><button className="btn btn-outline" type="submit">Generate report</button></form>
    <article className="report-sheet"><header><p className="eyebrow">A.C.E. progress summary</p><h1>{household.name}</h1><p>{query.child ? children.find((child) => child.id === query.child)?.displayName : "All active children"} · Generated {formatDate(new Date().toISOString())}</p></header><hr />
      <h2>Current academic positions</h2>{children.filter((child) => !query.child || child.id === query.child).map((child) => <section key={child.id}><h3>{child.displayName}</h3><div className="table-wrap" style={{ display: "block" }}><table><thead><tr><th>Subject</th><th>Current PACE</th><th>Status</th><th>Last score</th></tr></thead><tbody>{child.subjects.map((subject) => <tr key={subject.id}><td>{subject.subjectName}</td><td className="num">{subject.currentPace}</td><td>{subject.status.replaceAll("_", " ")}</td><td className="num">{subject.testScore === null ? "—" : `${subject.testScore}%`}</td></tr>)}</tbody></table></div></section>)}
      <h2 className="section">PACE results</h2>{records.length ? <div className="table-wrap" style={{ display: "block" }}><table><thead><tr><th>Date</th><th>Child</th><th>Subject</th><th>PACE</th><th>Score</th></tr></thead><tbody>{records.map((record) => <tr key={record.id}><td>{formatDate(record.completionDate || record.startDate)}</td><td>{record.childName}</td><td>{record.subjectName}</td><td className="num">{record.paceNumber}</td><td className="num">{record.testScore === null ? "—" : `${record.testScore}%`}</td></tr>)}</tbody></table></div> : <p>No completed PACE results match this report period.</p>}
    </article>
  </div>;
}
