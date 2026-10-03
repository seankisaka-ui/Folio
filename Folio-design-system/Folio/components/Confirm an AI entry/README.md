# Confirm an AI-assisted record entry
1. Parent types or taps an example prompt in `AssistantComposer`.
2. `AiThinking` echoes the request.
3. `AiActionPreview` shows the interpreted fields. If anything is ambiguous → `AiClarification`; if not understood → `AiFallback` with the manual form.
4. Parent edits if needed and presses **Save to record**. Nothing changes before this.
5. Toast with Undo; the entry carries `AiTag` everywhere it appears.
