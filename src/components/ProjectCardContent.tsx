// Imports
import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import RotateArrowIcon from "./RotateArrowIcon";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// Types
export interface ProjectCardContentProps {
  label: string;
  short: string;
  expanded: boolean;
  toggleDetails: () => void;
}

/**
 * Contains the text content for Project Card
 */
const ProjectCardContent: React.FC<ProjectCardContentProps> = ({
  label,
  short,
  expanded,
  toggleDetails,
}) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {label}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {short}
      </Typography>

      {/* Expand Details Button */}
      <Grid container justifyContent="flex-end">
        <Tooltip title="View Details" placement="right-end">
          <Button
            variant="text"
            onClick={toggleDetails}
            sx={{ mt: 2, mb: -1, textTransform: "none" }}
            endIcon={<RotateArrowIcon rotate={expanded} />}
          >
            <i>Details</i>
          </Button>
        </Tooltip>
      </Grid>
    </CardContent>
  );
};

ProjectCardContent.defaultProps = {
  label: "Project Title here",
  short: `Here is a short description that shouldn't be longer than two lines / 85 characters.`,
};

export default ProjectCardContent;
