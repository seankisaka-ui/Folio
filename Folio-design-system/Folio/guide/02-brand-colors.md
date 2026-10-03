# 2. Brand colors

The six palette colours are the source of truth, taken from the printed RGB values on the palette board. Everything else is derived from them.

| # | Token | Hex | RGB | Role |
|---|---|---|---|---|
| 01 | `brand-smoky-black` | `#101211` | 16, 18, 17 | Primary text (`text-primary`) |
| 02 | `brand-green` | `#56BB7B` | 86, 187, 123 | The accent — highlights, selected marks |
| 03 | `brand-dark-green` | `#21483E` | 33, 72, 62 | Sidebar, primary buttons, focus ring |
| 04 | `brand-near-black` | `#1B1B1B` | 27, 27, 27 | Tooltip and toast grounds |
| 05 | `brand-grey-green` | `#A5ADA8` | 165, 173, 168 | Disabled text, decorative dividers |
| 06 | `brand-soft-white` | `#F7F7F7` | 247, 247, 247 | Workspace canvas |

> The palette board prints `#56BB7B` on both the Green and Dark Green swatches; the RGB values (33, 72, 62 → `#21483E`) and the swatch itself identify Dark Green, so `#21483E` is used.

## Scales

Each scale is a primitive layer; components never use them directly.

- **green-50 → 700** — tints and shades of `brand-green` (green-400). Use green-500 for progress fills (3.31:1 on white) and green-600 for green text/links (5.70:1).
- **forest-50 → 950** — tints and shades of `brand-dark-green` (forest-800). Light end for secondary buttons and the AI surface; dark end for hover/pressed primary.
- **neutral-0 → 950** — green-tinted greys anchored on soft white (neutral-50), grey green (neutral-400), near black (neutral-900) and smoky black (neutral-950).
- **amber / red / blue** — functional colours for warning, error and information, each with a 50 tint (background), 300 (border) and 700 (text ≥5.3:1 on its tint).

## How much green

- Dark green is the brand's anchor: the sidebar and primary actions. It can cover large areas.
- Bright green is a **highlight**: roughly 1–3% of any screen. Never as a page or card background, never as a button fill with white text (2.39:1 — fails), never as text on white.
- Where bright green holds text, the text is `on-accent` (smoky black, 7.87:1).

## Chart colours

Folio intentionally has **no chart palette**. Progress is shown with `ProgressBar` and numbers. If a future report truly needs a chart, use `accent-strong` for the main series and `neutral-500` for comparison, label every series directly, and print the values.
