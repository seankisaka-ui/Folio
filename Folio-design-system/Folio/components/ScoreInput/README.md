# ScoreInput
Percentage entry for PACE test, Self Test and Checkup scores, with a fixed "%" suffix and immediate pass-mark feedback.

**Consumer provides:** `value`, `onChange`, and — through `Field` — the feedback message based on the pass mark (default 80%; configurable per household).

## Rules
- Accept 0–100 only; reject anything else with "Enter a score from 0 to 100."
- At or above the pass mark: `success` message "Passed". Below: `warning` message naming the pass mark and the consequence. Never show red for a low score — it is information, not an error.
- 18px semibold tabular digits so the number is easy to verify before saving.

Naming: `Input / Score / Default`, `Input / Score / Passed`, `Input / Score / Below pass mark`, `Input / Score / Error`.
