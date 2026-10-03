Folio is a calm, highly readable recordkeeping tool for parents and supervisors running the Accelerated Christian Education (A.C.E.) curriculum at home. Its whole job is one workflow, done reliably:

**Child → Subject → PACE → Progress → Test Score → Next PACE → Permanent Record**

Build every screen from this system's tokens and components. Read the sections in order the first time; afterwards use them as reference. When something isn't covered, follow the closest existing pattern rather than inventing a new visual rule.

## 1. Design principles

1. **Clarity over cleverness.** Every screen answers "what is happening with my child, and what do I do next?" Plain words, visible labels, one obvious next action per card (`PaceCard` shows exactly one).
2. **Readable by default.** Body text is 16px Atkinson Hyperlegible Next (`text-body`); nothing important is smaller than 14px (`text-body-sm`); `text-caption` (13px) is for timestamps only. Older eyes are the design target, not an edge case.
3. **Predictable everywhere.** The sidebar never changes order. Buttons always say what they do. The same status always uses the same `StatusBadge` wording, icon and tone.
4. **Records are sacred.** Nothing changes the permanent record without an explicit confirmation that states exactly what will be saved (`ConfirmDialog`, `AiActionPreview`). Advancing to the next PACE is never automatic. AI never silently changes a record.
5. **Calm, warm, trustworthy.** Light workspace (`bg-canvas`), a deep-green sidebar (`sidebar-bg`), restrained borders, small intentional touches of bright green (`accent`). No gamification, no badges-as-rewards, no streaks, no confetti, no childish school graphics.
6. **Meaning never rides on colour alone.** Every status pairs colour with a word and an icon; every chart-like element (progress) prints its number.
7. **Comfortable to touch and click.** Controls are 44px (`control-md`) on desktop and at least 48px (`touch-mobile`) on touch screens.

## Voice and content

- Speak to the parent as "you"; refer to children by first name: "Sarah is ready for her Mathematics test."
- Sentence case everywhere — titles, buttons, labels. Never ALL CAPS except the `text-overline` sidebar headings (set by CSS, not typed).
- Use A.C.E. vocabulary exactly: **PACE** (always capitals), **Checkup**, **Self Test**, **PACE Test**, **pass mark**, **Level**. Write PACE numbers as "PACE 1048".
- Numbers: "92%", "18 of 36 pages", dates as "3 Oct 2026" (lists) or "Saturday, 3 October" (greetings). Never ambiguous numeric dates.
- Buttons start with a verb and name the object: "Record test score", "Advance to PACE 1049", "Save progress". Never "Submit" or "OK".
- Errors say what happened and how to fix it: "Enter a score from 0 to 100." Low scores are information, not errors: "Below the 80% pass mark."
- No emoji, no exclamation marks in system messages, no jokes in error states.

## Quick rules

- Page background `bg-canvas`; content on `Card` (`card-bg`, `card-border`, `radius-lg`).
- Headings: Bricolage Grotesque (`text-display` … `text-h4`). Everything else: Atkinson Hyperlegible Next.
- Primary action: `Button variant="primary"` (forest-800 with white text). One per view.
- Bright green (`accent`, `brand-green`) only for: selected-nav indicator, bottom-nav selected pill, accent badges, progress (via `accent-strong`). Text on it is always `on-accent` (smoky black) — never white.
- Focus: 2px `focus-ring` with 2px offset on light surfaces; `focus-ring-inverse` inside the sidebar.
- Spacing on the 4px grid, mostly 8px steps: `space-2` inside controls, `space-4`/`space-6` inside cards, `space-6` between cards, `space-8` page gutter.
