// Imports
import type { Theme } from "@mui/material/styles";
import type { SxProps } from "@mui/system";

/**
 * Screen styling for ResumeDocument.
 *
 * Targets the document's class names by descendant selector rather than styling
 * the components inline, so the print stylesheet can restyle the same markup in
 * Phase 3 without competing with Emotion's specificity.
 */
export const resumeScreenSx = (theme: Theme): SxProps<Theme> => ({
  width: "100%",
  maxWidth: 900,
  mx: "auto",
  p: { xs: 3, sm: 5 },
  borderRadius: 1,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[20],
  fontSize: { xs: "0.9rem", sm: "0.95rem" },
  lineHeight: 1.55,

  "& a": {
    color: "inherit",
    textDecoration: "none",
    borderBottom: `1px solid ${theme.palette.divider}`,
    "&:hover": { borderBottomColor: theme.palette.text.primary },
  },

  "& .resume-header": {
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    alignItems: "flex-end",
    justifyContent: "space-between",
    pb: 2,
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  "& .resume-name": {
    m: 0,
    fontSize: { xs: "1.75rem", sm: "2.1rem" },
    fontWeight: 700,
    letterSpacing: "0.02em",
  },
  "& .resume-label": {
    m: 0,
    mt: 0.5,
    fontSize: "0.85rem",
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: theme.palette.text.secondary,
  },
  "& .resume-contact": {
    m: 0,
    p: 0,
    listStyle: "none",
    textAlign: { xs: "left", sm: "right" },
    fontSize: "0.8rem",
    lineHeight: 1.7,
    color: theme.palette.text.secondary,
  },

  "& .resume-section": { mt: 3 },
  "& .resume-section-title": {
    m: 0,
    mb: 1,
    pb: 0.5,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: theme.palette.text.secondary,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  "& .resume-summary": { m: 0 },

  "& .resume-entry + .resume-entry": { mt: 2 },
  "& .resume-entry-head": {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  "& .resume-entry-title": { m: 0, fontSize: "1rem", fontWeight: 700 },
  "& .resume-entry-dates": {
    fontSize: "0.75rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    color: theme.palette.text.secondary,
  },
  "& .resume-entry-subtitle": {
    m: 0,
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
  "& .resume-entry-summary": { m: 0, mt: 0.5 },

  // Education fits title, degree, and dates on one line
  "& .resume-entry-compact .resume-entry-head": {
    justifyContent: "flex-start",
    columnGap: 1,
  },
  "& .resume-entry-compact .resume-entry-dates": { ml: "auto" },
  "& .resume-entry-compact .resume-entry-subtitle": { fontWeight: 400 },
  "& .resume-entry-compact + .resume-entry-compact": { mt: 0.5 },

  "& .resume-projects": { m: 0, mt: 1, p: 0, listStyle: "none" },
  "& .resume-project + .resume-project": { mt: 1 },
  "& .resume-project-name": { fontWeight: 600 },
  "& .resume-project-description": { color: theme.palette.text.secondary },

  "& .resume-highlights": {
    m: 0,
    mt: 0.5,
    pl: 2.5,
    listStyleType: "disc",
    "& li": { mb: 0.25 },
  },

  "& .resume-skills": { m: 0, p: 0, listStyle: "none" },
  "& .resume-skill-name": { fontWeight: 600 },

  "& .resume-awards": { m: 0, pl: 2.5 },
  "& .resume-award-title": { fontWeight: 600 },

  "& .resume-interests": { m: 0, color: theme.palette.text.secondary },
});
