# PH Healthcare Management System - Agent Instructions

## Commands
- **Dev**: `bun dev` (uses turbopack)
- **Build**: `bun build`
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
- **API Client**: ofetch
- **Path Alias**: `@/*` → `./src/*`

## Route Groups
- `(public)/(marketing)` — public marketing pages (home, about-us)
- `(public)/(auth)` — login, register, account-verify
- `(deshbord)` — protected dashboard (typo: "deshbord" not "dashboard")
  - `admin/` — admin pages (e.g., approve-doctor)

## Key Files
- `src/lib/apiClient.ts` — ofetch instance with base URL
- `src/api/auth.api.ts` — auth endpoints
- `src/hooks/auth.hook.ts` — auth mutations/queries
- `src/validation/auth.validation.ts` — Zod schemas
- `src/providers/` — QueryClient, Google OAuth providers
- `src/components/ui/` — shadcn components
- `src/assets/svg/logo.tsx` — logo component (use this, not public/logo.svg)

## Conventions
- **Component naming**: PascalCase, `.tsx` extension
- **Imports**: Use `@/` alias (e.g., `@/components/ui/button`)
- **Forms**: TanStack Form + Zod validation
- **API calls**: Use `apiClient` from `@/lib/apiClient`
- **Biome**: Organizes imports on save, 2-space indent

## Gotchas
- React Compiler enabled (`reactCompiler: true` in next.config.ts)
- Route group `(deshbord)` has a typo — keep as-is
- No test suite configured
- No CI/CD workflow found