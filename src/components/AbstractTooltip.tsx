// Imports
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

// Types
export interface ProjectCardInfoProps {
  title: string;
  placement?:
    | "right"
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start"
    | "top"
    | undefined;
  children: React.ReactElement;
}

/**
 * Tooltip with title wrapped in Typography component with white font
 */
const AbstractTooltip: React.FC<ProjectCardInfoProps> = ({
  title,
  children,
  placement,
  ...props
}) => {
  return (
    <Tooltip
      title={<Typography color={"white"}>{title}</Typography>}
      placement={placement}
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default AbstractTooltip;

AbstractTooltip.defaultProps = {
  placement: "left",
};
