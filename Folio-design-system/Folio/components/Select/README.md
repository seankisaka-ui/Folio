# Select
Native select for choosing one option from a short known list (child, subject, term).

**Consumer provides:** `options` (strings or `{value,label,disabled}`), `value`, `onChange`, optional `placeholder`. Wrap in `Field`.

## Rules
- Use for 4–15 options. Fewer than 4 → `RadioGroup` (all choices visible). Many children? Use `ChildSwitcher`.
- Options are listed in a meaningful order: children oldest → youngest; subjects in the household's standard order.
- Native `<select>` keeps screen reader and phone behaviour predictable — don't replace it with a custom listbox.

Naming: `Select / Default`, `Select / Filled`, `Select / Error`, `Select / Disabled`.
