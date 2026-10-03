# Badge
A short status label: icon + text on a tinted pill. The only fully rounded element besides avatars and switches.

**Consumer provides:** `tone` (`neutral` | `progress` | `success` | `warning` | `error` | `accent` | `ai`), `children`, optional `icon` (or `false`).

## Rules
- Always icon + word. Tone colours are ≥5.3:1 on their tints.
- Keep to 1–3 words. Use `StatusBadge` for PACE states so wording stays consistent.
- No counts-as-rewards, streaks or points.
