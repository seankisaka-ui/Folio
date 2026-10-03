import { Icon, Button, AiTag, Badge, Spinner, cx } from "./core.jsx";
import { TextInput, Select, ScoreInput, DateInput, Radio } from "./forms.jsx";
const { createElement: h, useState, useId } = window.React;

export const EXAMPLE_PROMPTS = [
  "Sarah scored 92% on Math PACE 1048",
  "Daniel finished pages 10–16 in English",
  "What PACE is Grace on in Science?",
  "Show Sarah's test scores this term",
];

/** AssistantComposer — natural-language entry with example prompts. The assistant only proposes; it never saves. */
export function AssistantComposer({ value: v, onChange, onSubmit, prompts = EXAMPLE_PROMPTS, loading, placeholder = "Type what happened, e.g. “Sarah scored 92% on Math PACE 1048”", showPrompts = true }) {
  const [val, setVal] = useState("");
  const value = v ?? val;
  const id = useId();
  const set = (s) => { setVal(s); onChange && onChange(s); };
  return h("section", { className: "fo-ai", "aria-label": "Assistant" },
    h("div", { className: "fo-ai__head" }, h(Icon, { name: "sparkles" }), h("label", { htmlFor: id }, "Ask or record with the assistant")),
    h("form", { className: "fo-ai__compose", onSubmit: (e) => { e.preventDefault(); onSubmit && onSubmit(value); } },
      h("textarea", { id, rows: 1, value, placeholder, onChange: (e) => set(e.target.value), "aria-describedby": `${id}-n` }),
      h(Button, { type: "submit", variant: "primary", iconLeft: loading ? undefined : "send", loading, loadingText: "Reading…", disabled: !value && !loading }, "Send")),
    h("p", { id: `${id}-n`, className: "fo-text-sm fo-text-muted", style: { margin: 0 } }, "The assistant suggests changes. Nothing is saved until you confirm."),
    showPrompts && h("div", null, h("p", { className: "fo-text-sm", style: { margin: "0 0 8px", fontWeight: 600, color: "var(--text-secondary)" } }, "Try one of these"),
      h("div", { className: "fo-ai__prompts" }, prompts.map((p) => h("button", { key: p, type: "button", className: "fo-chip", onClick: () => set(p) }, p)))));
}

/**
 * AiActionPreview — shows what the assistant understood (child, subject, PACE, score, date) BEFORE anything changes.
 * state: review | editing | saving | saved. Every field is editable; changed fields are marked.
 */
export function AiActionPreview({ quote, action = "Record PACE test score", fields = [], state = "review", onConfirm, onEdit, onCancel, onFieldChange, passMark = 80 }) {
  const editing = state === "editing";
  const saved = state === "saved";
  const field = (f) => {
    if (!editing) return h("div", { key: f.key, className: cx("fo-ai__f", f.changed && "is-changed", f.missing && "is-missing") },
      h("span", { className: "fo-ai__f-k" }, f.label, f.changed && h(Badge, { tone: "neutral", icon: "pencil" }, "Edited")),
      h("span", { className: "fo-ai__f-v" }, f.missing ? "Not given" : f.display || f.value));
    const common = { value: f.value, onChange: (e) => onFieldChange && onFieldChange(f.key, e.target.value), "aria-label": f.label };
    const ctl = f.options ? h(Select, { ...common, options: f.options }) : f.type === "score" ? h(ScoreInput, common) : f.type === "date" ? h(DateInput, common) : h(TextInput, common);
    return h("label", { key: f.key, className: "fo-field" }, h("span", { className: "fo-field__label" }, f.label), ctl);
  };
  return h("section", { className: "fo-ai__card", "aria-label": "Suggested change" },
    h("div", { className: "fo-ai__card-head" },
      h("div", null, h("p", { style: { margin: 0, fontWeight: 700 } }, saved ? "Saved to the record" : action), quote && h("p", { className: "fo-ai__quote" }, `You wrote: “${quote}”`)),
      saved ? h(Badge, { tone: "success" }, "Saved") : h(AiTag, null, "AI suggestion")),
    h("div", { className: "fo-ai__fields" }, fields.map(field)),
    !saved && h("p", { className: "fo-ai__note" }, h(Icon, { name: "info", size: 18 }), "Check these details. Nothing changes in the record until you press Save."),
    h("div", { className: "fo-ai__foot" }, saved
      ? [h(Button, { key: "u", variant: "ghost", iconLeft: "undo-2", onClick: onCancel }, "Undo"), h(AiTag, { key: "t", edited: fields.some((f) => f.changed) })]
      : [h(Button, { key: "c", variant: "ghost", onClick: onCancel, disabled: state === "saving" }, "Cancel"),
         !editing && h(Button, { key: "e", variant: "outline", iconLeft: "pencil", onClick: onEdit, disabled: state === "saving" }, "Edit details"),
         h(Button, { key: "s", variant: "primary", iconLeft: "check", loading: state === "saving", loadingText: "Saving…", onClick: onConfirm }, editing ? "Save changes" : "Save to record")]));
}

