# BottomNav
Mobile bottom navigation for the four most frequent destinations: Home, Children, Log, More.

**Consumer provides:** `items` (max 4, `[{id, icon, label}]`), `current`, `onNavigate`.

## Rules
- Always icon + label (13px semibold). Selected: `accent` pill behind the icon, `forest-800` label, `aria-current`.
- "More" opens `MobileDrawer` with every other destination.
- 64px tall plus the safe-area inset; hidden ≥1024px.
