// Imports
import React from "react";
import Grid from "@mui/material/Grid";
import { ColorButton } from "./ColorButton";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
// Nav Icons
import HomeIcon from "@mui/icons-material/HomeOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import WorkIcon from "@mui/icons-material/HandymanOutlined";
import ContactIcon from "@mui/icons-material/MailOutlined";

// Types
export interface NavigationProps {}

// TODO: ABSTRACT TO CONSTANTS FILE
const HEADER_HEIGHT = 12;
const NAV_ICON_SIZE = 40;

// Constants
const fontSize = NAV_ICON_SIZE;

// App links & routes
const links = [
  { Icon: <HomeIcon sx={{ fontSize }} />, route: "/" },
  { Icon: <InfoIcon sx={{ fontSize }} />, route: "/info" },
  { Icon: <WorkIcon sx={{ fontSize }} />, route: "/work" },
  { Icon: <ContactIcon sx={{ fontSize }} />, route: "/contact" },
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
      justifyContent="space-between"
      sx={{ p: 2, height: `${HEADER_HEIGHT}vh` }}
    >
      <Grid container xs={10} item>
        {links.map(({ Icon, route }) => (
          <IconButton color="inherit" onClick={() => navigate(route)}>
            {Icon}
          </IconButton>
        ))}
      </Grid>
      <Grid item>
        <ColorButton />
      </Grid>
    </Grid>
  );
};

export default Navigation;
