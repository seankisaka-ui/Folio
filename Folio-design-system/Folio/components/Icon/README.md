# Icon
Lucide outline icons at 2px stroke, rendered inline so they inherit `currentColor`.

**Consumer provides:** `name` (one of `Icon.names`), optional `size` (16 / 20 / 24 / 32 — `icon-sm` … `icon-xl`), optional `label`.

## Rules
- Icons are **decorative by default** (`aria-hidden`). Pass `label` only when the icon is the sole carrier of meaning — and prefer adding visible text instead.
- Sizes: `icon-md` (20px) in buttons, inputs and lists; `icon-lg` (22–24px) in navigation and icon buttons; `icon-sm` (16px) in badges; `icon-xl` (32px) in empty and status states.
- Colour comes from the parent text colour. Status icons always appear next to a word ("Passed", "Below pass mark").
- Never use an icon alone in navigation. Never invent new metaphors: use the mapping in the Iconography section.

## Do / Don't
- Do pair `circle-check` with "Passed", `triangle-alert` with warnings, `circle-alert` with errors.
- Don't use emoji, filled icons, or a second icon family.
