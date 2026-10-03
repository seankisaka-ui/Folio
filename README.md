# Folio — A.C.E. Homeschool Tracker

Folio is a production-oriented homeschool record system for families using the A.C.E. PACE model. It keeps every learner's subject progress isolated, records an auditable history, produces printable reports, and only advances a PACE after an explicit adult confirmation.

The implementation follows the supplied product context in `Folio.md` and the approved tokens, typography, components, and responsive patterns in `Folio-design-system/Folio`.

## What is included

- Email/password authentication and protected household routes
- Household onboarding with learner, subject, and starting-PACE setup
- Dashboard and individual child records
- Independent per-child, per-subject PACE tracking
- Page, Checkup, Self Test, PACE Test, score, and status history
- Explicit completion and advancement confirmation; no automatic advancement
- Filterable academic history and printable progress reports
- CSV export of persisted household records
- Optional natural-language assistant with a review-before-save flow
- Desktop sidebar, tablet layout, and 320 px mobile navigation
- Empty, pending, success, validation, not-found, loading, and error states

## Local setup

Requirements: a current Node.js LTS release and npm.

```bash
npm install
copy .env.example .env.local
npm run db:migrate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Replace `BETTER_AUTH_SECRET` in `.env.local` with a random value of at least 32 characters before using real data.

To load the local demonstration household:

```bash
npm run db:seed
```

Demo sign-in: `demo@folio.local` / `FolioDemo123!`. The seed script refuses to run when `NODE_ENV=production`.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `BETTER_AUTH_SECRET` | Yes | Signs authentication tokens; use a strong private value. |
| `BETTER_AUTH_URL` | Yes | Canonical application origin, such as `http://localhost:3000`. |
| `DATABASE_PATH` | Yes | SQLite file location; defaults to `./data/folio.db`. |
| `ALLOWED_DEV_ORIGINS` | No | Comma-separated hostnames used to access the local dev server. |
| `OPENAI_API_KEY` | No | Enables the assistant. Core tracking works without it. |
| `OPENAI_MODEL` | No | Assistant model; defaults to `gpt-5-mini`. |

## Verification

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm audit --omit=dev
```

## Architecture and data integrity

- Next.js App Router renders protected server pages; server actions own mutations.
- Better Auth manages users and sessions.
- SQLite stores relational household, member, child, subject, assignment, PACE, progress, and activity records.
- Every read and write is scoped back to the authenticated household.
- Child-subject assignments are unique, so one learner's change cannot overwrite a sibling's state.
- Completion and advancement run in transactions. A unique idempotency key prevents duplicate completion events.
- Zod validation is backed by database constraints for PACE numbers, scores, page counts, and relationship integrity.
- The assistant converts a note into structured fields but never writes directly. The adult edits and explicitly confirms the same validated action used by the standard interface.

Database setup is deliberately script-driven for this repository: `npm run db:migrate` is idempotent and creates both application and authentication tables. The SQLite database, local environment files, and build artifacts are ignored by Git.

## Primary routes

- `/sign-in`, `/sign-up`, `/forgot-password`
- `/onboarding`
- `/dashboard`
- `/children`, `/children/new`, `/children/[id]`
- `/log`, `/history`, `/reports`, `/assistant`, `/settings`
- `/api/export` and `/api/assistant`

## Assumptions and current boundaries

- V1 models one authenticated parent account as the household owner. The schema includes household members for future invitations and roles.
- Subjects are household-local and created from the onboarding choices.
- A PACE number is a positive integer; a score is 0–100.
- `Total pages` is optional because printed PACEs can vary. When present, page progress is calculated from it.
- Password recovery is presented honestly as unavailable in this local deployment; outbound email and a reset provider should be configured before production use.
- Reports print through the browser's native print/PDF flow. CSV is the durable machine-readable export.
- The assistant is optional and intentionally disabled without an API key. No core workflow depends on AI.

## Production notes

Before deployment, use a protected persistent volume for SQLite or replace the database adapter with a managed relational database, set the canonical HTTPS auth URL and strong secret, configure backups, and add a transactional email provider for password recovery. Run the verification commands above in CI.
