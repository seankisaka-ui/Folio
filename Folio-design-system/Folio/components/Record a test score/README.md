# Complete a PACE and record the test score
When a PACE reaches "Ready for test", the PaceCard's primary action becomes **Record test score**.

1. Enter the score (ScoreInput) and date. Pass/below feedback appears under the field in words.
2. Confirm in a ConfirmDialog that lists child, subject, PACE, score and date.
3. Passed → status "Passed" and the card offers **Advance to PACE 1049**. Below pass mark → card choices "Repeat PACE" / "Retest after review" (RadioGroup cards). Nothing advances automatically.
