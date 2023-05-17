import React from "react";
import Page from "../components/Page";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

/**
 * Info Page
 */
const Info: React.FC<{}> = () => {
  return (
    <Page>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
        Info
      </Typography>
      <Avatar alt="James" src="/assets/avatar.jpg" />
      <p>Short description about myself</p>
    </Page>
  );
};

export default Info;
