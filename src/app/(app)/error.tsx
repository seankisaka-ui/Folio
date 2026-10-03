"use client";

import { AlertTriangle } from "lucide-react";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="page-shell center-state">
      <div className="empty-state card" role="alert">
        <AlertTriangle size={40} aria-hidden="true" />
        <h1>We couldn’t load this page</h1>
        <p className="muted">Your saved records are safe. Try loading the page again.</p>
        <button className="btn btn-primary" type="button" onClick={reset}>Try again</button>
      </div>
    </main>
  );
}
