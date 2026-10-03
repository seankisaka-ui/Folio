# A.C.E. Homeschool Tracker — Project Context

## Purpose of This Document

This document is the persistent product context for the A.C.E. Homeschool Tracker. Read it before making product, design, architecture, or implementation decisions.

It explains what the product is, who it serves, the workflow it must support, and the boundaries of the first release. It is a product brief, not a complete technical specification. When implementation details are not yet defined, choose the simplest reliable approach that supports the workflows and principles below.

## Product Summary

The A.C.E. Homeschool Tracker is a simple browser-based web application for parents and homeschool supervisors using the Accelerated Christian Education (A.C.E.) curriculum.

It replaces fragmented paper records and spreadsheets with one clear place to:

- Set up a homeschool household.
- Add and manage multiple children.
- Assign subjects to each child.
- Record each child's current PACE position.
- Log progress through a PACE.
- Record completed PACE test scores.
- Advance a child to the next PACE.
- Review current academic status and historical records.
- See household-level progress.
- Produce useful academic reports.
- Use natural-language AI to log or retrieve information more quickly.

The product's central academic loop is:

> Child → Subject → PACE → Progress → Test Score → Next PACE → Permanent Record

The application should make this loop fast, obvious, and difficult to get wrong.

## The Problem It Solves

A.C.E. homeschool recordkeeping is often spread across paper forms, physical PACEs, handwritten notes, and spreadsheets. This creates recurring problems:

- Parents must repeatedly enter or calculate information by hand.
- It is difficult to see every child's current position at a glance.
- Records may become inconsistent, incomplete, or lost.
- Reviewing progress across several children and subjects takes too long.
- Preparing reports requires reconstructing information from multiple sources.
- Existing school-management products can feel too complex for a small homeschool.

This product should reduce recordkeeping effort while preserving a dependable, understandable academic history.

## Who the Product Is For

### Primary user: Parent or homeschool supervisor

The primary user manages the household's learning records. They need to set up children and subjects, record progress and test results, check academic position, and retrieve records quickly.

Primary users may be older, busy, or not technically confident. The interface must not assume familiarity with complex software. Common actions should be easy to find, language should be plain, and screens should avoid unnecessary density.

### Secondary user: Mobile parent or supervisor

The same parent or supervisor may use a phone when away from a desk. Mobile use is mainly for quick review and lightweight actions: checking a child's current position, reviewing recent activity, and making a quick progress or score entry when appropriate.

### Future users, not required for the MVP

The product may later support students, tutors, school administrators, or larger learning centers. Do not complicate the MVP around these future roles unless a current requirement explicitly calls for them.

## A.C.E. and PACE Concepts

Implementation should respect the following domain model. If a domain rule is uncertain, make it configurable or confirm it rather than embedding an unsupported assumption.

### A.C.E.

A.C.E. stands for Accelerated Christian Education. Its curriculum is organized around self-paced learning materials called PACEs.

### PACE

A PACE is a numbered unit of work within a subject. A child normally works through a sequence of PACEs, completes the work in the current PACE, takes a PACE test, and then moves to the next PACE.

### Subject

A subject is an academic area assigned to a child, such as Math, English, Science, Social Studies, or Word Building. Each child can have their own current PACE and progress state for every subject.

### Current academic position

A child's position is primarily represented by the current PACE in each assigned subject, together with relevant progress information and the most recent results. Different subjects may be at different PACE numbers.

### Progress

Progress represents advancement through the current PACE. The precise tracking unit may depend on the agreed product rules—for example pages, checkpoints, sections, status, or completion percentage. The UI and data model should be able to represent progress clearly without pretending to know unsupported curriculum rules.

### PACE test score

When a child completes a PACE, the parent records the test result. That result becomes part of the child's permanent history for the subject. Advancing to the next PACE should preserve the completed record rather than overwrite it.

### Permanent record

The permanent record is the chronological history of completed and relevant in-progress academic work. It should remain traceable and should support review and reporting.

## Core User Workflows

### 1. Account and homeschool setup

