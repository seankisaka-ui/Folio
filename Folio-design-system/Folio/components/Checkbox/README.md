# Checkbox
Independent yes/no choices and multi-select lists (assigning several subjects at once).

**Consumer provides:** `label`, optional `description`, `checked`/`defaultChecked`, `indeterminate`, `disabled`, `invalid`, `onChange`.

## Rules
- 20px box with a 2px `input-border`; the whole label row is the hit area (≥44px tall).
- Checked fills with `primary` and a white check — never green fill with white.
- "Select all" uses `indeterminate` when only some are selected.
- Group related checkboxes in a `<fieldset>` with a `<legend>`.

Naming: `Checkbox / Unchecked`, `Checkbox / Checked`, `Checkbox / Indeterminate`, `Checkbox / Focus`, `Checkbox / Disabled`, `Checkbox / Error`.
