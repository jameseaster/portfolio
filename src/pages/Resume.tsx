// Imports
import React from "react";
import Box from "@mui/material/Box";
import Page from "../components/Page";
import Link from "@mui/material/Link";
import pdf from "../assets/resume.pdf";
import { useTheme } from "@mui/material/styles";

// Constants
const MAX_WIDTH = 900;

/**
 * Resume Page
 *
 * Embeds the resume PDF in the browser's native viewer. Some browsers - mobile
 * Safari in particular - refuse to render a PDF inline and show the fallback
 * link instead, so the fallback is a real download rather than filler text.
 */
const Resume: React.FC = () => {
  const theme = useTheme();
  return (
    <Page sx={{ m: 0, mx: "auto", px: 2, pb: 2, maxWidth: MAX_WIDTH }}>
      <Box
        component="object"
        data={pdf}
        type="application/pdf"
        aria-label="Resume"
        sx={{
          flex: 1,
          width: "100%",
          // Without this the object refuses to shrink inside the flex column
          minHeight: 0,
          border: "none",
          borderRadius: 1,
          overflow: "hidden",
          boxShadow: theme.shadows[20],
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Link href={pdf} target="_blank" rel="noreferrer">
          Download resume
        </Link>
      </Box>
    </Page>
  );
};

export default Resume;
