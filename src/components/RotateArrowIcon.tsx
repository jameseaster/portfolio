// Imports
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

/**
 * Rotating arrow icon used in Project Card
 */
const RotateArrowIcon: React.FC<{ rotate: boolean }> = ({ rotate }) => {
  return (
    <KeyboardArrowDownIcon
      fontSize="large"
      sx={{
        transition: "all ease-in-out 0.25s",
        transform: `rotate(${rotate ? 180 : 0}deg)`,
        OTransform: `rotate(${rotate ? 180 : 0}deg)`,
        msTransform: `rotate(${rotate ? 180 : 0}deg)`,
        MozTransform: `rotate(${rotate ? 180 : 0}deg)`,
        WebkitTransform: `rotate(${rotate ? 180 : 0}deg)`,
      }}
    />
  );
};

export default RotateArrowIcon;
