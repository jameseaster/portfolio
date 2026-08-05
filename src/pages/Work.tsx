import React from "react";
import Grid from "@mui/material/Grid";
import Page from "../components/Page";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

/**
 * Work Page
 */
const Work: React.FC = () => {
  return (
    <Page>
      <Grid
        container
        spacing={3}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1200px",
          pb: 5,
        }}
      >
        {projects.map(({ ...props }) => (
          <Grid key={props.id}>
            <ProjectCard {...props} />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
};

export default Work;
