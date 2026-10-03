import { Icon, Button, IconButton, Avatar, Badge, StatusBadge, AiTag, cx } from "./core.jsx";
const { createElement: h, useState, useRef, useEffect, useId, Fragment } = window.React;

export function Card({ title, subtitle, action, footer, flush, muted, as = "section", className, children, ...rest }) {
  return h(as, { className: cx("fo-card", flush && "fo-card--flush", muted && "fo-card--muted", className), ...rest },
    (title || action) && h("div", { className: "fo-card__head" },
      h("div", null, title && h("h3", { className: "fo-card__title" }, title), subtitle && h("p", { className: "fo-card__sub" }, subtitle)),
      action),
    children,
    footer && h("div", { className: "fo-card__foot" }, footer));
}

/** InteractiveCard — the whole card is one link/button. Use for navigation to a record. */
export function InteractiveCard({ href, onClick, selected, disabled, children, className, label }) {
  const Tag = href ? "a" : "button";
  return h(Tag, { href, onClick, type: href ? undefined : "button", className: cx("fo-card fo-icard", selected && "is-selected", disabled && "is-disabled", className), "aria-pressed": !href && selected != null ? !!selected : undefined, "aria-disabled": disabled || undefined, "aria-label": label, style: { textDecoration: "none", display: "flex" } }, children);
}

const SUBJECT_ICON = { Mathematics: "list-checks", English: "book-open", "Word Building": "pencil", Science: "layers", "Social Studies": "graduation-cap" };

/** ProgressBar — labelled bar with visible numbers. role=progressbar. */
export function ProgressBar({ label, value = 0, max = 100, valueText, size, hideLabel }) {
  const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100)));
  const text = valueText || `${pct}%`;
  const id = useId();
  return h("div", { className: cx("fo-progress", size === "lg" && "fo-progress--lg", pct >= 100 && "is-complete") },
    !hideLabel && h("div", { className: "fo-progress__top" }, h("span", { className: "fo-progress__label", id }, label), h("span", { className: "fo-progress__value" }, text)),
    h("div", { className: "fo-progress__track", role: "progressbar", "aria-labelledby": hideLabel ? undefined : id, "aria-label": hideLabel ? label : undefined, "aria-valuemin": 0, "aria-valuemax": max, "aria-valuenow": value, "aria-valuetext": text },
      h("div", { className: "fo-progress__fill", style: { width: `${pct}%` } })));
}

/** PaceSteps — the four stages of a PACE: Pages → Checkups → Self Test → PACE Test. */
export function PaceSteps({ current = 0 }) {
  const steps = ["Pages", "Checkups", "Self Test", "PACE Test"];
  return h("ol", { className: "fo-steps", "aria-label": "PACE stages" },
    steps.map((s, i) => h("li", { key: s, className: cx(i < current && "is-done", i === current && "is-current"), "aria-current": i === current ? "step" : undefined },
      h("span", null, s, h("span", { className: "fo-sr" }, i < current ? " — done" : i === current ? " — current" : " — not started")))));
}

/** ScoreDisplay — a PACE test score with pass/fail stated in words. */
export function ScoreDisplay({ score, passMark = 80, size = "lg", date, showStatus = true }) {
  const pending = score == null;
  const passed = !pending && score >= passMark;
  return h("div", { className: cx("fo-score", size !== "lg" && `fo-score--${size}`) },
    h("span", { className: "fo-score__value" }, pending ? "—" : `${score}%`),
    h("span", { className: "fo-score__meta" },
      showStatus && (pending ? h(Badge, { tone: "neutral", icon: "clock" }, "Not tested yet") : passed ? h(Badge, { tone: "success" }, "Passed") : h(Badge, { tone: "error", icon: "circle-alert" }, "Below pass mark")),
      h("span", { className: "fo-score__mark" }, `Pass mark ${passMark}%`, date ? ` · ${date}` : "")));
}

