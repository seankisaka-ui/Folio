# 8. Icons

**System:** [Lucide](https://lucide.dev) outline icons (ISC licence), 24px grid, 2px stroke, round caps and joins. Rendered inline through `Icon` so they inherit `currentColor`. The 47 icons Folio uses are in the bundle (`Icon.names`) and as single-ink SVG files in the **Icons** asset group (ink `#21483E`, forest-800 — `<img>` can't inherit colour, so use the component in product code).

## Meaning map — use these and only these

| Concept | Icon |
|---|---|
| Home | `house` |
| Children / household | `users` · add child `user-plus` |
| Log progress | `notebook-pen` |
| Test scores / ready for test | `clipboard-check` |
| Academic history | `history` |
| Reports | `file-text` · download `download` · print `printer` |
| Assistant / AI | `sparkles` |
| Settings · Help | `settings` · `circle-help` |
| Subjects | Mathematics `list-checks` · English `book-open` · Word Building `pencil` · Science `layers` · Social Studies `graduation-cap` |
| Passed / success | `circle-check` |
| Warning / below pass mark context | `triangle-alert` |
| Error | `circle-alert` · failed `circle-x` |
| Info | `info` |
| Not started / waiting | `clock` |
| Advance / next | `arrow-right` |
| Read-only | `lock` |
| Offline | `wifi-off` · retry `refresh-cw` |
| Close · More · Menu · Collapse | `x` · `ellipsis` · `menu` · `chevrons-left` |

## Rules

- Sizes: 16 badges · 20 buttons/inputs/lists · 22 navigation · 24 alerts and icon buttons · 32 empty/status states.
- Navigation always shows text labels next to icons. Icon-only controls (`IconButton`) are limited to close, more, menu, collapse and edit, and always have an accessible label and tooltip.
- Decorative icons are `aria-hidden`; an icon that carries meaning alone gets a `label` — but prefer visible text.
- No emoji, no filled icon variants, no second icon set, no illustrated school clip art.
