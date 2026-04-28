# samuelcole.name

Source for [samuelcole.name](https://www.samuelcole.name) — my personal site and resume.

Built with Next.js (App Router) and React 19. Linted/formatted with Biome. Deployed on Vercel.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm lint     # biome check
pnpm format   # biome format --write
```

## Layout

- `app/` — pages and components (App Router)
- `app/resume/` — `/resume` page
- `public/samuel-cole-resume.{pdf,md}` — downloadable resume (color PDF, b&w PDF, markdown)
