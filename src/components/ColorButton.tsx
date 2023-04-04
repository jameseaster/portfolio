// Imports
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useColorMode } from "../context/ColorMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

/**
 * Icon Button to toggle between light and dark theme
 */
export function ColorButton() {
  const theme = useTheme();
  const colorMode = useColorMode();
  return (
    <IconButton onClick={colorMode.toggle} color="inherit">
      {theme.palette.mode === "dark" ? <LightModeIcon /> : <ModeNightIcon />}
    </IconButton>
  );
}
