# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start dev server with Turbopack
pnpm build     # Production build (static export)
pnpm start     # Serve production build
pnpm lint      # Run ESLint
```

Package manager is **pnpm** (enforced via packageManager field).

## Architecture

**Stack:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + DaisyUI 5

**Key config:**
- `next.config.ts` sets `output: "export"` — this is a **fully static site**, no server-side features (no API routes, no SSR, no cookies/headers at request time)
- Images are unoptimized (`images.unoptimized: true`)
- Path alias `@/` maps to `./src/`

**Source layout under `src/`:**
- `app/` — Next.js App Router pages and layouts
  - `page.tsx` — Homepage renders `MyTerminal` which redirects to `/portfolio`
  - `portfolio/` — Main portfolio with sub-routes: `/work`, `/photography`, `/travel`
  - `link/` — Links page
  - `globals.css` — Global styles including custom color tokens (pink `#ff2975`, cyan `#17ffb3`), fonts (Poppins, Abel, Architects Daughter), and animation utilities
- `ui/components/` — Reusable low-level UI components (Card3D, Terminal, Lens, WorldMap, ShineBorder, etc.)
- `ui/shared/` — Feature/section components composed from `ui/components/` (NavBar, MyHeroSection, Skills, About, WorkExperience, MyProjectSection, etc.)
- `ui/utils/cn.ts` — `cn()` helper (clsx + tailwind-merge) for conditional classnames
- `hooks/` / `heads/` — Custom React hooks

**Component pattern:** Components are client-side by default (`"use client"` directive). TanStack React Query is set up at the root layout for data fetching.

**Styling:** Tailwind CSS 4 via `@tailwindcss/postcss`. DaisyUI theming is disabled. Custom CSS variables define the color palette. Use `cn()` from `@/ui/utils/cn` for conditional class merging.
