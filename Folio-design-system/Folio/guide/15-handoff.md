# 15. Developer handoff and token naming

## Three token layers

1. **Primitive** — raw values: `brand-*`, `green-50…700`, `forest-50…950`, `neutral-0…950`, `amber/red/blue-*`, `space-*`, `radius-*`, `shadow-*`, `control-*`, `icon-*`, `duration-*`, `bp-*`.
2. **Semantic** — purpose: `bg-canvas`, `surface-*`, `text-*`, `border-*`, `primary(-hover|-pressed)`, `on-primary`, `accent(-strong|-subtle)`, `on-accent`, `success*`, `warning*`, `destructive*`, `info*`, `focus-ring(-inverse)`, `scrim`.
3. **Component** — `sidebar-*`, `button-*`, `input-*`, `card-*`, `table-*`, `progress-*`, `tooltip-*`, `ai-*`, `avatar-*`, plus sizing (`control-md`, `sidebar-width`, `dialog-sm`…).

Semantic and component colours are **aliases** (`"{forest-800}"`), compiled to `var(--forest-800)`. Components reference only semantic/component tokens; never hard-code a hex value.

## Naming

- Tokens: kebab-case, `category-role-state` → `button-primary-bg-hover`, `input-border-error`, `text-muted`.
- Components (design files, docs, stories): `Component / Variant / State` → `Button / Primary / Default`, `Input / Text / Error`, `Card / Subject / Active`, `Navigation / Sidebar Item / Selected`.
- CSS classes: `fo-` prefix, BEM-ish → `.fo-btn.fo-btn--primary`, `.fo-pace__num`, state classes `is-selected`, `is-error`, `is-loading`.
- React: PascalCase components, props in the vocabulary of the domain (`pace`, `nextPace`, `passMark`, `status: 'ready-for-test'`).

## Using it

- **CSS variables:** load the generated `tokens.css`, then `components/bundle.css`. Every token is `--<name>`.
- **React:** load React 18 and `components/bundle.js`; components are on `window.Folio`. Types in `components/index.d.ts`; sources in `components/src/`.
- **Tailwind:** map tokens in `theme.extend`:

```js
colors: { canvas: 'var(--bg-canvas)', surface: 'var(--surface-default)', primary: { DEFAULT: 'var(--primary)', hover: 'var(--primary-hover)' }, accent: 'var(--accent)', ink: { DEFAULT: 'var(--text-primary)', muted: 'var(--text-muted)' } },
spacing: { 1: 'var(--space-1)', 2: 'var(--space-2)', 4: 'var(--space-4)', 6: 'var(--space-6)', 8: 'var(--space-8)' },
borderRadius: { md: 'var(--radius-md)', lg: 'var(--radius-lg)' },
fontFamily: { display: ['Bricolage Grotesque', 'sans-serif'], body: ['Atkinson Hyperlegible Next', 'sans-serif'] },
```

## Fonts

`fonts/BricolageGrotesque-Variable.woff2` (wght 200–800, opsz 12–96), `fonts/AtkinsonHyperlegibleNext-Variable.woff2` and `-Italic.woff2` (wght 200–800). Latin subset. Both SIL OFL 1.1. Preload the two upright files.

## Domain constants

- Pass mark: household setting, default **80%**; never hard-code in components (`passMark` prop).
- PACE stages: Pages → Checkups → Self Test → PACE Test (`PaceSteps current 0–3`, 4 = done).
- PACE statuses: `not-started`, `in-progress`, `ready-for-test`, `passed`, `needs-review`, `completed` (`StatusBadge`).

## Brand mark

No logo was supplied. The wordmark is "Folio" set in Bricolage Grotesque 700 with a simple "F" tile in `accent` — a placeholder until a real mark exists.
