# DateInput
Native date picker (accessible, familiar on every phone) styled as a TextInput.

**Consumer provides:** `value` (ISO `YYYY-MM-DD`), `onChange`, optional `max` (usually today). Wrap in `Field`.

## Rules
- Default to today for progress and score entries; the label says what the date means ("Test date").
- Display dates in lists as "28 Sep 2026" — never ambiguous numeric formats like 09/10/26.
- Future dates are rejected for completed work: "The test date can't be in the future."

Naming: `Input / Date / Default`, `Input / Date / Error`.