export function StatTile({ label, value, note, icon }) {
  return h(Card, { className: "fo-stat" },
    h("span", { className: "fo-stat__label" }, label, icon && h("span", { className: "fo-stat__icon" }, h(Icon, { name: icon }))),
    h("span", { className: "fo-stat__value" }, value),
    note && h("span", { className: "fo-stat__note" }, note));
}

/** ChildSummaryCard — one child: name, level, current PACEs per subject, today's status, open action. */
export function ChildSummaryCard({ name, meta, paces = [], status, updated, onOpen, href = "#" }) {
  return h(Card, { as: "article", "aria-label": name },
    h("div", { className: "fo-child" }, h(Avatar, { name, size: "md" }),
      h("div", { style: { flex: 1, minWidth: 0 } }, h("h3", { className: "fo-child__name" }, name), meta && h("p", { className: "fo-child__meta" }, meta))),
    (status || updated) && h("div", { className: "fo-row", style: { gap: 8 } }, status, updated && h("span", { className: "fo-text-sm fo-text-muted" }, updated)),
    h("ul", { className: "fo-child__paces", "aria-label": `${name}'s current PACEs` },
      paces.map((p) => h("li", { key: p.subject }, h("span", { className: "s" }, p.subject), h("span", { className: "p" }, `PACE ${p.pace}`)))),
    h("div", { className: "fo-card__foot" },
      h("a", { href, className: "fo-btn fo-btn--outline fo-btn--block", onClick: onOpen }, `Open ${name.split(" ")[0]}'s record`, h(Icon, { name: "arrow-right", size: 18 }))));
}

/** SubjectCard — subject with current PACE and progress; state: active | ready | complete | not-started | selected. */
export function SubjectCard({ subject, pace, progress = 0, pagesDone, pagesTotal, status = "in-progress", updated, selected, onClick }) {
  const body = h(Fragment, null,
    h("div", { className: "fo-subject__head" },
      h("span", { className: "fo-subject__icon" }, h(Icon, { name: SUBJECT_ICON[subject] || "book-open" })),
      h("div", { style: { flex: 1, minWidth: 0 } }, h("h3", { className: "fo-card__title" }, subject), h("p", { className: "fo-card__sub" }, pace ? `PACE ${pace}` : "No PACE assigned")),
      onClick ? h(Icon, { name: "chevron-right", className: "fo-icard__chev" }) : null),
    pace && h(ProgressBar, { label: "Progress", value: progress, valueText: pagesTotal ? `${pagesDone} of ${pagesTotal} pages` : undefined }),
    h("div", { className: "fo-row", style: { justifyContent: "space-between" } }, h(StatusBadge, { status }), updated && h("span", { className: "fo-text-sm fo-text-muted" }, updated)));
  return onClick ? h(InteractiveCard, { onClick, selected, label: `${subject}, PACE ${pace}` }, h("div", { className: "fo-stack", style: { width: "100%" } }, body)) : h(Card, { className: cx(selected && "is-selected") }, body);
}

/** PaceCard — the current PACE for one subject with stage steps and the next action. */
export function PaceCard({ subject, pace, nextPace, pagesDone = 0, pagesTotal = 0, stage = 0, status = "in-progress", updated, score, onLog, onTest, onAdvance, passMark = 80 }) {
  const ready = status === "ready-for-test";
  const passed = status === "passed";
  return h(Card, { as: "article", className: cx("fo-pace", "is-current"), "aria-label": `${subject} PACE ${pace}` },
    h("div", { className: "fo-card__head" },
      h("div", null, h("p", { className: "fo-overline", style: { margin: 0 } }, subject),
        h("div", { className: "fo-pace__num" }, h("span", { className: "k" }, "PACE"), h("span", { className: "v" }, pace))),
      h(StatusBadge, { status })),
    h(PaceSteps, { current: stage }),
    passed ? h(ScoreDisplay, { score, passMark, size: "md" }) : h(ProgressBar, { label: "Pages completed", value: pagesDone, max: pagesTotal, valueText: `${pagesDone} of ${pagesTotal}` }),
    updated && h("p", { className: "fo-text-sm fo-text-muted", style: { margin: 0, display: "flex", gap: 6, alignItems: "center" } }, h(Icon, { name: "clock", size: 16 }), updated),
    h("div", { className: "fo-card__foot" },
      passed ? h(Button, { variant: "primary", iconRight: "arrow-right", onClick: onAdvance, block: true }, `Advance to PACE ${nextPace}`)
        : ready ? h(Button, { variant: "primary", iconLeft: "clipboard-check", onClick: onTest, block: true }, "Record test score")
        : h(Button, { variant: "secondary", iconLeft: "notebook-pen", onClick: onLog, block: true }, "Log progress")));
}

