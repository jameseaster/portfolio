## Unreleased - 2.1.0

### Added

- A resume icon at the end of the navigation, linking to the /resume page, which
  now embeds the resume PDF instead of only offering a button to open it. The
  browser's own PDF controls are suppressed in favour of a single download
  action.

### Fixed

- The home page card now sits the same distance below the navigation as every
  other page, instead of being pushed down by a percentage margin that grew with
  the viewport width.

### Changed

- Enlarged the social icons on the info page from 32px to 40px.
- Moved the color mode toggle out of the navigation row to a smaller, subtler
  sun/moon icon floating in the bottom right of the screen, freeing the last
  navigation slot for the resume.

### Removed

- The Codewars and Medium social links, along with their icon assets.
- The resume icon on the info page, now that the navigation links to /resume.

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
