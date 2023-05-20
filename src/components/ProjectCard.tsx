// Imports
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import ProjectGallery from "./ProjectGallery";
import { useTheme } from "@mui/material/styles";
import ProjectCardInfo from "./ProjectCardInfo";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ProjectCardActions from "./ProjectCardActions";
import CardActionArea from "@mui/material/CardActionArea";

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
  // Styles
  const theme = useTheme();

  // Local State
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Helper functions
  const toggleDetails = () => setExpanded((state) => !state);

  return (
    <>
      <Card sx={{ maxWidth: 370, boxShadow: theme.shadows[20] }}>
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

        <ProjectCardActions
          icons={icons}
          expanded={expanded}
          toggleDetails={toggleDetails}
        />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {details.map((text, index) => (
              <Typography
                key={index}
                paragraph
                variant="body1"
                color="text.secondary"
              >
                {text}
              </Typography>
            ))}
          </CardContent>
        </Collapse>
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