export function ActivityItem({ icon = "notebook-pen", tone, text, meta, ai, time }) {
  return h("div", { className: "fo-activity" },
    h("span", { className: cx("fo-activity__icon", tone && `fo-activity__icon--${tone}`), "aria-hidden": true }, h(Icon, { name: icon, size: 18 })),
    h("div", { className: "fo-activity__body" }, h("p", { className: "fo-activity__text" }, text),
      h("p", { className: "fo-activity__meta" }, time && h("time", null, time), meta && h("span", null, meta), ai && h(AiTag, { edited: ai === "edited" }))));
}

/** HistoryEntry — one item in a child's academic timeline; wrap entries in <Timeline>. */
export function Timeline({ children, label = "Academic history" }) { return h("ol", { className: "fo-timeline", "aria-label": label }, children); }
export function HistoryEntry({ title, meta, kind = "complete", badge }) {
  const dot = { complete: ["fo-tl__dot--success", "check"], current: ["fo-tl__dot--current", "notebook-pen"], warning: ["fo-tl__dot--warning", "triangle-alert"], neutral: ["", "clock"] }[kind];
  return h("li", { className: "fo-tl" },
    h("span", { className: cx("fo-tl__dot", dot[0]), "aria-hidden": true }, h(Icon, { name: dot[1], size: 14, strokeWidth: 2.5 })),
    h("div", null, h("p", { className: "fo-tl__title" }, title, badge), meta && h("p", { className: "fo-tl__meta" }, meta)));
}

/** RecordRow — mobile replacement for a table row: title, meta, value, chevron. */
export function RecordRow({ title, meta, value, badge, href = "#", onClick, avatar }) {
  return h("a", { href, onClick, className: "fo-record" },
    avatar && h(Avatar, { name: avatar, size: "sm" }),
    h("div", { className: "fo-record__main" }, h("p", { className: "fo-record__title" }, title), meta && h("p", { className: "fo-record__meta" }, meta)),
    h("div", { className: "fo-record__end" }, badge, value && h("strong", { className: "fo-num" }, value), h(Icon, { name: "chevron-right", style: { color: "var(--text-muted)" } })));
}

export function EmptyState({ icon = "users", title, text, actions }) {
  return h("div", { className: "fo-empty" },
    h("span", { className: "fo-empty__icon", "aria-hidden": true }, h(Icon, { name: icon, size: 32 })),
    h("h3", { className: "fo-empty__title" }, title), text && h("p", { className: "fo-empty__text" }, text),
    actions && h("div", { className: "fo-empty__actions" }, actions));
}

const ALERT_ICON = { info: "info", success: "circle-check", warning: "triangle-alert", error: "circle-alert" };
/** Alert — inline message in the page flow. Errors use role=alert; others role=status. */
export function Alert({ tone = "info", title, children, actions, onDismiss }) {
  return h("div", { className: cx("fo-alert", `fo-alert--${tone}`), role: tone === "error" ? "alert" : "status" },
    h(Icon, { name: ALERT_ICON[tone], size: 24 }),
    h("div", { className: "fo-alert__body" }, title && h("p", { className: "fo-alert__title" }, title), children && h("p", { className: "fo-alert__text" }, children),
      actions && h("div", { className: "fo-alert__actions" }, actions)),
    onDismiss && h(IconButton, { icon: "x", label: "Dismiss", onClick: onDismiss, size: 20 }));
}

