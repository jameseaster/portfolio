import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { APP_CONSTANTS } from "../utils/constants";

/**
 * Displays the page title by location pathname
 */
const Path: React.FC = () => {
  // Hooks
  const location = useLocation();

  // minHeight reserves the line on routes with no title
  return (
    <Typography sx={{ p: 0, minHeight: "1.5em" }}>
      <i>{APP_CONSTANTS.PATH_NAMES[location.pathname]}</i>
    </Typography>
  );
};

export default Path;
