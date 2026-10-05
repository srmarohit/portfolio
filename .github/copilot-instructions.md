# Portfolio Project Guidelines

React 19 + TypeScript single-page portfolio built with Vite, Material UI, and Framer Motion.

## Build and Test
- Package manager: pnpm only (not npm/yarn).
- `pnpm dev` - start dev server, `pnpm build` - typecheck (`tsc -b`) + production build, `pnpm lint` - ESLint, `pnpm deploy` - publish `dist/` to GitHub Pages.
- Always run `pnpm build` after editing MUI components - this MUI version (`@mui/material` ^9.x) raises type errors that `get_errors`/the editor may not surface immediately.

## MUI v9 gotcha (common source of type errors)
This repo's installed MUI version removed several "system" shorthand props. Use `sx` instead:
- `fontWeight` on `Typography`/`Link` → `sx={{ fontWeight }}`
- `alignItems` on `Stack`/`Grid` → `sx={{ alignItems }}`
- `flexWrap` / `useFlexGap` on `Stack` → `sx={{ flexWrap: 'wrap', gap: 1 }}` (drop the `spacing` prop)
- `Grid` already defaults to the v2 API - use `size={{ xs, md }}`, not `item xs={..}`.

## Architecture
- `src/data/*.ts` - all page copy/content lives here (profile, skills, experience, projects, contact, navigation). Components must stay presentational and read from these files, never hardcode copy.
- `src/components/common/AnimatedSection.tsx` - every top-level page section must be wrapped in this (or compose its `fadeInUp`/`staggerContainer` variants from `src/animations/variants.ts`) for consistent scroll-reveal behavior.
- `src/components/Repos/Repos.tsx` reuses `src/data/projects.ts` (filtered by `repoUrl`) rather than a separate data source - do not introduce a live GitHub API call or duplicate data file without explicit request.
- `src/theme/ThemeModeContext.tsx` - owns the light/dark toggle (localStorage-persisted). Only `useThemeMode.ts` exports the consumer hook (kept in a separate file from the provider component to satisfy the `react-refresh/only-export-components` ESLint rule).
- Navbar/section scrolling uses `react-scroll` anchored to section `id`s declared in `src/data/navigation.ts` - keep section `id`s and `navSections` in sync.

## Conventions
- TypeScript strict; no `any`.
- New sections follow the existing folder-per-component pattern: `src/components/<Name>/<Name>.tsx`.
- Placeholder content/assets are marked with `// TODO:` comments (see `src/data/profile.ts`, `vite.config.ts` `GITHUB_PAGES_BASE`) - preserve these markers until real content is supplied.
