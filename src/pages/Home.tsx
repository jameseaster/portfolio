import React from "react";
import Page from "../components/Page";
import AnimatedIcon from "../components/AnimatedIcon";

/**
 * Home Page
 */
const Home: React.FC<{}> = () => {
  return (
    <Page pageStyles={{ justifyContent: "center" }}>
      <AnimatedIcon />
    </Page>
  );
};

export default Home;
