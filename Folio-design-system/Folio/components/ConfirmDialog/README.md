# ConfirmDialog
Confirms a consequential change and shows exactly what will be saved in a summary list.

**Consumer provides:** `title`, `description`, `summary` (`[[label, value]]`), `confirmLabel`, `tone`, `loading`, `onConfirm`, `onCancel`.

Rules: used before saving a test score, advancing a PACE, removing a child or subject. Destructive confirmations use `alertdialog`, a `destructive` button and put initial focus on Cancel.
