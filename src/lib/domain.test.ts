import { describe, expect, it } from "vitest";
import crypto from "node:crypto";
import { advancePace, completePace, createChild, createHousehold, getHistory, listChildren, logProgress } from "@/lib/domain";
import { createTestDb } from "@/lib/db";

function setup() {
  const db = createTestDb();
  const userId = "user-a";
  const householdId = createHousehold(userId, { name: "Test Homeschool" }, db);
  const childId = createChild(userId, householdId, { displayName: "Sarah", subjects: [{ subjectId: "subject-mathematics", startingPace: 1048 }] }, db);
  const child = listChildren(householdId, db)[0];
  return { db, userId, householdId, childId, assignment: child.subjects[0] };
}

describe("PACE domain workflow", () => {
  it("creates a child with an independently assigned current PACE", () => {
    const { householdId, db } = setup();
    const [child] = listChildren(householdId, db);
    expect(child.displayName).toBe("Sarah"); expect(child.subjects[0].currentPace).toBe(1048);
  });

  it("prevents cross-household writes", () => {
    const { db, assignment } = setup();
    expect(() => logProgress("another-user", { childSubjectId: assignment.id, kind: "pages", pageFrom: 1, pageTo: 4, entryDate: "2026-10-03" }, db)).toThrow(/not found|available/);
  });

  it("logs progress and marks a Self Test ready", () => {
    const { db, userId, householdId, assignment } = setup();
    logProgress(userId, { childSubjectId: assignment.id, kind: "stage", stage: "self_test", entryDate: "2026-10-03" }, db);
    expect(listChildren(householdId, db)[0].subjects[0].status).toBe("ready_for_test");
  });

  it("validates test scores", () => {
    const { db, userId, assignment } = setup();
    expect(() => completePace(userId, { childSubjectId: assignment.id, paceNumber: 1048, score: 101, completionDate: "2026-10-03", idempotencyKey: crypto.randomUUID() }, db)).toThrow();
  });

  it("completes, advances, and preserves permanent history", () => {
    const { db, userId, householdId, assignment } = setup();
    completePace(userId, { childSubjectId: assignment.id, paceNumber: 1048, score: 92, completionDate: "2026-10-03", idempotencyKey: crypto.randomUUID() }, db);
    advancePace(userId, { childSubjectId: assignment.id, completedPaceNumber: 1048, nextPaceNumber: 1049, startDate: "2026-10-04" }, db);
    const subject = listChildren(householdId, db)[0].subjects[0];
    expect(subject.currentPace).toBe(1049);
    const history = getHistory(householdId, {}, db);
    expect(history.find((row) => row.paceNumber === 1048)).toMatchObject({ status: "completed", testScore: 92 });
    expect(history.find((row) => row.paceNumber === 1049)).toMatchObject({ status: "in_progress" });
  });

  it("makes repeat completion submissions idempotent", () => {
    const { db, userId, assignment } = setup(); const key = crypto.randomUUID();
    const first = completePace(userId, { childSubjectId: assignment.id, paceNumber: 1048, score: 92, completionDate: "2026-10-03", idempotencyKey: key }, db);
    const second = completePace(userId, { childSubjectId: assignment.id, paceNumber: 1048, score: 92, completionDate: "2026-10-03", idempotencyKey: key }, db);
    expect(second).toBe(first);
    const count = db.prepare("SELECT count(*) AS count FROM activity_events WHERE action='pace_test_recorded'").get() as { count: number };
    expect(count.count).toBe(1);
  });
});
