// Imports
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { APP_CONSTANTS } from "../utils/constants";
// Nav Icons
import HomeIcon from "@mui/icons-material/HomeOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import WorkIcon from "@mui/icons-material/BuildOutlined";
import ContactIcon from "@mui/icons-material/MailOutlined";
import ResumeIcon from "@mui/icons-material/ArticleOutlined";

// Constants
const fontSize = APP_CONSTANTS.NAV_ICON_SIZE;

// App links & routes
const links = [
  { Icon: <HomeIcon sx={{ fontSize }} />, route: "/", tooltip: "Home" },
  { Icon: <InfoIcon sx={{ fontSize }} />, route: "/info", tooltip: "Info" },
  { Icon: <WorkIcon sx={{ fontSize }} />, route: "/work", tooltip: "Work" },
  {
    Icon: <ContactIcon sx={{ fontSize }} />,
    route: "/contact",
    tooltip: "Message",
  },
  {
    Icon: <ResumeIcon sx={{ fontSize }} />,
    route: "/resume",
    tooltip: "Resume",
  },
];

/**
 * Navigation Icons and Theme button
 */
const Navigation: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: `${APP_CONSTANTS.HEADER_HEIGHT}vh`,
      }}
    >
      {links.map(({ Icon, route, tooltip }) => (
        <Box key={route} sx={{ mr: { xs: 1, sm: 2, md: 3 } }}>
          <IconButton
            key={route}
            color="inherit"
            aria-label={tooltip}
            onClick={() => navigate(route)}
          >
            {Icon}
          </IconButton>
        </Box>
      ))}
    </Grid>
  );
};

export default Navigation;
