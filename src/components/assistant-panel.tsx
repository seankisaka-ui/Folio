"use client";

import crypto from "node:crypto";
import { useActionState, useState } from "react";
import { Search, Send, Sparkles } from "lucide-react";
import { completePaceAction } from "@/app/actions";
import { initialActionState } from "@/lib/action-state";

type Proposal = { type: "complete_pace"; childSubjectId: string; childName: string; subjectName: string; paceNumber: number; score: number; date: string };
type Result = { kind: "proposal"; proposal: Proposal } | { kind: "records"; summary: string; records: { childName: string; subjectName: string; paceNumber: number; score: number | null; date: string }[] } | { kind: "clarification"; message: string };

export function AssistantPanel({ enabled }: { enabled: boolean }) {
  const [request, setRequest] = useState(""); const [pending, setPending] = useState(false); const [result, setResult] = useState<Result | null>(null); const [error, setError] = useState("");
  const [saveState, saveAction, saving] = useActionState(completePaceAction, initialActionState);
  async function interpret(event: React.FormEvent) {
    event.preventDefault(); if (!request.trim()) return; setPending(true); setError(""); setResult(null);
    const response = await fetch("/api/assistant", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ request }) });
    const body = await response.json(); setPending(false); if (!response.ok) { setError(body.error || "The assistant is unavailable."); return; } setResult(body);
  }
  if (!enabled) return <div className="assistant-panel stack"><div className="row"><Sparkles aria-hidden="true" /><strong>Assistant unavailable</strong></div><p>The assistant is disabled because no AI provider key is configured. Every recordkeeping feature remains available from Children, Log progress, and Academic history.</p><p className="helper">Set OPENAI_API_KEY in the server environment to enable interpreted requests. Folio never fakes an AI response.</p></div>;
  return <div className="assistant-panel stack">
    <div className="row"><Sparkles aria-hidden="true" /><strong>Ask Folio</strong></div><p className="helper">Nothing is saved until you review and confirm it.</p>
    <form onSubmit={interpret} className="stack"><div className="field"><label htmlFor="assistant-request">What would you like to record or find?</label><textarea className="control" id="assistant-request" value={request} onChange={(event) => setRequest(event.target.value)} placeholder="Daniel completed Mathematics PACE 1052 with a score of 92%." /></div><button className="btn btn-primary" type="submit" disabled={pending}>{pending ? "Interpreting…" : <><Send size={20} aria-hidden="true" />Review request</>}</button></form>
    {error && <p className="alert alert-error" role="alert">{error}</p>}
    {result?.kind === "clarification" && <div className="alert alert-warning" role="status"><p>{result.message}</p></div>}
    {result?.kind === "records" && <section className="card"><div className="card-header"><h2>{result.summary}</h2></div><div className="card-body stack">{result.records.length ? result.records.map((record, index) => <div className="activity" key={`${record.paceNumber}-${index}`}><Search size={20} aria-hidden="true" /><span><strong>{record.childName} · {record.subjectName} · PACE {record.paceNumber}</strong><br /><span className="muted">{record.score === null ? "No score" : `${record.score}%`} · {record.date}</span></span></div>) : <p>No matching saved records were found.</p>}</div></section>}
    {result?.kind === "proposal" && <form action={saveAction} className="card"><div className="card-header"><div><h2>Review interpreted entry</h2><p className="muted">Correct any field before saving.</p></div><span className="badge"><Sparkles size={16} aria-hidden="true" />AI-assisted</span></div><div className="card-body stack">
      <input type="hidden" name="childSubjectId" value={result.proposal.childSubjectId} /><input type="hidden" name="idempotencyKey" value={crypto.randomUUID()} /><input type="hidden" name="source" value="ai" />
      <dl className="review"><dt>Child</dt><dd>{result.proposal.childName}</dd><dt>Subject</dt><dd>{result.proposal.subjectName}</dd></dl>
      <div className="grid-3"><div className="field"><label htmlFor="ai-pace">PACE</label><input className="control num" id="ai-pace" name="paceNumber" type="number" min="1" max="9999" defaultValue={result.proposal.paceNumber} /></div><div className="field"><label htmlFor="ai-score">Score</label><input className="control num" id="ai-score" name="score" type="number" min="0" max="100" defaultValue={result.proposal.score} /></div><div className="field"><label htmlFor="ai-date">Date</label><input className="control" id="ai-date" name="completionDate" type="date" defaultValue={result.proposal.date} /></div></div>
      {saveState.message && <p className={saveState.ok ? "alert alert-success" : "alert alert-error"} role={saveState.ok ? "status" : "alert"}>{saveState.message}</p>}
    </div><div className="card-footer" style={{ display: "flex", justifyContent: "flex-end" }}><button className="btn btn-primary" type="submit" disabled={saving}>{saving ? "Saving…" : "Save to record"}</button></div></form>}
  </div>;
}
