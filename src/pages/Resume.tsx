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

// Hides the native PDF chrome; Chrome and Edge only, others ignore it
const VIEWER_PARAMS = "#toolbar=0&navpanes=0&scrollbar=0&view=FitH";

/**
 * Resume Page
 */
const Resume: React.FC = () => {
  const theme = useTheme();
  return (
    <Page
      sx={{
        // m: 3 keeps the title aligned with the other pages
        m: 3,
        mx: "auto",
        mb: 0,
        px: 3,
        maxWidth: MAX_WIDTH,
        height: `calc(${100 - APP_CONSTANTS.HEADER_HEIGHT}vh - ${theme.spacing(3)})`,
      }}
      action={
        <AbstractTooltip title="Download" placement="right">
          <IconButton
            href={pdf}
            download={FILE_NAME}
            aria-label="Download resume"
            // p: 0 keeps the button within the title's line height
            sx={{ p: 0, ml: 1 }}
          >
            <DownloadIcon fontSize="small" />
          </IconButton>
        </AbstractTooltip>
      }
    >
      <Box
        component="object"
        data={`${pdf}${VIEWER_PARAMS}`}
        type="application/pdf"
        aria-label="Resume"
        sx={{
          flex: 1,
          width: "100%",
          // Lets the object shrink inside the flex column
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
