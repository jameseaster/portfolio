// Imports
import React, { useState } from "react";
import Card from "@mui/material/Card";
import ProjectGallery from "./ProjectGallery";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectCardActions from "./ProjectCardActions";
import CardActionArea from "@mui/material/CardActionArea";

// Types
export interface ProjectCardProps {
  id: string;
  label: string;
  image: string;
  short: string;
  details: Detail[];
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

interface Detail {
  header: string;
  paragraphs: string[];
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
  const [hover, setHover] = useState(false);

  return (
    <>
      <Card
        elevation={20}
        sx={{ p: 2, pb: 1, maxWidth: 370, transition: "all ease-in-out 0.75s" }}
      >
        <CardActionArea
          disableRipple
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <ProjectCardInfo
            short={short}
            label={label}
            image={image}
            hover={hover}
          />
        </CardActionArea>
        <ProjectCardActions icons={icons} />
      </Card>

      <ProjectGallery
        open={open}
        label={label}
        details={details}
        gallery={gallery}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
