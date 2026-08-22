# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for jameseaster.dev - a Vite single-page app in React + TypeScript, deployed on Netlify. The contact form is backed by a Netlify serverless function that proxies to EmailJS.

## Commands

- `npm run dev` - run the Vite dev server (frontend only; the contact function is not available)
- `npm run dev-functions` - run `netlify dev`, which serves the app *and* the `netlify/functions` handlers locally (needed to exercise the contact form end-to-end)
- `npm run build` - type-check (`tsc`) then production build to `dist/`
- `npm run preview` - serve the built `dist/` locally
- `npm run test` - run the Vitest smoke tests in watch mode
- `npm run test:run` - run the tests once (CI mode); `npm run test:run -- src/App.test.tsx` runs a single file, `-t "name"` filters by name
- `npm run resume:pdf` - build, then render `/resume/print` and `/resume/print?v=ats` to `public/James-Easter-Resume.pdf` and `public/James-Easter-Resume-ATS.pdf` with headless Chrome, and copy `resume.json` to `public/`. Reports each PDF's page count and fails past the page budget in `scripts/lib/render-resume.mjs` (one page is the target; the budget is temporarily two while Phase 7 gathers content). Run it after editing `src/data/resume.json` and commit the regenerated files.
- `npm run resume:pdf -- --variant=frontend` - render one role variant into `variant-resumes/` (git-ignored) instead of `public/`. Variants are defined in `src/data/resume-variants.json`; run with an unknown name to list them.
- `npm run resume:verify` - re-render the resume artifacts into a temp directory and fail if they differ from the ones committed in `public/`. Runs in CI after the build. Compares page count and extracted text rather than bytes, since Chrome stamps a timestamp into every PDF.

Type-checking is `tsc` (run as part of `build`); there is no separate ESLint script. Code style is Prettier (default config).

## Architecture

**Provider stack** (`src/App.tsx`): `ColorModeProvider` → `AnimationTrackerProvider` → MUI `CssBaseline` → React Router → `Navigation` + `AnimatedRoutes`. Two React contexts hold all global state:

- `context/ColorMode.tsx` - light/dark toggle. Owns the MUI theme (built with `createTheme` from the current `mode`) and exposes `useColorMode().toggle`. Defaults to `"dark"`; mode is in-memory only (not persisted).
- `context/AnimationTracker.tsx` - a `useReducer` store (dispatch `ACTIONS.UPDATE_ANIMATION_TRACKER`) tracking which pages have already animated in, so framer-motion entrance animations play only once per session. Accessed via `useAnimationTracker()`.

**Routing / animation** (`components/Routes.tsx`): routes (`/`, `/info`, `/work`, `/contact`, `/resume`) are wrapped in framer-motion's `<AnimatePresence mode="wait">`, keyed on `location.pathname`, to drive page transition animations. Each route renders a page from `src/pages/`.

**Contact form flow**: `components/ContactForm.tsx` POSTs the form to `import.meta.env.REACT_APP_EMAIL_FN` (the Netlify function URL). Vite's `envPrefix` is set to `REACT_APP_` in `vite.config.mts`, so the existing `REACT_APP_*` names are exposed to the frontend. `netlify/functions/sendEmail.ts` runs in Node and reads `process.env` directly: it validates the payload, then POSTs to EmailJS (`REACT_APP_EMAIL_URL`) using `REACT_APP_USER_ID`, `REACT_APP_SERVICE_ID`, `REACT_APP_TEMPLATE_ID`, `REACT_APP_ACCESS_TOKEN`. The form silently no-ops to an empty URL if unset, so use `npm run dev-functions` with env vars configured to test it.

