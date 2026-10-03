# Table
Readable records: 16px cells, 15px semibold headers on `table-header-bg`, right-aligned tabular numbers, row dividers only.

**Consumer provides:** `caption`, `columns` (`[{key, label, numeric, render, sortable}]`), `rows`, `rowKey`, optional `sort` + `onSort`, `selectedKey`, `empty`, `stackOnMobile` (default true).

## Rules
- Max ~6 columns on desktop. Below 640px rows become labelled blocks; for complex tables use `RecordRow` lists instead.
- Sortable headers are buttons with `aria-sort`. The container is a focusable, labelled region so keyboard users can scroll it.
- Statuses in cells use `StatusBadge`.
