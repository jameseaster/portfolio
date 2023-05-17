// Imports
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

// Types
export interface ProjectCardMediaProps {
  label: string;
  image: string;
  handleClick: () => void;
}

/**
 * ProjectCardMedia
 */
const ProjectCardMedia: React.FC<ProjectCardMediaProps> = ({
  image,
  label,
  handleClick,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Tooltip title="Gallery" placement="bottom">
      <CardActionArea
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <CardMedia
          alt={label}
          height="200"
          image={image}
          component="img"
          sx={{
            transition: "all ease-in-out 0.25s",
            filter: `brightness(${hover ? "70%" : "100%"})`,
          }}
        />
      </CardActionArea>
    </Tooltip>
  );
};

export default ProjectCardMedia;
