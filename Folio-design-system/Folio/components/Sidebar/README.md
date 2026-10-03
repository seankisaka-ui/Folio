# Sidebar
The persistent desktop navigation (≥1024px): dark-green `sidebar-bg`, text-labelled items, account area at the bottom.

**Consumer provides:** `current` (item id), optional `sections` (`[{title, items:[{id,icon,label}]}]` — defaults to Folio's navigation), `user` (`{name, role}`), `counts` (`{id: number}`), `collapsed`/`defaultCollapsed`, `onToggle`, `onNavigate`.

## Structure
1. Wordmark + collapse button. 2. **Main menu**: Home, Children, Log progress, Test scores, Academic history, Reports. 3. **Help**: Assistant, Settings, Help centre. 4. Account area.

## Rules
- Width `sidebar-width` (264px); collapsed `sidebar-width-collapsed` (80px). Collapse is a user choice, remembered per device; it is never the default.
- Collapsed: labels are visually hidden but remain the accessible names, and each item shows its label as a tooltip on hover/focus.
- Selected item: `sidebar-item-selected` background + `sidebar-indicator` bar + bold text + `aria-current="page"`.
- Focus inside the sidebar uses `focus-ring-inverse` (bright green, 4.26:1 on forest).
- Max 9 items; no nested menus. Under 1024px the sidebar becomes `MobileDrawer` + `BottomNav`.

Naming: `Navigation / Sidebar / Expanded`, `Navigation / Sidebar / Collapsed`.
