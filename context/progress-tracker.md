# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- 01-design-system — complete
- 02-editor-chrome — complete
- 03-auth — complete

## Current Goal

- Auth wired with Clerk: provider, auth pages, route protection, and user menu (see `context/feature-specs/03-auth.md`).

## Completed

- 01-design-system: shadcn/ui (base-nova, Base UI) + lucide-react installed; 7 primitives in `components/ui/` (button, card, dialog, input, tabs, textarea, scroll-area); `lib/utils.ts` re-exports `cn()`; `app/globals.css` is dark-only with project tokens mapped to Tailwind utilities; `tsc`, `eslint`, and `next build` pass.
- 02-editor-chrome: `components/editor/editor-navbar.tsx` (fixed `h-14` bar, left toggle with `PanelLeftOpen`/`PanelLeftClose`, empty center/right sections, `bg-surface` + `border-surface-border`) and `components/editor/project-sidebar.tsx` (fixed overlay `top-14 bottom-0 left-0`, slide-in via `translate-x`, `isOpen` prop, `Projects` header + close button, shadcn `Tabs` with My Projects/Shared empty states, full-width `New Project` button with `Plus`); dialog pattern verified — existing `components/ui/dialog.tsx` already uses token-mapped utilities (`bg-popover`, `text-muted-foreground`, etc.) with title/description/footer support, no new dialogs built; `tsc`, `eslint`, and `next build` pass.
- editor-layout wiring: `components/editor/editor-layout.tsx` composes navbar + sidebar + content with `useState` sidebar toggle; placeholder `app/editor/page.tsx` hosts it (canvas placeholder until the canvas chapter); `tsc`, `eslint`, and `next build` pass.
- 03-auth: `proxy.ts` at project root (manual public-path check against `NEXT_PUBLIC_CLERK_SIGN_IN_URL` / `NEXT_PUBLIC_CLERK_SIGN_UP_URL`, `auth.protect()` for everything else, standard Clerk matcher); `app/layout.tsx` wrapped with `ClerkProvider` using `dark` from `@clerk/ui/themes` + `lib/clerk-appearance.ts` (CSS-var variables, no hardcoded colors); `app/sign-in/[[...sign-in]]/page.tsx` + `app/sign-up/[[...sign-up]]/page.tsx` share `components/auth/auth-shell.tsx` (two-panel on `lg`, form-only on small screens, text-only highlight list, token utilities only); `app/page.tsx` redirects authenticated → `/editor`, unauthenticated → `/sign-in`; `components/editor/editor-navbar.tsx` right section hosts default `UserButton`; `app/editor/page.tsx` calls `auth.protect()`; `.env.local` holds the two Clerk URL vars; `@clerk/ui` installed; `tsc`, `eslint`, and `next build` pass.
- 03-auth restyle: `components/auth/auth-shell.tsx` is now 50/50 (`lg:grid-cols-2`) — left `bg-surface` panel (logo row with `bg-brand` mark, headline, description, 3 lucide-icon features in `bg-accent-dim` chips, faint copyright footer) vs `bg-base` right with centered Clerk form; mobile stays form-only; no gradients, no hardcoded colors. Font fix: `app/globals.css` now maps `--font-sans` → `var(--font-geist-sans)` (+ `--font-mono` → Geist Mono) so Tailwind `font-sans` resolves to Geist, and `lib/clerk-appearance.ts` points Clerk `fontFamily` at `var(--font-geist-sans)`; `tsc`, `eslint`, and `next build` pass.

## In Progress

- None — 03-auth done, awaiting next feature unit.

## Next Up

- Next feature unit after 03-auth.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Add decisions that affect the system design or data model.
- 03-auth: route protection lives in `proxy.ts` (not `middleware.ts`) per Next 16 convention; public paths resolved from Clerk sign-in/sign-up env vars with `/sign-in` + `/sign-up` fallbacks. Page-level `auth.protect()` on `/editor` is defense-in-depth — proxy remains the default-deny boundary. Deprecated `createRouteMatcher` intentionally avoided in favor of an explicit pathname check.
- 03-auth rendering: `cacheComponents` is enabled, so session/client-hook reads can't prerender — `/`, `/editor`, `/sign-in`, `/sign-up` set `export const instant = false` per Next docs, and Clerk `SignIn`/`SignUp` render inside `<Suspense>` with a token-styled fallback (`usePathname` bailout fix).

## Session Notes

- Add context needed to resume work in the next session.
