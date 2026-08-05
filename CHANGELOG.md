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
