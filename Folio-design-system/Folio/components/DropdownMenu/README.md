# DropdownMenu
A menu of actions from one button. Arrow keys move; Escape closes and returns focus.

**Consumer provides:** `label`, optional `trigger`, `items` (`[{label, icon, danger, disabled, onSelect}]` or `"separator"`), `align`.

Rules: max 7 items; destructive items last, after a separator, in `destructive`; every destructive item opens a confirmation.
