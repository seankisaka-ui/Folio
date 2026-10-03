# IconButton
A square, icon-only button for well-known actions (close, more, collapse) — always with an accessible label.

**Consumer provides:** `icon`, `label` (required — becomes `aria-label` and the tooltip), `variant` (`ghost` | `outline` | `primary`), `onClick`, `disabled`.

## Rules
- Size is `touch-min` (44px) on desktop and `touch-mobile` (48px) on touch screens, even though the icon is 22px.
- Use only for universally understood icons: `x` Close, `ellipsis` More actions, `chevrons-left` Collapse, `menu` Open menu, `pencil` Edit. Anything else gets a text `Button`.
- Show the tooltip on hover **and** keyboard focus (`showTooltip`).
- Never use for navigation items or for the primary action of a page.

States: Default · Hover · Focus · Pressed · Disabled. Naming: `IconButton / Ghost / Hover`.
