// Imports
import React from "react";
import Box from "@mui/material/Box";
import Page from "../components/Page";
import Link from "@mui/material/Link";
import pdf from "../assets/resume.pdf";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { APP_CONSTANTS } from "../utils/constants";
import AbstractTooltip from "../components/AbstractTooltip";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";

// Constants
const MAX_WIDTH = 900;
const FILE_NAME = "James-Easter-Resume.pdf";

// Chrome and Edge honour these to hide their PDF chrome, leaving just the page.
// Firefox and Safari ignore them and show their own viewer, which is acceptable
// - the resume still renders, it simply comes with their toolbar.
const VIEWER_PARAMS = "#toolbar=0&navpanes=0&scrollbar=0&view=FitH";

/**
 * Resume Page
 *
 * Embeds the resume PDF with the browser's own viewer controls suppressed, so
 * the page shows the resume and a single download action. Some browsers -
 * mobile Safari in particular - refuse to render a PDF inline and show the
 * fallback instead, so the fallback is a real download rather than filler text.
 */
const Resume: React.FC = () => {
  const theme = useTheme();
  return (
    <Page
      sx={{
        // m: 3 matches the other pages, so the title sits on the same line as
        // theirs; mx/mb then centre the column and drop the bottom gap, and the
        // height loses that top margin back so the PDF does not force a scroll.
        m: 3,
        mx: "auto",
        mb: 0,
        px: 3,
        maxWidth: MAX_WIDTH,
        height: `calc(${100 - APP_CONSTANTS.HEADER_HEIGHT}vh - ${theme.spacing(3)})`,
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <AbstractTooltip title="Download" placement="left">
          <IconButton
            download={FILE_NAME}
            href={pdf}
            aria-label="Download resume"
          >
            <DownloadIcon />
          </IconButton>
        </AbstractTooltip>
      </Box>
      <Box
        component="object"
        data={`${pdf}${VIEWER_PARAMS}`}
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
        <Link href={pdf} download={FILE_NAME}>
          Download resume
        </Link>
      </Box>
    </Page>
  );
};

export default Resume;