1. Create an account or sign in.
2. Create the household or homeschool profile.
3. Complete a short, guided initial setup.
4. Arrive at a useful home view without unnecessary configuration.

### 2. Add a child

1. Add basic child information.
2. Assign the subjects the child is studying.
3. Set the current PACE for each subject.
4. Confirm the starting position.

The setup should support multiple children without making a single-child household feel complicated.

### 3. Check current academic position

The parent should be able to open a child and immediately understand:

- Which subjects are active.
- The current PACE for each subject.
- Current progress or status.
- Recent activity or last update.
- Whether any item needs attention.

### 4. Log progress

1. Select a child and subject, or start from the relevant subject card.
2. Enter the new progress information using a small, focused form.
3. Review the entry.
4. Save it and update the child's current position and history.

This is a frequent task and should require as few decisions and steps as practical.

### 5. Complete a PACE and record a test score

1. Open the child's active subject or current PACE.
2. Mark the PACE complete.
3. Enter the test score and relevant completion information.
4. Confirm the permanent record entry.
5. Move the child to the next PACE, with a clear opportunity to verify or change that next number.

This transition must be safe. The product should prevent accidental loss, duplicate completion, or silent overwriting of the prior PACE record.

### 6. Review history

The parent should be able to view a child's history by subject and over time, including completed PACE numbers, test scores, dates, and relevant notes or progress events.

### 7. View household progress

The household view should provide a concise overview of all children. It should highlight current positions, recent activity, and items needing attention without becoming an analytics-heavy dashboard.

### 8. Generate reports

The parent should be able to generate clear, useful reports from stored records. Initial reports should focus on practical academic information rather than elaborate analytics.

### 9. Use natural-language assistance

The parent may type a request such as:

- “Log that Daniel finished Math PACE 1052 with a score of 92%.”
- “Show me Grace's Science scores this term.”
- “Which PACEs did the children complete this month?”

The system should interpret the request, show the proposed action or result clearly, and keep the user in control.

## Product Principles

### Simplicity over feature density

Every screen should have a clear purpose and an obvious primary action. Avoid filling the interface with charts, cards, settings, or metrics simply because dashboard references contain them.

### Fast frequent actions

Logging progress and recording a PACE result are core actions. Optimize their path length, clarity, defaults, and error prevention.

### Plain language

Use terms that parents and A.C.E. supervisors understand. Avoid technical jargon, corporate school-management language, and unexplained icons.

### Clear hierarchy

Make the current child, subject, PACE, status, and next action visually unmistakable. Use headings, spacing, grouping, and restrained emphasis rather than visual noise.

### Accessible to older and nontechnical users

Use readable type sizes, strong contrast, comfortably sized controls, persistent labels, clear focus states, and generous spacing. Do not rely on hover, color alone, tiny icons, hidden gestures, or memory-heavy navigation. Aim for WCAG 2.1 AA accessibility as a baseline.

### Safe recordkeeping

Important actions should be reviewable. Preserve history, validate inputs, prevent duplicates where possible, and ask for confirmation when an action would materially alter an academic record.

### Progressive disclosure

Show the information needed for the current task first. Place advanced details and less-frequent settings behind clear secondary actions.

### Calm, trustworthy presentation

The app should feel organized and reassuring. It is a practical family recordkeeping tool, not an enterprise analytics platform or a gamified student app.

## The Role of AI

AI is an assistant to the recordkeeping workflow, not the product's foundation and not an autonomous decision-maker.

AI may help users:

- Turn natural-language input into a proposed progress or test-score entry.
- Find records without constructing complex filters.
- Summarize a child's recorded progress.
- Answer questions using the household's stored data.
- Reduce repetitive form entry.

AI must not:

- Silently create, edit, advance, or delete academic records.
- Invent missing PACE numbers, scores, dates, or curriculum facts.
- Make high-impact academic decisions on the parent's behalf.
- Obscure the underlying records or prevent normal non-AI use.

For any write action, display the interpreted child, subject, PACE, score, date, and other important fields for confirmation before saving. If the request is ambiguous, ask a focused follow-up question. All essential workflows must remain available through ordinary interface controls.

