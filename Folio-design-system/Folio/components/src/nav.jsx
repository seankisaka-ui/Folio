import { Icon, IconButton, Avatar, cx, Tooltip } from "./core.jsx";
const { createElement: h, useState, useRef, useEffect } = window.React;

export function Wordmark({ collapsed }) {
  return h("span", { className: "fo-wordmark" }, h("span", { className: "fo-wordmark__mark", "aria-hidden": true }, "F"), h("span", { className: "fo-wordmark__text" }, "Folio"));
}

/** NavItem — icon + always-visible text label. `current` marks the page (aria-current). */
export function NavItem({ icon, label, href = "#", current, count, disabled, collapsed, onClick }) {
  const el = h("a", { href: disabled ? undefined : href, className: cx("fo-navitem", disabled && "is-disabled"), "aria-current": current ? "page" : undefined, "aria-disabled": disabled || undefined, onClick },
    h(Icon, { name: icon, size: 22 }),
    h("span", { className: "fo-navitem__label" }, label),
    count != null && h("span", { className: "fo-navitem__count" }, count, h("span", { className: "fo-sr" }, " new")));
  return h("li", null, collapsed ? h(Tooltip, { text: label, placement: "top" }, el) : el);
}

export function SidebarSection({ title, children }) {
  const id = `ns-${title.replace(/\W+/g, "-").toLowerCase()}`;
  return h("div", { className: "fo-navsec" }, h("h2", { className: "fo-navsec__title", id }, title), h("ul", { "aria-labelledby": id }, children));
}

export function SidebarAccount({ name, role = "Parent", onSignOut }) {
  return h("div", { className: "fo-account" },
    h(Avatar, { name, size: "sm" }),
    h("div", { className: "fo-account__text" }, h("p", { className: "fo-account__name" }, name), h("p", { className: "fo-account__role" }, role)),
    h(IconButton, { icon: "log-out", label: "Sign out", onClick: onSignOut, size: 20 }));
}

export const DEFAULT_NAV = [
  { title: "Main menu", items: [
    { icon: "house", label: "Home", id: "home" },
    { icon: "users", label: "Children", id: "children" },
    { icon: "notebook-pen", label: "Log progress", id: "progress" },
    { icon: "clipboard-check", label: "Test scores", id: "scores" },
    { icon: "history", label: "Academic history", id: "history" },
    { icon: "file-text", label: "Reports", id: "reports" },
  ] },
  { title: "Help", items: [
    { icon: "sparkles", label: "Assistant", id: "assistant" },
    { icon: "settings", label: "Settings", id: "settings" },
    { icon: "circle-help", label: "Help centre", id: "help" },
  ] },
];

/** Sidebar — persistent desktop navigation on sidebar-bg. Collapsible to icons; labels stay available to screen readers and as tooltips. */
export function Sidebar({ current = "home", sections = DEFAULT_NAV, user = { name: "Ruth Mukasa", role: "Parent · 3 children" }, collapsed: c, defaultCollapsed = false, onToggle, collapsible = true, onNavigate, counts = {} }) {
  const [col, setCol] = useState(defaultCollapsed);
  const collapsed = c ?? col;
  return h("aside", { className: cx("fo-sidebar", collapsed && "is-collapsed"), "aria-label": "Main navigation" },
    h("div", { className: "fo-sidebar__brand" }, h(Wordmark, null),
      collapsible && h(IconButton, { icon: "chevrons-left", label: collapsed ? "Expand sidebar" : "Collapse sidebar", "aria-expanded": !collapsed, onClick: () => { setCol(!collapsed); onToggle && onToggle(!collapsed); }, style: collapsed ? { transform: "rotate(180deg)" } : undefined })),
    h("nav", { className: "fo-sidebar__nav" },
      sections.map((s) => h(SidebarSection, { key: s.title, title: s.title },
        s.items.map((it) => h(NavItem, { key: it.id, ...it, count: counts[it.id], current: it.id === current, collapsed, onClick: onNavigate ? (e) => { e.preventDefault(); onNavigate(it.id); } : undefined }))))),
    user && h(SidebarAccount, user));
}

