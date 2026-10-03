"use client";

import { useActionState, useState } from "react";
import { createChildAction } from "@/app/actions";
import { initialActionState } from "@/lib/action-state";

export function AddChildForm({ subjects }: { subjects: { id: string; name: string; code: string }[] }) {
  const [state, action, pending] = useActionState(createChildAction, initialActionState);
  const [selected, setSelected] = useState<string[]>(subjects.slice(0, 3).map((subject) => subject.id));
  return <form action={action} className="stack" noValidate>
    <div className="field"><label htmlFor="displayName">Child’s name</label><input className="control" id="displayName" name="displayName" autoComplete="off" required /><p className="helper">Use the name you want to see throughout Folio.</p></div>
    <div className="grid-2">
      <div className="field"><label htmlFor="dateOfBirth">Date of birth <span className="muted">(optional)</span></label><input className="control" id="dateOfBirth" name="dateOfBirth" type="date" /></div>
      <div className="field"><label htmlFor="level">A.C.E. level <span className="muted">(optional)</span></label><input className="control" id="level" name="level" placeholder="e.g. Level 4" /></div>
    </div>
    <fieldset className="stack" style={{ border: 0, padding: 0, margin: "12px 0 0" }}><legend><strong>Subjects and starting PACEs</strong></legend><p className="helper">Choose each active subject and enter its current PACE.</p>
      {subjects.map((subject) => {
        const checked = selected.includes(subject.id);
        return <label className="check-row" key={subject.id}><input type="checkbox" name="subjectIds" value={subject.id} checked={checked} onChange={(event) => setSelected((current) => event.target.checked ? [...current, subject.id] : current.filter((id) => id !== subject.id))} /><span><strong>{subject.name}</strong><br /><small className="muted">{checked ? "Included" : "Not assigned"}</small></span><span className="pace-field field"><span className="label">Starting PACE</span><input className="control num" name={`pace_${subject.id}`} type="number" min="1" max="9999" defaultValue="1048" disabled={!checked} aria-label={`${subject.name} starting PACE`} /></span></label>;
      })}
    </fieldset>
    {state.message && <p className={state.ok ? "alert alert-success" : "alert alert-error"} role={state.ok ? "status" : "alert"}>{state.message}</p>}
    <div className="form-actions"><button className="btn btn-primary" type="submit" disabled={pending}>{pending ? "Saving…" : "Save child and subjects"}</button></div>
  </form>;
}
