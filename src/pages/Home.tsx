import React from "react";
import Box from "@mui/material/Box";
import Page from "../components/Page";
import Typography from "@mui/material/Typography";
import AnimatedIcon from "../components/AnimatedIcon";
import AnimatedCard from "../components/AnimatedCard";

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
        <Typography sx={{ textAlign: "end" }}>Portfolio</Typography>
      </AnimatedCard>
    </Page>
  );
};

export default Home;
