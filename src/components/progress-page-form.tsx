"use client";

import { useActionState, useMemo, useState } from "react";
import { logProgressAction } from "@/app/actions";
import { initialActionState } from "@/lib/action-state";

type Assignment = { id: string; childId: string; childName: string; subjectName: string; pace: number; pageTo: number | null; totalPages: number | null };

export function ProgressPageForm({ assignments, initialId }: { assignments: Assignment[]; initialId?: string }) {
  const [state, action, pending] = useActionState(logProgressAction, initialActionState);
  const [selectedId, setSelectedId] = useState(initialId && assignments.some((item) => item.id === initialId) ? initialId : assignments[0]?.id ?? "");
  const [kind, setKind] = useState("pages");
  const selected = useMemo(() => assignments.find((item) => item.id === selectedId), [assignments, selectedId]);
  if (!selected) return <p className="alert alert-warning">Add a child and subject before logging progress.</p>;
  return <form action={action} className="stack" noValidate>
    <div className="field"><label htmlFor="assignment">Child and subject</label><select className="control" id="assignment" name="childSubjectId" value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>{assignments.map((item) => <option key={item.id} value={item.id}>{item.childName} · {item.subjectName}</option>)}</select></div>
    <div className="subject-strip"><span>Current position</span><strong>{selected.childName} · {selected.subjectName} · <span className="num">PACE {selected.pace}</span></strong>{selected.pageTo ? <p className="helper">Last recorded page: {selected.pageTo}{selected.totalPages ? ` of ${selected.totalPages}` : ""}</p> : null}</div>
    <div className="field"><label htmlFor="kind">Progress type</label><select className="control" id="kind" name="kind" value={kind} onChange={(event) => setKind(event.target.value)}><option value="pages">Pages completed</option><option value="stage">PACE stage completed</option><option value="note">Note only</option></select></div>
    {kind === "pages" && <div className="grid-3"><div className="field"><label htmlFor="pageFrom">From page</label><input className="control num" id="pageFrom" name="pageFrom" type="number" min="1" required /></div><div className="field"><label htmlFor="pageTo">To page</label><input className="control num" id="pageTo" name="pageTo" type="number" min="1" required /></div><div className="field"><label htmlFor="totalPages">Total pages <span className="muted">(optional)</span></label><input className="control num" id="totalPages" name="totalPages" type="number" min="1" /></div></div>}
    {kind === "stage" && <div className="field"><label htmlFor="stage">Completed stage</label><select className="control" id="stage" name="stage" required><option value="">Choose a stage</option><option value="checkups">Checkups</option><option value="self_test">Self Test — ready for PACE Test</option></select></div>}
    <div className="field"><label htmlFor="entryDate">Date</label><input className="control" id="entryDate" name="entryDate" type="date" defaultValue={new Date().toISOString().slice(0, 10)} required /></div>
    <div className="field"><label htmlFor="note">Note <span className="muted">(optional)</span></label><textarea className="control" id="note" name="note" maxLength={1000} /></div>
    {state.message && <p className={state.ok ? "alert alert-success" : "alert alert-error"} role={state.ok ? "status" : "alert"}>{state.message}</p>}
    <div className="form-actions"><button className="btn btn-primary" type="submit" disabled={pending}>{pending ? "Saving…" : "Save progress"}</button></div>
  </form>;
}
