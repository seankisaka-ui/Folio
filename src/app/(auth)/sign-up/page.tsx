import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = { title: "Create account" };
export default function SignUpPage() { return <div className="auth-card"><p className="eyebrow">Get started</p><h1>Create your account</h1><p className="secondary">You’ll set up your homeschool and first child next.</p><AuthForm mode="sign-up" /></div>; }
