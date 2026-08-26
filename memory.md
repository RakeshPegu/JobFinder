# Memory — JobPilot Auth and UI Audit

Last updated: 2026-08-26

## What was built

- Implemented InsForge SSR authentication with `@insforge/sdk`.
- Added Google and GitHub OAuth Server Actions in `actions/auth.ts`.
- Added PKCE verifier cookie handling, OAuth callback exchange, and `/api/auth/refresh`.
- Added Next.js 16 `proxy.ts` protection for `/dashboard`, `/profile`, and `/find-jobs`.
- Successful OAuth login redirects to `/profile`.
- Added protected `app/profile/page.tsx` with current-user display and server-side logout.
- Added the same navbar structure to the profile page as the homepage.
- Updated `context/progress-tracker.md` and `context/ui-registry.md`.

## Decisions made

- Use InsForge's current Next.js SSR flow: `createAuthActions`, `createRefreshAuthRouter`, `updateSession`, and standard InsForge cookies.
- OAuth callback is handled server-side so refresh credentials remain server-owned.
- Profile is the first destination after OAuth login for onboarding.

## Problems solved

- Fixed login redirect from `/dashboard` to `/profile`.
- Added missing profile route and logout control.
- Added the homepage navbar to the profile page for consistent navigation.

## Current state

- `npm run lint` passes.
- `npm run build` passes.
- TypeScript diagnostics are clean for the auth/profile files.
- InsForge runtime configuration and Google/GitHub provider setup are required outside the codebase.
- The project currently has no automated auth integration tests.

## Next session starts with

- Resolve the open `/review` findings: strengthen proxy authentication checks beyond cookie presence and handle `getCurrentUser()` errors on the profile page.
- Confirm the `/imprint audit` baseline recommendations before updating `context/ui-registry.md`.

## Open questions

- Should the shared navbar be extracted into a reusable component before additional application pages are built?
- Should the intentional homepage/login editorial typography and spacing remain exceptions to the compact application-page baseline?
