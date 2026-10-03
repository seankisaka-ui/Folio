import crypto from "node:crypto";
import type Database from "better-sqlite3";
import { getDb } from "@/lib/db";
import { childSchema, completePaceSchema, householdSchema, progressSchema, advancePaceSchema } from "@/lib/validation";

export type ChildSubjectView = {
  id: string;
  subjectId: string;
  subjectName: string;
  currentPace: number;
  status: string;
  paceRecordId: string;
  startDate: string;
  testScore: number | null;
  completionDate: string | null;
  latestProgress: string | null;
  pageTo: number | null;
  totalPages: number | null;
};

export type ChildView = {
  id: string;
  displayName: string;
  dateOfBirth: string | null;
  level: string | null;
  status: string;
  subjects: ChildSubjectView[];
};

const now = () => new Date().toISOString();
const dateOnly = () => new Date().toISOString().slice(0, 10);
const id = () => crypto.randomUUID();

function ensureMembership(db: Database.Database, userId: string, householdId: string) {
  const row = db.prepare("SELECT 1 FROM household_members WHERE user_id = ? AND household_id = ?").get(userId, householdId);
  if (!row) throw new Error("You do not have access to this household.");
}

function activity(db: Database.Database, data: {
  householdId: string;
  childId?: string;
  subjectId?: string;
  action: string;
  details?: Record<string, unknown>;
  source?: "manual" | "ai" | "system";
}) {
  db.prepare(`INSERT INTO activity_events
    (id, household_id, child_id, subject_id, action, details_json, source, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`)
    .run(id(), data.householdId, data.childId ?? null, data.subjectId ?? null, data.action,
      JSON.stringify(data.details ?? {}), data.source ?? "manual", now());
}

export function createHousehold(userId: string, input: unknown, db = getDb()) {
  const values = householdSchema.parse(input);
  const existing = db.prepare("SELECT household_id FROM household_members WHERE user_id = ? LIMIT 1").get(userId);
  if (existing) throw new Error("Your account already belongs to a household.");
  const householdId = id();
  const timestamp = now();
  db.transaction(() => {
    db.prepare("INSERT INTO households (id, name, pass_mark, created_at, updated_at) VALUES (?, ?, 80, ?, ?)")
      .run(householdId, values.name, timestamp, timestamp);
    db.prepare("INSERT INTO household_members (household_id, user_id, role, created_at) VALUES (?, ?, 'owner', ?)")
      .run(householdId, userId, timestamp);
    activity(db, { householdId, action: "household_created", details: { name: values.name }, source: "system" });
  })();
  return householdId;
}

export function createChild(userId: string, householdId: string, input: unknown, db = getDb()) {
  ensureMembership(db, userId, householdId);
  const values = childSchema.parse(input);
  const childId = id();
  const timestamp = now();

  db.transaction(() => {
    db.prepare(`INSERT INTO children
      (id, household_id, display_name, date_of_birth, level, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, 'active', ?, ?)`)
      .run(childId, householdId, values.displayName, values.dateOfBirth || null, values.level || null, timestamp, timestamp);

    for (const assignment of values.subjects) {
      const subject = db.prepare(`SELECT id, name FROM subjects
        WHERE id = ? AND active = 1 AND (household_id IS NULL OR household_id = ?)`)
        .get(assignment.subjectId, householdId) as { id: string; name: string } | undefined;
      if (!subject) throw new Error("One of the selected subjects is unavailable.");
      const childSubjectId = id();
      db.prepare(`INSERT INTO child_subjects
        (id, child_id, subject_id, current_pace, status, active, created_at, updated_at)
        VALUES (?, ?, ?, ?, 'in_progress', 1, ?, ?)`)
        .run(childSubjectId, childId, subject.id, assignment.startingPace, timestamp, timestamp);
      db.prepare(`INSERT INTO pace_records
        (id, child_subject_id, pace_number, status, start_date, created_at, updated_at)
        VALUES (?, ?, ?, 'in_progress', ?, ?, ?)`)
        .run(id(), childSubjectId, assignment.startingPace, dateOnly(), timestamp, timestamp);
    }
    activity(db, {
      householdId,
      childId,
      action: "child_created",
      details: { name: values.displayName, subjectCount: values.subjects.length },
    });
  })();
  return childId;
}

