import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

// Constants
const pathNames: { [key: string]: string } = {
  "/": "",
  "/info": "About Me",
  "/work": "My Work",
  "/contact": "Message",
};

/**
 * Displays the page title by location pathname
 */
const Path: React.FC<{}> = () => {
  // Hooks
  const location = useLocation();

  return (
    <Typography sx={{ p: 0, mb: 3 }}>
      <i>{pathNames[location.pathname]}</i>
    </Typography>
  );
};

export default Path;
