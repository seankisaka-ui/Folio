# Alert
An inline message in the page flow, with icon, title, text and optional actions.

**Consumer provides:** `tone` (`info` | `success` | `warning` | `error`), `title`, `children`, optional `actions`, `onDismiss`.

Rules: errors use `role="alert"`; others `role="status"`. Say what happened and what to do. Don't stack more than two.
