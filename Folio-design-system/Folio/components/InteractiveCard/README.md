# InteractiveCard
A card that is a single link or button — for opening a child, subject or record.

**Consumer provides:** `href` or `onClick`, `children`, optional `selected` (for choosing, sets `aria-pressed`), `disabled`, `label` (accessible name when content is long).

States: Default · Hover (`border-control` + `shadow-sm`) · Focus (2px `focus-ring`) · Pressed (`surface-muted`) · Selected (2px `border-selected`) · Disabled.

Rules: show a chevron when it navigates; never put other buttons inside an InteractiveCard (nested interactive elements). Naming: `Card / Interactive / Hover` etc.
