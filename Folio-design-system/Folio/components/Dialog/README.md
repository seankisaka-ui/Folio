# Dialog
A modal for short forms and decisions. Focus moves in and is trapped; Escape and Close dismiss; focus returns to the trigger.

**Consumer provides:** `open`, `onClose`, `title`, optional `icon`, `tone` (`default` | `warning` | `danger`), `size` (`sm` 440px · `md` 560px), `children`, `footer` (buttons, primary last), `dismissible`.

## Rules
- Use for one task with ≤5 fields. Longer tasks get a page.
- Title states the task ("Log progress for Sarah"). Primary action repeats the verb ("Save progress").
- Under 640px use `BottomSheet` instead.

Naming: `Dialog / Form`, `Dialog / Confirmation`.