/** ChildSwitcher — choose which child the page is about. Menu button with full names and current PACE count. */
export function ChildSwitcher({ options: kids = [], value, onChange, open: forced, label = "Viewing" }) {
  const [open, setOpen] = useState(false);
  const isOpen = forced ?? open;
  const cur = kids.find((k) => k.id === value) || kids[0] || {};
  return h("div", { className: "fo-switcher" },
    h("button", { type: "button", className: "fo-switcher__btn", "aria-haspopup": "listbox", "aria-expanded": isOpen, onClick: () => setOpen(!isOpen) },
      h(Avatar, { name: cur.name, size: "sm" }),
      h("span", null, h("span", { className: "fo-switcher__k" }, label), h("span", { className: "fo-switcher__v" }, cur.name)),
      h(Icon, { name: "chevron-down" })),
    isOpen && h("ul", { className: "fo-menu", role: "listbox", "aria-label": "Choose a child" },
      kids.map((k) => h("li", { key: k.id, role: "option", "aria-selected": k.id === cur.id },
        h("button", { type: "button", className: "fo-menu__item", onClick: () => { setOpen(false); onChange && onChange(k.id); } },
          h(Avatar, { name: k.name, size: "sm" }),
          h("span", null, k.name, k.meta && h("small", null, k.meta)),
          k.id === cur.id && h(Icon, { name: "check", className: "fo-menu__check", label: "Selected" }))))));
}

export function Breadcrumbs({ items = [] }) {
  return h("nav", { className: "fo-crumbs", "aria-label": "Breadcrumb" },
    h("ol", null, items.map((it, i) => {
      const last = i === items.length - 1;
      return h("li", { key: i, style: { display: "flex", alignItems: "center", gap: 4 } },
        last ? h("span", { "aria-current": "page" }, it.label) : h("a", { href: it.href || "#" }, it.label),
        !last && h(Icon, { name: "chevron-right", size: 16 }));
    })));
}

/** PageHeader — title (display face), one line of context, primary actions on the right. Wraps on narrow screens. */
export function PageHeader({ title, subtitle, actions, breadcrumbs, display }) {
  return h("header", { className: "fo-pagehead" },
    h("div", { className: "fo-pagehead__text" },
      breadcrumbs && h(Breadcrumbs, { items: breadcrumbs }),
      h("h1", { className: cx("fo-h", display ? "fo-h-display" : "fo-h-1") }, title),
      subtitle && h("p", { className: "fo-pagehead__sub" }, subtitle)),
    actions && h("div", { className: "fo-pagehead__actions" }, actions));
}

/** MobileTopBar — 56px bar: menu (or back), short title, one action. */
export function MobileTopBar({ title, onMenu, onBack, action }) {
  return h("header", { className: "fo-topbar" },
    onBack ? h(IconButton, { icon: "chevron-left", label: "Back", onClick: onBack }) : h(IconButton, { icon: "menu", label: "Open menu", onClick: onMenu, "aria-haspopup": "dialog" }),
    h("h1", { className: "fo-topbar__title" }, title),
    action);
}

/** BottomNav — max 4 destinations with text labels, for the most frequent mobile tasks. */
export function BottomNav({ items = [
  { id: "home", icon: "house", label: "Home" }, { id: "children", icon: "users", label: "Children" },
  { id: "progress", icon: "notebook-pen", label: "Log" }, { id: "more", icon: "menu", label: "More" }], current = "home", onNavigate }) {
  return h("nav", { className: "fo-bottomnav", "aria-label": "Main" },
    items.map((it) => h("a", { key: it.id, href: "#", className: "fo-bottomnav__item", "aria-current": it.id === current ? "page" : undefined, onClick: (e) => { e.preventDefault(); onNavigate && onNavigate(it.id); } },
      h("span", { className: "fo-bottomnav__pill" }, h(Icon, { name: it.icon, size: 22 })), it.label)));
}

/** MobileDrawer — full sidebar in a modal drawer for secondary destinations. Scrim click and Escape close it. */
export function MobileDrawer({ open = true, onClose, current, inline }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!open || inline) return;
    const k = (e) => e.key === "Escape" && onClose && onClose();
    document.addEventListener("keydown", k);
    ref.current && ref.current.querySelector("a,button") && ref.current.querySelector("a,button").focus();
    return () => document.removeEventListener("keydown", k);
  }, [open]);
  if (!open) return null;
  return h(window.React.Fragment, null,
    h("div", { className: "fo-drawer-scrim", onClick: onClose }),
    h("div", { className: "fo-drawer", role: "dialog", "aria-modal": true, "aria-label": "Menu", ref }, h(Sidebar, { current, collapsible: false })));
}
