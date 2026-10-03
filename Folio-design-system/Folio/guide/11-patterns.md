# 11. Product-specific patterns

Each pattern has a live card in the **Patterns** group. They compose existing components — no new visual rules.

| Pattern | Flow | Key components |
|---|---|---|
| Add a child | Page form, "Step 1 of 3", name → level → subjects | `Card`, `Field`, `TextInput`, `Select`, `Button` |
| Assign subjects + starting PACEs | Checkbox per subject reveals its "Starting PACE" input; summary before save | `Checkbox`, `NumberInput`, `Alert` |
| Log progress | Context read-only; Pages or a stage; page range; date = today; toast with Undo | `RadioGroup`, `NumberInput`, `ProgressBar`, `Toast` |
| Complete a PACE + record test score | Ready for test → ScoreInput with pass-mark feedback → ConfirmDialog | `PaceCard`, `ScoreInput`, `ConfirmDialog` |
| Below pass mark | Warning (not error) + explicit choice: repeat or retest | `Field warning`, `RadioGroup card` |
| Advance to next PACE | Explicit, confirmed; next number pre-filled and editable; old PACE → history | `ConfirmDialog`, `HistoryEntry` |
| Review history | Timeline + scores table; filter by subject/term; corrections keep an audit line | `Tabs`, `Timeline`, `Table`, `Select` |
| View all children | Grid of ChildSummaryCards, oldest first, each stating today's need | `ChildSummaryCard`, `Badge` |
| Filter records | Search + ≤3 Selects + Clear; results restated in words; mobile → sheet | `SearchField`, `Select`, `BottomSheet` |
| Generate/preview a report | Options left, print-faithful preview right; PDF + Print | `Checkbox`, `Table`, `Button` |
| Confirm an AI entry | Composer → thinking → preview (or clarify / fallback) → Save → toast + AiTag | AI components |

## The record lifecycle rules

1. A PACE is **in progress** from assignment until its pages, Checkups and Self Test are done → **ready for test**.
2. A test score is saved only via confirmation. At/above the pass mark (household setting, default 80%) → **passed**; below → **below pass mark** and the parent chooses what happens next.
3. Advancing is a separate confirmed action. Only then does the PACE enter the **permanent record** and the next PACE begin.
4. Permanent-record entries are read-only; corrections are explicit and audited.

## AI assistant pattern

The assistant speeds up entry and retrieval; it never acts alone.

- **Entry:** `AssistantComposer` on `ai-surface` with real example prompts ("Sarah scored 92% on Math PACE 1048") and the standing note "Nothing is saved until you confirm."
- **Interpretation:** `AiActionPreview` lists **child, subject, PACE number, score, date** in large semibold text, each editable (Edit details). Edited fields are marked; missing fields say "Not given" and block saving.
- **Confirmation:** "Save to record" is the only way a change happens. Cancel discards. After saving: toast with Undo.
- **Ambiguity:** `AiClarification` asks one question with explicit options — never guesses between children.
- **Failure:** `AiFallback` states nothing was saved and offers "Enter it myself" (the manual form, pre-filled with anything understood).
- **Retrieval:** answers to questions ("What PACE is Grace on in Science?") are shown as normal components (PaceCard, Table) with a "From the assistant" `AiTag`, and link to the source record.
- **Provenance:** AI-assisted entries carry `AiTag` ("AI-assisted" / "AI-assisted · edited") permanently in activity, history and reports.
