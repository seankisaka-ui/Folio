import { ICONS } from "./icons.js";
const { createElement: h, Fragment, useState } = window.React;

export const cx = (...a) => a.filter(Boolean).join(" ");

/** Icon — Lucide outline icon. Decorative by default (aria-hidden); pass `label` when it carries meaning on its own. */
export function Icon({ name, size = 20, label, className, strokeWidth = 2, ...rest }) {
  const inner = ICONS[name] || ICONS["circle-help"];
  return h("svg", {
    className: cx("fo-icon", className), width: size, height: size, viewBox: "0 0 24 24", strokeWidth,
    role: label ? "img" : undefined, "aria-label": label, "aria-hidden": label ? undefined : true, focusable: "false",
    dangerouslySetInnerHTML: { __html: (label ? `<title>${label}</title>` : "") + inner }, ...rest,
  });
}
Icon.names = Object.keys(ICONS);

export function Spinner({ label = "Loading", size = 20, showLabel = false, className }) {
  return h("span", { className: cx("fo-spinner", className), role: "status" },
    h(Icon, { name: "loader-circle", size }),
    showLabel ? h("span", null, label) : h("span", { className: "fo-sr" }, label));
}

export function Skeleton({ width = "100%", height = 16, radius, className, style }) {
  return h("span", { className: cx("fo-skeleton", className), "aria-hidden": true, style: { width, height, borderRadius: radius, ...style } });
}

/** Button — variants primary | secondary | outline | ghost | link | destructive; sizes sm | md | lg. */
export function Button({ variant = "primary", size = "md", iconLeft, iconRight, loading = false, loadingText, block, pressed, className, children, disabled, type = "button", ...rest }) {
  const iconSize = size === "lg" ? 22 : 20;
  return h("button", {
    type, className: cx("fo-btn", `fo-btn--${variant}`, size !== "md" && `fo-btn--${size}`, block && "fo-btn--block", loading && "is-loading", pressed && "is-pressed", className),
    disabled: disabled || undefined, "aria-busy": loading || undefined,
    ...rest, onClick: loading ? (e) => e.preventDefault() : rest.onClick,
  },
    loading ? h(Icon, { name: "loader-circle", size: iconSize, style: { animation: "fo-spin .9s linear infinite" } }) : iconLeft && h(Icon, { name: iconLeft, size: iconSize }),
    h("span", { className: "fo-btn__label" }, loading && loadingText ? loadingText : children),
    !loading && iconRight && h(Icon, { name: iconRight, size: iconSize }));
}

/** IconButton — square icon-only control. `label` is required: it becomes the accessible name and the tooltip. */
export function IconButton({ icon, label, variant = "ghost", size = 22, showTooltip = false, className, ...rest }) {
  const btn = h("button", { type: "button", className: cx("fo-iconbtn", variant !== "ghost" && `fo-iconbtn--${variant}`, className), "aria-label": label, title: showTooltip ? undefined : label, ...rest },
    h(Icon, { name: icon, size }));
  return showTooltip ? h(Tooltip, { text: label, open: true }, btn) : btn;
}

export function Avatar({ name = "", size = "md", className }) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((s) => s[0]).join("").toUpperCase();
  return h("span", { className: cx("fo-avatar", size !== "md" && `fo-avatar--${size}`, className), "aria-hidden": true }, initials);
}

const BADGE_ICON = { neutral: "clock", progress: "loader-circle", success: "circle-check", warning: "triangle-alert", error: "circle-x", accent: "check", ai: "sparkles" };
/** Badge — status label. Always text + icon so meaning never depends on colour. */
export function Badge({ tone = "neutral", icon, children, className }) {
  const ic = icon === false ? null : icon || BADGE_ICON[tone];
  return h("span", { className: cx("fo-badge", `fo-badge--${tone}`, className) }, ic && h(Icon, { name: ic, size: 16 }), children);
}

/** PACE status presets: maps record state to the right badge. */
export const PACE_STATUS = {
  "not-started": { tone: "neutral", label: "Not started", icon: "clock" },
  "in-progress": { tone: "progress", label: "In progress", icon: "notebook-pen" },
  "ready-for-test": { tone: "warning", label: "Ready for test", icon: "clipboard-check" },
  passed: { tone: "success", label: "Passed", icon: "circle-check" },
  "needs-review": { tone: "error", label: "Below pass mark", icon: "circle-alert" },
  completed: { tone: "success", label: "Completed", icon: "check" },
};
export function StatusBadge({ status = "in-progress", children }) {
  const s = PACE_STATUS[status] || PACE_STATUS["in-progress"];
  return h(Badge, { tone: s.tone, icon: s.icon }, children || s.label);
}

export function AiTag({ edited, children }) {
  return h(Badge, { tone: "ai", icon: "sparkles" }, children || (edited ? "AI-assisted · edited" : "AI-assisted"));
}

/** Tooltip — short supplementary text on hover AND focus. Never the only place information lives. */
export function Tooltip({ text, placement = "top", open: forced, children }) {
  const [open, setOpen] = useState(false);
  const id = window.React.useId();
  const show = forced ?? open;
  return h("span", { className: "fo-tip-wrap", onMouseEnter: () => setOpen(true), onMouseLeave: () => setOpen(false), onFocus: () => setOpen(true), onBlur: () => setOpen(false), onKeyDown: (e) => e.key === "Escape" && setOpen(false) },
    window.React.cloneElement(children, { "aria-describedby": id }),
    h("span", { id, role: "tooltip", className: cx("fo-tip", placement === "bottom" && "fo-tip--bottom"), hidden: !show }, text));
}
