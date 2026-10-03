import { auth } from "../src/lib/auth";
import { createChild, createHousehold, logProgress } from "../src/lib/domain";
import { getDb } from "../src/lib/db";

async function main() {
  if (process.env.NODE_ENV === "production") throw new Error("Demo seed data is disabled in production.");
  const email = process.env.DEMO_EMAIL || "demo@folio.local";
  const password = process.env.DEMO_PASSWORD || "FolioDemo123!";
  let user = getDb().prepare("SELECT id, name FROM user WHERE email = ?").get(email) as { id: string; name: string } | undefined;
  if (!user) {
    const result = await auth.api.signUpEmail({ body: { name: "Ruth Mukasa", email, password } });
    user = result.user;
  }
  const existing = getDb().prepare("SELECT household_id FROM household_members WHERE user_id=? LIMIT 1").get(user.id) as { household_id: string } | undefined;
  if (existing) { console.log(`Demo data already exists. Sign in with ${email}.`); return; }
  const householdId = createHousehold(user.id, { name: "Mukasa Homeschool" });
  const sarahId = createChild(user.id, householdId, { displayName: "Sarah Mukasa", level: "Level 4", subjects: [
    { subjectId: "subject-mathematics", startingPace: 1048 }, { subjectId: "subject-english", startingPace: 1046 }, { subjectId: "subject-science", startingPace: 1047 },
  ] });
  createChild(user.id, householdId, { displayName: "Daniel Mukasa", level: "Level 2", subjects: [
    { subjectId: "subject-mathematics", startingPace: 1022 }, { subjectId: "subject-english", startingPace: 1052 },
  ] });
  const assignment = getDb().prepare(`SELECT cs.id FROM child_subjects cs JOIN children c ON c.id=cs.child_id JOIN subjects s ON s.id=cs.subject_id WHERE c.id=? AND s.name='Mathematics'`).get(sarahId) as { id: string };
  logProgress(user.id, { childSubjectId: assignment.id, kind: "pages", pageFrom: 1, pageTo: 18, totalPages: 36, entryDate: new Date().toISOString().slice(0, 10), source: "manual" });
  console.log(`Demo household created. Sign in with ${email} / ${password}`);
}

main().catch((error) => { console.error(error instanceof Error ? error.message : error); process.exit(1); });
