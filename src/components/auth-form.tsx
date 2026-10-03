"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setPending(true);
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email")); const password = String(form.get("password"));
    const result = mode === "sign-up"
      ? await authClient.signUp.email({ name: String(form.get("name")), email, password })
      : await authClient.signIn.email({ email, password, rememberMe: true });
    setPending(false);
    if (result.error) { setError(result.error.message ?? "We could not complete that request."); return; }
    router.push(mode === "sign-up" ? "/onboarding" : "/dashboard"); router.refresh();
  }
  return <form className="stack" onSubmit={submit} noValidate>
    {mode === "sign-up" && <div className="field"><label htmlFor="name">Your name</label><input className="control" id="name" name="name" autoComplete="name" required /></div>}
    <div className="field"><label htmlFor="email">Email address</label><input className="control" id="email" name="email" type="email" autoComplete="email" required /></div>
    <div className="field"><label htmlFor="password">Password</label><input className="control" id="password" name="password" type="password" minLength={10} autoComplete={mode === "sign-up" ? "new-password" : "current-password"} required /><p className="helper">Use at least 10 characters.</p></div>
    {error && <p className="alert alert-error" role="alert">{error}</p>}
    <button className="btn btn-primary btn-block" type="submit" disabled={pending}>{pending ? "Please wait…" : mode === "sign-up" ? "Create account" : "Sign in"}</button>
    <p>{mode === "sign-up" ? <>Already have an account? <Link href="/sign-in">Sign in</Link></> : <>New to Folio? <Link href="/sign-up">Create an account</Link></>}</p>
    {mode === "sign-in" && <Link href="/forgot-password">Forgot your password?</Link>}
  </form>;
}
