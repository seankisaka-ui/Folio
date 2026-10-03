# 5. Spacing and sizing

## Spacing scale (4px base, 8px rhythm)

| Token | px | Typical use |
|---|---|---|
| `space-1` | 4 | Icon ↔ text in badges |
| `space-2` | 8 | Icon ↔ label in buttons/nav; label ↔ input |
| `space-3` | 12 | Compact rows, badge groups |
| `space-4` | 16 | Mobile gutter and card padding; mobile field gap |
| `space-5` | 20 | Desktop field gap |
| `space-6` | 24 | Desktop card padding; gap between cards |
| `space-8` | 32 | Desktop page gutter; between page sections |
| `space-10` | 40 | Above major sections |
| `space-12` | 48 | Empty-state padding |
| `space-16` | 64 | Large empty states, report margins |

Prefer even steps. Use `space-1`/`space-3` only for tight icon and text relationships.

## Control heights and targets

| Token | px | Use |
|---|---|---|
| `control-sm` | 36 | Dense desktop tables only (keep a 44px hit area) |
| `control-md` | 44 | Default button, input, select, nav item |
| `control-lg` | 52 | Dialog primary action, mobile primary action |
| `touch-min` | 44 | Minimum desktop target (icon buttons, menu items, pager) |
| `touch-mobile` | 48 | Minimum touch target; buttons grow to this on `pointer: coarse` |

## Icon sizes

`icon-sm` 16 (badges, captions) · `icon-md` 20 (buttons, inputs, lists) · `icon-lg` 24 (alerts, icon buttons, nav at 22) · `icon-xl` 32 (empty and status states).

## Avatars

`avatar-sm` 32 (lists, switcher) · `avatar-md` 40 (cards) · `avatar-lg` 64 (profile header).

## Content density

Folio has **one density: comfortable**. Don't build a compact mode. Where many rows must fit (history, scores), use `Pagination` or "Show more" rather than shrinking text or rows. Table rows are ≥52px; record rows ≥64px.
