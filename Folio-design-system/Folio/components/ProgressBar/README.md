# ProgressBar
Labelled progress through a PACE (pages) with the number always printed — the bar is a supplement.

**Consumer provides:** `label`, `value`, `max`, optional `valueText` ("18 of 36 pages"), `size="lg"`, `hideLabel` (then `label` becomes `aria-label`).

## Rules
- Fill `progress-fill` (green-500, 3.31:1 on white) on `progress-track`; complete turns `progress-fill-complete`.
- `role="progressbar"` with `aria-valuetext` matching the visible text.
- No animated stripes, no celebratory effects at 100%.
