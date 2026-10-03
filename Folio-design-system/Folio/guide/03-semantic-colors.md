# 3. Semantic colors

Semantic tokens describe purpose, not hue. Use them in all product code; they alias the primitives so a palette change happens in one place. Contrast ratios below were checked against WCAG 2.1.

## Backgrounds and surfaces

| Token | Value | Use |
|---|---|---|
| `bg-canvas` | neutral-50 | Workspace behind cards |
| `surface-default` | white | Cards, inputs, dialogs |
| `surface-muted` | neutral-100 | Inner panels, table header, read-only fields |
| `surface-elevated` | white | Menus, popovers, dialogs, sheets (+ shadow) |
| `surface-selected` | green-50 | Selected row/option (always + border or check) |
| `surface-inverse` | forest-800 | Sidebar and dark brand moments |

## Text

| Token | On | Ratio |
|---|---|---|
| `text-primary` | white / canvas | 18.8 / 17.6 |
| `text-secondary` | canvas / muted | 8.26 / 7.8 |
| `text-muted` | white / canvas / muted | 5.85 / 5.46 / 5.15 |
| `text-link` | white / canvas / selected | 5.70 / 5.32 / 5.25 |
| `text-inverse` | forest-800 | 9.51 |
| `on-primary` | forest-800 | 10.19 |
| `on-accent` | green-400 | 7.87 |
| `text-disabled` | — | Disabled only; exempt, never carries information |

## Borders

`border-subtle` (dividers) and `border-default` (card/table outlines) are decorative. `border-control` (3.75:1) bounds anything interactive; `border-control-hover` on hover; `border-selected` (forest-800) for selected cards and options.

## Interactive states

| State | Primary | Secondary | Outline / Ghost |
|---|---|---|---|
| Default | `primary` | `button-secondary-bg` | `surface-default` + `button-outline-border` / transparent |
| Hover | `primary-hover` | `button-secondary-bg-hover` | `button-outline-bg-hover` |
| Pressed | `primary-pressed` | `button-secondary-bg-pressed` | `button-outline-bg-pressed` |
| Selected | `surface-selected` + `border-selected` (cards, options); `sidebar-item-selected` + `sidebar-indicator` (nav); 3px `primary` underline (tabs) |
| Focus | 2px `focus-ring` + 2px offset (light) · `focus-ring-inverse` (sidebar, dark fills) |
| Disabled | `input-bg-disabled` + `text-disabled`, `cursor: not-allowed` |

## Functional colours

| Meaning | Text/icon | Background | Border | Always paired with |
|---|---|---|---|---|
| Success | `success` | `success-subtle` | `success-border` | `circle-check` + "Passed" / "Saved" |
| Warning | `warning` | `warning-subtle` | `warning-border` | `triangle-alert` + words |
| Error | `destructive` | `destructive-subtle` | `destructive-border` | `circle-alert` + how to fix |
| Info | `info` | `info-subtle` | `info-border` | `info` icon |
| In progress | `info` (Badge `progress`) | `info-subtle` | `info-border` | `notebook-pen` + "In progress" |

Success (green-600) and error (red-700) are similar in lightness, so they are **never** distinguished by colour alone — the icon and word are mandatory.

## Focus rings

- Light surfaces: `outline: 2px solid var(--focus-ring); outline-offset: 2px` (≥9.5:1 on white and canvas).
- Inputs: border becomes `focus-ring` plus a 1px inset shadow (reads as 2px).
- Sidebar, toasts, primary fills: `focus-ring-inverse` (green-400, 4.26:1 on forest-800).
- Rings show for keyboard focus only (`:focus-visible`), never removed.
