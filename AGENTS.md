# PH Healthcare Management System - Agent Instructions

## Commands
- **Dev**: `bun dev` (uses turbopack)
- **Build**: `bun build` (static export via `output: "export"`)
- **Start**: `bun start`
- **Lint**: `bun lint` (Biome)
- **Format**: `bun format` (Biome --write)
- **Typecheck**: `npx tsc --noEmit`

## Project Structure
- **Framework**: Next.js 16 (App Router) with React 19 + React Compiler
- **Package Manager**: Bun 1.4.2 (lockfile: `bun.lock`)
- **Styling**: Tailwind CSS v4 (PostCSS plugin), shadcn/ui (base-nova style)
- **State**: TanStack Query v5, TanStack Form
- **Validation**: Zod v4
- **API Client**: ofetch (base URL from `NEXT_PUBLIC_BASE_URL`)
- **Path Alias**: `@/*` → `./src/*`

## Route Groups
- `(public)/(marketing)` — public marketing pages (home, about-us)
- `(public)/(auth)` — login, register, account-verify, apply (doctor application)
- `(deshbord)` — protected dashboard (typo: "deshbord" not "dashboard")
  - `admin/` — admin pages (e.g., approve-doctor)

## Key Files
- `src/lib/apiClient.ts` — ofetch instance with `credentials: "include"`, base URL from `NEXT_PUBLIC_BASE_URL`
- `src/api/auth.api.ts` — auth endpoints (register, login, logout, verify, google, me)
- `src/api/doctor.api.ts` — doctor application endpoints (multipart/form-data)
- `src/hooks/auth.hook.ts` — auth mutations/queries (TanStack Query)
- `src/hooks/doctor.hook.ts` — doctor application mutations
- `src/validation/auth.validation.ts` — Zod schemas for auth
- `src/validation/doctor-application.validation.ts` — Zod schemas for doctor apply
- `src/providers/indix.tsx` — providers entry point (typo: "indix" not "index")
  - Wraps: GoogleAuthProvider → QueryProvider → TooltipProvider
- `src/components/auth/auth-guard.tsx` — protects dashboard routes, redirects to `/login`
- `src/components/ui/` — shadcn components
- `src/assets/svg/logo.tsx` — logo component (use this, not public/logo.svg)

## Conventions
- **Component naming**: PascalCase, `.tsx` extension
- **Imports**: Use `@/` alias (e.g., `@/components/ui/button`)
- **Forms**: TanStack Form + Zod validation
- **API calls**: Use `apiClient` from `@/lib/apiClient`
- **Biome**: Organizes imports on save, 2-space indent
- **Auth flow**: `useGetMe` query with `retry: false`; `AuthGuard` reads this for protection

## Gotchas
- React Compiler enabled (`reactCompiler: true` in next.config.ts)
- Route group `(deshbord)` has a typo — keep as-is
- Provider entry point is `indix.tsx` (typo for "index") — keep as-is
- Static export (`output: "export"`) — no server-side rendering, no API routes
- `NEXT_PUBLIC_BASE_URL` must be set for API calls to work
- Doctor applications use `multipart/form-data` (resume + additional files)
- Google OAuth via `@react-oauth/google` — provider in `google-auth.provider.tsx`
- No test suite configured
- No CI/CD workflow found