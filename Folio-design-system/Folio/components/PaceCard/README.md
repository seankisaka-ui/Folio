# PaceCard
The current PACE in one subject — the heart of the daily workflow. Shows the PACE number large, the stage, progress, and exactly one next action.

**Consumer provides:** `subject`, `pace`, `nextPace`, `pagesDone`, `pagesTotal`, `stage` (0–3), `status`, `updated`, `score` (when passed), `passMark`, and handlers `onLog`, `onTest`, `onAdvance`.

## The one next action
| Status | Action |
|---|---|
| `in-progress` | Secondary "Log progress" |
| `ready-for-test` | Primary "Record test score" |
| `passed` | Primary "Advance to PACE 1049" (opens a confirmation) |
