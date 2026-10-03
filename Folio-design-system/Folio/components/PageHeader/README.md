# PageHeader
Page title in Bricolage Grotesque, one line of context, and the page's main actions on the right.

**Consumer provides:** `title`, optional `subtitle`, `actions` (max one primary + one other), `breadcrumbs`, `display` (greeting size, Home only).

## Rules
- One `h1` per page. The Home greeting uses `text-display` ("Good morning, Ruth"); every other page uses `text-h1`.
- Subtitle states current context in plain words: "3 children · 12 PACEs in progress".
- Actions wrap below the title under 640px; the primary action can move to a sticky bottom bar on mobile.
