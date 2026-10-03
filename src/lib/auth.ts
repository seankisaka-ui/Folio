import { betterAuth } from "better-auth";
import { getDb } from "@/lib/db";

const localOnly = process.env.NODE_ENV !== "production";

export const auth = betterAuth({
  appName: "Folio",
  database: getDb(),
  secret: process.env.BETTER_AUTH_SECRET ?? (localOnly ? "local-development-only-folio-secret-change-me" : undefined),
  baseURL: process.env.BETTER_AUTH_URL ?? (localOnly ? "http://localhost:3000" : undefined),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 10,
    revokeSessionsOnPasswordReset: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30,
    updateAge: 60 * 60 * 24,
  },
  rateLimit: {
    enabled: true,
    window: 60,
    max: 100,
  },
  advanced: {
    database: { joins: true },
  },
});