export function Notification({ title, text, time, unread, icon = "bell", action }) {
  return h("div", { className: cx("fo-notif", unread && "is-unread") },
    h("span", { className: cx("fo-notif__dot", !unread && "is-read") }, h("span", { className: "fo-sr" }, unread ? "Unread" : "Read")),
    h("div", { style: { flex: 1, minWidth: 0 } }, h("p", { style: { margin: 0, fontWeight: unread ? 700 : 600 } }, title),
      text && h("p", { style: { margin: "2px 0 0", color: "var(--text-secondary)" } }, text),
      h("p", { className: "fo-text-sm fo-text-muted", style: { margin: "4px 0 0" } }, time)),
    action);
}

/** Popover — non-modal panel anchored to a trigger, for short explanations or a small form. */
export function Popover({ trigger, title, children, open: forced, align = "start" }) {
  const [open, setOpen] = useState(false);
  const isOpen = forced ?? open;
  const id = useId();
  return h("span", { className: "fo-pop-wrap", onKeyDown: (e) => e.key === "Escape" && setOpen(false) },
    window.React.cloneElement(trigger, { "aria-expanded": isOpen, "aria-controls": id, onClick: () => setOpen(!isOpen) }),
    isOpen && h("div", { id, role: "dialog", "aria-label": title, className: cx("fo-pop", align === "end" && "fo-pop--end") }, title && h("p", { className: "fo-pop__title" }, title), children));
}

/** DropdownMenu — actions menu. Arrow keys move, Escape closes and returns focus. items: [{label, icon, danger, disabled, onSelect} | "separator"]. */
export function DropdownMenu({ label = "More actions", trigger, items = [], open: forced, align = "start" }) {
  const [open, setOpen] = useState(false);
  const isOpen = forced ?? open;
  const ref = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => { if (open && ref.current) { const f = ref.current.querySelector("button:not(:disabled)"); f && f.focus(); } }, [open]);
  const onKey = (e) => {
    const list = ref.current ? [...ref.current.querySelectorAll("button:not(:disabled)")] : [];
    const i = list.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); list[(i + 1) % list.length]?.focus(); }
    if (e.key === "ArrowUp") { e.preventDefault(); list[(i - 1 + list.length) % list.length]?.focus(); }
    if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
  };
  const t = trigger || h(Button, { variant: "outline", iconRight: "chevron-down" }, label);
  return h("span", { className: "fo-pop-wrap", onKeyDown: onKey },
    window.React.cloneElement(t, { ref: btnRef, "aria-haspopup": "menu", "aria-expanded": isOpen, onClick: () => setOpen(!isOpen) }),
    isOpen && h("ul", { className: cx("fo-menu", align === "end" && "fo-menu--end"), role: "menu", ref, "aria-label": label },
      items.map((it, i) => it === "separator" ? h("li", { key: i, role: "separator", className: "fo-menu__sep" })
        : h("li", { key: i, role: "none" }, h("button", { type: "button", role: "menuitem", className: cx("fo-menu__item", it.danger && "is-danger"), disabled: it.disabled, onClick: () => { setOpen(false); it.onSelect && it.onSelect(); } },
          it.icon && h(Icon, { name: it.icon }), it.label)))));
}

/** Tabs — roving tabindex, arrow keys switch tabs. tabs: [{id,label,count,content,disabled}]. */
export function Tabs({ tabs = [], value, defaultValue, onChange, label = "Sections" }) {
  const [v, setV] = useState(defaultValue || tabs[0]?.id);
  const cur = value ?? v;
  const uid = useId().replace(/:/g, "");
  const set = (id) => { setV(id); onChange && onChange(id); };
  const onKey = (e) => {
    const en = tabs.filter((t) => !t.disabled); const i = en.findIndex((t) => t.id === cur);
    let n = null;
    if (e.key === "ArrowRight") n = en[(i + 1) % en.length]; if (e.key === "ArrowLeft") n = en[(i - 1 + en.length) % en.length];
    if (e.key === "Home") n = en[0]; if (e.key === "End") n = en[en.length - 1];
    if (n) { e.preventDefault(); set(n.id); document.getElementById(`${uid}-t-${n.id}`)?.focus(); }
  };
  const active = tabs.find((t) => t.id === cur);
  return h("div", { className: "fo-tabs" },
    h("div", { className: "fo-tabs__list", role: "tablist", "aria-label": label, onKeyDown: onKey },
      tabs.map((t) => h("button", { key: t.id, id: `${uid}-t-${t.id}`, type: "button", role: "tab", className: "fo-tab", "aria-selected": t.id === cur, "aria-controls": `${uid}-p-${t.id}`, tabIndex: t.id === cur ? 0 : -1, disabled: t.disabled, onClick: () => set(t.id) },
        t.label, t.count != null && h("span", { className: "fo-tab__count" }, t.count)))),
    active && h("div", { className: "fo-tabs__panel", role: "tabpanel", id: `${uid}-p-${active.id}`, "aria-labelledby": `${uid}-t-${active.id}`, tabIndex: 0 }, active.content));
}

