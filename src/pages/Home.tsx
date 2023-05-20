import React from "react";
import Page from "../components/Page";
import AnimatedIcon from "../components/AnimatedIcon";
import AnimatedCard from "../components/AnimatedCard";

/**
 * Home Page
 */
const Home: React.FC<{}> = () => {
  return (
    <Page sx={{ marginTop: { xs: "25%", sm: "18%", md: "13%", lg: "8%" } }}>
      <AnimatedCard>
        <AnimatedIcon />
      </AnimatedCard>
    </Page>
  );
};

export default Home;
