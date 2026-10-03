# ScoreDisplay
A PACE test score as a large tabular number, with the result in words and the pass mark beside it.

**Consumer provides:** `score` (0–100 or `null` when not tested), `passMark` (default 80), `size` (`lg` 40px · `md` 28px · `sm` 18px), optional `date`.

Rules: the number is never coloured; meaning comes from the badge ("Passed" / "Below pass mark" / "Not tested yet").
