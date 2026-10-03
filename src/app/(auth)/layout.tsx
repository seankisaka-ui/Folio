import { Logo } from "@/components/ui";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <main className="auth-shell">
    <section className="auth-brand"><Logo href="/" /><div><h1>Clear records. Confident next steps.</h1><p>Keep every child’s subjects, PACE progress, test scores, and permanent history together.</p></div><small>Built for calm, dependable homeschool recordkeeping.</small></section>
    <section className="auth-panel">{children}</section>
  </main>;
}
