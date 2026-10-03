import Link from "next/link";
import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Clock3, NotebookPen } from "lucide-react";

export function Logo({ href = "/dashboard" }: { href?: string }) {
  return <Link className="logo" href={href} aria-label="Folio home"><span className="logo-mark" aria-hidden="true">F</span>Folio</Link>;
}

export function ButtonLink({ href, children, variant = "primary", className = "" }: {
  href: string; children: ReactNode; variant?: "primary" | "secondary" | "outline"; className?: string;
}) {
  return <Link className={`btn btn-${variant} ${className}`} href={href}>{children}</Link>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`card ${className}`}>{children}</section>;
}

export function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; tone: string; icon: typeof Clock3 }> = {
    not_started: { label: "Not started", tone: "", icon: Clock3 },
    in_progress: { label: "In progress", tone: "badge-info", icon: NotebookPen },
    ready_for_test: { label: "Ready for test", tone: "badge-warning", icon: AlertTriangle },
    passed: { label: "Passed", tone: "badge-success", icon: CheckCircle2 },
    needs_review: { label: "Needs review", tone: "badge-warning", icon: AlertTriangle },
    completed: { label: "Completed", tone: "badge-success", icon: CheckCircle2 },
  };
  const item = map[status] ?? map.in_progress;
  const Icon = item.icon;
  return <span className={`badge ${item.tone}`}><Icon aria-hidden="true" />{item.label}</span>;
}

export function EmptyState({ icon: Icon, title, description, action }: {
  icon: React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
  title: string; description: string; action?: ReactNode;
}) {
  return <div className="empty"><Icon size={32} aria-hidden={true} /><h2>{title}</h2><p className="muted">{description}</p>{action}</div>;
}

export function formatDate(value?: string | null) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value.slice(0, 10)}T00:00:00Z`));
}

export function formatRelativeDate(value?: string | null) {
  if (!value) return "No progress logged";
  const date = new Date(`${value.slice(0, 10)}T00:00:00`);
  const today = new Date();
  const difference = Math.round((today.setHours(0, 0, 0, 0) - date.getTime()) / 86400000);
  if (difference === 0) return "Updated today";
  if (difference === 1) return "Updated yesterday";
  return `Updated ${formatDate(value)}`;
}
