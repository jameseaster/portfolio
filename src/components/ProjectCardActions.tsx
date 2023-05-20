// Imports
import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import AbstractTooltip from "./AbstractTooltip";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ProjectActionIcon from "./ProjectActionIcon";

// Types
interface ProjectCardActionsProps {
  icons: CardActionIcon[] | undefined;
}

interface CardActionIcon {
  id: string;
  link: string;
  icon: string;
  tooltip: string;
  disabled: boolean;
}

/**
 * ProjectCardActions are the icons / links at the bottom of a ProjectCard
 */
const ProjectCardActions: React.FC<ProjectCardActionsProps> = ({ icons }) => {
  // Style
  const theme = useTheme();

  return (
    <>
      <CardActions>
        <Grid
          container
          sx={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          {icons?.map(({ id, icon, link, tooltip, disabled }) => (
            <AbstractTooltip placement="bottom" title={tooltip} key={id}>
              <div>
                <IconButton
                  component="button"
                  disabled={disabled}
                  sx={{ ml: 2, boxShadow: theme.shadows[3] }}
                  onClick={(event) => {
                    event.stopPropagation();
                    window.open(link, "_blank", "noreferrer");
                  }}
                >
                  <ProjectActionIcon icon={icon} />
                </IconButton>
              </div>
            </AbstractTooltip>
          ))}
        </Grid>
      </CardActions>
    </>
  );
};

export default ProjectCardActions;