function ownedAssignment(db: Database.Database, userId: string, childSubjectId: string) {
  const row = db.prepare(`
    SELECT cs.*, c.household_id, c.display_name, s.name AS subject_name, s.id AS subject_id,
      h.pass_mark, pr.id AS pace_record_id, pr.status AS pace_status, pr.test_score
    FROM child_subjects cs
    JOIN children c ON c.id = cs.child_id
    JOIN subjects s ON s.id = cs.subject_id
    JOIN households h ON h.id = c.household_id
    JOIN household_members hm ON hm.household_id = c.household_id AND hm.user_id = ?
    JOIN pace_records pr ON pr.child_subject_id = cs.id AND pr.pace_number = cs.current_pace
    WHERE cs.id = ? AND cs.active = 1
  `).get(userId, childSubjectId) as Record<string, unknown> | undefined;
  if (!row) throw new Error("That subject record was not found or is not available to you.");
  return row;
}

export function logProgress(userId: string, input: unknown, db = getDb()) {
  const values = progressSchema.parse(input);
  const assignment = ownedAssignment(db, userId, values.childSubjectId);
  const entryId = id();
  const timestamp = now();

  db.transaction(() => {
    db.prepare(`INSERT INTO progress_entries
      (id, pace_record_id, kind, page_from, page_to, total_pages, stage, note, entry_date, source, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
      .run(entryId, assignment.pace_record_id, values.kind, values.pageFrom ?? null, values.pageTo ?? null,
        values.totalPages ?? null, values.stage ?? null, values.note || null, values.entryDate, values.source, timestamp);
    const isReady = values.kind === "stage" && values.stage === "self_test";
    db.prepare("UPDATE pace_records SET status = ?, updated_at = ? WHERE id = ?")
      .run(isReady ? "ready_for_test" : "in_progress", timestamp, assignment.pace_record_id);
    db.prepare("UPDATE child_subjects SET status = ?, updated_at = ? WHERE id = ?")
      .run(isReady ? "ready_for_test" : "in_progress", timestamp, values.childSubjectId);
    activity(db, {
      householdId: assignment.household_id as string,
      childId: assignment.child_id as string,
      subjectId: assignment.subject_id as string,
      action: isReady ? "pace_ready_for_test" : "progress_logged",
      details: { pace: assignment.current_pace, kind: values.kind, pageTo: values.pageTo, stage: values.stage, note: values.note },
      source: values.source,
    });
  })();
  return entryId;
}

export function completePace(userId: string, input: unknown, db = getDb()) {
  const values = completePaceSchema.parse(input);
  const assignment = ownedAssignment(db, userId, values.childSubjectId);
  if (assignment.current_pace !== values.paceNumber) throw new Error("This is no longer the current PACE. Refresh and try again.");

  const previous = db.prepare("SELECT id, completion_key FROM pace_records WHERE id = ? AND test_score IS NOT NULL")
    .get(assignment.pace_record_id) as { id: string; completion_key: string } | undefined;
  if (previous) {
    if (previous.completion_key === values.idempotencyKey) return previous.id;
    throw new Error("A test score has already been recorded for this PACE.");
  }

  const status = values.score >= Number(assignment.pass_mark) ? "passed" : "needs_review";
  db.transaction(() => {
    db.prepare(`UPDATE pace_records SET status = ?, completion_date = ?, test_score = ?,
      completion_key = ?, source = ?, updated_at = ? WHERE id = ? AND test_score IS NULL`)
      .run(status, values.completionDate, values.score, values.idempotencyKey, values.source, now(), assignment.pace_record_id);
    db.prepare("UPDATE child_subjects SET status = ?, updated_at = ? WHERE id = ?")
      .run(status, now(), values.childSubjectId);
    activity(db, {
      householdId: assignment.household_id as string,
      childId: assignment.child_id as string,
      subjectId: assignment.subject_id as string,
      action: "pace_test_recorded",
      details: { pace: values.paceNumber, score: values.score, status, date: values.completionDate },
      source: values.source,
    });
  })();
  return assignment.pace_record_id as string;
}

export function advancePace(userId: string, input: unknown, db = getDb()) {
  const values = advancePaceSchema.parse(input);
  const assignment = ownedAssignment(db, userId, values.childSubjectId);
  if (assignment.current_pace !== values.completedPaceNumber) throw new Error("This is no longer the current PACE. Refresh and try again.");
  if (assignment.pace_status !== "passed") throw new Error("Record a passing test result before advancing this PACE.");
  if (values.nextPaceNumber === values.completedPaceNumber) throw new Error("The next PACE must be different from the completed PACE.");

  const newRecordId = id();
  db.transaction(() => {
    db.prepare("UPDATE pace_records SET status = 'completed', updated_at = ? WHERE id = ? AND status = 'passed'")
      .run(now(), assignment.pace_record_id);
    db.prepare(`INSERT INTO pace_records
      (id, child_subject_id, pace_number, status, start_date, created_at, updated_at)
      VALUES (?, ?, ?, 'in_progress', ?, ?, ?)`)
      .run(newRecordId, values.childSubjectId, values.nextPaceNumber, values.startDate, now(), now());
    db.prepare("UPDATE child_subjects SET current_pace = ?, status = 'in_progress', updated_at = ? WHERE id = ?")
      .run(values.nextPaceNumber, now(), values.childSubjectId);
    activity(db, {
      householdId: assignment.household_id as string,
      childId: assignment.child_id as string,
      subjectId: assignment.subject_id as string,
      action: "child_advanced",
      details: { completedPace: values.completedPaceNumber, nextPace: values.nextPaceNumber, startDate: values.startDate },
    });
  })();
  return newRecordId;
}

export function archiveChild(userId: string, childId: string, db = getDb()) {
  const child = db.prepare(`SELECT c.* FROM children c JOIN household_members hm
    ON hm.household_id = c.household_id WHERE c.id = ? AND hm.user_id = ?`).get(childId, userId) as { household_id: string; display_name: string } | undefined;
  if (!child) throw new Error("That child was not found or is not available to you.");
  db.transaction(() => {
    db.prepare("UPDATE children SET status = 'archived', updated_at = ? WHERE id = ?").run(now(), childId);
    activity(db, { householdId: child.household_id, childId, action: "child_archived", details: { name: child.display_name } });
  })();
}

export function listSubjects(householdId: string, db = getDb()) {
  return db.prepare(`SELECT id, name, code FROM subjects
    WHERE active = 1 AND (household_id IS NULL OR household_id = ?)
    ORDER BY sort_order, name`).all(householdId) as { id: string; name: string; code: string }[];
}

export function listChildren(householdId: string, db = getDb()): ChildView[] {
  const children = db.prepare(`SELECT id, display_name, date_of_birth, level, status FROM children
    WHERE household_id = ? AND status = 'active' ORDER BY display_name`).all(householdId) as Record<string, unknown>[];
  const subjectQuery = db.prepare(`
    SELECT cs.id, s.id AS subject_id, s.name AS subject_name, cs.current_pace, cs.status,
      pr.id AS pace_record_id, pr.start_date, pr.test_score, pr.completion_date,
      (SELECT pe.entry_date FROM progress_entries pe WHERE pe.pace_record_id = pr.id ORDER BY pe.created_at DESC LIMIT 1) AS latest_progress,
      (SELECT pe.page_to FROM progress_entries pe WHERE pe.pace_record_id = pr.id AND pe.kind = 'pages' ORDER BY pe.created_at DESC LIMIT 1) AS page_to,
      (SELECT pe.total_pages FROM progress_entries pe WHERE pe.pace_record_id = pr.id AND pe.kind = 'pages' ORDER BY pe.created_at DESC LIMIT 1) AS total_pages
    FROM child_subjects cs
    JOIN subjects s ON s.id = cs.subject_id
    JOIN pace_records pr ON pr.child_subject_id = cs.id AND pr.pace_number = cs.current_pace
    WHERE cs.child_id = ? AND cs.active = 1 ORDER BY s.sort_order, s.name
  `);
  return children.map((child) => ({
    id: child.id as string,
    displayName: child.display_name as string,
    dateOfBirth: child.date_of_birth as string | null,
    level: child.level as string | null,
    status: child.status as string,
    subjects: (subjectQuery.all(child.id) as Record<string, unknown>[]).map((subject) => ({
      id: subject.id as string,
      subjectId: subject.subject_id as string,
      subjectName: subject.subject_name as string,
      currentPace: subject.current_pace as number,
      status: subject.status as string,
      paceRecordId: subject.pace_record_id as string,
      startDate: subject.start_date as string,
      testScore: subject.test_score as number | null,
      completionDate: subject.completion_date as string | null,
      latestProgress: subject.latest_progress as string | null,
      pageTo: subject.page_to as number | null,
      totalPages: subject.total_pages as number | null,
    })),
  }));
}

export function getChild(householdId: string, childId: string, db = getDb()) {
  const child = listChildren(householdId, db).find((entry) => entry.id === childId);
  if (!child) throw new Error("Child not found.");
  return child;
}

export type HistoryRow = {
  id: string; childId: string; childName: string; subjectId: string; subjectName: string;
  paceNumber: number; status: string; startDate: string; completionDate: string | null;
  testScore: number | null; notes: string | null; source: string;
};

export function getHistory(householdId: string, filters: { childId?: string; subjectId?: string; status?: string; pace?: number; from?: string; to?: string } = {}, db = getDb()) {
  const clauses = ["c.household_id = @householdId"];
  const params: Record<string, unknown> = { householdId };
  if (filters.childId) { clauses.push("c.id = @childId"); params.childId = filters.childId; }
  if (filters.subjectId) { clauses.push("s.id = @subjectId"); params.subjectId = filters.subjectId; }
  if (filters.status) { clauses.push("pr.status = @status"); params.status = filters.status; }
  if (filters.pace) { clauses.push("pr.pace_number = @pace"); params.pace = filters.pace; }
  if (filters.from) { clauses.push("COALESCE(pr.completion_date, pr.start_date) >= @from"); params.from = filters.from; }
  if (filters.to) { clauses.push("COALESCE(pr.completion_date, pr.start_date) <= @to"); params.to = filters.to; }
  return db.prepare(`SELECT pr.id, c.id AS child_id, c.display_name AS child_name,
    s.id AS subject_id, s.name AS subject_name, pr.pace_number, pr.status, pr.start_date,
    pr.completion_date, pr.test_score, pr.notes, pr.source
    FROM pace_records pr
    JOIN child_subjects cs ON cs.id = pr.child_subject_id
    JOIN children c ON c.id = cs.child_id
    JOIN subjects s ON s.id = cs.subject_id
    WHERE ${clauses.join(" AND ")}
    ORDER BY COALESCE(pr.completion_date, pr.start_date) DESC, pr.created_at DESC`)
    .all(params).map((row) => {
      const item = row as Record<string, unknown>;
      return { id: item.id, childId: item.child_id, childName: item.child_name, subjectId: item.subject_id,
        subjectName: item.subject_name, paceNumber: item.pace_number, status: item.status, startDate: item.start_date,
        completionDate: item.completion_date, testScore: item.test_score, notes: item.notes, source: item.source } as HistoryRow;
    });
}

export function getActivity(householdId: string, limit = 12, db = getDb()) {
  return db.prepare(`SELECT ae.*, c.display_name, s.name AS subject_name FROM activity_events ae
    LEFT JOIN children c ON c.id = ae.child_id LEFT JOIN subjects s ON s.id = ae.subject_id
    WHERE ae.household_id = ? ORDER BY ae.created_at DESC LIMIT ?`).all(householdId, limit) as Record<string, unknown>[];
}

export function dashboardSummary(householdId: string, db = getDb()) {
  const children = listChildren(householdId, db);
  const completed = db.prepare(`SELECT count(*) AS count FROM pace_records pr JOIN child_subjects cs ON cs.id=pr.child_subject_id
    JOIN children c ON c.id=cs.child_id WHERE c.household_id=? AND pr.status='completed'`).get(householdId) as { count: number };
  return {
    children,
    readyCount: children.flatMap((child) => child.subjects).filter((subject) => subject.status === "ready_for_test").length,
    completedCount: completed.count,
    activity: getActivity(householdId, 8, db),
  };
}
