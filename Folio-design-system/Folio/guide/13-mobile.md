# 13. Mobile examples

Mobile is the companion for quick checks and quick updates. Cards in the **Mobile examples** group show 375px and 320px frames.

## Rules

- **Navigation:** `MobileTopBar` (Menu or Back + short title + one action) and `BottomNav` with four labelled destinations — Home, Children, Log, More. "More" and the Menu button open `MobileDrawer` with the full sidebar.
- **Headers:** simplified — title 1–3 words in the top bar; the page's own `h1` sits in content at mobile sizes (26/32).
- **Stacking:** cards and fields stack in one column with `space-4` gaps and 16px gutters. Two short fields (From/To page) may share a row only ≥480px.
- **Targets:** ≥48px for everything tappable; primary actions use `size="lg"` (52px), full width.
- **Sticky actions:** only when a form is longer than one screen — a bottom bar with the single primary action above the safe area. Never sticky on read-only screens.
- **Tables:** become `RecordRow` lists (title, meta, value, chevron). Simple tables may use `Table stackOnMobile` (labelled blocks) or prioritise 2–3 columns with horizontal scroll inside a labelled region.
- **Overlays:** dialogs become `BottomSheet` (max 90% height, scrollable body, Close button, Escape, safe-area padding). No nested sheets.
- **Text:** never below 14px; inputs 16px so iOS doesn't zoom.
- **320px:** everything must still fit — long meta text wraps, badges stay on one line, buttons go full width.

## Examples

1. **Mobile child overview** — alert for the ready test, full-width "Log progress", current PACEs as record rows, bottom nav (375 and 320).
2. **Mobile quick progress entry** — bottom sheet with subject, page range, date and a 52px Save.
3. **Bottom sheet test score** (BottomSheet card) — score with pass feedback.
