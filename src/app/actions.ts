"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { advancePace, completePace, createChild, createHousehold, logProgress } from "@/lib/domain";
import { getDb } from "@/lib/db";
import { requireHousehold, requireUser } from "@/lib/session";
import type { ActionState } from "@/lib/action-state";

function failure(error: unknown): ActionState {
  if (error instanceof z.ZodError) {
    return { ok: false, message: "Check the highlighted information and try again.", fieldErrors: error.flatten().fieldErrors as Record<string, string[]> };
  }
  return { ok: false, message: error instanceof Error ? error.message : "Something went wrong. Please try again." };
}

export async function createHouseholdAction(_state: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const user = await requireUser();
    createHousehold(user.id, { name: formData.get("name") });
  } catch (error) { return failure(error); }
  redirect("/onboarding");
}

export async function createChildAction(_state: ActionState, formData: FormData): Promise<ActionState> {
  let childId = "";
  try {
    const { user, household } = await requireHousehold();
    const subjectIds = formData.getAll("subjectIds").map(String);
    childId = createChild(user.id, household.id, {
      displayName: formData.get("displayName"),
      dateOfBirth: String(formData.get("dateOfBirth") ?? ""),
      level: String(formData.get("level") ?? ""),
      subjects: subjectIds.map((subjectId) => ({ subjectId, startingPace: formData.get(`pace_${subjectId}`) })),
    });
  } catch (error) { return failure(error); }
  redirect(`/children/${childId}`);
}

export async function logProgressAction(_state: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const { user } = await requireHousehold();
    logProgress(user.id, {
      childSubjectId: formData.get("childSubjectId"), kind: formData.get("kind"),
      pageFrom: formData.get("pageFrom") || undefined, pageTo: formData.get("pageTo") || undefined,
      totalPages: formData.get("totalPages") || undefined, stage: formData.get("stage") || undefined,
      note: formData.get("note") || undefined, entryDate: formData.get("entryDate"),
      source: formData.get("source") || "manual",
    });
    revalidatePath("/dashboard"); revalidatePath("/children"); revalidatePath("/history"); revalidatePath("/reports");
    return { ok: true, message: "Progress saved." };
  } catch (error) { return failure(error); }
}

export async function completePaceAction(_state: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const { user } = await requireHousehold();
    completePace(user.id, {
      childSubjectId: formData.get("childSubjectId"), paceNumber: formData.get("paceNumber"),
      score: formData.get("score"), completionDate: formData.get("completionDate"),
      idempotencyKey: formData.get("idempotencyKey"), source: formData.get("source") || "manual",
    });
    revalidatePath("/dashboard"); revalidatePath("/children"); revalidatePath("/history"); revalidatePath("/reports");
    return { ok: true, message: "Test score saved to the permanent record." };
  } catch (error) { return failure(error); }
}

export async function advancePaceAction(_state: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const { user } = await requireHousehold();
    advancePace(user.id, {
      childSubjectId: formData.get("childSubjectId"), completedPaceNumber: formData.get("completedPaceNumber"),
      nextPaceNumber: formData.get("nextPaceNumber"), startDate: formData.get("startDate"),
    });
    revalidatePath("/dashboard"); revalidatePath("/children"); revalidatePath("/history"); revalidatePath("/reports");
    return { ok: true, message: "The next PACE is ready." };
  } catch (error) { return failure(error); }
}

export async function updateSettingsAction(_state: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const { household } = await requireHousehold();
    const values = z.object({ name: z.string().trim().min(2).max(100), passMark: z.coerce.number().int().min(0).max(100) })
      .parse({ name: formData.get("name"), passMark: formData.get("passMark") });
    getDb().prepare("UPDATE households SET name = ?, pass_mark = ?, updated_at = ? WHERE id = ?")
      .run(values.name, values.passMark, new Date().toISOString(), household.id);
    revalidatePath("/settings");
    return { ok: true, message: "Household settings saved." };
  } catch (error) { return failure(error); }
}
