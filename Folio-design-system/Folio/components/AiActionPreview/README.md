# AiActionPreview
Shows what the assistant understood — child, subject, PACE number, score, date — before anything changes. The confirmation step for every AI-assisted record change.

**Consumer provides:** `quote` (what the parent typed), `action` ("Record PACE test score"), `fields` (`[{key, label, value, display, type, options, changed, missing}]`), `state` (`review` | `editing` | `saving` | `saved`), `onConfirm`, `onEdit`, `onCancel`, `onFieldChange`.

## Rules
- **Never silently change a record.** Saving requires pressing "Save to record".
- Every interpreted field is shown in large semibold text and is editable. Fields the parent edited are marked "Edited"; missing ones say "Not given" and block saving.
- After saving, the entry carries `AiTag` ("AI-assisted" / "AI-assisted · edited") in history and activity, and Undo is offered.
