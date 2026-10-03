# ChildSwitcher
Switches which child a page is about, without leaving the page. Lives at the top of child-specific pages.

**Consumer provides:** `options` (`[{id, name, meta}]`, e.g. meta "Level 4 · 5 subjects"), `value`, `onChange`, optional `label` ("Viewing").

## Rules
- Shows the full first name and avatar — never just initials.
- Options list oldest → youngest; the current child has a check and `aria-selected`.
- Switching keeps the same tab/section ("Test scores" stays open for the new child).
- With one child, hide the switcher and show the name in the page header.

Naming: `ChildSwitcher / Closed`, `ChildSwitcher / Open`.
