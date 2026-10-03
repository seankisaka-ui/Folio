import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import { initializeSchema } from "@/lib/schema";

const globalForDb = globalThis as unknown as { folioDb?: Database.Database };

export function databasePath() {
  return path.resolve(/* turbopackIgnore: true */ process.cwd(), process.env.DATABASE_PATH ?? "data/folio.db");
}

export function getDb() {
  if (globalForDb.folioDb) return globalForDb.folioDb;
  const filename = databasePath();
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  const db = new Database(filename);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  initializeSchema(db);
  globalForDb.folioDb = db;
  return db;
}

export function createTestDb() {
  const db = new Database(":memory:");
  db.pragma("foreign_keys = ON");
  initializeSchema(db);
  return db;
}
