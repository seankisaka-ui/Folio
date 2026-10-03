# 14. Accessibility guidance

Baseline: **WCAG 2.1 AA**, designed for older and non-technical users.

## Contrast (verified)

- Text ≥4.5:1 on its ground; large text (24px+ / 19px bold) ≥3:1; control boundaries, focus rings and meaningful icons ≥3:1. Every text token's usage note names the grounds it was checked on.
- Known limits: `brand-green` on white is 2.39:1 — never text, never a fill under white text. `brand-grey-green` (2.30:1) is disabled/decorative only.

## Keyboard

- Everything operable by keyboard in visual order. Visible `:focus-visible` ring on every interactive element.
- Tabs: ←/→/Home/End. Menus: ↑/↓, Escape returns focus to the trigger. Dialogs/sheets/drawer: focus moves in, is trapped, Escape closes, focus returns.
- Provide a "Skip to content" link as the first focusable element of the shell.

## Screen readers

- Landmarks: `aside` (sidebar, "Main navigation"), `header`, `main`, `nav` (breadcrumbs, pagination, bottom nav).
- One `h1` per page; headings in order. Sidebar section headings name their lists.
- `aria-current="page"` on the current nav item; `aria-selected` on tabs/options; `aria-pressed` on toggle cards; `aria-busy` while loading.
- Live regions: toasts `role="status"`; errors `role="alert"`; result counts polite.
- Progress bars expose `aria-valuetext` matching the visible "18 of 36 pages".
- Icon-only buttons always have `aria-label`; decorative icons are hidden.

## Forms

- Persistent visible labels (never placeholder-only). Required/optional marked in words.
- Errors next to the field, with an icon, linked via `aria-describedby`, saying how to fix. Keep entered values after an error.
- Editable vs read-only: inputs have a solid control border; read-only values have no box, a dashed outline and a lock icon.

## Colour independence

Every status = colour + icon + word. Selected = colour + border/indicator + weight. Charts (if ever) are labelled directly.

## Targets and reading

≥44×44px desktop, ≥48×48px touch. Body 16px, line-height 1.5; no important text below 14px. Supports 200% zoom and text-spacing overrides without loss.

## Motion

Transitions ≤240ms on colour/opacity. `prefers-reduced-motion` removes them; spinners slow; skeletons stop pulsing.

## Checklist before shipping a screen

- [ ] Tab through: order logical, ring always visible, nothing trapped.
- [ ] Screen reader: page title, headings, landmarks, labels, states announced.
- [ ] 320px wide and 200% zoom: no horizontal page scroll, nothing cut off.
- [ ] Grayscale screenshot: every status still understandable.
- [ ] Every record change has a confirmation that states what will be saved.
