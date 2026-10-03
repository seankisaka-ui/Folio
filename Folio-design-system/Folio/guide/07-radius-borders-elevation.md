# 7. Radius, borders and elevation

## Radius — consistent and restrained

| Token | px | Use |
|---|---|---|
| `radius-xs` | 4 | Checkbox, tooltip |
| `radius-sm` | 6 | Small buttons, nav items, menu items |
| `radius-md` | 8 | Buttons, inputs, selects, alerts, popovers, chips |
| `radius-lg` | 12 | Cards, dialogs, table containers |
| `radius-xl` | 16 | Bottom-sheet top corners |
| `radius-full` | 9999 | Badges, switch, avatars, radio, progress track — nothing else |

Buttons are **not** pills. Nested corners shrink: a `radius-md` element inside a `radius-lg` card with 24px padding is correct.

## Borders

- `border-width-1` (1px) for cards (`card-border`), inputs (`input-border`), dividers (`border-subtle`).
- `border-width-2` (2px) for focus rings, invalid inputs, selected cards.
- `border-width-3` (3px) for the selected-nav indicator and selected-tab underline.
- Read-only values use a **dashed** `border-default` so they never look like inputs.
- No coloured left-border "accent" cards.

## Elevation — borders first, shadows only to lift

| Token | Use |
|---|---|
| `shadow-xs` | Cards and inputs at rest (with their border) |
| `shadow-sm` | Interactive card hover |
| `shadow-md` | Menus, popovers, toasts |
| `shadow-lg` | Dialogs, sheets, drawer |

Shadows are low-opacity smoky black. No glow, no coloured shadows, no glassmorphism or background blur.

## Motion

`duration-fast` 150ms (hover, press, focus, colour) · `duration-base` 200ms (menus, tooltips, toasts) · `duration-slow` 240ms (dialogs, sheets, drawer) with `ease-standard`; `ease-exit` for leaving. Only opacity, colour and small translations. Under `prefers-reduced-motion: reduce` all durations become 0ms and the skeleton pulse stops.