**Resume as data**: `src/data/resume.json` follows the [JSON Resume](https://jsonresume.org)
schema and is the single source of truth for the resume. `src/data/resume.ts` holds the
TypeScript types (tsc structurally checks the JSON against them on build) plus date and
grouping helpers; `src/data/resume.test.ts` validates it with `zod` and enforces
length budgets that keep the resume near one page. Named products live in
`projects[]` with an `entity` naming their employer, so they can render nested
under the employer or flat. `src/components/resume/` renders it. Edit the JSON to
change the resume, never the components.

`/resume/print` renders the same document for headless Chrome, styled by
`src/styles/resume-print.css`. `App.tsx` routes it through `AppShell`, which
bypasses `ColorModeProvider`, `CssBaseline`, `Navigation`, and `AnimatePresence`
so the PDF cannot inherit the dark theme, app chrome, or a mid-animation frame.
`?v=ats` selects the plain variant, styled by `src/styles/resume-ats.css` - rules
scoped under `.resume-ats` and loaded after the print stylesheet, so the styled
PDF is untouched. Verify changes to it by extracting text, not by eye: letter
spacing splits words on extraction and a wide flex gap reorders the text.

`scripts/lib/render-resume.mjs` owns the rendering and is shared by
`scripts/resume-pdf.mjs`, which writes the committed artifacts, and
`scripts/resume-verify.mjs`, which renders to a temp directory and diffs.

**Role variants**: `src/data/resume-variants.json` tags `work[]` and `projects[]`
entries by name and defines which tags each variant wants. `src/data/variants.ts`
applies it. An entry with no tags is core and appears in every variant; a tagged
entry appears only where a variant asks for one of its tags. Tags live outside
`resume.json` so the published `/resume.json` stays exactly JSON Resume. Filtering
an employer promotes its orphaned projects into a "Selected Projects" section
rather than dropping them. `src/data/variants.test.ts` enforces that the tag file
references real entries and that variants and entries share one tag vocabulary.

Two deliberate deviations from the conventions below:

- `src/components/resume/` emits semantic HTML with stable class names and no
  inline styling. Screen styling lives in `screenStyles.ts` as descendant
  selectors, so the print stylesheet can restyle the same markup without
  competing with Emotion's specificity.
- `src/data/jsonLd.mts` is `.mts`, not `.ts`, because `vite.config.mts` imports
  it and the Vite config loader cannot load CommonJS-flagged `.ts`. The package
  is not `"type": "module"` because `netlify/functions/sendEmail.ts` uses
  `exports.handler`, and flipping it would break the contact form.

**Content as data**: project cards and galleries are defined declaratively in `src/data/projects.ts` (referencing images from `src/assets/screenshots/`, re-exported via `screenshots/index.ts`). To add/edit a portfolio project, edit that data file rather than the components. `src/data/mediaIcons.ts` holds social links.

**Shared constants** (`src/utils/constants.tsx`): `ACTIONS` (reducer action types) and `APP_CONSTANTS` (header height, nav icon size, path-name labels, and `APP_VERSION` read from `package.json`).

**Components**: `src/components/` is a flat set of presentational MUI + framer-motion pieces (e.g. `AnimatedCard`, `ProjectCard`/`ProjectCardInfo`/`ProjectCardActions`, `ProjectGallery`, `Navigation`). Pages in `src/pages/` compose them.

## Conventions

- Styling is MUI (`@mui/material`) with Emotion; theme colors come from the ColorMode context, not hardcoded per-component.
- Files open with a comment block / grouped imports; keep that house style when adding files.
- New portfolio content goes in `src/data/`; new global state goes in a context under `src/context/` and is wired into the provider stack in `App.tsx`.

## Release

Day-to-day changes only add notes to `CHANGELOG.md` under the top heading
`## Unreleased - X.Y.Z` (Keep a Changelog style: Added / Changed / Fixed / Removed).
Do not bump `package.json` per change - several unreleased PRs may land before a
release, and together they decide the bump.

The version in that heading is the release the queued notes currently add up to.
Keep it accurate: if a change makes the pending release bigger than the heading
claims (a fix queued as `2.0.1` followed by a feature), raise it - `2.1.0` here.
A heading with a version but no date is unreleased; a date means it shipped.

Releasing is a separate, deliberate step:

1. Set `version` in `package.json` to the version in the heading (surfaced in-app
   via `APP_CONSTANTS.APP_VERSION`).
2. Rewrite the heading as `## X.Y.Z - YYYY-MM-DD` with the real release date, and
   open a fresh `## Unreleased - <next>` above it.
3. Push to `main` - Netlify deploys on push, so the push is the deploy.
4. After the deploy succeeds, tag the shipped commit `X.Y.Z` and push the tag.

See `RELEASING.md` in `winterfest-manager` for the fuller version of this process,
including its `npm run bump` and `npm run release:tag` helper scripts.
