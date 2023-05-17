import React from "react";
import Grid from "@mui/material/Grid";
import Page from "../components/Page";
import { projects } from "../data/projects";
import Typography from "@mui/material/Typography";
import ProjectCard from "../components/ProjectCard";

/**
 * Work Page
 */
const Work: React.FC<{}> = () => {
  return (
    <Page>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
        Recent Work
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "1200px" }}
      >
        {projects.map(({ ...props }) => (
          <Grid key={props.id} item>
            <ProjectCard {...props} />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
};

export default Work;
