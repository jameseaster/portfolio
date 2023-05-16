import React from "react";
import Page from "../components/Page";
import Avatar from "@mui/material/Avatar";

/**
 * Info Page
 */
const Info: React.FC<{}> = () => {
  return (
    <Page>
      <h2>Info</h2>
      <Avatar alt="James" src="/assets/avatar.jpg" />
      <p>Short description about myself</p>
    </Page>
  );
};

export default Info;
