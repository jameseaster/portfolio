## Unreleased - 2.2.0

### Added

- A resume page built from structured data. `src/data/resume.json` follows the
  JSON Resume schema and is the single source of truth for the resume, replacing
  the embedded PDF that rendered inconsistently outside Chrome and was unusable
  on mobile.
- schema.org `Person` JSON-LD, generated from that data and injected into
  `index.html` at build time so crawlers that do not execute JavaScript still
  see it.
- Print styles on the resume page, so printing yields the resume rather than the
  surrounding navigation and controls.
- `npm run resume:pdf`, which renders the `/resume/print` route to
  `public/James-Easter-Resume.pdf` with headless Chrome. The PDF is the same DOM
  the site renders, keeps a selectable text layer, and is tagged for screen
  readers and parsers. The command fails if the resume runs past one page.
- The resume data published at `/resume.json`, following the JSON Resume
  convention, so the resume is consumable by tooling and not only by eye.
- `npm run resume:verify`, which re-renders the resume artifacts and fails if
  they differ from the committed ones. It runs in CI after the build, so the
  PDFs cannot drift away from `src/data/resume.json` unnoticed - Netlify deploys
  what is in the repo, not what the data says.
- An ATS variant of the resume at `public/James-Easter-Resume-ATS.pdf`, rendered
  from the same data by `npm run resume:pdf`. It is single column with plain
  headings, no rules, and dates as text, so applicant tracking systems read it in
  the right order. Letter-spaced headings extracted as "E D U C AT I O N" and
  right-aligned dates were dropped to the end of the document, so both are gone
  from this variant.

### Changed

- The resume page renders React components instead of embedding a PDF in an
  `<object>` element.
- `vite.config.mts` is type-checked by the root `tsconfig.json`; the separate
  `tsconfig.node.json` project reference is gone.
- The resume download serves a stable `/James-Easter-Resume.pdf` rather than a
  content-hashed bundled asset, so the URL can be pasted into an application.
- The resume download button opens a menu offering the styled PDF or the ATS
  version, rather than downloading the styled PDF directly.

### Removed

- `src/assets/resume.pdf`, the hand-made May 2023 PDF the page used to embed.

### Fixed

- Section headings and the job title in the styled PDF now survive text
  extraction. Their tracking was wide enough that copying "EDUCATION" out of the
  PDF yielded "E D U C AT I O N", which also meant search engines indexed the
  heading as nine separate letters.
- Woolpert now ends in October 2023 on the resume. It previously read "Present"
  at the same time as Digital Bazaar, showing two concurrent full-time roles.
- The malformed `<meta name="James Easter">` tag in `index.html`, which set the
  page description under a `name` of "James Easter" rather than `description`.

## 2.1.0 - 2026-08-13

### Added

- A resume icon at the end of the navigation, linking to the /resume page, which
  now embeds the resume PDF instead of only offering a button to open it. The
  browser's own PDF controls are suppressed in favour of a single download
  action.
- Accessible labels on the navigation icons, which screen readers previously
  announced as unlabelled buttons.

### Changed

- Enlarged the social icons on the info page from 32px to 40px.
- Moved the color mode toggle out of the navigation row to a smaller, subtler
  sun/moon icon floating in the bottom right of the screen, freeing the last
  navigation slot for the resume.

### Removed

- The Codewars and Medium social links, along with their icon assets.
- The resume icon on the info page, now that the navigation links to /resume.

### Fixed

- The home page card now sits the same distance below the navigation as every
  other page, instead of being pushed down by a percentage margin that grew with
  the viewport width.

## 2.0.0 - 2026-08-04

### Changed

- Migrated the build toolchain from Create React App (react-scripts) to Vite.
- Upgraded React and React DOM to 19.
- Upgraded MUI (@mui/material and @mui/icons-material) from 5 to 9, migrating
  Grid to the new API and replacing the removed Typography paragraph/fontSize
  props.
- Upgraded react-router-dom to 7, framer-motion to 12, TypeScript to 5, and
  refreshed emotion, axios, validator, fontsource, and @netlify/functions.

### Added

- Vitest smoke tests covering app mount, the color-mode toggle, and every route.
- netlify.toml pinning the build command and the dist publish directory.
- Accessible label on the color-mode toggle button.

### Fixed

- Corrected the invalid framer-motion easeinout easing (now easeInOut) and moved
  ease into its transition object.
- Removed a dead apple-touch-icon reference to a nonexistent logo192.png.

### Removed

- The deprecated react-scripts toolchain and the unused web-vitals dependency,
  clearing 69 of the 71 npm-audit vulnerabilities.

## 1.1.0 - 2023-12-15

### Added

- Netlify functions.
- App version to 'portfolio' text on hover.

### Fixed

- Changed email service from AWS lambda function to EmailJS.

### Removed

- AWS Lambda email service url.

## 1.0.0 - 2023-12-15

### Added

- Changelog and version added to app.
