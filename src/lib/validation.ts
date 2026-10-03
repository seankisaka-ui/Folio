import { z } from "zod";

export const householdSchema = z.object({
  name: z.string().trim().min(2, "Enter a household name.").max(100),
});

export const childSchema = z.object({
  displayName: z.string().trim().min(1, "Enter the child's name.").max(100),
  dateOfBirth: z.string().optional().refine((value) => !value || !Number.isNaN(Date.parse(value)), "Enter a valid date."),
  level: z.string().trim().max(30).optional(),
  subjects: z.array(z.object({
    subjectId: z.string().min(1),
    startingPace: z.coerce.number().int().min(1, "Enter a PACE from 1 to 9999.").max(9999, "Enter a PACE from 1 to 9999."),
  })).min(1, "Choose at least one subject."),
});

export const progressSchema = z.object({
  childSubjectId: z.string().uuid(),
  kind: z.enum(["pages", "stage", "note"]),
  pageFrom: z.coerce.number().int().min(1).max(9999).optional(),
  pageTo: z.coerce.number().int().min(1).max(9999).optional(),
  totalPages: z.coerce.number().int().min(1).max(9999).optional(),
  stage: z.enum(["pages", "checkups", "self_test", "pace_test"]).optional(),
  note: z.string().trim().max(1000).optional(),
  entryDate: z.string().refine((value) => !Number.isNaN(Date.parse(value)), "Enter a valid date."),
  source: z.enum(["manual", "ai"]).default("manual"),
}).superRefine((data, ctx) => {
  if (data.kind === "pages") {
    if (!data.pageFrom || !data.pageTo) ctx.addIssue({ code: "custom", message: "Enter the page range.", path: ["pageTo"] });
    if (data.pageFrom && data.pageTo && data.pageTo < data.pageFrom) ctx.addIssue({ code: "custom", message: "The ending page must be after the starting page.", path: ["pageTo"] });
  }
  if (data.kind === "stage" && !data.stage) ctx.addIssue({ code: "custom", message: "Choose a completed stage.", path: ["stage"] });
});

export const completePaceSchema = z.object({
  childSubjectId: z.string().uuid(),
  paceNumber: z.coerce.number().int().min(1).max(9999),
  score: z.coerce.number().int().min(0, "Enter a score from 0 to 100.").max(100, "Enter a score from 0 to 100."),
  completionDate: z.string().refine((value) => !Number.isNaN(Date.parse(value)), "Enter a valid date."),
  idempotencyKey: z.string().uuid(),
  source: z.enum(["manual", "ai"]).default("manual"),
});

export const advancePaceSchema = z.object({
  childSubjectId: z.string().uuid(),
  completedPaceNumber: z.coerce.number().int().min(1).max(9999),
  nextPaceNumber: z.coerce.number().int().min(1, "Enter a PACE from 1 to 9999.").max(9999, "Enter a PACE from 1 to 9999."),
  startDate: z.string().refine((value) => !Number.isNaN(Date.parse(value)), "Enter a valid date."),
});
