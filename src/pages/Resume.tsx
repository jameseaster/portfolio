import React from "react";
import Page from "../components/Page";
import pdf from "../assets/resume.pdf";
import Button from "@mui/material/Button";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

/**
 * Resume Page
 */
const Resume: React.FC<{}> = () => {
  return (
    <Page>
      <Button
        size="large"
        variant="outlined"
        sx={{ textTransform: "none" }}
        startIcon={<ArticleOutlinedIcon />}
        onClick={() => window.open(pdf, "_blank", "noreferrer")}
      >
        View Resume
      </Button>
    </Page>
  );
};

export default Resume;
