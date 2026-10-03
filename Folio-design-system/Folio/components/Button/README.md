# Button
The one control for actions; six variants, three sizes, with every state built in.

**Consumer provides:** `children` (a verb-first label: "Save score", "Advance to PACE 1049"), `variant`, `size`, optional `iconLeft` / `iconRight`, `loading`, `loadingText`, `disabled`, `block`, `onClick`, `type`.

## Variants
| Variant | Use for | Tokens |
|---|---|---|
| `primary` | The single most important action in a view | `button-primary-*` (forest-800, white text 10.19:1) |
| `secondary` | Frequent, positive but not final actions ("Log progress") | `button-secondary-*` |
| `outline` | Neutral actions: Cancel, Filter, Export | `button-outline-*` |
| `ghost` | Low-emphasis actions in toolbars and cards | `button-outline-bg-hover` |
| `link` | Inline navigation inside text | `text-link`, underlined |
| `destructive` | Removing a child, deleting a record — always behind a confirmation | `button-destructive-bg` |

## Sizes
`sm` 36px (dense desktop tables only), `md` 44px (default), `lg` 52px (dialog primary action and mobile). On touch screens every size grows to at least `touch-mobile` (48px).

## States
Default · Hover · Focus (2px `focus-ring`, 2px offset) · Pressed · Loading (spinner + "Saving…", `aria-busy`, clicks ignored) · Disabled (`input-bg-disabled` + `text-disabled`; explain why nearby).

## Rules
- One `primary` per view or dialog. Bright green is **never** a button fill with white text.
- Labels say what happens, in sentence case: "Record test score", not "Submit".
- Put the primary action last (right) in dialogs; stack full-width under 480px.
- Prefer keeping a button enabled and showing a validation message over a silent disabled state.

Naming: `Button / Primary / Default`, `Button / Primary / Hover`, `Button / Destructive / Loading`.
