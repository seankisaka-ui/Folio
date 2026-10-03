import type Database from "better-sqlite3";

export const DEFAULT_SUBJECTS = [
  { id: "subject-mathematics", name: "Mathematics", code: "MATH", order: 1 },
  { id: "subject-english", name: "English", code: "ENG", order: 2 },
  { id: "subject-science", name: "Science", code: "SCI", order: 3 },
  { id: "subject-social-studies", name: "Social Studies", code: "SOC", order: 4 },
  { id: "subject-word-building", name: "Word Building", code: "WORD", order: 5 },
] as const;

export function initializeSchema(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS households (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL CHECK(length(name) BETWEEN 2 AND 100),
      pass_mark INTEGER NOT NULL DEFAULT 80 CHECK(pass_mark BETWEEN 0 AND 100),
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS household_members (
      household_id TEXT NOT NULL REFERENCES households(id) ON DELETE CASCADE,
      user_id TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'owner' CHECK(role IN ('owner','supervisor')),
      created_at TEXT NOT NULL,
      PRIMARY KEY (household_id, user_id)
    );
    CREATE INDEX IF NOT EXISTS idx_members_user ON household_members(user_id);

    CREATE TABLE IF NOT EXISTS children (
      id TEXT PRIMARY KEY,
      household_id TEXT NOT NULL REFERENCES households(id) ON DELETE RESTRICT,
      display_name TEXT NOT NULL CHECK(length(display_name) BETWEEN 1 AND 100),
      date_of_birth TEXT,
      level TEXT,
      status TEXT NOT NULL DEFAULT 'active' CHECK(status IN ('active','archived')),
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_children_household ON children(household_id, status);

    CREATE TABLE IF NOT EXISTS subjects (
      id TEXT PRIMARY KEY,
      household_id TEXT REFERENCES households(id) ON DELETE CASCADE,
      name TEXT NOT NULL CHECK(length(name) BETWEEN 2 AND 80),
      code TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0,
      active INTEGER NOT NULL DEFAULT 1 CHECK(active IN (0,1)),
      created_at TEXT NOT NULL,
      UNIQUE(household_id, name)
    );

    CREATE TABLE IF NOT EXISTS child_subjects (
      id TEXT PRIMARY KEY,
      child_id TEXT NOT NULL REFERENCES children(id) ON DELETE RESTRICT,
      subject_id TEXT NOT NULL REFERENCES subjects(id) ON DELETE RESTRICT,
      current_pace INTEGER NOT NULL CHECK(current_pace BETWEEN 1 AND 9999),
      status TEXT NOT NULL DEFAULT 'in_progress' CHECK(status IN ('not_started','in_progress','ready_for_test','passed','needs_review')),
      active INTEGER NOT NULL DEFAULT 1 CHECK(active IN (0,1)),
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      UNIQUE(child_id, subject_id)
    );
    CREATE INDEX IF NOT EXISTS idx_child_subjects_child ON child_subjects(child_id, active);

    CREATE TABLE IF NOT EXISTS pace_records (
      id TEXT PRIMARY KEY,
      child_subject_id TEXT NOT NULL REFERENCES child_subjects(id) ON DELETE RESTRICT,
      pace_number INTEGER NOT NULL CHECK(pace_number BETWEEN 1 AND 9999),
      status TEXT NOT NULL CHECK(status IN ('in_progress','ready_for_test','passed','needs_review','completed')),
      start_date TEXT NOT NULL,
      completion_date TEXT,
      test_score INTEGER CHECK(test_score BETWEEN 0 AND 100),
      notes TEXT CHECK(notes IS NULL OR length(notes) <= 1000),
      completion_key TEXT UNIQUE,
      source TEXT NOT NULL DEFAULT 'manual' CHECK(source IN ('manual','ai')),
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      UNIQUE(child_subject_id, pace_number)
    );
    CREATE INDEX IF NOT EXISTS idx_pace_records_subject ON pace_records(child_subject_id, status, pace_number);
    CREATE INDEX IF NOT EXISTS idx_pace_records_completion ON pace_records(completion_date);

    CREATE TABLE IF NOT EXISTS progress_entries (
      id TEXT PRIMARY KEY,
      pace_record_id TEXT NOT NULL REFERENCES pace_records(id) ON DELETE RESTRICT,
      kind TEXT NOT NULL CHECK(kind IN ('pages','stage','note')),
      page_from INTEGER,
      page_to INTEGER,
      total_pages INTEGER,
      stage TEXT CHECK(stage IS NULL OR stage IN ('pages','checkups','self_test','pace_test')),
      note TEXT CHECK(note IS NULL OR length(note) <= 1000),
      entry_date TEXT NOT NULL,
      source TEXT NOT NULL DEFAULT 'manual' CHECK(source IN ('manual','ai')),
      created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_progress_pace ON progress_entries(pace_record_id, entry_date);

    CREATE TABLE IF NOT EXISTS activity_events (
      id TEXT PRIMARY KEY,
      household_id TEXT NOT NULL REFERENCES households(id) ON DELETE RESTRICT,
      child_id TEXT REFERENCES children(id) ON DELETE RESTRICT,
      subject_id TEXT REFERENCES subjects(id) ON DELETE RESTRICT,
      action TEXT NOT NULL,
      details_json TEXT NOT NULL DEFAULT '{}',
      source TEXT NOT NULL DEFAULT 'manual' CHECK(source IN ('manual','ai','system')),
      created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_activity_household ON activity_events(household_id, created_at DESC);
  `);

  const insert = db.prepare(`INSERT OR IGNORE INTO subjects
    (id, household_id, name, code, sort_order, active, created_at)
    VALUES (?, NULL, ?, ?, ?, 1, ?)`);
  const now = new Date().toISOString();
  for (const subject of DEFAULT_SUBJECTS) {
    insert.run(subject.id, subject.name, subject.code, subject.order, now);
  }
}
