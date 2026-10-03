# 9. Core components

All components live in the bundle as `window.Folio.<Name>` (React 18), styled by `components/bundle.css`, which consumes tokens only. Each has its own card with a live preview, guidelines and props.

| Group | Components |
|---|---|
| Foundations | `Icon` |
| Actions | `Button` (primary · secondary · outline · ghost · link · destructive × sm · md · lg), `IconButton` |
| Forms | `Field`, `TextInput`, `NumberInput`, `ScoreInput`, `DateInput`, `Select`, `SearchField`, `TextArea`, `Checkbox`, `RadioGroup` (+ `Radio`), `Switch`, `ReadOnlyField`, `FieldGroup` |
| Navigation | `Sidebar`, `NavItem`, `SidebarSection`, `SidebarAccount`, `ChildSwitcher`, `Breadcrumbs`, `PageHeader`, `MobileTopBar`, `BottomNav`, `MobileDrawer` |
| Content | `Card`, `InteractiveCard`, `Avatar`, `Badge`, `StatusBadge`, `ProgressBar`, `PaceSteps`, `ScoreDisplay`, `StatTile`, `ChildSummaryCard`, `SubjectCard`, `PaceCard`, `ActivityItem`, `HistoryEntry` (+ `Timeline`), `RecordRow`, `EmptyState`, `Alert`, `Notification`, `Tooltip`, `Popover`, `DropdownMenu`, `Tabs`, `Pagination`, `Table` |
| Overlays | `Dialog`, `ConfirmDialog`, `BottomSheet` |
| Feedback | `Toast` (+ `ToastRegion`), `Spinner`, `Skeleton`, `StatusMessage`, `ConnectionBanner` |
| AI assistant | `AssistantComposer`, `AiThinking`, `AiActionPreview`, `AiClarification`, `AiFallback`, `AiTag` |

## Intentional additions and omissions

- **Added:** `Avatar` (children are identified by initials in switchers and cards), `PaceSteps` (the four A.C.E. stages), `StatusBadge` (locks PACE-status wording), `ReadOnlyField` (editable vs read-only must be unmistakable), `AiThinking` (prevents layout jumps).
- **Not built — split/menu button.** No Folio action needs a primary action plus alternatives in one control; use `Button` + `DropdownMenu` (`ellipsis`) instead.
- **No chart components.** Progress is numbers + `ProgressBar`.

## Composition rules

- One primary `Button` per view/dialog; card footers hold the card's single next action.
- Never nest cards; never put buttons inside an `InteractiveCard`.
- Use `StatusBadge` for any PACE state, `ScoreDisplay` for any test score, `ReadOnlyField` for any permanent-record value shown in a form.
- Any destructive or record-changing action goes through `ConfirmDialog` (or `AiActionPreview` for AI).
