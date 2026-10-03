# NumberInput
Numeric entry for PACE numbers and page counts: numeric keypad on phones, tabular figures, no spinner arrows.

**Consumer provides:** `value`, `onChange`, optional `min`, `max`, `placeholder`. Wrap in `Field`.

## Rules
- PACE numbers are four digits (1001–1144). Validate on blur and say what is wrong: "PACE numbers have four digits, like 1048."
- Page ranges use two NumberInputs side by side ("From page" / "To page") in a `FieldGroup columns={2}`.
- Don't use browser spinners; typing is faster and clearer for older users.

Naming: `Input / Number / Default`, `Input / Number / Error`.
