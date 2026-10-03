import { NextRequest } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { getHistory, listChildren } from "@/lib/domain";

const parsedSchema = z.object({
  intent: z.enum(["complete_pace", "find_records", "unknown"]),
  childName: z.string().nullable(), subjectName: z.string().nullable(), paceNumber: z.number().int().nullable(),
  score: z.number().int().min(0).max(100).nullable(), date: z.string().nullable(), period: z.enum(["this_month", "all"]).nullable(),
});

export async function POST(request: NextRequest) {
  if (!process.env.OPENAI_API_KEY) return Response.json({ error: "The assistant is not configured." }, { status: 503 });
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) return Response.json({ error: "Sign in required." }, { status: 401 });
  const household = getDb().prepare(`SELECT h.id FROM households h JOIN household_members hm ON hm.household_id=h.id WHERE hm.user_id=? LIMIT 1`).get(session.user.id) as { id: string } | undefined;
  if (!household) return Response.json({ error: "Household not found." }, { status: 404 });
  const body = z.object({ request: z.string().trim().min(3).max(1000) }).parse(await request.json());
  const response = await fetch("https://api.openai.com/v1/responses", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }, body: JSON.stringify({
    model: process.env.OPENAI_MODEL || "gpt-5-mini",
    input: [{ role: "system", content: "Extract only explicit facts from a homeschool record request. Never infer a child, subject, PACE, score, or date. Return JSON only." }, { role: "user", content: body.request }],
    text: { format: { type: "json_schema", name: "folio_request", strict: true, schema: { type: "object", additionalProperties: false, required: ["intent", "childName", "subjectName", "paceNumber", "score", "date", "period"], properties: { intent: { type: "string", enum: ["complete_pace", "find_records", "unknown"] }, childName: { type: ["string", "null"] }, subjectName: { type: ["string", "null"] }, paceNumber: { type: ["integer", "null"] }, score: { type: ["integer", "null"], minimum: 0, maximum: 100 }, date: { type: ["string", "null"] }, period: { type: ["string", "null"], enum: ["this_month", "all", null] } } } } },
  }) });
  if (!response.ok) return Response.json({ error: "The assistant could not interpret that request. Nothing was saved." }, { status: 502 });
  const data = await response.json();
  const text = data.output?.flatMap((item: { content?: { text?: string }[] }) => item.content ?? []).find((item: { text?: string }) => item.text)?.text;
  let parsed; try { parsed = parsedSchema.parse(JSON.parse(text)); } catch { return Response.json({ kind: "clarification", message: "I could not understand that safely. Nothing was saved. Try including the child, subject, PACE, score, and date." }); }
  const children = listChildren(household.id);
  if (parsed.intent === "complete_pace") {
    if (!parsed.childName || !parsed.subjectName || parsed.paceNumber === null || parsed.score === null || !parsed.date) return Response.json({ kind: "clarification", message: "Please include the child, subject, PACE number, score, and date. Nothing was saved." });
    const child = children.find((item) => item.displayName.toLowerCase() === parsed.childName!.toLowerCase() || item.displayName.split(" ")[0].toLowerCase() === parsed.childName!.toLowerCase());
    const subject = child?.subjects.find((item) => item.subjectName.toLowerCase() === parsed.subjectName!.toLowerCase());
    if (!child || !subject) return Response.json({ kind: "clarification", message: "That child and subject did not match one active record. Choose the exact child and subject in the manual form." });
    return Response.json({ kind: "proposal", proposal: { type: "complete_pace", childSubjectId: subject.id, childName: child.displayName, subjectName: subject.subjectName, paceNumber: parsed.paceNumber, score: parsed.score, date: parsed.date } });
  }
  if (parsed.intent === "find_records") {
    const child = parsed.childName ? children.find((item) => item.displayName.toLowerCase().includes(parsed.childName!.toLowerCase())) : undefined;
    const subject = parsed.subjectName ? child?.subjects.find((item) => item.subjectName.toLowerCase() === parsed.subjectName!.toLowerCase()) : undefined;
    const from = parsed.period === "this_month" ? new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0, 10) : undefined;
    const records = getHistory(household.id, { childId: child?.id, subjectId: subject?.subjectId, from }).filter((item) => item.testScore !== null).slice(0, 20);
    return Response.json({ kind: "records", summary: "Matching saved PACE results", records: records.map((item) => ({ childName: item.childName, subjectName: item.subjectName, paceNumber: item.paceNumber, score: item.testScore, date: item.completionDate || item.startDate })) });
  }
  return Response.json({ kind: "clarification", message: "I could not map that request to a safe Folio action. Nothing was saved." });
}