## Desktop and Mobile Priorities

### Desktop: primary experience

The desktop browser experience is the main workspace. It should support full setup, detailed record management, history review, household oversight, and report generation.

Desktop layouts may use a persistent sidebar and more generous multi-column space, but should remain focused and easy to scan.

### Mobile: important companion experience

The mobile browser experience is not optional, but it is secondary to desktop. It should support:

- Viewing household and child summaries.
- Checking current subject and PACE positions.
- Reviewing recent activity and records.
- Making quick, safe progress and test-score entries where practical.

Do not squeeze the desktop interface onto a small screen. Reflow content, simplify navigation, stack fields, keep tap targets large, and prioritize the information needed while on the move. Complex setup and dense reporting may be streamlined or directed to desktop when necessary.

## Conceptual Data Model

The implementation should support these concepts and relationships. Names and storage details may change during technical design.

### User

The authenticated person who owns or is authorized to manage a homeschool household.

### Household / Homeschool

The top-level container for children, settings, records, and reports. A household can contain multiple children.

### Child

A learner within a household. A child has assigned subjects and related academic records.

### Subject

A defined area of study. Subjects may be drawn from a default list but should not be unnecessarily hard-coded if families need flexibility.

### Child subject / Enrollment

The relationship between a child and a subject. It holds the child's current academic position for that subject, including the current PACE and relevant status.

### PACE record

The record for a particular child, subject, and PACE number. It may include status, start and completion dates, test score, notes, and other agreed fields.

### Progress entry

A timestamped update connected to a PACE record. It captures an incremental change or status update and contributes to the audit trail.

### Test result

The recorded result for a completed PACE, including score and date. Whether this is stored separately or within the PACE record is a technical decision, but its history must be preserved.

### Activity / Audit event

A trace of meaningful changes, especially record creation, PACE completion, advancement, edits, and AI-assisted actions. This supports trust and troubleshooting.

### Report

A generated view or export derived from stored records. Reports should not become a second source of truth.

### Suggested relationships

- A user manages one or more households if future requirements need it; the MVP may begin with one.
- A household has many children.
- A child has many child-subject assignments.
- A child-subject assignment has a current PACE position and many PACE records.
- A PACE record has zero or more progress entries and, when completed, a test result.
- Historical records remain available after the current PACE advances.

Use stable identifiers, timestamps, appropriate ownership checks, validation, and a clear strategy for editing historical information.

## MVP Scope

The first useful release should include:

- Account creation, sign-in, sign-out, and basic account recovery as supported by the chosen authentication system.
- Household or homeschool setup.
- Multiple-child management.
- Subject assignment and management for each child.
- Initial and current PACE number setup by child and subject.
- Progress logging.
- PACE completion and test-score recording.
- Safe advancement to the next PACE.
- A clear child overview.
- A concise household overview.
- Searchable or filterable academic history.
- A small set of useful reports and/or printable/exportable record views.
- Responsive desktop and mobile layouts.
- Accessible forms, navigation, states, and error handling.
- A constrained natural-language assistant for record entry and retrieval, if reliable confirmation and fallbacks can be provided.
- Appropriate loading, empty, success, validation, and failure states.
- Persistent storage and authorization so household data is private and durable.

The MVP is complete when a parent can carry out the full core loop reliably—not when the app contains the maximum number of features.

## What Not to Build in the MVP

Unless explicitly added to the requirements, do not build:

- A public marketing site as the main deliverable.
- A static mockup with nonfunctional controls.
- An enterprise school information system.
- District, campus, classroom, or large-staff administration.
- Complex role and permission matrices.
- Student social features, messaging, or community feeds.
- Gamification, points, badges, or competitive leaderboards.
- Live classes, video calls, or a learning-content delivery platform.
- A full curriculum authoring system.
- A replacement for the A.C.E. curriculum materials themselves.
- Billing, subscriptions, or a marketplace unless separately requested.
- Predictive grading or autonomous educational recommendations.
- Dense business-intelligence dashboards or decorative analytics.
- Native iOS or Android applications; the current product is a responsive web app.
- Large customization systems, plugin architectures, or premature multi-tenant complexity.

