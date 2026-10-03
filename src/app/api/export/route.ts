import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { getHistory } from "@/lib/domain";

const csv = (value: unknown) => `"${String(value ?? "").replaceAll('"', '""')}"`;

export async function GET(request: NextRequest) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) return Response.json({ error: "Sign in required." }, { status: 401 });
  const household = getDb().prepare(`SELECT h.id, h.name FROM households h JOIN household_members hm ON hm.household_id=h.id WHERE hm.user_id=? LIMIT 1`).get(session.user.id) as { id: string; name: string } | undefined;
  if (!household) return Response.json({ error: "Household not found." }, { status: 404 });
  const params = request.nextUrl.searchParams;
  const records = getHistory(household.id, { childId: params.get("child") || undefined, subjectId: params.get("subject") || undefined, status: params.get("status") || undefined, pace: params.get("pace") ? Number(params.get("pace")) : undefined, from: params.get("from") || undefined, to: params.get("to") || undefined });
  const lines = [
    ["Child", "Subject", "PACE", "Status", "Score", "Start date", "Completion date", "Source"].map(csv).join(","),
    ...records.map((record) => [record.childName, record.subjectName, record.paceNumber, record.status, record.testScore ?? "", record.startDate, record.completionDate ?? "", record.source].map(csv).join(",")),
  ];
  const filename = `${household.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-pace-records.csv`;
  return new Response(`\uFEFF${lines.join("\r\n")}`, { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="${filename}"`, "Cache-Control": "private, no-store" } });
}
