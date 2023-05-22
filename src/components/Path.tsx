import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { APP_CONSTANTS } from "../utils/constants";

/**
 * Displays the page title by location pathname
 */
const Path: React.FC<{}> = () => {
  // Hooks
  const location = useLocation();

  return (
    <Typography sx={{ p: 0, mb: 3 }}>
      <i>{APP_CONSTANTS.PATH_NAMES[location.pathname]}</i>
    </Typography>
  );
};

export default Path;
