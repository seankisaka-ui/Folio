import { getMigrations } from "better-auth/db/migration";
import { auth } from "../src/lib/auth";
import { getDb } from "../src/lib/db";

async function main() {
  getDb();
  const { toBeCreated, toBeAdded, runMigrations } = await getMigrations(auth.options);
  await runMigrations();
  console.log(`Folio schema ready. Auth tables created: ${toBeCreated.length}; columns added: ${toBeAdded.length}.`);
}

main().catch((error) => { console.error(error instanceof Error ? error.message : error); process.exit(1); });
