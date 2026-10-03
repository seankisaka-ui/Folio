# TextInput
Single-line text entry at 44px (`control-md`) with a 1px `input-border` (3.75:1) that thickens to the focus ring.

**Consumer provides:** standard input props (`value`, `onChange`, `placeholder`, `disabled`, `type`), optional `icon` (leading), `suffix`, `end` (trailing element), `size="sm"`. Wrap in `Field` for the label.

## States
| State | Look |
|---|---|
| Default | `input-bg`, `input-border` |
| Hover | `input-border-hover` |
| Focus | 2px `focus-ring` (border + 1px shadow) |
| Filled | value in `text-primary` |
| Error | 2px `input-border-error` + Field error message with icon |
| Success | `success` border + success message |
| Disabled | `input-bg-disabled`, `text-disabled`, no hover |
| Read-only | use `ReadOnlyField` — no box, dashed outline, lock icon |

## Rules
- Text is 16px so phones never zoom on focus.
- Placeholders are examples ("e.g. 1048"), never labels.
- Use `NumberInput`, `ScoreInput`, `DateInput`, `SearchField` for those data types.

Naming: `Input / Text / Default` … `Input / Text / Error`.
