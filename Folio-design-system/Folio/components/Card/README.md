# Card
The basic container: white `card-bg`, 1px `card-border`, `radius-lg`, `shadow-xs`, 24px padding (16px on mobile).

**Consumer provides:** `children`, optional `title`, `subtitle`, `action` (a button or IconButton in the header), `footer`, `flush` (no padding, for tables/lists), `muted`.

## Rules
- One topic per card. Title in `text-h3` (Bricolage); body in Atkinson.
- Cards sit on `bg-canvas` with `space-6` gaps (`space-4` on mobile). Never nest cards — use `muted` panels or dividers inside.
- No coloured left borders, no gradients.

Naming: `Card / Standard`, `Card / Muted`, `Card / Flush`.
