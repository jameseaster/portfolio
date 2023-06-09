// Imports
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ColorButton } from "./ColorButton";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { APP_CONSTANTS } from "../utils/constants";
// Nav Icons
import HomeIcon from "@mui/icons-material/HomeOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import WorkIcon from "@mui/icons-material/BuildOutlined";
import ContactIcon from "@mui/icons-material/MailOutlined";

// Types
export interface NavigationProps {}

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
];

/**
 * Navigation Icons and Theme button
 */
const Navigation: React.FC<NavigationProps> = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ height: `${APP_CONSTANTS.HEADER_HEIGHT}vh` }}
    >
      {links.map(({ Icon, route }) => (
        <Box key={route} sx={{ mr: { xs: 1, sm: 2, md: 3 } }}>
          <IconButton
            key={route}
            color="inherit"
            onClick={() => navigate(route)}
          >
            {Icon}
          </IconButton>
        </Box>
      ))}
      <ColorButton />
    </Grid>
  );
};

export default Navigation;
