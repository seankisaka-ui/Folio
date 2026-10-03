# ReadOnlyField
Displays a saved value that can't be edited in the current context — visibly different from an editable input.

**Consumer provides:** `label`, `value`, optional `hint` (accessible text for the lock icon).

## Rules
- No input box: `input-bg-readonly` fill, dashed `border-default`, lock icon, semibold value.
- Use for permanent-record entries (a PACE test score after the PACE was closed), and for context inside forms ("Child: Sarah").
- If a value can be edited elsewhere, add a `link` button "Edit in Academic history".

Naming: `Input / Read-only`.
