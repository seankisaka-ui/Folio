import { ButtonLink } from "@/components/ui";

export default function ChildNotFound() { return <div className="page"><section className="card empty"><h1>Child record not found</h1><p className="muted">It may have been archived, or it is not available to this household.</p><ButtonLink href="/children">Return to children</ButtonLink></section></div>; }
