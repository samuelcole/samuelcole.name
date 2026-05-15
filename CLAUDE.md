# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (pinned via `packageManager` in `package.json` — corepack will pick it up). Never run `npm install`.

```bash
pnpm install
pnpm dev      # next dev — http://localhost:3000
pnpm build
pnpm lint     # biome check
pnpm format   # biome format --write
```

Regenerating the resume PDFs (`pnpm resume`) boots a temporary dev server on port 3137, prints `/resume` to `public/samuel-cole-resume.pdf` via headless Chrome, then runs Ghostscript to derive `samuel-cole-resume-bw.pdf`. Requires Chrome/Chromium and `gs` on PATH. Run this whenever resume content changes.

Lint/format is **Biome** (not ESLint/Prettier). The Next.js and React lint domains are both enabled in `biome.json`.

## Architecture

Single-package Next.js 16 App Router site (React 19 + the React Compiler, Turbopack root pinned in `next.config.ts`). Two pages — `/` (`app/page.tsx`) and `/resume` (`app/resume/page.tsx`) — plus file-based metadata and a generated sitemap/robots.

### Resume content lives in three places that must stay in sync
- `app/resume/page.tsx` — canonical web version, the source for the PDFs
- `public/samuel-cole-resume.md` — the markdown alternate served at `/samuel-cole-resume.md` (linked from `<link rel="alternate" type="text/markdown">` and from the resume page's file tabs)
- `public/samuel-cole-resume.pdf` + `samuel-cole-resume-bw.pdf` — built artifacts; never hand-edit. Regenerate with `pnpm resume` after changing the web page.

When experience/skills change in `page.tsx`, update `resume.md` in the same PR and rerun `pnpm resume`.

### Shared design system (not a component library — just conventions)
The cream/black/red terminal aesthetic is repeated across several independent files. There is no central token export; if you change one, update the others:
- Colors: paper `#f8f8de`, ink `#131210` (+ `#3a3833` / `#807c6f` tints), red `#d62828` (+ deep `#9b1717`). Dark-mode equivalents live in `app/globals.css` under `prefers-color-scheme: dark`.
- Font: JetBrains Mono. Loaded via `next/font/google` for the browser, and via `app/_lib/load-google-font.ts` for every `ImageResponse`-based asset.
- `ImageResponse` files using this helper: `app/icon.tsx` (favicon), `app/apple-icon.tsx`, `app/opengraph-image.tsx` (homepage OG), `app/resume/opengraph-image.tsx` + `twitter-image.tsx` (resume OG, re-exported for Twitter). Satori only supports flexbox — no grid, every element should set `display: flex`.

### SEO surface
- `app/layout.tsx` sets `metadataBase` and site-wide `openGraph`/`twitter` defaults that child pages inherit unless overridden. Resume overrides them (including `og:type: profile`) in `app/resume/page.tsx`.
- JSON-LD: `app/personJsonLd.ts` exports a single `Person` node injected by both pages as `<script type="application/ld+json">`. The resume page wraps it in a `ProfilePage` graph; keep the `@id` URL fragment matching across the two usages.
- `app/sitemap.ts` and `app/robots.ts` are also App Router file conventions — update sitemap when adding routes.
- `next.config.ts` sets `Content-Type: text/markdown` for any `.md` under `public/` and holds legacy `/resume/SamuelCole*.pdf` → current-filename redirects.

### Worktrees
`.claude/worktrees/` is gitignored — Claude Code sessions often run inside one. Commands and paths should work from any worktree; never `cd` to the repo root.

## Workflow

Recent history on `main` is all squashed PR merges (`(#N)` suffix). Direct pushes to `main` happen but are the exception; prefer a PR unless the user says otherwise.
