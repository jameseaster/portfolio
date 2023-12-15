import React from "react";
import Box from "@mui/material/Box";
import Page from "../components/Page";
import Typography from "@mui/material/Typography";
import { APP_CONSTANTS } from "../utils/constants";
import AnimatedIcon from "../components/AnimatedIcon";
import AnimatedCard from "../components/AnimatedCard";
import AbstractTooltip from "../components/AbstractTooltip";

/**
 * Home Page
 */
const Home: React.FC<{}> = () => {
  return (
    <Page sx={{ marginTop: { xs: "20%", sm: "13%", md: "9%", lg: "5%" } }}>
      <AnimatedCard sx={{ px: 3 }}>
        <Typography>Development</Typography>
        <Box sx={{ height: { xs: "225px", sm: "300px" } }}>
          <AnimatedIcon />
        </Box>
        <AbstractTooltip
          enterDelay={750}
          placement="right"
          title={APP_CONSTANTS.APP_VERSION}
        >
          <Typography sx={{ textAlign: "end" }}>Portfolio</Typography>
        </AbstractTooltip>
      </AnimatedCard>
    </Page>
  );
};

export default Home;
