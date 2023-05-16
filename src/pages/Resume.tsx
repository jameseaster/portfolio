import React from "react";
import Page from "../components/Page";
import pdf from "../assets/resume.pdf";
import { Button } from "@mui/material";

/**
 * Resume Page
 */
const Resume: React.FC<{}> = () => {
  return (
    <Page>
      <Button
        size="large"
        variant="contained"
        style={{ marginTop: "30%" }}
        sx={{ textTransform: "none" }}
        onClick={() => window.open(pdf, "_blank", "noreferrer")}
      >
        James's Resume
      </Button>
    </Page>
  );
};

export default Resume;
