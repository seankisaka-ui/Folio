# 10. Component variants and states

Every interactive component supports the states below. Each component card shows its states side by side, labelled with the component naming (`Button / Primary / Hover`).

| State | Visual rule | Code |
|---|---|---|
| Default | Resting tokens | — |
| Hover | One step darker fill or `border-control-hover`; `duration-fast` | `:hover` |
| Focus | 2px `focus-ring`, 2px offset (`focus-ring-inverse` on dark) | `:focus-visible` |
| Active / pressed | Two steps darker fill | `:active` |
| Selected | `border-selected` + `surface-selected` (+ check), or nav indicator, or tab underline | `aria-selected`, `aria-current`, `aria-pressed` |
| Filled | Value in `text-primary`; placeholder gone | — |
| Loading | Spinner replaces icon; label → "Saving…"; `aria-busy`; clicks ignored | `loading` |
| Success | `success` border/message with `circle-check` | `success` |
| Warning | `warning` message with `triangle-alert` (e.g. below pass mark) | `warning` |
| Error | 2px `input-border-error`, message under the field with `circle-alert`, `role="alert"` | `error` / `invalid` |
| Disabled | `input-bg-disabled`, `text-disabled`, `not-allowed`; explain why nearby | `disabled` |
| Read-only | `ReadOnlyField`: no box, dashed outline, lock icon | — |
| Empty | `EmptyState` explaining why + next step | — |

## Per component

| Component | States shown |
|---|---|
| Button (all variants) | Default, Hover, Focus, Pressed, Loading, Disabled |
| IconButton | Default, Hover, Focus, Disabled, Tooltip |
| Inputs (Text, Number, Score, Date, Select, TextArea) | Default, Hover, Focus, Filled, Error, Success/Warning, Disabled, Read-only |
| Checkbox | Unchecked, Checked, Indeterminate, Focus, Disabled, Error |
| Radio | Default, Selected, Card selected, Disabled |
| Switch | Off, On, Focus, Disabled |
| NavItem | Default, Hover, Focus, Selected, With count, Disabled |
| InteractiveCard | Default, Hover, Focus, Selected, Disabled |
| SubjectCard | Active, Ready for test, Complete, Not started, Selected |
| PaceCard | In progress, Ready for test, Passed |
| Tabs | Default, Hover, Focus, Selected, Disabled |
| Dialog / Sheet | Form, Confirmation, Destructive, Loading confirm |
| Feedback | Toast (success/warning/error), StatusMessage (success/error/offline/loading), ConnectionBanner (offline/online), Skeleton |
| AI | Thinking, Review, Editing, Saved, Clarification, Fallback, Unavailable |

## Transitions

150–200ms (`duration-fast` / `duration-base`) on colour, border and shadow only. No bouncing, scaling or attention-seeking animation.
