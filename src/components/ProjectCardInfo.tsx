// Imports
import React from "react";
import { useTheme } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// Types
export interface ProjectCardInfoProps {
  short: string;
  label: string;
  image: string;
  hover: boolean;
}

/**
 * ProjectCardInfo
 */
const ProjectCardInfo: React.FC<ProjectCardInfoProps> = ({
  image,
  short,
  label,
  hover,
}) => {
  // Styles
  const theme = useTheme();

  return (
    <>
      <CardMedia
        alt={label}
        height="240"
        image={image}
        component="img"
        sx={{
          borderRadius: "4px",
          transition: "all ease-in-out 0.25s",
          filter: `brightness(${hover ? "70%" : "100%"})`,
          borderBottom: `1px solid ${theme.palette.grey[200]}`,
        }}
      />
      <CardContent sx={{ px: 0, pb: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {label}
        </Typography>
        <Typography variant="body1">{short}</Typography>
      </CardContent>
    </>
  );
};

export default ProjectCardInfo;
