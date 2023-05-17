// Imports
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ProjectActionIcon from "./ProjectActionIcon";

// Types
interface CardActionIcon {
  id: string;
  link: string;
  disabled: boolean;
  icon: string;
  tooltip: string;
}

/**
 * ProjectCardActions are the icons / links at the bottom of a ProjectCard
 */
const ProjectCardActions: React.FC<{ icons?: CardActionIcon[] }> = ({
  icons,
}) => {
  return (
    <CardActions sx={{ justifyContent: "space-around" }}>
      {icons?.map(({ id, icon, link, tooltip, disabled }) => (
        <Tooltip title={tooltip} key={id}>
          <span>
            <IconButton
              disabled={disabled}
              size="small"
              component="button"
              onClick={() => window.open(link, "_blank", "noreferrer")}
            >
              <ProjectActionIcon icon={icon} />
            </IconButton>
          </span>
        </Tooltip>
      ))}
    </CardActions>
  );
};

export default ProjectCardActions;
