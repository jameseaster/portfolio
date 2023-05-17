// Imports
import React, { useState } from "react";
import Card from "@mui/material/Card";
import ProjectGallery from "./ProjectGallery";
import ProjectCardMedia from "./ProjectCardMedia";
import ProjectCardContent from "./ProjectCardContent";
import ProjectCardActions from "./ProjectCardActions";

// Types
export interface ProjectCardProps {
  id: string;
  label: string;
  image: string;
  short: string;
  details: string[];
  gallery: AppImage[];
  icons?: CardActionIcon[];
}

interface AppImage {
  id: string;
  image: string;
  label: string;
}

interface CardActionIcon {
  id: string;
  link: string;
  disabled: boolean;
  icon: string;
  tooltip: string;
}

/**
 * ProjectCard
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  label,
  short,
  icons,
  details,
  gallery,
}) => {
  // Local State
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Helper functions
  const toggleDetails = () => setExpanded((state) => !state);

  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
        <ProjectCardMedia
          label={label}
          image={image}
          handleClick={() => setOpen(true)}
        />
        <ProjectCardContent
          label={label}
          short={short}
          details={details}
          expanded={expanded}
          toggleDetails={toggleDetails}
        />
        <ProjectCardActions icons={icons} />
      </Card>

      <ProjectGallery
        open={open}
        label={label}
        gallery={gallery}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