export function Pagination({ page = 1, pages = 1, total, perPage = 10, onChange, noun = "records" }) {
  const go = (p) => onChange && onChange(Math.max(1, Math.min(pages, p)));
  const nums = pages <= 5 ? [...Array(pages)].map((_, i) => i + 1) : [1, page > 3 ? "…" : 2, ...[page - 1, page, page + 1].filter((n) => n > 2 && n < pages - 1), page < pages - 2 ? "…" : pages - 1, pages].filter((x, i, a) => a.indexOf(x) === i || x === "…");
  const from = (page - 1) * perPage + 1, to = Math.min(total || page * perPage, page * perPage);
  return h("nav", { className: "fo-pager", "aria-label": "Pagination" },
    total != null && h("span", { className: "fo-pager__info" }, `Showing ${from}–${to} of ${total} ${noun}`),
    h("button", { type: "button", className: "fo-pager__btn", disabled: page <= 1, onClick: () => go(page - 1) }, h(Icon, { name: "chevron-left", size: 18 }), "Previous"),
    nums.map((n, i) => n === "…" ? h("span", { key: `e${i}`, "aria-hidden": true, style: { padding: "0 4px", color: "var(--text-muted)" } }, "…")
      : h("button", { key: n, type: "button", className: "fo-pager__btn", "aria-current": n === page ? "page" : undefined, "aria-label": `Page ${n}`, onClick: () => go(n) }, n)),
    h("button", { type: "button", className: "fo-pager__btn", disabled: page >= pages, onClick: () => go(page + 1) }, "Next", h(Icon, { name: "chevron-right", size: 18 })));
}

/** Table — readable records table. columns: [{key,label,numeric,render,sortable}]; stackOnMobile turns rows into labelled blocks under 640px. */
export function Table({ caption, columns = [], rows = [], sort, onSort, stackOnMobile = true, selectedKey, rowKey = "id", empty }) {
  return h("div", { className: "fo-table-wrap", role: "region", "aria-label": caption, tabIndex: 0 },
    h("table", { className: cx("fo-table", stackOnMobile && "fo-table--stack") },
      caption && h("caption", null, caption),
      h("thead", null, h("tr", null, columns.map((c) => {
        const s = sort && sort.key === c.key ? (sort.dir === "asc" ? "ascending" : "descending") : c.sortable ? "none" : undefined;
        return h("th", { key: c.key, scope: "col", className: c.numeric ? "is-num" : undefined, "aria-sort": s },
          c.sortable ? h("button", { type: "button", onClick: () => onSort && onSort(c.key) }, c.label, h(Icon, { name: "chevron-down", size: 16, style: { transform: s === "ascending" ? "rotate(180deg)" : undefined, opacity: s === "none" ? 0.5 : 1 } })) : c.label);
      }))),
      h("tbody", null, rows.length === 0 && empty ? h("tr", null, h("td", { colSpan: columns.length }, empty))
        : rows.map((r) => h("tr", { key: r[rowKey], className: r[rowKey] === selectedKey ? "is-selected" : undefined },
          columns.map((c) => h("td", { key: c.key, className: c.numeric ? "is-num" : undefined, "data-label": c.label }, c.render ? c.render(r) : r[c.key])))))));
}
