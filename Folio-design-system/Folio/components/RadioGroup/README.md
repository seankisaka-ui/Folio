# RadioGroup
One choice from 2–5 visible options, in a fieldset with a legend. Includes the `Radio` primitive.

**Consumer provides:** `legend`, `name`, `options` (`{value,label,description,disabled}`), `value`/`defaultValue`, `onChange`, optional `card` (bordered option cards), `horizontal`, `error`.

## Rules
- Use `card` for consequential choices (what happens after a low score) — each option gets a one-line description.
- Selected card: `border-selected` + `surface-selected` + filled radio dot — three cues, not colour alone.
- Arrow keys move between options (native behaviour); Tab leaves the group.

Naming: `Radio / Default`, `Radio / Selected`, `Radio / Card / Selected`, `Radio / Disabled`.
