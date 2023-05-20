import React from "react";
import Box from "@mui/material/Box";
import Page from "../components/Page";
import AnimatedIcon from "../components/AnimatedIcon";
import AnimatedCard from "../components/AnimatedCard";
import { Typography } from "@mui/material";

/**
 * Home Page
 */
const Home: React.FC<{}> = () => {
  return (
    <Page sx={{ marginTop: { xs: "25%", sm: "18%", md: "13%", lg: "8%" } }}>
      <AnimatedCard sx={{ px: 3 }}>
        <Typography>Development</Typography>
        <Box sx={{ height: { xs: "225px", sm: "300px" } }}>
          <AnimatedIcon />
        </Box>
        <Typography sx={{ textAlign: "end" }}>Portfolio</Typography>
      </AnimatedCard>
    </Page>
  );
};

export default Home;
