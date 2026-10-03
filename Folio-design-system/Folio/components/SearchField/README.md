# SearchField
Search input with a leading search icon and a clear button once filled.

**Consumer provides:** `value`, `onChange`, `onClear`, `label` (used as the accessible name when no visible label), `placeholder`.

## Rules
- Placeholder states the scope: "Search children, subjects or PACE numbers".
- Results filter as you type after 2 characters; announce the result count in a polite live region ("6 records found").
- Clear button is a 36px target inside a 44px field.

Naming: `Search / Empty`, `Search / Filled`.
