// Imports
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../context/ColorMode";

/**
 * Icon Button to toggle between light and dark theme
 */
export function ColorButton() {
  const theme = useTheme();
  const colorMode = useColorMode();
  return (
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggle} color="inherit">
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}
