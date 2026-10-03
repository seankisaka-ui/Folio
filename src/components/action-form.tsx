"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle2, X } from "lucide-react";
import type { ActionState } from "@/lib/action-state";

type ServerAction = (state: ActionState, formData: FormData) => Promise<ActionState>;
const initialActionState: ActionState = { ok: false, message: "" };

export function StatefulForm({ action, children, submitLabel, className = "", onSuccess }: {
  action: ServerAction; children: React.ReactNode; submitLabel: string; className?: string; onSuccess?: () => void;
}) {
  const [state, formAction, pending] = useActionState(action, initialActionState);
  useEffect(() => { if (state.ok) onSuccess?.(); }, [state, onSuccess]);
  return <form action={formAction} className={className} noValidate>
    {children}
    {state.message && <p className={state.ok ? "alert alert-success" : "alert alert-error"} role={state.ok ? "status" : "alert"}>
      {state.ok ? <CheckCircle2 size={20} aria-hidden="true" /> : <AlertCircle size={20} aria-hidden="true" />}{state.message}
    </p>}
    <div className="form-actions"><button className="btn btn-primary" type="submit" disabled={pending}>{pending ? "Saving…" : submitLabel}</button></div>
  </form>;
}

export function ActionDialog({ trigger, title, description, action, submitLabel, children }: {
  trigger: React.ReactNode; title: string; description: string; action: ServerAction; submitLabel: string; children: React.ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const titleId = useId();
  const [state, formAction, pending] = useActionState(action, initialActionState);
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    if (state.ok && opened) {
      const timer = window.setTimeout(() => { dialog.current?.close(); setOpened(false); router.refresh(); }, 600);
      return () => window.clearTimeout(timer);
    }
  }, [state.ok, opened, router]);
  return <>
    <span onClick={() => { dialog.current?.showModal(); setOpened(true); }}>{trigger}</span>
    <dialog ref={dialog} aria-labelledby={titleId} onClose={() => setOpened(false)}>
      <form action={formAction}>
        <div className="dialog-header"><div><h2 id={titleId}>{title}</h2><p className="muted">{description}</p></div><button className="dialog-close" type="button" aria-label="Close dialog" onClick={() => dialog.current?.close()}><X aria-hidden="true" /></button></div>
        <div className="dialog-body stack">{children}{state.message && <p className={state.ok ? "alert alert-success" : "alert alert-error"} role={state.ok ? "status" : "alert"}>{state.ok ? <CheckCircle2 size={20} aria-hidden="true" /> : <AlertCircle size={20} aria-hidden="true" />}{state.message}</p>}</div>
        <div className="dialog-footer"><button className="btn btn-outline" type="button" onClick={() => dialog.current?.close()}>Cancel</button><button className="btn btn-primary" type="submit" disabled={pending}>{pending ? "Saving…" : submitLabel}</button></div>
      </form>
    </dialog>
  </>;
}
