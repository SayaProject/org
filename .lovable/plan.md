## Goal

Rebuild the uploaded `shnwazdev-main` site (React Router + Vite + Tailwind v3) inside this project's stack (TanStack Start + Tailwind v4) so the rendered output looks and behaves the same. No visual or content changes.

## Scope

- Port all 13 pages: Index, Article, Wellness, Travel, Skills, Creativity, Growth, About, Authors, Contact, StyleGuide, Privacy, Terms + NotFound.
- Port components: Header, HeroSection, IntroSection, ArticleCard, NoCopy, ScrollToTop.
- Port `src/data/articles.ts` (article content) as-is.
- Port the full design system (warm cream palette, custom tag colors, animations) from `src/index.css`.
- Keep the same URL structure (`/`, `/article/:id`, `/wellness`, `/travel`, `/skills`, `/creativity`, `/growth`, `/about`, `/authors`, `/contact`, `/style-guide`, `/privacy`, `/terms`).

## Approach

1. **Design tokens** — Translate the HSL variables from the uploaded `src/index.css` into `src/styles.css` using Tailwind v4's `@theme inline` block. Preserve custom tokens (`--tag-*`, `--cream`, `--surface-elevated`, keyframes, `.route-transition`, `stagger-*`, `animate-*`).
2. **Routes** — Convert each React Router page to a TanStack file route under `src/routes/`:
   - `index.tsx` (home)
   - `article.$id.tsx` (dynamic)
   - `wellness.tsx`, `travel.tsx`, `skills.tsx`, `creativity.tsx`, `growth.tsx`, `about.tsx`, `authors.tsx`, `contact.tsx`, `style-guide.tsx`, `privacy.tsx`, `terms.tsx`
   - 404 handled via `__root.tsx` `notFoundComponent` (already exists).
3. **Navigation** — Replace `react-router-dom` imports (`Link`, `useParams`, `useNavigate`, `useLocation`) with `@tanstack/react-router` equivalents. Dynamic links use `<Link to="/article/$id" params={{ id }}>`.
4. **Global behavior** — `ScrollToTop` and `NoCopy` mount inside `__root.tsx`'s `RootComponent` so they run on every route. `route-transition` fade is preserved by keying on `location.pathname` in the root layout.
5. **Head metadata** — Give each route its own `head()` with page-specific title/description/og tags (per project rules). No `og:image` on `__root.tsx`.
6. **Assets** — Copy `public/favicon.ico`, `robots.txt`, and `placeholder.svg` from the upload into `public/`.
7. **Cleanup** — Overwrite the placeholder `src/routes/index.tsx`. Do not create `src/pages/`.

## Technical notes

- Tailwind v4 uses CSS-first tokens; the uploaded project's `tailwind.config.ts` extensions (keyframes, custom colors like `tag-*`, `cream`, `surface-elevated`) get re-expressed as `--color-*` entries inside `@theme inline` plus `@keyframes` blocks in `src/styles.css`.
- The uploaded project uses `QueryClientProvider` + shadcn `Toaster`/`Sonner`/`TooltipProvider`; this template already provides `QueryClientProvider` in `__root.tsx`. Add `Toaster`, `Sonner`, and `TooltipProvider` there too.
- shadcn UI components already exist in this project; no need to re-copy them. Any component-level import differences (e.g. missing `toast.tsx`/`toaster.tsx`/`use-toast.ts`) will be added only if a ported page actually uses them.
- No backend needed — content is static in `src/data/articles.ts`.

## Out of scope

- No new features, layout changes, or copy edits.
- No Lovable Cloud, auth, or server functions.