/** AiClarification — the request was ambiguous; ask one question with explicit choices. */
export function AiClarification({ quote, question, options = [], onChoose, onCancel }) {
  const [v, setV] = useState(null);
  const name = useId();
  return h("section", { className: "fo-ai__card", "aria-label": "The assistant needs more information" },
    h("div", { className: "fo-ai__card-head" }, h("div", null, h("p", { style: { margin: 0, fontWeight: 700 } }, question), quote && h("p", { className: "fo-ai__quote" }, `You wrote: “${quote}”`)), h(Badge, { tone: "warning", icon: "circle-help" }, "Needs your answer")),
    h("fieldset", { className: "fo-fieldset fo-ai__options", style: { paddingTop: 16 } }, h("legend", { className: "fo-sr" }, question),
      options.map((o) => h(Radio, { key: o.value, name, card: true, label: o.label, description: o.description, checked: v === o.value, onChange: () => setV(o.value) }))),
    h("div", { className: "fo-ai__foot" }, h(Button, { variant: "ghost", onClick: onCancel }, "Cancel"), h(Button, { variant: "primary", disabled: !v, onClick: () => onChoose && onChoose(v) }, "Continue")));
}

/** AiFallback — the assistant could not understand or is unavailable; always offer the manual form. */
export function AiFallback({ quote, reason = "I couldn't match this to a child or subject.", onRetry, onManual, unavailable }) {
  return h("section", { className: "fo-ai__card", role: "alert" },
    h("div", { className: "fo-ai__card-head" }, h("div", null, h("p", { style: { margin: 0, fontWeight: 700 } }, unavailable ? "The assistant is unavailable right now" : "I couldn't work that out"), quote && h("p", { className: "fo-ai__quote" }, `You wrote: “${quote}”`)), h(Badge, { tone: "error", icon: "circle-alert" }, "Not saved")),
    h("p", { className: "fo-ai__note", style: { paddingTop: 16 } }, h(Icon, { name: "info", size: 18 }), unavailable ? "Your records are safe. You can still add this yourself using the form." : reason),
    h("div", { className: "fo-ai__foot" }, onRetry && h(Button, { variant: "ghost", iconLeft: "refresh-cw", onClick: onRetry }, "Try again"), h(Button, { variant: "primary", iconLeft: "pencil", onClick: onManual }, "Enter it myself")));
}

/** AiThinking — interim state while the assistant reads the request. */
export function AiThinking({ quote }) {
  return h("section", { className: "fo-ai__card", "aria-busy": true },
    h("div", { className: "fo-ai__card-head" }, h("div", null, h("p", { style: { margin: 0, fontWeight: 700 } }, "Reading your request…"), quote && h("p", { className: "fo-ai__quote" }, `You wrote: “${quote}”`)), h(Spinner, { label: "Reading your request" })),
    h("div", { className: "fo-ai__fields" }, ["Child", "Subject", "PACE", "Score"].map((k) => h("div", { key: k, className: "fo-ai__f" }, h("span", { className: "fo-ai__f-k" }, k), h("span", { className: "fo-skeleton", style: { width: "70%", height: 20 } })))));
}
