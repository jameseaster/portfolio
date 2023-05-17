// Imports
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import { SvgIconComponent } from "@mui/icons-material";

// Types
interface CardActionIcon {
  id: string;
  link: string;
  tooltip: string;
  Icon: SvgIconComponent;
}

/**
 * ProjectCardActions are the icons / links at the bottom of a ProjectCard
 */
const ProjectCardActions: React.FC<{ icons?: CardActionIcon[] }> = ({
  icons,
}) => {
  return (
    <CardActions sx={{ justifyContent: "space-around" }}>
      {icons?.map(({ id, Icon, link, tooltip }) => (
        <Tooltip title={tooltip} key={id}>
          <IconButton
            size="small"
            component="button"
            onClick={() => window.open(link, "_blank", "noreferrer")}
          >
            <Icon />
          </IconButton>
        </Tooltip>
      ))}
    </CardActions>
  );
};

export default ProjectCardActions;
