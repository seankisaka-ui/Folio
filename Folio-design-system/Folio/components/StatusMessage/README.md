# StatusMessage
A full-panel state for success, error, offline and loading moments.

**Consumer provides:** `kind` (`success` | `error` | `offline` | `loading`), `title`, `text`, `actions`.

Rules: error and offline states always say whether data was kept and offer a way forward.
