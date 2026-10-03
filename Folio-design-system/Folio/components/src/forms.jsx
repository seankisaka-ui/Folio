import { Icon, cx } from "./core.jsx";
const { createElement: h, useState, useId, cloneElement, Children } = window.React;

/**
 * Field — label + control + helper + validation. Wires htmlFor, aria-describedby and aria-invalid.
 * The label is always visible (never placeholder-only).
 */
export function Field({ label, helper, error, success, warning, required, optional, id: idProp, children, className }) {
  const auto = useId();
  const id = idProp || `f${auto.replace(/:/g, "")}`;
  const helpId = helper ? `${id}-help` : undefined;
  const msgId = error || success || warning ? `${id}-msg` : undefined;
  const describedBy = [msgId, helpId].filter(Boolean).join(" ") || undefined;
  const child = Children.only(children);
  const control = cloneElement(child, { id, "aria-describedby": describedBy, "aria-invalid": error ? true : undefined, invalid: !!error, success: !!success, required });
  return h("div", { className: cx("fo-field", className) },
    h("label", { className: "fo-field__label", htmlFor: id }, label,
      required && h("span", { className: "fo-field__req" }, "(required)"),
      optional && h("span", { className: "fo-field__req" }, "(optional)")),
    helper && h("p", { id: helpId, className: "fo-field__helper" }, helper),
    control,
    error && h("p", { id: msgId, className: "fo-field__msg fo-field__msg--error", role: "alert" }, h(Icon, { name: "circle-alert", size: 18 }), error),
    !error && warning && h("p", { id: msgId, className: "fo-field__msg fo-field__msg--warning" }, h(Icon, { name: "triangle-alert", size: 18 }), warning),
    !error && !warning && success && h("p", { id: msgId, className: "fo-field__msg fo-field__msg--success" }, h(Icon, { name: "circle-check", size: 18 }), success));
}

const ctl = (extra, { invalid, success, disabled, size }) => cx("fo-control", extra, invalid && "is-error", success && !invalid && "is-success", disabled && "is-disabled", size === "sm" && "fo-control--sm");

export function TextInput({ invalid, success, icon, suffix, end, size, className, type = "text", ...rest }) {
  return h("div", { className: ctl(className, { invalid, success, disabled: rest.disabled, size }) },
    icon && h("span", { className: "fo-control__icon" }, h(Icon, { name: icon })),
    h("input", { type, ...rest }),
    suffix && h("span", { className: "fo-control__suffix", "aria-hidden": true }, suffix),
    end && h("span", { className: "fo-control__end" }, end));
}

export function NumberInput({ min, max, step = 1, ...rest }) {
  return h(TextInput, { type: "text", inputMode: "numeric", pattern: "[0-9]*", min, max, step, className: "fo-control--number", ...rest });
}

/** ScoreInput — 0–100 percentage with a visible % suffix. Shows pass/below-pass feedback via Field messages, not colour alone. */
export function ScoreInput({ ...rest }) {
  return h(TextInput, { type: "text", inputMode: "numeric", maxLength: 3, suffix: "%", className: "fo-control--score", ...rest });
}

export function DateInput(props) {
  return h(TextInput, { type: "date", ...props });
}

export function Select({ options = [], placeholder, invalid, success, size, className, ...rest }) {
  return h("div", { className: ctl(cx("fo-control--select", className), { invalid, success, disabled: rest.disabled, size }) },
    h("select", rest,
      placeholder && h("option", { value: "" }, placeholder),
      options.map((o) => (typeof o === "string" ? h("option", { key: o, value: o }, o) : h("option", { key: o.value, value: o.value, disabled: o.disabled }, o.label)))),
    h(Icon, { name: "chevron-down", className: "fo-control__chev" }));
}

export function SearchField({ label = "Search", onClear, value, ...rest }) {
  return h(TextInput, { type: "search", icon: "search", "aria-label": rest["aria-label"] || label, value, className: "fo-search",
    end: value && onClear ? h("button", { type: "button", className: "fo-iconbtn", style: { width: 36, height: 36 }, onClick: onClear, "aria-label": "Clear search" }, h(Icon, { name: "x", size: 18 })) : null, ...rest });
}

export function TextArea({ invalid, success, className, ...rest }) {
  return h("div", { className: ctl(className, { invalid, success, disabled: rest.disabled }) }, h("textarea", { rows: 4, ...rest }));
}

export function Checkbox({ label, description, invalid, indeterminate, className, ...rest }) {
  const ref = (el) => { if (el) el.indeterminate = !!indeterminate; };
  return h("label", { className: cx("fo-check", rest.disabled && "is-disabled", invalid && "is-error", className) },
    h("input", { type: "checkbox", ref, "aria-invalid": invalid || undefined, ...rest }),
    h("span", null, label, description && h("span", { className: "fo-check__desc" }, description)));
}

export function Radio({ label, description, card, className, ...rest }) {
  return h("label", { className: cx("fo-check", card && "fo-radio-card", rest.disabled && "is-disabled", className) },
    h("input", { type: "radio", ...rest }),
    h("span", null, label, description && h("span", { className: "fo-check__desc" }, description)));
}

/** RadioGroup — fieldset + legend; options [{value,label,description}]. */
export function RadioGroup({ legend, name, options = [], value, defaultValue, onChange, card, error, horizontal }) {
  const [v, setV] = useState(defaultValue);
  const cur = value ?? v;
  return h("fieldset", { className: "fo-fieldset", "aria-invalid": error ? true : undefined },
    h("legend", null, legend),
    h("div", { style: { display: "flex", flexDirection: horizontal ? "row" : "column", gap: card ? 8 : 0, flexWrap: "wrap" } },
      options.map((o) => h(Radio, { key: o.value, name, value: o.value, label: o.label, description: o.description, card, disabled: o.disabled,
        checked: cur === o.value, onChange: () => { setV(o.value); onChange && onChange(o.value); } }))),
    error && h("p", { className: "fo-field__msg fo-field__msg--error", role: "alert" }, h(Icon, { name: "circle-alert", size: 18 }), error));
}

/** Switch — immediate on/off setting. Shows On/Off text so state never relies on colour or position alone. */
export function Switch({ label, checked: c, defaultChecked = false, onChange, disabled, showState = true }) {
  const [v, setV] = useState(defaultChecked);
  const on = c ?? v;
  return h("button", { type: "button", role: "switch", "aria-checked": on, className: "fo-switch", disabled, onClick: () => { setV(!on); onChange && onChange(!on); } },
    h("span", { className: "fo-switch__track" }, h("span", { className: "fo-switch__thumb" }, on && h(Icon, { name: "check", size: 14, strokeWidth: 3 }))),
    h("span", null, label),
    showState && h("span", { className: "fo-switch__state", "aria-hidden": true }, on ? "On" : "Off"));
}

/** ReadOnlyField — shows a saved value that cannot be edited here. Dashed box + lock icon tell it apart from inputs. */
export function ReadOnlyField({ label, value, hint = "Read only" }) {
  return h("div", { className: "fo-readonly" },
    h("span", { className: "fo-readonly__label" }, label, h(Icon, { name: "lock", size: 14, label: hint })),
    h("span", { className: "fo-readonly__value" }, value));
}

export function FieldGroup({ columns = 1, children }) {
  return h("div", { className: cx("fo-fieldgroup", columns === 2 && "fo-fieldgroup--2") }, children);
}
