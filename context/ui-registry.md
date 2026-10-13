# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

### Homepage

- `Home` — `app/page.tsx`
	- Uses `.site-header`, `.nav-shell`, `.desktop-nav`, `.nav-cta`, `.hero-section`, `.hero-shell`, `.hero-copy`, `.kicker`, `.hero-description`, `.hero-actions`, `.button`, `.preview-section`, `.section-shell`, `.preview-frame`, `.steps-section`, `.steps-grid`, `.step-card`, `.features-section`, `.feature-list`, `.feature-row`, `.quote-section`, `.quote-shell`, `.final-cta-section`, `.final-cta-shell`, `.site-footer`, and `.footer-shell`.
	- Responsive breakpoint: `max-width: 760px`.

### Authentication

- `LoginPage` — `app/(auth)/login/page.tsx`
	- Uses `.auth-page`, `.auth-header`, `.auth-shell`, `.auth-copy`, `.auth-panel`, `.oauth-actions`, `.oauth-button`, `.oauth-icon`, `.auth-error`, and `.auth-note`.
	- Responsive breakpoint: `max-width: 760px`.
	- Last updated: 2026-08-26.
	- Pattern: page background uses `var(--color-background)`; the auth panel uses `var(--color-surface)`, `1px solid var(--color-border)`, `var(--radius-lg)`, 42px padding, and a restrained overlay shadow.
	- OAuth controls use `var(--color-surface)`, `1px solid var(--color-border-muted)`, `var(--radius-md)`, 12px vertical gap, and accent border/shadow on hover.
	- Typography uses accent-dark uppercase labels, primary 32px panel headings, secondary 14px supporting text, and muted 11px legal text.

- `ProfilePage` — `app/profile/page.tsx`
	- Uses the shared `.site-header`, `.nav-shell`, `.desktop-nav`, and `.nav-cta` navbar classes, plus `.profile-page`, `.profile-header`, `.profile-intro`, `.profile-card`, `.profile-progress`, and `.profile-progress-label`.
	- Responsive breakpoint: `max-width: 760px`.
	- Last updated: 2026-08-26.
	- Pattern: page background uses `var(--color-background)`; the profile card uses `var(--color-surface)`, `1px solid var(--color-border)`, `var(--radius-lg)`, 40px desktop padding, and an overlay shadow.
	- Profile headings use primary text with accent emphasis; supporting copy uses `var(--color-text-secondary)` and completion metadata uses `var(--color-text-muted)`.
	- Progress uses `var(--color-surface-tertiary)` as the track, `var(--color-accent)` as the fill, and `var(--radius-full)` for the track shape.

### Find Jobs

- `FindJobsPage` — `app/find-jobs/page.tsx`
	- Placeholder until 09 Find Jobs Page — Full UI. Reuses the `ProfilePage` layout classes exactly: `.site-header`, `.nav-shell`, `.desktop-nav`, `.nav-cta`, `.profile-page`, `.profile-header`, `.profile-intro`, `.profile-card`, `.card-eyebrow`, and `.button button-dark`.
	- Responsive breakpoint: `max-width: 760px`.
	- Last updated: 2026-10-13.

### Authentication UI Baseline

- Standard control radius: `var(--radius-md)`.
- Standard card radius: `var(--radius-lg)`.
- Card surface: `var(--color-surface)` with `1px solid var(--color-border)`.
- Primary text: `var(--color-text-primary)`.
- Supporting text: `var(--color-text-secondary)`.
- Muted metadata: `var(--color-text-muted)`.
- Brand emphasis: `var(--color-accent)` or `var(--color-accent-dark)`.
- Interactive hover: accent border or text with a restrained overlay shadow.
- Responsive breakpoint: `max-width: 760px`.
