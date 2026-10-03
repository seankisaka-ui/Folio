# 6. Grid and responsive layouts

## Breakpoints (min-width)

| Token | px | What changes |
|---|---|---|
| — | 320 | Minimum supported width. Single column, 16px gutters. |
| `bp-sm` | 480 | Two short fields may share a row; dialog buttons stop stacking. |
| `bp-md` | 640 | Card grids go to 2 columns; gutter `gutter-tablet` (24px); tables stop stacking. |
| `bp-lg` | 1024 | **Desktop shell**: persistent sidebar appears; bottom nav and drawer hide; gutter `gutter-desktop` (32px). |
| `bp-xl` | 1280 | Card grids go to 3 columns (4 for stat tiles). |

## Desktop shell (≥1024px)

```
┌──────────┬───────────────────────────────────────────────┐
│          │ Header 72px: search · notifications · assistant│
│ Sidebar  ├───────────────────────────────────────────────┤
│ 264px    │  Page header (title, context, actions)         │
│ sidebar- │  Content — max content-max (1200px)            │
│ bg       │  gutters gutter-desktop (32px)                 │
│          │  cards on bg-canvas, gap space-6               │
└──────────┴───────────────────────────────────────────────┘
```

- **Navigation** (sidebar) → **context** (header + page header) → **content** (cards) → **actions** (page header right; card footers). Keep these zones distinct.
- Card grids: `repeat(auto-fill, minmax(280px, 1fr))`, gap `space-6`.
- Two-column work layouts (`fo-split`): main 2fr, context 1fr — e.g. form + live PaceCard.
- Forms: max `form-max` (640px). Prose and reports: max `reading-max` (720px).
- Tables: inside a `Card flush` or `fo-table-wrap`; ≤6 columns; horizontal scroll inside the region rather than squeezing.

## Tablet (640–1023px)

Top bar + drawer navigation (no persistent sidebar), 2-column card grid, 24px gutters, dialogs stay centred.

## Mobile (<640px)

```
┌─────────────────────────┐
│ Top bar 56px  ☰ Title ⋯ │
├─────────────────────────┤
│ Content, 16px gutters   │
│ stacked cards, gap 16px │
│ primary action full-    │
│ width, 52px             │
├─────────────────────────┤
│ Bottom nav 64px + safe  │
└─────────────────────────┘
```

Rules: see section 13 (Mobile examples). Don't shrink the desktop layout — restructure it.

## Z-order

`z-sticky` 10 (sticky headers, bottom nav) · `z-sidebar` 20 · `z-popover` 30 · `z-overlay` 40 (dialogs, sheets, drawer) · `z-toast` 50.
