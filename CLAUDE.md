# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for jameseaster.dev - a Create React App (react-scripts) single-page app in TypeScript, deployed on Netlify. The contact form is backed by a Netlify serverless function that proxies to EmailJS.

## Commands

- `npm start` - run the CRA dev server (frontend only; the contact function is not available)
- `npm run dev-functions` - run `netlify dev`, which serves the app *and* the `netlify/functions` handlers locally (needed to exercise the contact form end-to-end)
- `npm run build` - production build to `build/`
- `npm test` - run tests in watch mode (react-scripts/Jest + React Testing Library)
- `npm test -- --watchAll=false src/path/to/File.test.tsx` - run a single test file once
- `npm test -- -t "test name"` - run tests matching a name

There is no separate lint or typecheck script; ESLint runs through react-scripts (config `react-app`, `react-app/jest`) during `start`/`build`. Code style is Prettier (default config).

## Architecture

**Provider stack** (`src/App.tsx`): `ColorModeProvider` → `AnimationTrackerProvider` → MUI `CssBaseline` → React Router → `Navigation` + `AnimatedRoutes`. Two React contexts hold all global state:

- `context/ColorMode.tsx` - light/dark toggle. Owns the MUI theme (built with `createTheme` from the current `mode`) and exposes `useColorMode().toggle`. Defaults to `"dark"`; mode is in-memory only (not persisted).
- `context/AnimationTracker.tsx` - a `useReducer` store (dispatch `ACTIONS.UPDATE_ANIMATION_TRACKER`) tracking which pages have already animated in, so framer-motion entrance animations play only once per session. Accessed via `useAnimationTracker()`.

**Routing / animation** (`components/Routes.tsx`): routes (`/`, `/info`, `/work`, `/contact`, `/resume`) are wrapped in framer-motion's `<AnimatePresence mode="wait">`, keyed on `location.pathname`, to drive page transition animations. Each route renders a page from `src/pages/`.

**Contact form flow**: `components/ContactForm.tsx` POSTs the form to `process.env.REACT_APP_EMAIL_FN` (the Netlify function URL). `netlify/functions/sendEmail.ts` validates the payload, then POSTs to EmailJS (`REACT_APP_EMAIL_URL`) using `REACT_APP_USER_ID`, `REACT_APP_SERVICE_ID`, `REACT_APP_TEMPLATE_ID`, `REACT_APP_ACCESS_TOKEN`. All of these are environment variables - the form silently no-ops to an empty URL if unset, so use `npm run dev-functions` with env vars configured to test it.

**Content as data**: project cards and galleries are defined declaratively in `src/data/projects.ts` (referencing images from `src/assets/screenshots/`, re-exported via `screenshots/index.ts`). To add/edit a portfolio project, edit that data file rather than the components. `src/data/mediaIcons.ts` holds social links.

**Shared constants** (`src/utils/constants.tsx`): `ACTIONS` (reducer action types) and `APP_CONSTANTS` (header height, nav icon size, path-name labels, and `APP_VERSION` read from `package.json`).

**Components**: `src/components/` is a flat set of presentational MUI + framer-motion pieces (e.g. `AnimatedCard`, `ProjectCard`/`ProjectCardInfo`/`ProjectCardActions`, `ProjectGallery`, `Navigation`). Pages in `src/pages/` compose them.

## Conventions

- Styling is MUI (`@mui/material`) with Emotion; theme colors come from the ColorMode context, not hardcoded per-component.
- Files open with a comment block / grouped imports; keep that house style when adding files.
- New portfolio content goes in `src/data/`; new global state goes in a context under `src/context/` and is wired into the provider stack in `App.tsx`.

## Release

Bump `version` in `package.json` (surfaced in-app via `APP_CONSTANTS.APP_VERSION`) and add a matching entry to `CHANGELOG.md` (Keep a Changelog style: Added / Fixed / Removed).
