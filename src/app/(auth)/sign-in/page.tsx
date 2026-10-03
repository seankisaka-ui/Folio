import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = { title: "Sign in" };
export default function SignInPage() { return <div className="auth-card"><p className="eyebrow">Welcome back</p><h1>Sign in to Folio</h1><p className="secondary">Open your household records and pick up where you left off.</p><AuthForm mode="sign-in" /></div>; }
