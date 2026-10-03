# Toast
Brief confirmation after an action, bottom-centre, on `tooltip-bg`. Success toasts may offer Undo.

**Consumer provides:** `tone` (`success` | `warning` | `error` | `info`), `children`, optional `action` (a link Button), `onDismiss`. Place inside `ToastRegion`.

Rules: stay ≥6 seconds, pause on hover/focus; never the only record of an error that needs action (use Alert); one at a time.
