# 4. Typography

Two families, each with one job.

**Bricolage Grotesque** (variable, 200–800, optical size axis) — page titles, section headings, the dashboard greeting, child names and dialog titles. It gives Folio its character. Never use it for paragraphs, tables, form fields or labels.

**Atkinson Hyperlegible Next** (variable, 200–800, with italic) — everything else: body, navigation, buttons, labels, inputs, helper and validation text, tables, PACE numbers, scores, dates, reports and all mobile UI text. Designed for low-vision readers: distinct letterforms (I l 1, O 0) make PACE numbers and scores unambiguous.

Both families ship as real font files in `fonts/` (SIL Open Font License).

## Scale

| Style | Family | Size / line | Weight | Use |
|---|---|---|---|---|
| `text-display` | Bricolage | 40 / 44 (mobile 32/38) | 700 | "Good morning, Ruth" — Home only |
| `text-h1` | Bricolage | 32 / 38 (mobile 26/32) | 700 | Page title, child name on profile |
| `text-h2` | Bricolage | 24 / 30 (mobile 22/28) | 600 | Page sections ("Current PACEs") |
| `text-h3` | Bricolage | 20 / 26 | 600 | Card titles, subject names, dialog titles |
| `text-h4` | Bricolage | 18 / 24 | 600 | Small headings in cards/forms |
| `text-body-lg` | Atkinson | 18 / 28 | 400 | Intros, empty states |
| `text-body` | Atkinson | 16 / 24 | 400 | Default — including table cells |
| `text-body-sm` | Atkinson | 14 / 20 | 400 | Metadata, helper text |
| `text-caption` | Atkinson | 13 / 18 | 400 | Timestamps only, sparingly |
| `text-label` | Atkinson | 15 / 20 | 600 | Form labels, table headers |
| `text-control` | Atkinson | 16 / 24 | 500 | Buttons, inputs, nav items |
| `text-overline` | Atkinson | 13 / 16, +0.06em, uppercase | 600 | Sidebar section headings |
| `text-number-xl` | Atkinson | 40 / 44 | 700 | Test score hero |
| `text-number-lg` | Atkinson | 28 / 32 | 700 | PACE number on PaceCard, stat values |
| `text-number-md` | Atkinson | 18 / 24 | 600 | PACE numbers and scores in lists |

## Rules

- Numbers that are compared (PACE numbers, scores, pages) use `font-variant-numeric: tabular-nums` (`.fo-num`).
- Line length for prose: max `reading-max` (720px, ~70 characters).
- Weights: Atkinson 400 content, 500 controls, 600 labels/values, 700 strong emphasis. Bricolage 700 major, 600 section/small headings.
- Bricolage letter-spacing tightens slightly at large sizes (-0.02em display, -0.015em h1); never track out body text.
- Don't fake hierarchy with colour; use size and weight first.

## The pair in context

> **Sarah Mukasa** *(text-h1, Bricolage 700)*
> Age 10 · Level 4 · Progress updated today *(text-body, Atkinson 400, text-secondary)*
>
> **Mathematics** *(text-h3, Bricolage 600)*
> PACE **1048** *(text-number-lg, Atkinson 700)* — 18 of 36 pages *(text-body-sm)*
> Test score: **92%** · Passed *(text-number-xl + Badge)*
> **Advance to PACE 1049** *(text-control, Atkinson 500 on primary)*
