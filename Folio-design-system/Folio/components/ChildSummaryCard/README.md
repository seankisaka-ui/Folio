# ChildSummaryCard
One child on the household dashboard: name, age/level, current PACE per subject, today's status, and a clear way in.

**Consumer provides:** `name`, `meta` ("Age 10 · Level 4"), `paces` (`[{subject, pace}]`), optional `status` (a `Badge`), `updated` ("Progress updated today"), `href`/`onOpen`.

Rules: name in `text-h3` Bricolage; PACE numbers in tabular semibold; the action names the child ("Open Sarah's record").
