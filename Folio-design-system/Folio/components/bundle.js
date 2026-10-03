/* @ds-bundle: {"format":4,"namespace":"Folio","components":[{"name":"Icon"},{"name":"Button"},{"name":"IconButton"},{"name":"Field"},{"name":"TextInput"},{"name":"NumberInput"},{"name":"ScoreInput"},{"name":"DateInput"},{"name":"Select"},{"name":"SearchField"},{"name":"TextArea"},{"name":"Checkbox"},{"name":"RadioGroup"},{"name":"Switch"},{"name":"ReadOnlyField"},{"name":"Sidebar"},{"name":"NavItem"},{"name":"SidebarSection"},{"name":"SidebarAccount"},{"name":"ChildSwitcher"},{"name":"Breadcrumbs"},{"name":"PageHeader"},{"name":"MobileTopBar"},{"name":"BottomNav"},{"name":"MobileDrawer"},{"name":"Card"},{"name":"InteractiveCard"},{"name":"Avatar"},{"name":"Badge"},{"name":"StatusBadge"},{"name":"ProgressBar"},{"name":"PaceSteps"},{"name":"ScoreDisplay"},{"name":"StatTile"},{"name":"ChildSummaryCard"},{"name":"SubjectCard"},{"name":"PaceCard"},{"name":"ActivityItem"},{"name":"HistoryEntry"},{"name":"RecordRow"},{"name":"EmptyState"},{"name":"Alert"},{"name":"Notification"},{"name":"Tooltip"},{"name":"Popover"},{"name":"DropdownMenu"},{"name":"Tabs"},{"name":"Pagination"},{"name":"Table"},{"name":"Dialog"},{"name":"ConfirmDialog"},{"name":"BottomSheet"},{"name":"Toast"},{"name":"Spinner"},{"name":"Skeleton"},{"name":"StatusMessage"},{"name":"ConnectionBanner"},{"name":"AssistantComposer"},{"name":"AiActionPreview"},{"name":"AiClarification"},{"name":"AiFallback"},{"name":"AiThinking"},{"name":"AiTag"}]} */
var __Folio = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  }, __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

  // src/index.js
  var index_exports = {};
  __export(index_exports, {
    ActivityItem: () => ActivityItem,
    AiActionPreview: () => AiActionPreview,
    AiClarification: () => AiClarification,
    AiFallback: () => AiFallback,
    AiTag: () => AiTag,
    AiThinking: () => AiThinking,
    Alert: () => Alert,
    AssistantComposer: () => AssistantComposer,
    Avatar: () => Avatar,
    Badge: () => Badge,
    BottomNav: () => BottomNav,
    BottomSheet: () => BottomSheet,
    Breadcrumbs: () => Breadcrumbs,
    Button: () => Button,
    Card: () => Card,
    Checkbox: () => Checkbox,
    ChildSummaryCard: () => ChildSummaryCard,
    ChildSwitcher: () => ChildSwitcher,
    ConfirmDialog: () => ConfirmDialog,
    ConnectionBanner: () => ConnectionBanner,
    DEFAULT_NAV: () => DEFAULT_NAV,
    DateInput: () => DateInput,
    Dialog: () => Dialog,
    DropdownMenu: () => DropdownMenu,
    EXAMPLE_PROMPTS: () => EXAMPLE_PROMPTS,
    EmptyState: () => EmptyState,
    Field: () => Field,
    FieldGroup: () => FieldGroup,
    HistoryEntry: () => HistoryEntry,
    Icon: () => Icon,
    IconButton: () => IconButton,
    InteractiveCard: () => InteractiveCard,
    MobileDrawer: () => MobileDrawer,
    MobileTopBar: () => MobileTopBar,
    NavItem: () => NavItem,
    Notification: () => Notification,
    NumberInput: () => NumberInput,
    PACE_STATUS: () => PACE_STATUS,
    PaceCard: () => PaceCard,
    PaceSteps: () => PaceSteps,
    PageHeader: () => PageHeader,
    Pagination: () => Pagination,
    Popover: () => Popover,
    ProgressBar: () => ProgressBar,
    Radio: () => Radio,
    RadioGroup: () => RadioGroup,
    ReadOnlyField: () => ReadOnlyField,
    RecordRow: () => RecordRow,
    ScoreDisplay: () => ScoreDisplay,
    ScoreInput: () => ScoreInput,
    SearchField: () => SearchField,
    Select: () => Select,
    Sidebar: () => Sidebar,
    SidebarAccount: () => SidebarAccount,
    SidebarSection: () => SidebarSection,
    Skeleton: () => Skeleton,
    Spinner: () => Spinner,
    StatTile: () => StatTile,
    StatusBadge: () => StatusBadge,
    StatusMessage: () => StatusMessage,
    SubjectCard: () => SubjectCard,
    Switch: () => Switch,
    Table: () => Table,
    Tabs: () => Tabs,
    TextArea: () => TextArea,
    TextInput: () => TextInput,
    Timeline: () => Timeline,
    Toast: () => Toast,
    ToastRegion: () => ToastRegion,
    Tooltip: () => Tooltip,
    Wordmark: () => Wordmark
  });

  // src/icons.js
  var ICONS = {
    house: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
    "book-open": '<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',
    layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
    "clipboard-check": '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    "file-text": '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    sparkles: '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
    settings: '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
    "circle-help": '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    "log-out": '<path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    search: '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
    "chevron-down": '<path d="m6 9 6 6 6-6"/>',
    "chevron-right": '<path d="m9 18 6-6-6-6"/>',
    "chevron-left": '<path d="m15 18-6-6 6-6"/>',
    "chevrons-left": '<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>',
    menu: '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    "circle-check": '<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',
    "triangle-alert": '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    "circle-alert": '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    "circle-x": '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    calendar: '<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>',
    pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
    "trash-2": '<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    ellipsis: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
    funnel: '<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>',
    download: '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
    printer: '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
    "wifi-off": '<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',
    "refresh-cw": '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    "loader-circle": '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    "list-checks": '<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',
    send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
    "undo-2": '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',
    "notebook-pen": '<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>',
    "graduation-cap": '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    minus: '<path d="M5 12h14"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  };

  // src/core.jsx
  var { createElement: h, Fragment, useState } = window.React, cx = (...a) => a.filter(Boolean).join(" ");
  function Icon({ name, size = 20, label, className, strokeWidth = 2, ...rest }) {
    let inner = ICONS[name] || ICONS["circle-help"];
    return h("svg", {
      className: cx("fo-icon", className),
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      strokeWidth,
      role: label ? "img" : void 0,
      "aria-label": label,
      "aria-hidden": label ? void 0 : !0,
      focusable: "false",
      dangerouslySetInnerHTML: { __html: (label ? `<title>${label}</title>` : "") + inner },
      ...rest
    });
  }
  Icon.names = Object.keys(ICONS);
  function Spinner({ label = "Loading", size = 20, showLabel = !1, className }) {
    return h(
      "span",
      { className: cx("fo-spinner", className), role: "status" },
      h(Icon, { name: "loader-circle", size }),
      showLabel ? h("span", null, label) : h("span", { className: "fo-sr" }, label)
    );
  }
  function Skeleton({ width = "100%", height = 16, radius, className, style }) {
    return h("span", { className: cx("fo-skeleton", className), "aria-hidden": !0, style: { width, height, borderRadius: radius, ...style } });
  }
  function Button({ variant = "primary", size = "md", iconLeft, iconRight, loading = !1, loadingText, block, pressed, className, children, disabled, type = "button", ...rest }) {
    let iconSize = size === "lg" ? 22 : 20;
    return h(
      "button",
      {
        type,
        className: cx("fo-btn", `fo-btn--${variant}`, size !== "md" && `fo-btn--${size}`, block && "fo-btn--block", loading && "is-loading", pressed && "is-pressed", className),
        disabled: disabled || void 0,
        "aria-busy": loading || void 0,
        ...rest,
        onClick: loading ? (e) => e.preventDefault() : rest.onClick
      },
      loading ? h(Icon, { name: "loader-circle", size: iconSize, style: { animation: "fo-spin .9s linear infinite" } }) : iconLeft && h(Icon, { name: iconLeft, size: iconSize }),
      h("span", { className: "fo-btn__label" }, loading && loadingText ? loadingText : children),
      !loading && iconRight && h(Icon, { name: iconRight, size: iconSize })
    );
  }
  function IconButton({ icon, label, variant = "ghost", size = 22, showTooltip = !1, className, ...rest }) {
    let btn = h(
      "button",
      { type: "button", className: cx("fo-iconbtn", variant !== "ghost" && `fo-iconbtn--${variant}`, className), "aria-label": label, title: showTooltip ? void 0 : label, ...rest },
      h(Icon, { name: icon, size })
    );
    return showTooltip ? h(Tooltip, { text: label, open: !0 }, btn) : btn;
  }
  function Avatar({ name = "", size = "md", className }) {
    let initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((s) => s[0]).join("").toUpperCase();
    return h("span", { className: cx("fo-avatar", size !== "md" && `fo-avatar--${size}`, className), "aria-hidden": !0 }, initials);
  }
  var BADGE_ICON = { neutral: "clock", progress: "loader-circle", success: "circle-check", warning: "triangle-alert", error: "circle-x", accent: "check", ai: "sparkles" };
  function Badge({ tone = "neutral", icon, children, className }) {
    let ic = icon === !1 ? null : icon || BADGE_ICON[tone];
    return h("span", { className: cx("fo-badge", `fo-badge--${tone}`, className) }, ic && h(Icon, { name: ic, size: 16 }), children);
  }
  var PACE_STATUS = {
    "not-started": { tone: "neutral", label: "Not started", icon: "clock" },
    "in-progress": { tone: "progress", label: "In progress", icon: "notebook-pen" },
    "ready-for-test": { tone: "warning", label: "Ready for test", icon: "clipboard-check" },
    passed: { tone: "success", label: "Passed", icon: "circle-check" },
    "needs-review": { tone: "error", label: "Below pass mark", icon: "circle-alert" },
    completed: { tone: "success", label: "Completed", icon: "check" }
  };
  function StatusBadge({ status = "in-progress", children }) {
    let s = PACE_STATUS[status] || PACE_STATUS["in-progress"];
    return h(Badge, { tone: s.tone, icon: s.icon }, children || s.label);
  }
  function AiTag({ edited, children }) {
    return h(Badge, { tone: "ai", icon: "sparkles" }, children || (edited ? "AI-assisted \xB7 edited" : "AI-assisted"));
  }
  function Tooltip({ text, placement = "top", open: forced, children }) {
    let [open, setOpen] = useState(!1), id = window.React.useId(), show = forced != null ? forced : open;
    return h(
      "span",
      { className: "fo-tip-wrap", onMouseEnter: () => setOpen(!0), onMouseLeave: () => setOpen(!1), onFocus: () => setOpen(!0), onBlur: () => setOpen(!1), onKeyDown: (e) => e.key === "Escape" && setOpen(!1) },
      window.React.cloneElement(children, { "aria-describedby": id }),
      h("span", { id, role: "tooltip", className: cx("fo-tip", placement === "bottom" && "fo-tip--bottom"), hidden: !show }, text)
    );
  }

  // src/forms.jsx
  var { createElement: h2, useState: useState2, useId, cloneElement, Children } = window.React;
  function Field({ label, helper, error, success, warning, required, optional, id: idProp, children, className }) {
    let auto = useId(), id = idProp || `f${auto.replace(/:/g, "")}`, helpId = helper ? `${id}-help` : void 0, msgId = error || success || warning ? `${id}-msg` : void 0, describedBy = [msgId, helpId].filter(Boolean).join(" ") || void 0, child = Children.only(children), control = cloneElement(child, { id, "aria-describedby": describedBy, "aria-invalid": error ? !0 : void 0, invalid: !!error, success: !!success, required });
    return h2(
      "div",
      { className: cx("fo-field", className) },
      h2(
        "label",
        { className: "fo-field__label", htmlFor: id },
        label,
        required && h2("span", { className: "fo-field__req" }, "(required)"),
        optional && h2("span", { className: "fo-field__req" }, "(optional)")
      ),
      helper && h2("p", { id: helpId, className: "fo-field__helper" }, helper),
      control,
      error && h2("p", { id: msgId, className: "fo-field__msg fo-field__msg--error", role: "alert" }, h2(Icon, { name: "circle-alert", size: 18 }), error),
      !error && warning && h2("p", { id: msgId, className: "fo-field__msg fo-field__msg--warning" }, h2(Icon, { name: "triangle-alert", size: 18 }), warning),
      !error && !warning && success && h2("p", { id: msgId, className: "fo-field__msg fo-field__msg--success" }, h2(Icon, { name: "circle-check", size: 18 }), success)
    );
  }
  var ctl = (extra, { invalid, success, disabled, size }) => cx("fo-control", extra, invalid && "is-error", success && !invalid && "is-success", disabled && "is-disabled", size === "sm" && "fo-control--sm");
  function TextInput({ invalid, success, icon, suffix, end, size, className, type = "text", ...rest }) {
    return h2(
      "div",
      { className: ctl(className, { invalid, success, disabled: rest.disabled, size }) },
      icon && h2("span", { className: "fo-control__icon" }, h2(Icon, { name: icon })),
      h2("input", { type, ...rest }),
      suffix && h2("span", { className: "fo-control__suffix", "aria-hidden": !0 }, suffix),
      end && h2("span", { className: "fo-control__end" }, end)
    );
  }
  function NumberInput({ min, max, step = 1, ...rest }) {
    return h2(TextInput, { type: "text", inputMode: "numeric", pattern: "[0-9]*", min, max, step, className: "fo-control--number", ...rest });
  }
  function ScoreInput({ ...rest }) {
    return h2(TextInput, { type: "text", inputMode: "numeric", maxLength: 3, suffix: "%", className: "fo-control--score", ...rest });
  }
  function DateInput(props) {
    return h2(TextInput, { type: "date", ...props });
  }
  function Select({ options = [], placeholder, invalid, success, size, className, ...rest }) {
    return h2(
      "div",
      { className: ctl(cx("fo-control--select", className), { invalid, success, disabled: rest.disabled, size }) },
      h2(
        "select",
        rest,
        placeholder && h2("option", { value: "" }, placeholder),
        options.map((o) => typeof o == "string" ? h2("option", { key: o, value: o }, o) : h2("option", { key: o.value, value: o.value, disabled: o.disabled }, o.label))
      ),
      h2(Icon, { name: "chevron-down", className: "fo-control__chev" })
    );
  }
  function SearchField({ label = "Search", onClear, value, ...rest }) {
    return h2(TextInput, {
      type: "search",
      icon: "search",
      "aria-label": rest["aria-label"] || label,
      value,
      className: "fo-search",
      end: value && onClear ? h2("button", { type: "button", className: "fo-iconbtn", style: { width: 36, height: 36 }, onClick: onClear, "aria-label": "Clear search" }, h2(Icon, { name: "x", size: 18 })) : null,
      ...rest
    });
  }
  function TextArea({ invalid, success, className, ...rest }) {
    return h2("div", { className: ctl(className, { invalid, success, disabled: rest.disabled }) }, h2("textarea", { rows: 4, ...rest }));
  }
  function Checkbox({ label, description, invalid, indeterminate, className, ...rest }) {
    let ref = (el) => {
      el && (el.indeterminate = !!indeterminate);
    };
    return h2(
      "label",
      { className: cx("fo-check", rest.disabled && "is-disabled", invalid && "is-error", className) },
      h2("input", { type: "checkbox", ref, "aria-invalid": invalid || void 0, ...rest }),
      h2("span", null, label, description && h2("span", { className: "fo-check__desc" }, description))
    );
  }
  function Radio({ label, description, card, className, ...rest }) {
    return h2(
      "label",
      { className: cx("fo-check", card && "fo-radio-card", rest.disabled && "is-disabled", className) },
      h2("input", { type: "radio", ...rest }),
      h2("span", null, label, description && h2("span", { className: "fo-check__desc" }, description))
    );
  }
  function RadioGroup({ legend, name, options = [], value, defaultValue, onChange, card, error, horizontal }) {
    let [v, setV] = useState2(defaultValue), cur = value != null ? value : v;
    return h2(
      "fieldset",
      { className: "fo-fieldset", "aria-invalid": error ? !0 : void 0 },
      h2("legend", null, legend),
      h2(
        "div",
        { style: { display: "flex", flexDirection: horizontal ? "row" : "column", gap: card ? 8 : 0, flexWrap: "wrap" } },
        options.map((o) => h2(Radio, {
          key: o.value,
          name,
          value: o.value,
          label: o.label,
          description: o.description,
          card,
          disabled: o.disabled,
          checked: cur === o.value,
          onChange: () => {
            setV(o.value), onChange && onChange(o.value);
          }
        }))
      ),
      error && h2("p", { className: "fo-field__msg fo-field__msg--error", role: "alert" }, h2(Icon, { name: "circle-alert", size: 18 }), error)
    );
  }
  function Switch({ label, checked: c, defaultChecked = !1, onChange, disabled, showState = !0 }) {
    let [v, setV] = useState2(defaultChecked), on = c != null ? c : v;
    return h2(
      "button",
      { type: "button", role: "switch", "aria-checked": on, className: "fo-switch", disabled, onClick: () => {
        setV(!on), onChange && onChange(!on);
      } },
      h2("span", { className: "fo-switch__track" }, h2("span", { className: "fo-switch__thumb" }, on && h2(Icon, { name: "check", size: 14, strokeWidth: 3 }))),
      h2("span", null, label),
      showState && h2("span", { className: "fo-switch__state", "aria-hidden": !0 }, on ? "On" : "Off")
    );
  }
  function ReadOnlyField({ label, value, hint = "Read only" }) {
    return h2(
      "div",
      { className: "fo-readonly" },
      h2("span", { className: "fo-readonly__label" }, label, h2(Icon, { name: "lock", size: 14, label: hint })),
      h2("span", { className: "fo-readonly__value" }, value)
    );
  }
  function FieldGroup({ columns = 1, children }) {
    return h2("div", { className: cx("fo-fieldgroup", columns === 2 && "fo-fieldgroup--2") }, children);
  }

  // src/nav.jsx
  var { createElement: h3, useState: useState3, useRef, useEffect } = window.React;
  function Wordmark({ collapsed }) {
    return h3("span", { className: "fo-wordmark" }, h3("span", { className: "fo-wordmark__mark", "aria-hidden": !0 }, "F"), h3("span", { className: "fo-wordmark__text" }, "Folio"));
  }
  function NavItem({ icon, label, href = "#", current, count, disabled, collapsed, onClick }) {
    let el = h3(
      "a",
      { href: disabled ? void 0 : href, className: cx("fo-navitem", disabled && "is-disabled"), "aria-current": current ? "page" : void 0, "aria-disabled": disabled || void 0, onClick },
      h3(Icon, { name: icon, size: 22 }),
      h3("span", { className: "fo-navitem__label" }, label),
      count != null && h3("span", { className: "fo-navitem__count" }, count, h3("span", { className: "fo-sr" }, " new"))
    );
    return h3("li", null, collapsed ? h3(Tooltip, { text: label, placement: "top" }, el) : el);
  }
  function SidebarSection({ title, children }) {
    let id = `ns-${title.replace(/\W+/g, "-").toLowerCase()}`;
    return h3("div", { className: "fo-navsec" }, h3("h2", { className: "fo-navsec__title", id }, title), h3("ul", { "aria-labelledby": id }, children));
  }
  function SidebarAccount({ name, role = "Parent", onSignOut }) {
    return h3(
      "div",
      { className: "fo-account" },
      h3(Avatar, { name, size: "sm" }),
      h3("div", { className: "fo-account__text" }, h3("p", { className: "fo-account__name" }, name), h3("p", { className: "fo-account__role" }, role)),
      h3(IconButton, { icon: "log-out", label: "Sign out", onClick: onSignOut, size: 20 })
    );
  }
  var DEFAULT_NAV = [
    { title: "Main menu", items: [
      { icon: "house", label: "Home", id: "home" },
      { icon: "users", label: "Children", id: "children" },
      { icon: "notebook-pen", label: "Log progress", id: "progress" },
      { icon: "clipboard-check", label: "Test scores", id: "scores" },
      { icon: "history", label: "Academic history", id: "history" },
      { icon: "file-text", label: "Reports", id: "reports" }
    ] },
    { title: "Help", items: [
      { icon: "sparkles", label: "Assistant", id: "assistant" },
      { icon: "settings", label: "Settings", id: "settings" },
      { icon: "circle-help", label: "Help centre", id: "help" }
    ] }
  ];
  function Sidebar({ current = "home", sections = DEFAULT_NAV, user = { name: "Ruth Mukasa", role: "Parent \xB7 3 children" }, collapsed: c, defaultCollapsed = !1, onToggle, collapsible = !0, onNavigate, counts = {} }) {
    let [col, setCol] = useState3(defaultCollapsed), collapsed = c != null ? c : col;
    return h3(
      "aside",
      { className: cx("fo-sidebar", collapsed && "is-collapsed"), "aria-label": "Main navigation" },
      h3(
        "div",
        { className: "fo-sidebar__brand" },
        h3(Wordmark, null),
        collapsible && h3(IconButton, { icon: "chevrons-left", label: collapsed ? "Expand sidebar" : "Collapse sidebar", "aria-expanded": !collapsed, onClick: () => {
          setCol(!collapsed), onToggle && onToggle(!collapsed);
        }, style: collapsed ? { transform: "rotate(180deg)" } : void 0 })
      ),
      h3(
        "nav",
        { className: "fo-sidebar__nav" },
        sections.map((s) => h3(
          SidebarSection,
          { key: s.title, title: s.title },
          s.items.map((it) => h3(NavItem, { key: it.id, ...it, count: counts[it.id], current: it.id === current, collapsed, onClick: onNavigate ? (e) => {
            e.preventDefault(), onNavigate(it.id);
          } : void 0 }))
        ))
      ),
      user && h3(SidebarAccount, user)
    );
  }
  function ChildSwitcher({ options: kids = [], value, onChange, open: forced, label = "Viewing" }) {
    let [open, setOpen] = useState3(!1), isOpen = forced != null ? forced : open, cur = kids.find((k) => k.id === value) || kids[0] || {};
    return h3(
      "div",
      { className: "fo-switcher" },
      h3(
        "button",
        { type: "button", className: "fo-switcher__btn", "aria-haspopup": "listbox", "aria-expanded": isOpen, onClick: () => setOpen(!isOpen) },
        h3(Avatar, { name: cur.name, size: "sm" }),
        h3("span", null, h3("span", { className: "fo-switcher__k" }, label), h3("span", { className: "fo-switcher__v" }, cur.name)),
        h3(Icon, { name: "chevron-down" })
      ),
      isOpen && h3(
        "ul",
        { className: "fo-menu", role: "listbox", "aria-label": "Choose a child" },
        kids.map((k) => h3(
          "li",
          { key: k.id, role: "option", "aria-selected": k.id === cur.id },
          h3(
            "button",
            { type: "button", className: "fo-menu__item", onClick: () => {
              setOpen(!1), onChange && onChange(k.id);
            } },
            h3(Avatar, { name: k.name, size: "sm" }),
            h3("span", null, k.name, k.meta && h3("small", null, k.meta)),
            k.id === cur.id && h3(Icon, { name: "check", className: "fo-menu__check", label: "Selected" })
          )
        ))
      )
    );
  }
  function Breadcrumbs({ items = [] }) {
    return h3(
      "nav",
      { className: "fo-crumbs", "aria-label": "Breadcrumb" },
      h3("ol", null, items.map((it, i) => {
        let last = i === items.length - 1;
        return h3(
          "li",
          { key: i, style: { display: "flex", alignItems: "center", gap: 4 } },
          last ? h3("span", { "aria-current": "page" }, it.label) : h3("a", { href: it.href || "#" }, it.label),
          !last && h3(Icon, { name: "chevron-right", size: 16 })
        );
      }))
    );
  }
  function PageHeader({ title, subtitle, actions, breadcrumbs, display }) {
    return h3(
      "header",
      { className: "fo-pagehead" },
      h3(
        "div",
        { className: "fo-pagehead__text" },
        breadcrumbs && h3(Breadcrumbs, { items: breadcrumbs }),
        h3("h1", { className: cx("fo-h", display ? "fo-h-display" : "fo-h-1") }, title),
        subtitle && h3("p", { className: "fo-pagehead__sub" }, subtitle)
      ),
      actions && h3("div", { className: "fo-pagehead__actions" }, actions)
    );
  }
  function MobileTopBar({ title, onMenu, onBack, action }) {
    return h3(
      "header",
      { className: "fo-topbar" },
      onBack ? h3(IconButton, { icon: "chevron-left", label: "Back", onClick: onBack }) : h3(IconButton, { icon: "menu", label: "Open menu", onClick: onMenu, "aria-haspopup": "dialog" }),
      h3("h1", { className: "fo-topbar__title" }, title),
      action
    );
  }
  function BottomNav({ items = [
    { id: "home", icon: "house", label: "Home" },
    { id: "children", icon: "users", label: "Children" },
    { id: "progress", icon: "notebook-pen", label: "Log" },
    { id: "more", icon: "menu", label: "More" }
  ], current = "home", onNavigate }) {
    return h3(
      "nav",
      { className: "fo-bottomnav", "aria-label": "Main" },
      items.map((it) => h3(
        "a",
        { key: it.id, href: "#", className: "fo-bottomnav__item", "aria-current": it.id === current ? "page" : void 0, onClick: (e) => {
          e.preventDefault(), onNavigate && onNavigate(it.id);
        } },
        h3("span", { className: "fo-bottomnav__pill" }, h3(Icon, { name: it.icon, size: 22 })),
        it.label
      ))
    );
  }
  function MobileDrawer({ open = !0, onClose, current, inline }) {
    let ref = useRef(null);
    return useEffect(() => {
      if (!open || inline) return;
      let k = (e) => e.key === "Escape" && onClose && onClose();
      return document.addEventListener("keydown", k), ref.current && ref.current.querySelector("a,button") && ref.current.querySelector("a,button").focus(), () => document.removeEventListener("keydown", k);
    }, [open]), open ? h3(
      window.React.Fragment,
      null,
      h3("div", { className: "fo-drawer-scrim", onClick: onClose }),
      h3("div", { className: "fo-drawer", role: "dialog", "aria-modal": !0, "aria-label": "Menu", ref }, h3(Sidebar, { current, collapsible: !1 }))
    ) : null;
  }

  // src/content.jsx
  var { createElement: h4, useState: useState4, useRef: useRef2, useEffect: useEffect2, useId: useId2, Fragment: Fragment2 } = window.React;
  function Card({ title, subtitle, action, footer, flush, muted, as = "section", className, children, ...rest }) {
    return h4(
      as,
      { className: cx("fo-card", flush && "fo-card--flush", muted && "fo-card--muted", className), ...rest },
      (title || action) && h4(
        "div",
        { className: "fo-card__head" },
        h4("div", null, title && h4("h3", { className: "fo-card__title" }, title), subtitle && h4("p", { className: "fo-card__sub" }, subtitle)),
        action
      ),
      children,
      footer && h4("div", { className: "fo-card__foot" }, footer)
    );
  }
  function InteractiveCard({ href, onClick, selected, disabled, children, className, label }) {
    return h4(href ? "a" : "button", { href, onClick, type: href ? void 0 : "button", className: cx("fo-card fo-icard", selected && "is-selected", disabled && "is-disabled", className), "aria-pressed": !href && selected != null ? !!selected : void 0, "aria-disabled": disabled || void 0, "aria-label": label, style: { textDecoration: "none", display: "flex" } }, children);
  }
  var SUBJECT_ICON = { Mathematics: "list-checks", English: "book-open", "Word Building": "pencil", Science: "layers", "Social Studies": "graduation-cap" };
  function ProgressBar({ label, value = 0, max = 100, valueText, size, hideLabel }) {
    let pct = Math.max(0, Math.min(100, Math.round(value / max * 100))), text = valueText || `${pct}%`, id = useId2();
    return h4(
      "div",
      { className: cx("fo-progress", size === "lg" && "fo-progress--lg", pct >= 100 && "is-complete") },
      !hideLabel && h4("div", { className: "fo-progress__top" }, h4("span", { className: "fo-progress__label", id }, label), h4("span", { className: "fo-progress__value" }, text)),
      h4(
        "div",
        { className: "fo-progress__track", role: "progressbar", "aria-labelledby": hideLabel ? void 0 : id, "aria-label": hideLabel ? label : void 0, "aria-valuemin": 0, "aria-valuemax": max, "aria-valuenow": value, "aria-valuetext": text },
        h4("div", { className: "fo-progress__fill", style: { width: `${pct}%` } })
      )
    );
  }
  function PaceSteps({ current = 0 }) {
    return h4(
      "ol",
      { className: "fo-steps", "aria-label": "PACE stages" },
      ["Pages", "Checkups", "Self Test", "PACE Test"].map((s, i) => h4(
        "li",
        { key: s, className: cx(i < current && "is-done", i === current && "is-current"), "aria-current": i === current ? "step" : void 0 },
        h4("span", null, s, h4("span", { className: "fo-sr" }, i < current ? " \u2014 done" : i === current ? " \u2014 current" : " \u2014 not started"))
      ))
    );
  }
  function ScoreDisplay({ score, passMark = 80, size = "lg", date, showStatus = !0 }) {
    let pending = score == null, passed = !pending && score >= passMark;
    return h4(
      "div",
      { className: cx("fo-score", size !== "lg" && `fo-score--${size}`) },
      h4("span", { className: "fo-score__value" }, pending ? "\u2014" : `${score}%`),
      h4(
        "span",
        { className: "fo-score__meta" },
        showStatus && (pending ? h4(Badge, { tone: "neutral", icon: "clock" }, "Not tested yet") : passed ? h4(Badge, { tone: "success" }, "Passed") : h4(Badge, { tone: "error", icon: "circle-alert" }, "Below pass mark")),
        h4("span", { className: "fo-score__mark" }, `Pass mark ${passMark}%`, date ? ` \xB7 ${date}` : "")
      )
    );
  }
  function StatTile({ label, value, note, icon }) {
    return h4(
      Card,
      { className: "fo-stat" },
      h4("span", { className: "fo-stat__label" }, label, icon && h4("span", { className: "fo-stat__icon" }, h4(Icon, { name: icon }))),
      h4("span", { className: "fo-stat__value" }, value),
      note && h4("span", { className: "fo-stat__note" }, note)
    );
  }
  function ChildSummaryCard({ name, meta, paces = [], status, updated, onOpen, href = "#" }) {
    return h4(
      Card,
      { as: "article", "aria-label": name },
      h4(
        "div",
        { className: "fo-child" },
        h4(Avatar, { name, size: "md" }),
        h4("div", { style: { flex: 1, minWidth: 0 } }, h4("h3", { className: "fo-child__name" }, name), meta && h4("p", { className: "fo-child__meta" }, meta))
      ),
      (status || updated) && h4("div", { className: "fo-row", style: { gap: 8 } }, status, updated && h4("span", { className: "fo-text-sm fo-text-muted" }, updated)),
      h4(
        "ul",
        { className: "fo-child__paces", "aria-label": `${name}'s current PACEs` },
        paces.map((p) => h4("li", { key: p.subject }, h4("span", { className: "s" }, p.subject), h4("span", { className: "p" }, `PACE ${p.pace}`)))
      ),
      h4(
        "div",
        { className: "fo-card__foot" },
        h4("a", { href, className: "fo-btn fo-btn--outline fo-btn--block", onClick: onOpen }, `Open ${name.split(" ")[0]}'s record`, h4(Icon, { name: "arrow-right", size: 18 }))
      )
    );
  }
  function SubjectCard({ subject, pace, progress = 0, pagesDone, pagesTotal, status = "in-progress", updated, selected, onClick }) {
    let body = h4(
      Fragment2,
      null,
      h4(
        "div",
        { className: "fo-subject__head" },
        h4("span", { className: "fo-subject__icon" }, h4(Icon, { name: SUBJECT_ICON[subject] || "book-open" })),
        h4("div", { style: { flex: 1, minWidth: 0 } }, h4("h3", { className: "fo-card__title" }, subject), h4("p", { className: "fo-card__sub" }, pace ? `PACE ${pace}` : "No PACE assigned")),
        onClick ? h4(Icon, { name: "chevron-right", className: "fo-icard__chev" }) : null
      ),
      pace && h4(ProgressBar, { label: "Progress", value: progress, valueText: pagesTotal ? `${pagesDone} of ${pagesTotal} pages` : void 0 }),
      h4("div", { className: "fo-row", style: { justifyContent: "space-between" } }, h4(StatusBadge, { status }), updated && h4("span", { className: "fo-text-sm fo-text-muted" }, updated))
    );
    return onClick ? h4(InteractiveCard, { onClick, selected, label: `${subject}, PACE ${pace}` }, h4("div", { className: "fo-stack", style: { width: "100%" } }, body)) : h4(Card, { className: cx(selected && "is-selected") }, body);
  }
  function PaceCard({ subject, pace, nextPace, pagesDone = 0, pagesTotal = 0, stage = 0, status = "in-progress", updated, score, onLog, onTest, onAdvance, passMark = 80 }) {
    let ready = status === "ready-for-test", passed = status === "passed";
    return h4(
      Card,
      { as: "article", className: cx("fo-pace", "is-current"), "aria-label": `${subject} PACE ${pace}` },
      h4(
        "div",
        { className: "fo-card__head" },
        h4(
          "div",
          null,
          h4("p", { className: "fo-overline", style: { margin: 0 } }, subject),
          h4("div", { className: "fo-pace__num" }, h4("span", { className: "k" }, "PACE"), h4("span", { className: "v" }, pace))
        ),
        h4(StatusBadge, { status })
      ),
      h4(PaceSteps, { current: stage }),
      passed ? h4(ScoreDisplay, { score, passMark, size: "md" }) : h4(ProgressBar, { label: "Pages completed", value: pagesDone, max: pagesTotal, valueText: `${pagesDone} of ${pagesTotal}` }),
      updated && h4("p", { className: "fo-text-sm fo-text-muted", style: { margin: 0, display: "flex", gap: 6, alignItems: "center" } }, h4(Icon, { name: "clock", size: 16 }), updated),
      h4(
        "div",
        { className: "fo-card__foot" },
        passed ? h4(Button, { variant: "primary", iconRight: "arrow-right", onClick: onAdvance, block: !0 }, `Advance to PACE ${nextPace}`) : ready ? h4(Button, { variant: "primary", iconLeft: "clipboard-check", onClick: onTest, block: !0 }, "Record test score") : h4(Button, { variant: "secondary", iconLeft: "notebook-pen", onClick: onLog, block: !0 }, "Log progress")
      )
    );
  }
  function ActivityItem({ icon = "notebook-pen", tone, text, meta, ai, time }) {
    return h4(
      "div",
      { className: "fo-activity" },
      h4("span", { className: cx("fo-activity__icon", tone && `fo-activity__icon--${tone}`), "aria-hidden": !0 }, h4(Icon, { name: icon, size: 18 })),
      h4(
        "div",
        { className: "fo-activity__body" },
        h4("p", { className: "fo-activity__text" }, text),
        h4("p", { className: "fo-activity__meta" }, time && h4("time", null, time), meta && h4("span", null, meta), ai && h4(AiTag, { edited: ai === "edited" }))
      )
    );
  }
  function Timeline({ children, label = "Academic history" }) {
    return h4("ol", { className: "fo-timeline", "aria-label": label }, children);
  }
  function HistoryEntry({ title, meta, kind = "complete", badge }) {
    let dot = { complete: ["fo-tl__dot--success", "check"], current: ["fo-tl__dot--current", "notebook-pen"], warning: ["fo-tl__dot--warning", "triangle-alert"], neutral: ["", "clock"] }[kind];
    return h4(
      "li",
      { className: "fo-tl" },
      h4("span", { className: cx("fo-tl__dot", dot[0]), "aria-hidden": !0 }, h4(Icon, { name: dot[1], size: 14, strokeWidth: 2.5 })),
      h4("div", null, h4("p", { className: "fo-tl__title" }, title, badge), meta && h4("p", { className: "fo-tl__meta" }, meta))
    );
  }
  function RecordRow({ title, meta, value, badge, href = "#", onClick, avatar }) {
    return h4(
      "a",
      { href, onClick, className: "fo-record" },
      avatar && h4(Avatar, { name: avatar, size: "sm" }),
      h4("div", { className: "fo-record__main" }, h4("p", { className: "fo-record__title" }, title), meta && h4("p", { className: "fo-record__meta" }, meta)),
      h4("div", { className: "fo-record__end" }, badge, value && h4("strong", { className: "fo-num" }, value), h4(Icon, { name: "chevron-right", style: { color: "var(--text-muted)" } }))
    );
  }
  function EmptyState({ icon = "users", title, text, actions }) {
    return h4(
      "div",
      { className: "fo-empty" },
      h4("span", { className: "fo-empty__icon", "aria-hidden": !0 }, h4(Icon, { name: icon, size: 32 })),
      h4("h3", { className: "fo-empty__title" }, title),
      text && h4("p", { className: "fo-empty__text" }, text),
      actions && h4("div", { className: "fo-empty__actions" }, actions)
    );
  }
  var ALERT_ICON = { info: "info", success: "circle-check", warning: "triangle-alert", error: "circle-alert" };
  function Alert({ tone = "info", title, children, actions, onDismiss }) {
    return h4(
      "div",
      { className: cx("fo-alert", `fo-alert--${tone}`), role: tone === "error" ? "alert" : "status" },
      h4(Icon, { name: ALERT_ICON[tone], size: 24 }),
      h4(
        "div",
        { className: "fo-alert__body" },
        title && h4("p", { className: "fo-alert__title" }, title),
        children && h4("p", { className: "fo-alert__text" }, children),
        actions && h4("div", { className: "fo-alert__actions" }, actions)
      ),
      onDismiss && h4(IconButton, { icon: "x", label: "Dismiss", onClick: onDismiss, size: 20 })
    );
  }
  function Notification({ title, text, time, unread, icon = "bell", action }) {
    return h4(
      "div",
      { className: cx("fo-notif", unread && "is-unread") },
      h4("span", { className: cx("fo-notif__dot", !unread && "is-read") }, h4("span", { className: "fo-sr" }, unread ? "Unread" : "Read")),
      h4(
        "div",
        { style: { flex: 1, minWidth: 0 } },
        h4("p", { style: { margin: 0, fontWeight: unread ? 700 : 600 } }, title),
        text && h4("p", { style: { margin: "2px 0 0", color: "var(--text-secondary)" } }, text),
        h4("p", { className: "fo-text-sm fo-text-muted", style: { margin: "4px 0 0" } }, time)
      ),
      action
    );
  }
  function Popover({ trigger, title, children, open: forced, align = "start" }) {
    let [open, setOpen] = useState4(!1), isOpen = forced != null ? forced : open, id = useId2();
    return h4(
      "span",
      { className: "fo-pop-wrap", onKeyDown: (e) => e.key === "Escape" && setOpen(!1) },
      window.React.cloneElement(trigger, { "aria-expanded": isOpen, "aria-controls": id, onClick: () => setOpen(!isOpen) }),
      isOpen && h4("div", { id, role: "dialog", "aria-label": title, className: cx("fo-pop", align === "end" && "fo-pop--end") }, title && h4("p", { className: "fo-pop__title" }, title), children)
    );
  }
  function DropdownMenu({ label = "More actions", trigger, items = [], open: forced, align = "start" }) {
    let [open, setOpen] = useState4(!1), isOpen = forced != null ? forced : open, ref = useRef2(null), btnRef = useRef2(null);
    useEffect2(() => {
      if (open && ref.current) {
        let f = ref.current.querySelector("button:not(:disabled)");
        f && f.focus();
      }
    }, [open]);
    let onKey = (e) => {
      var _a, _b, _c;
      let list = ref.current ? [...ref.current.querySelectorAll("button:not(:disabled)")] : [], i = list.indexOf(document.activeElement);
      e.key === "ArrowDown" && (e.preventDefault(), (_a = list[(i + 1) % list.length]) == null || _a.focus()), e.key === "ArrowUp" && (e.preventDefault(), (_b = list[(i - 1 + list.length) % list.length]) == null || _b.focus()), e.key === "Escape" && (setOpen(!1), (_c = btnRef.current) == null || _c.focus());
    }, t = trigger || h4(Button, { variant: "outline", iconRight: "chevron-down" }, label);
    return h4(
      "span",
      { className: "fo-pop-wrap", onKeyDown: onKey },
      window.React.cloneElement(t, { ref: btnRef, "aria-haspopup": "menu", "aria-expanded": isOpen, onClick: () => setOpen(!isOpen) }),
      isOpen && h4(
        "ul",
        { className: cx("fo-menu", align === "end" && "fo-menu--end"), role: "menu", ref, "aria-label": label },
        items.map((it, i) => it === "separator" ? h4("li", { key: i, role: "separator", className: "fo-menu__sep" }) : h4("li", { key: i, role: "none" }, h4(
          "button",
          { type: "button", role: "menuitem", className: cx("fo-menu__item", it.danger && "is-danger"), disabled: it.disabled, onClick: () => {
            setOpen(!1), it.onSelect && it.onSelect();
          } },
          it.icon && h4(Icon, { name: it.icon }),
          it.label
        )))
      )
    );
  }
  function Tabs({ tabs = [], value, defaultValue, onChange, label = "Sections" }) {
    var _a;
    let [v, setV] = useState4(defaultValue || ((_a = tabs[0]) == null ? void 0 : _a.id)), cur = value != null ? value : v, uid = useId2().replace(/:/g, ""), set = (id) => {
      setV(id), onChange && onChange(id);
    }, onKey = (e) => {
      var _a2;
      let en = tabs.filter((t) => !t.disabled), i = en.findIndex((t) => t.id === cur), n = null;
      e.key === "ArrowRight" && (n = en[(i + 1) % en.length]), e.key === "ArrowLeft" && (n = en[(i - 1 + en.length) % en.length]), e.key === "Home" && (n = en[0]), e.key === "End" && (n = en[en.length - 1]), n && (e.preventDefault(), set(n.id), (_a2 = document.getElementById(`${uid}-t-${n.id}`)) == null || _a2.focus());
    }, active = tabs.find((t) => t.id === cur);
    return h4(
      "div",
      { className: "fo-tabs" },
      h4(
        "div",
        { className: "fo-tabs__list", role: "tablist", "aria-label": label, onKeyDown: onKey },
        tabs.map((t) => h4(
          "button",
          { key: t.id, id: `${uid}-t-${t.id}`, type: "button", role: "tab", className: "fo-tab", "aria-selected": t.id === cur, "aria-controls": `${uid}-p-${t.id}`, tabIndex: t.id === cur ? 0 : -1, disabled: t.disabled, onClick: () => set(t.id) },
          t.label,
          t.count != null && h4("span", { className: "fo-tab__count" }, t.count)
        ))
      ),
      active && h4("div", { className: "fo-tabs__panel", role: "tabpanel", id: `${uid}-p-${active.id}`, "aria-labelledby": `${uid}-t-${active.id}`, tabIndex: 0 }, active.content)
    );
  }
  function Pagination({ page = 1, pages = 1, total, perPage = 10, onChange, noun = "records" }) {
    let go = (p) => onChange && onChange(Math.max(1, Math.min(pages, p))), nums = pages <= 5 ? [...Array(pages)].map((_, i) => i + 1) : [1, page > 3 ? "\u2026" : 2, ...[page - 1, page, page + 1].filter((n) => n > 2 && n < pages - 1), page < pages - 2 ? "\u2026" : pages - 1, pages].filter((x, i, a) => a.indexOf(x) === i || x === "\u2026"), from = (page - 1) * perPage + 1, to = Math.min(total || page * perPage, page * perPage);
    return h4(
      "nav",
      { className: "fo-pager", "aria-label": "Pagination" },
      total != null && h4("span", { className: "fo-pager__info" }, `Showing ${from}\u2013${to} of ${total} ${noun}`),
      h4("button", { type: "button", className: "fo-pager__btn", disabled: page <= 1, onClick: () => go(page - 1) }, h4(Icon, { name: "chevron-left", size: 18 }), "Previous"),
      nums.map((n, i) => n === "\u2026" ? h4("span", { key: `e${i}`, "aria-hidden": !0, style: { padding: "0 4px", color: "var(--text-muted)" } }, "\u2026") : h4("button", { key: n, type: "button", className: "fo-pager__btn", "aria-current": n === page ? "page" : void 0, "aria-label": `Page ${n}`, onClick: () => go(n) }, n)),
      h4("button", { type: "button", className: "fo-pager__btn", disabled: page >= pages, onClick: () => go(page + 1) }, "Next", h4(Icon, { name: "chevron-right", size: 18 }))
    );
  }
  function Table({ caption, columns = [], rows = [], sort, onSort, stackOnMobile = !0, selectedKey, rowKey = "id", empty }) {
    return h4(
      "div",
      { className: "fo-table-wrap", role: "region", "aria-label": caption, tabIndex: 0 },
      h4(
        "table",
        { className: cx("fo-table", stackOnMobile && "fo-table--stack") },
        caption && h4("caption", null, caption),
        h4("thead", null, h4("tr", null, columns.map((c) => {
          let s = sort && sort.key === c.key ? sort.dir === "asc" ? "ascending" : "descending" : c.sortable ? "none" : void 0;
          return h4(
            "th",
            { key: c.key, scope: "col", className: c.numeric ? "is-num" : void 0, "aria-sort": s },
            c.sortable ? h4("button", { type: "button", onClick: () => onSort && onSort(c.key) }, c.label, h4(Icon, { name: "chevron-down", size: 16, style: { transform: s === "ascending" ? "rotate(180deg)" : void 0, opacity: s === "none" ? 0.5 : 1 } })) : c.label
          );
        }))),
        h4("tbody", null, rows.length === 0 && empty ? h4("tr", null, h4("td", { colSpan: columns.length }, empty)) : rows.map((r) => h4(
          "tr",
          { key: r[rowKey], className: r[rowKey] === selectedKey ? "is-selected" : void 0 },
          columns.map((c) => h4("td", { key: c.key, className: c.numeric ? "is-num" : void 0, "data-label": c.label }, c.render ? c.render(r) : r[c.key]))
        )))
      )
    );
  }

  // src/overlays.jsx
  var { createElement: h5, useEffect: useEffect3, useRef: useRef3, useId: useId3 } = window.React;
  function useModal(open, onClose, inline) {
    let ref = useRef3(null);
    return useEffect3(() => {
      if (!open || inline) return;
      let prev = document.activeElement, el = ref.current, sel = 'button:not(:disabled),a[href],input:not(:disabled),select,textarea,[tabindex]:not([tabindex="-1"])', first = el && (el.querySelector("[data-autofocus]") || el.querySelector(sel));
      first && first.focus();
      let onKey = (e) => {
        if (e.key === "Escape" && (e.stopPropagation(), onClose && onClose()), e.key === "Tab" && el) {
          let f = [...el.querySelectorAll(sel)];
          if (!f.length) return;
          e.shiftKey && document.activeElement === f[0] ? (e.preventDefault(), f[f.length - 1].focus()) : !e.shiftKey && document.activeElement === f[f.length - 1] && (e.preventDefault(), f[0].focus());
        }
      };
      return document.addEventListener("keydown", onKey), () => {
        document.removeEventListener("keydown", onKey), prev && prev.focus && prev.focus();
      };
    }, [open]), ref;
  }
  function Dialog({ open = !0, onClose, title, icon, tone = "default", size = "sm", children, footer, inline, dismissible = !0 }) {
    let ref = useModal(open, onClose, inline), tid = useId3();
    return open ? h5(
      "div",
      { className: cx("fo-overlay", inline && "fo-overlay--inline"), onMouseDown: (e) => e.target === e.currentTarget && dismissible && onClose && onClose() },
      h5(
        "div",
        { ref, className: cx("fo-dialog", size === "md" && "fo-dialog--md"), role: tone === "danger" ? "alertdialog" : "dialog", "aria-modal": !0, "aria-labelledby": tid },
        h5(
          "div",
          { className: "fo-dialog__head" },
          icon && h5("span", { className: cx("fo-dialog__icon", tone === "danger" && "fo-dialog__icon--danger", tone === "warning" && "fo-dialog__icon--warning"), "aria-hidden": !0 }, h5(Icon, { name: icon, size: 22 })),
          h5("h2", { id: tid, className: "fo-dialog__title" }, title),
          dismissible && h5(IconButton, { icon: "x", label: "Close", onClick: onClose })
        ),
        h5("div", { className: "fo-dialog__body" }, children),
        footer && h5("div", { className: "fo-dialog__foot" }, footer)
      )
    ) : null;
  }
  function ConfirmDialog({ title, description, summary = [], confirmLabel = "Confirm", cancelLabel = "Cancel", tone = "default", icon, loading, onConfirm, onCancel, inline, open }) {
    return h5(
      Dialog,
      {
        open,
        title,
        icon: icon || (tone === "danger" ? "trash-2" : "circle-check"),
        tone,
        onClose: onCancel,
        inline,
        footer: [h5(Button, { key: "c", variant: "outline", onClick: onCancel }, cancelLabel), h5(Button, { key: "o", variant: tone === "danger" ? "destructive" : "primary", loading, loadingText: "Saving\u2026", onClick: onConfirm, "data-autofocus": tone === "danger" ? void 0 : !0 }, confirmLabel)]
      },
      description && h5("p", null, description),
      summary.length > 0 && h5("dl", { className: "fo-summary" }, summary.map(([k, v], i) => [h5("dt", { key: `k${i}` }, k), h5("dd", { key: `v${i}` }, v)]))
    );
  }
  function BottomSheet({ open = !0, onClose, title, children, footer, inline }) {
    let ref = useModal(open, onClose, inline), tid = useId3();
    return open ? h5(
      "div",
      { className: cx("fo-sheet-wrap", inline && "fo-sheet-wrap--inline"), onMouseDown: (e) => e.target === e.currentTarget && onClose && onClose() },
      h5(
        "div",
        { ref, className: "fo-sheet", role: "dialog", "aria-modal": !0, "aria-labelledby": tid },
        h5("div", { className: "fo-sheet__grab", "aria-hidden": !0 }),
        h5("div", { className: "fo-sheet__head" }, h5("h2", { id: tid, className: "fo-sheet__title" }, title), h5(IconButton, { icon: "x", label: "Close", onClick: onClose })),
        h5("div", { className: "fo-sheet__body" }, children),
        footer && h5("div", { className: "fo-sheet__foot" }, footer)
      )
    ) : null;
  }
  var TOAST_ICON = { success: "circle-check", error: "circle-alert", warning: "triangle-alert", info: "info" };
  function Toast({ tone = "success", children, action, onDismiss }) {
    return h5(
      "div",
      { className: cx("fo-toast", `fo-toast--${tone}`), role: tone === "error" ? "alert" : "status" },
      h5(Icon, { name: TOAST_ICON[tone], size: 22 }),
      h5("p", { className: "fo-toast__text" }, children),
      action,
      onDismiss && h5(IconButton, { icon: "x", label: "Dismiss", onClick: onDismiss, size: 18 })
    );
  }
  function ToastRegion({ children }) {
    return h5("div", { className: "fo-toast-region", "aria-live": "polite" }, children);
  }
  function StatusMessage({ kind = "success", title, text, actions }) {
    let icon = { success: "circle-check", error: "circle-x", offline: "wifi-off", loading: null }[kind];
    return h5(
      "div",
      { className: cx("fo-status", `fo-status--${kind}`), role: kind === "error" ? "alert" : "status" },
      h5("span", { className: "fo-status__icon", "aria-hidden": !0 }, icon ? h5(Icon, { name: icon, size: 28 }) : h5(Spinner, { size: 28, label: "" })),
      h5("h3", { className: "fo-empty__title" }, title),
      text && h5("p", { className: "fo-empty__text" }, text),
      actions && h5("div", { className: "fo-empty__actions" }, actions)
    );
  }
  function ConnectionBanner({ online = !1, pending = 0, onRetry }) {
    return h5(
      "div",
      { className: cx("fo-banner", online && "fo-banner--online"), role: "status" },
      h5(Icon, { name: online ? "circle-check" : "wifi-off", size: 20 }),
      h5("span", { style: { flex: 1 } }, online ? "Back online. All changes are saved." : h5(window.React.Fragment, null, h5("strong", null, "You're offline. "), pending ? `${pending} change${pending > 1 ? "s" : ""} will be saved when you reconnect.` : "You can keep viewing records.")),
      !online && onRetry && h5(Button, { variant: "ghost", size: "sm", iconLeft: "refresh-cw", onClick: onRetry }, "Try again")
    );
  }

  // src/ai.jsx
  var { createElement: h6, useState: useState5, useId: useId4 } = window.React, EXAMPLE_PROMPTS = [
    "Sarah scored 92% on Math PACE 1048",
    "Daniel finished pages 10\u201316 in English",
    "What PACE is Grace on in Science?",
    "Show Sarah's test scores this term"
  ];
  function AssistantComposer({ value: v, onChange, onSubmit, prompts = EXAMPLE_PROMPTS, loading, placeholder = "Type what happened, e.g. \u201CSarah scored 92% on Math PACE 1048\u201D", showPrompts = !0 }) {
    let [val, setVal] = useState5(""), value = v != null ? v : val, id = useId4(), set = (s) => {
      setVal(s), onChange && onChange(s);
    };
    return h6(
      "section",
      { className: "fo-ai", "aria-label": "Assistant" },
      h6("div", { className: "fo-ai__head" }, h6(Icon, { name: "sparkles" }), h6("label", { htmlFor: id }, "Ask or record with the assistant")),
      h6(
        "form",
        { className: "fo-ai__compose", onSubmit: (e) => {
          e.preventDefault(), onSubmit && onSubmit(value);
        } },
        h6("textarea", { id, rows: 1, value, placeholder, onChange: (e) => set(e.target.value), "aria-describedby": `${id}-n` }),
        h6(Button, { type: "submit", variant: "primary", iconLeft: loading ? void 0 : "send", loading, loadingText: "Reading\u2026", disabled: !value && !loading }, "Send")
      ),
      h6("p", { id: `${id}-n`, className: "fo-text-sm fo-text-muted", style: { margin: 0 } }, "The assistant suggests changes. Nothing is saved until you confirm."),
      showPrompts && h6(
        "div",
        null,
        h6("p", { className: "fo-text-sm", style: { margin: "0 0 8px", fontWeight: 600, color: "var(--text-secondary)" } }, "Try one of these"),
        h6("div", { className: "fo-ai__prompts" }, prompts.map((p) => h6("button", { key: p, type: "button", className: "fo-chip", onClick: () => set(p) }, p)))
      )
    );
  }
  function AiActionPreview({ quote, action = "Record PACE test score", fields = [], state = "review", onConfirm, onEdit, onCancel, onFieldChange, passMark = 80 }) {
    let editing = state === "editing", saved = state === "saved", field = (f) => {
      if (!editing) return h6(
        "div",
        { key: f.key, className: cx("fo-ai__f", f.changed && "is-changed", f.missing && "is-missing") },
        h6("span", { className: "fo-ai__f-k" }, f.label, f.changed && h6(Badge, { tone: "neutral", icon: "pencil" }, "Edited")),
        h6("span", { className: "fo-ai__f-v" }, f.missing ? "Not given" : f.display || f.value)
      );
      let common = { value: f.value, onChange: (e) => onFieldChange && onFieldChange(f.key, e.target.value), "aria-label": f.label }, ctl2 = f.options ? h6(Select, { ...common, options: f.options }) : f.type === "score" ? h6(ScoreInput, common) : f.type === "date" ? h6(DateInput, common) : h6(TextInput, common);
      return h6("label", { key: f.key, className: "fo-field" }, h6("span", { className: "fo-field__label" }, f.label), ctl2);
    };
    return h6(
      "section",
      { className: "fo-ai__card", "aria-label": "Suggested change" },
      h6(
        "div",
        { className: "fo-ai__card-head" },
        h6("div", null, h6("p", { style: { margin: 0, fontWeight: 700 } }, saved ? "Saved to the record" : action), quote && h6("p", { className: "fo-ai__quote" }, `You wrote: \u201C${quote}\u201D`)),
        saved ? h6(Badge, { tone: "success" }, "Saved") : h6(AiTag, null, "AI suggestion")
      ),
      h6("div", { className: "fo-ai__fields" }, fields.map(field)),
      !saved && h6("p", { className: "fo-ai__note" }, h6(Icon, { name: "info", size: 18 }), "Check these details. Nothing changes in the record until you press Save."),
      h6("div", { className: "fo-ai__foot" }, saved ? [h6(Button, { key: "u", variant: "ghost", iconLeft: "undo-2", onClick: onCancel }, "Undo"), h6(AiTag, { key: "t", edited: fields.some((f) => f.changed) })] : [
        h6(Button, { key: "c", variant: "ghost", onClick: onCancel, disabled: state === "saving" }, "Cancel"),
        !editing && h6(Button, { key: "e", variant: "outline", iconLeft: "pencil", onClick: onEdit, disabled: state === "saving" }, "Edit details"),
        h6(Button, { key: "s", variant: "primary", iconLeft: "check", loading: state === "saving", loadingText: "Saving\u2026", onClick: onConfirm }, editing ? "Save changes" : "Save to record")
      ])
    );
  }
  function AiClarification({ quote, question, options = [], onChoose, onCancel }) {
    let [v, setV] = useState5(null), name = useId4();
    return h6(
      "section",
      { className: "fo-ai__card", "aria-label": "The assistant needs more information" },
      h6("div", { className: "fo-ai__card-head" }, h6("div", null, h6("p", { style: { margin: 0, fontWeight: 700 } }, question), quote && h6("p", { className: "fo-ai__quote" }, `You wrote: \u201C${quote}\u201D`)), h6(Badge, { tone: "warning", icon: "circle-help" }, "Needs your answer")),
      h6(
        "fieldset",
        { className: "fo-fieldset fo-ai__options", style: { paddingTop: 16 } },
        h6("legend", { className: "fo-sr" }, question),
        options.map((o) => h6(Radio, { key: o.value, name, card: !0, label: o.label, description: o.description, checked: v === o.value, onChange: () => setV(o.value) }))
      ),
      h6("div", { className: "fo-ai__foot" }, h6(Button, { variant: "ghost", onClick: onCancel }, "Cancel"), h6(Button, { variant: "primary", disabled: !v, onClick: () => onChoose && onChoose(v) }, "Continue"))
    );
  }
  function AiFallback({ quote, reason = "I couldn't match this to a child or subject.", onRetry, onManual, unavailable }) {
    return h6(
      "section",
      { className: "fo-ai__card", role: "alert" },
      h6("div", { className: "fo-ai__card-head" }, h6("div", null, h6("p", { style: { margin: 0, fontWeight: 700 } }, unavailable ? "The assistant is unavailable right now" : "I couldn't work that out"), quote && h6("p", { className: "fo-ai__quote" }, `You wrote: \u201C${quote}\u201D`)), h6(Badge, { tone: "error", icon: "circle-alert" }, "Not saved")),
      h6("p", { className: "fo-ai__note", style: { paddingTop: 16 } }, h6(Icon, { name: "info", size: 18 }), unavailable ? "Your records are safe. You can still add this yourself using the form." : reason),
      h6("div", { className: "fo-ai__foot" }, onRetry && h6(Button, { variant: "ghost", iconLeft: "refresh-cw", onClick: onRetry }, "Try again"), h6(Button, { variant: "primary", iconLeft: "pencil", onClick: onManual }, "Enter it myself"))
    );
  }
  function AiThinking({ quote }) {
    return h6(
      "section",
      { className: "fo-ai__card", "aria-busy": !0 },
      h6("div", { className: "fo-ai__card-head" }, h6("div", null, h6("p", { style: { margin: 0, fontWeight: 700 } }, "Reading your request\u2026"), quote && h6("p", { className: "fo-ai__quote" }, `You wrote: \u201C${quote}\u201D`)), h6(Spinner, { label: "Reading your request" })),
      h6("div", { className: "fo-ai__fields" }, ["Child", "Subject", "PACE", "Score"].map((k) => h6("div", { key: k, className: "fo-ai__f" }, h6("span", { className: "fo-ai__f-k" }, k), h6("span", { className: "fo-skeleton", style: { width: "70%", height: 20 } }))))
    );
  }
  return __toCommonJS(index_exports);
})();
window.Folio=Object.assign(window.Folio||{},__Folio);
