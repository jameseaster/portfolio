import React from "react";
import Page from "../components/Page";
import AnimatedIcon from "../components/AnimatedIcon";

/**
 * Home Page
 */
const Home: React.FC<{}> = () => {
  return (
    <Page pageStyles={{ marginTop: "10%" }}>
      <AnimatedIcon />
    </Page>
  );
};

export default Home;