Avoid speculative features. A smaller, coherent, working product is preferable to broad unfinished scope.

## Current Visual Direction

The product is a browser-based web app with a simple, polished, contemporary workspace aesthetic.

The supplied dashboard images are visual references, not templates for the product's information architecture. Draw from their restraint, spacing, navigation treatment, card styling, and professional finish. Do not copy their enterprise density, large quantities of analytics, or irrelevant dashboard modules.

### Layout direction

- A very dark green or near-black-green sidebar on desktop.
- A light, spacious main workspace.
- Simple, predictable navigation with clear text labels.
- Strong page titles and an obvious content hierarchy.
- Focused cards, tables, and forms with generous whitespace.
- A responsive mobile navigation pattern suited to small screens.
- Important actions that are visible and clearly labeled.

### Supplied palette

Use the supplied color-palette image as the visual source of truth. The palette was interpreted approximately as:

- `#101211` — smoky black / deepest navigation background.
- `#05C87B` — bright green primary accent.
- `#568B7B` — muted dark green.
- `#1B1B1B` — near black for text or dark surfaces.
- `#A5ADA8` — grey-green for subdued supporting elements.
- `#F7F7F7` — soft white workspace background.

Verify colors against the actual attached palette when it is available. Build semantic color tokens rather than scattering raw values throughout the interface. Green should express identity and action without overwhelming the workspace. Ensure contrast remains accessible; the bright green may require dark text depending on its use.

### Interaction and accessibility direction

- Prefer visible labels over icon-only controls.
- Keep body text and form fields comfortably readable.
- Use large click and tap targets.
- Provide clear selected, hover, focus, disabled, loading, success, and error states.
- Never use color as the only indicator of status.
- Keep forms short and group related fields.
- Use confirmation or undo for consequential changes.
- Provide useful empty states that explain the next action.
- Preserve a consistent navigation and interaction model across pages.

### Tone

The visual tone should feel calm, capable, warm, and trustworthy. It can be sophisticated without feeling corporate, clinical, childish, or technologically intimidating.

## Implementation Guidance for Codex

Before implementation:

1. Inspect the complete repository, framework, routes, components, data layer, authentication, styling system, tests, and existing conventions.
2. Inspect all supplied UI and palette references.
3. Reuse sound existing foundations rather than replacing them without cause.
4. Identify any unresolved domain assumptions that could corrupt academic records.

During implementation:

- Treat this document as persistent product context.
- Preserve the core workflow and visual direction.
- Build real end-to-end behavior rather than isolated screens.
- Keep business rules separate from presentation code.
- Use reusable components and semantic design tokens without over-engineering.
- Include responsive and accessible behavior from the start.
- Use realistic sample data only where needed for development; do not confuse it with saved user data.
- Validate record ownership and inputs on the server or trusted data boundary, not only in the browser.
- Test the core loop, history preservation, responsive layouts, and important failure states.

When requirements conflict, prioritize in this order:

1. Data integrity and user safety.
2. The core Child → Subject → PACE workflow.
3. Clarity and accessibility.
4. Simplicity and speed.
5. Visual fidelity to the approved direction.
6. Optional features and decorative polish.

## Open Decisions to Confirm During Product Definition

The following details should be confirmed before they are treated as fixed rules:

- The exact unit used to measure in-PACE progress.
- The score format and any pass/fail threshold behavior.
- Whether retakes, corrections, or multiple test attempts must be recorded.
- Which subject list ships by default and whether custom subjects are allowed.
- Required child profile fields and the treatment of sensitive data.
- The reporting periods, report formats, printing, and export requirements.
- Whether multiple adults can manage the same household in the MVP.
- The exact AI actions included in the first release.
- Data retention, backup, deletion, and export expectations.
- Whether offline or poor-connectivity behavior is required.

Do not silently invent these rules. Use safe defaults only when they can be changed without damaging or reinterpreting historical data.

