"use client";

import crypto from "node:crypto";
import { ArrowRight, ClipboardCheck, NotebookPen } from "lucide-react";
import { ActionDialog } from "@/components/action-form";
import { advancePaceAction, completePaceAction, logProgressAction } from "@/app/actions";

const today = () => new Date().toISOString().slice(0, 10);

export function LogProgressDialog({ childSubjectId, childName, subjectName, paceNumber, block = false }: {
  childSubjectId: string; childName: string; subjectName: string; paceNumber: number; block?: boolean;
}) {
  return <ActionDialog trigger={<button className={`btn btn-secondary ${block ? "btn-block" : ""}`} type="button"><NotebookPen aria-hidden="true" />Log progress</button>}
    title={`Log progress for ${childName}`} description={`${subjectName} · PACE ${paceNumber}`} action={logProgressAction} submitLabel="Save progress">
    <input type="hidden" name="childSubjectId" value={childSubjectId} /><input type="hidden" name="entryDate" value={today()} />
    <div className="field"><label htmlFor={`kind-${childSubjectId}`}>What did they complete?</label><select className="control" id={`kind-${childSubjectId}`} name="kind" defaultValue="pages"><option value="pages">Pages</option><option value="stage">A PACE stage</option><option value="note">Note only</option></select><p className="helper">For a stage update, choose the stage below. Page fields can be left empty.</p></div>
    <div className="grid-3"><div className="field"><label htmlFor={`from-${childSubjectId}`}>From page</label><input className="control num" id={`from-${childSubjectId}`} name="pageFrom" type="number" min="1" /></div><div className="field"><label htmlFor={`to-${childSubjectId}`}>To page</label><input className="control num" id={`to-${childSubjectId}`} name="pageTo" type="number" min="1" /></div><div className="field"><label htmlFor={`total-${childSubjectId}`}>Total pages</label><input className="control num" id={`total-${childSubjectId}`} name="totalPages" type="number" min="1" /></div></div>
    <div className="field"><label htmlFor={`stage-${childSubjectId}`}>Completed stage <span className="muted">(if applicable)</span></label><select className="control" id={`stage-${childSubjectId}`} name="stage" defaultValue=""><option value="">Choose a stage</option><option value="checkups">Checkups</option><option value="self_test">Self Test — ready for PACE Test</option></select></div>
    <div className="field"><label htmlFor={`note-${childSubjectId}`}>Note <span className="muted">(optional)</span></label><textarea className="control" id={`note-${childSubjectId}`} name="note" maxLength={1000} /></div>
  </ActionDialog>;
}

export function CompletePaceDialog({ childSubjectId, childName, subjectName, paceNumber, passMark }: {
  childSubjectId: string; childName: string; subjectName: string; paceNumber: number; passMark: number;
}) {
  return <ActionDialog trigger={<button className="btn btn-primary btn-block" type="button"><ClipboardCheck aria-hidden="true" />Record test score</button>}
    title="Record PACE test score" description="Review the permanent record before saving." action={completePaceAction} submitLabel="Save test score">
    <input type="hidden" name="childSubjectId" value={childSubjectId} /><input type="hidden" name="paceNumber" value={paceNumber} /><input type="hidden" name="idempotencyKey" value={crypto.randomUUID()} />
    <dl className="review"><dt>Child</dt><dd>{childName}</dd><dt>Subject</dt><dd>{subjectName}</dd><dt>PACE</dt><dd className="num">{paceNumber}</dd><dt>Pass mark</dt><dd className="num">{passMark}%</dd></dl>
    <div className="grid-2"><div className="field"><label htmlFor={`score-${childSubjectId}`}>Test score</label><div className="row" style={{ flexWrap: "nowrap" }}><input className="control num" id={`score-${childSubjectId}`} name="score" type="number" min="0" max="100" required /><strong>%</strong></div><p className="helper">Enter a score from 0 to 100. Scores below the pass mark are recorded for review.</p></div><div className="field"><label htmlFor={`date-${childSubjectId}`}>Completion date</label><input className="control" id={`date-${childSubjectId}`} name="completionDate" type="date" defaultValue={today()} required /></div></div>
  </ActionDialog>;
}

export function AdvancePaceDialog({ childSubjectId, childName, subjectName, paceNumber, score }: {
  childSubjectId: string; childName: string; subjectName: string; paceNumber: number; score: number;
}) {
  return <ActionDialog trigger={<button className="btn btn-primary btn-block" type="button">Advance to PACE {paceNumber + 1}<ArrowRight aria-hidden="true" /></button>}
    title="Advance to the next PACE" description="The completed PACE stays in academic history." action={advancePaceAction} submitLabel="Confirm advancement">
    <input type="hidden" name="childSubjectId" value={childSubjectId} /><input type="hidden" name="completedPaceNumber" value={paceNumber} />
    <dl className="review"><dt>Child</dt><dd>{childName}</dd><dt>Subject</dt><dd>{subjectName}</dd><dt>Completed PACE</dt><dd className="num">{paceNumber} · {score}%</dd></dl>
    <div className="grid-2"><div className="field"><label htmlFor={`next-${childSubjectId}`}>Next PACE</label><input className="control num" id={`next-${childSubjectId}`} name="nextPaceNumber" type="number" min="1" max="9999" defaultValue={paceNumber + 1} required /><p className="helper">Verify this number before saving.</p></div><div className="field"><label htmlFor={`start-${childSubjectId}`}>Start date</label><input className="control" id={`start-${childSubjectId}`} name="startDate" type="date" defaultValue={today()} required /></div></div>
  </ActionDialog>;
}
