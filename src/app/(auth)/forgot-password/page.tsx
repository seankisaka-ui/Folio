import Link from "next/link";

export default function ForgotPasswordPage() { return <div className="auth-card"><p className="eyebrow">Account recovery</p><h1>Reset your password</h1><div className="alert alert-warning"><p>Recovery email delivery is not configured in this local V1. Your records remain unchanged. Ask the local administrator to restore access, then return to sign in.</p></div><Link className="btn btn-outline" href="/sign-in">Return to sign in</Link></div>; }
