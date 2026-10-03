# Tabs
Switch between views of the same child or record. Roving tab index; ←/→/Home/End move between tabs.

**Consumer provides:** `tabs` (`[{id, label, count, content, disabled}]`), `value`/`defaultValue`, `onChange`, `label`.

States: Default · Hover · Focus · Selected (3px `primary` underline + bold) · Disabled. Max 5 tabs; on mobile the list scrolls horizontally.
