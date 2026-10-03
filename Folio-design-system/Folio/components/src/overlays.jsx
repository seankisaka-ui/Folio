import { Icon, Button, IconButton, Spinner, cx } from "./core.jsx";
const { createElement: h, useEffect, useRef, useId } = window.React;

function useModal(open, onClose, inline) {
  const ref = useRef(null);
  useEffect(() => {
    if (!open || inline) return;
    const prev = document.activeElement;
    const el = ref.current;
    const sel = 'button:not(:disabled),a[href],input:not(:disabled),select,textarea,[tabindex]:not([tabindex="-1"])';
    const first = el && (el.querySelector("[data-autofocus]") || el.querySelector(sel));
    first && first.focus();
    const onKey = (e) => {
      if (e.key === "Escape") { e.stopPropagation(); onClose && onClose(); }
      if (e.key === "Tab" && el) {
        const f = [...el.querySelectorAll(sel)]; if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); prev && prev.focus && prev.focus(); };
  }, [open]);
  return ref;
}

/**
 * Dialog — modal for confirmations and short forms. Traps focus, Escape closes, focus returns to the trigger.
 * tone: default | danger | warning. `inline` renders in place (for documentation and previews).
 */
export function Dialog({ open = true, onClose, title, icon, tone = "default", size = "sm", children, footer, inline, dismissible = true }) {
  const ref = useModal(open, onClose, inline);
  const tid = useId();
  if (!open) return null;
  return h("div", { className: cx("fo-overlay", inline && "fo-overlay--inline"), onMouseDown: (e) => e.target === e.currentTarget && dismissible && onClose && onClose() },
    h("div", { ref, className: cx("fo-dialog", size === "md" && "fo-dialog--md"), role: tone === "danger" ? "alertdialog" : "dialog", "aria-modal": true, "aria-labelledby": tid },
      h("div", { className: "fo-dialog__head" },
        icon && h("span", { className: cx("fo-dialog__icon", tone === "danger" && "fo-dialog__icon--danger", tone === "warning" && "fo-dialog__icon--warning"), "aria-hidden": true }, h(Icon, { name: icon, size: 22 })),
        h("h2", { id: tid, className: "fo-dialog__title" }, title),
        dismissible && h(IconButton, { icon: "x", label: "Close", onClick: onClose })),
      h("div", { className: "fo-dialog__body" }, children),
      footer && h("div", { className: "fo-dialog__foot" }, footer)));
}

/** ConfirmDialog — preset: summary of what will change + Cancel / Confirm. */
export function ConfirmDialog({ title, description, summary = [], confirmLabel = "Confirm", cancelLabel = "Cancel", tone = "default", icon, loading, onConfirm, onCancel, inline, open }) {
  return h(Dialog, { open, title, icon: icon || (tone === "danger" ? "trash-2" : "circle-check"), tone, onClose: onCancel, inline,
    footer: [h(Button, { key: "c", variant: "outline", onClick: onCancel }, cancelLabel), h(Button, { key: "o", variant: tone === "danger" ? "destructive" : "primary", loading, loadingText: "Saving…", onClick: onConfirm, "data-autofocus": tone === "danger" ? undefined : true }, confirmLabel)] },
    description && h("p", null, description),
    summary.length > 0 && h("dl", { className: "fo-summary" }, summary.map(([k, v], i) => [h("dt", { key: `k${i}` }, k), h("dd", { key: `v${i}` }, v)])));
}

/** BottomSheet — mobile modal anchored to the bottom; for quick entry and choices. */
export function BottomSheet({ open = true, onClose, title, children, footer, inline }) {
  const ref = useModal(open, onClose, inline);
  const tid = useId();
  if (!open) return null;
  return h("div", { className: cx("fo-sheet-wrap", inline && "fo-sheet-wrap--inline"), onMouseDown: (e) => e.target === e.currentTarget && onClose && onClose() },
    h("div", { ref, className: "fo-sheet", role: "dialog", "aria-modal": true, "aria-labelledby": tid },
      h("div", { className: "fo-sheet__grab", "aria-hidden": true }),
      h("div", { className: "fo-sheet__head" }, h("h2", { id: tid, className: "fo-sheet__title" }, title), h(IconButton, { icon: "x", label: "Close", onClick: onClose })),
      h("div", { className: "fo-sheet__body" }, children),
      footer && h("div", { className: "fo-sheet__foot" }, footer)));
}

const TOAST_ICON = { success: "circle-check", error: "circle-alert", warning: "triangle-alert", info: "info" };
/** Toast — brief confirmation after an action, with optional Undo. role=status; stays ≥6s and pauses on hover. */
export function Toast({ tone = "success", children, action, onDismiss }) {
  return h("div", { className: cx("fo-toast", `fo-toast--${tone}`), role: tone === "error" ? "alert" : "status" },
    h(Icon, { name: TOAST_ICON[tone], size: 22 }), h("p", { className: "fo-toast__text" }, children), action,
    onDismiss && h(IconButton, { icon: "x", label: "Dismiss", onClick: onDismiss, size: 18 }));
}
export function ToastRegion({ children }) { return h("div", { className: "fo-toast-region", "aria-live": "polite" }, children); }

/** StatusMessage — full-panel state: success | error | offline | loading. */
export function StatusMessage({ kind = "success", title, text, actions }) {
  const icon = { success: "circle-check", error: "circle-x", offline: "wifi-off", loading: null }[kind];
  return h("div", { className: cx("fo-status", `fo-status--${kind}`), role: kind === "error" ? "alert" : "status" },
    h("span", { className: "fo-status__icon", "aria-hidden": true }, icon ? h(Icon, { name: icon, size: 28 }) : h(Spinner, { size: 28, label: "" })),
    h("h3", { className: "fo-empty__title" }, title), text && h("p", { className: "fo-empty__text" }, text),
    actions && h("div", { className: "fo-empty__actions" }, actions));
}

/** ConnectionBanner — sticky strip when offline; changes saved on this device sync later. */
export function ConnectionBanner({ online = false, pending = 0, onRetry }) {
  return h("div", { className: cx("fo-banner", online && "fo-banner--online"), role: "status" },
    h(Icon, { name: online ? "circle-check" : "wifi-off", size: 20 }),
    h("span", { style: { flex: 1 } }, online ? "Back online. All changes are saved." : h(window.React.Fragment, null, h("strong", null, "You're offline. "), pending ? `${pending} change${pending > 1 ? "s" : ""} will be saved when you reconnect.` : "You can keep viewing records.")),
    !online && onRetry && h(Button, { variant: "ghost", size: "sm", iconLeft: "refresh-cw", onClick: onRetry }, "Try again"));
}
