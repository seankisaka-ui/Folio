# Field
Wraps any input with a persistent label, optional helper text and a validation message placed directly under the control.

**Consumer provides:** `label` (always visible), the control as its single child, optional `helper`, `required` or `optional`, and one of `error` | `warning` | `success`.

## Behaviour
- Generates the `id`, links `<label for>`, and sets `aria-describedby` (message, then helper) and `aria-invalid`.
- Error messages use `role="alert"`, an icon and `destructive` text — never colour alone — and say how to fix the problem: "Enter a score from 0 to 100."
- Mark the minority: if most fields are required, mark only the optional ones "(optional)".
- Spacing: `space-2` between label, helper and control; `space-5` between fields on desktop, `space-4` on mobile.
- Single-column forms max out at `form-max` (640px). Two fields may share a row (`FieldGroup columns={2}`) only when they are short and related (PACE number + date).

Naming: `Field / Default`, `Field / Error`, `Field / Success`.
