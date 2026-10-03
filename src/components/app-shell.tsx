"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BookOpenCheck, FileText, History, Home, NotebookPen, Settings, Sparkles, Users } from "lucide-react";
import { Logo } from "@/components/ui";
import { authClient } from "@/lib/auth-client";

const navigation = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/children", label: "Children", icon: Users },
  { href: "/log", label: "Log progress", icon: NotebookPen },
  { href: "/history", label: "Academic history", icon: History },
  { href: "/reports", label: "Reports", icon: FileText },
];
const helpNavigation = [
  { href: "/assistant", label: "Assistant", icon: Sparkles },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function AppShell({ children, userName, householdName }: { children: React.ReactNode; userName: string; householdName: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (href: string) => pathname === href || (href !== "/dashboard" && pathname.startsWith(`${href}/`));
  const signOut = async () => { await authClient.signOut(); router.push("/sign-in"); router.refresh(); };

  return <div className="app-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <aside className="sidebar" aria-label="Main navigation">
      <Logo />
      <nav className="sidebar-nav">
        <p className="nav-label">Main menu</p>
        {navigation.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`nav-item ${isActive(href) ? "active" : ""}`} aria-current={isActive(href) ? "page" : undefined}><Icon size={22} aria-hidden="true" />{label}</Link>)}
        <p className="nav-label">Help</p>
        {helpNavigation.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`nav-item ${isActive(href) ? "active" : ""}`} aria-current={isActive(href) ? "page" : undefined}><Icon size={22} aria-hidden="true" />{label}</Link>)}
      </nav>
      <div className="account-box"><strong>{userName}</strong><small>{householdName}</small><button className="signout" type="button" onClick={signOut}>Sign out</button></div>
    </aside>
    <div className="workspace">
      <header className="topbar"><span className="mobile-logo"><Logo /></span><ButtonAssistant /></header>
      <main id="main-content" tabIndex={-1}>{children}</main>
    </div>
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {[
        { href: "/dashboard", label: "Home", icon: Home },
        { href: "/children", label: "Children", icon: Users },
        { href: "/log", label: "Log", icon: NotebookPen },
        { href: "/assistant", label: "More", icon: BookOpenCheck },
      ].map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={isActive(href) ? "active" : ""} aria-current={isActive(href) ? "page" : undefined}><Icon aria-hidden="true" />{label}</Link>)}
    </nav>
  </div>;
}

function ButtonAssistant() {
  return <Link className="btn btn-secondary" href="/assistant"><Sparkles size={20} aria-hidden="true" />Assistant</Link>;
}
