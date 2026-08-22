// Imports
import AbstractTooltip from "./AbstractTooltip";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useColorMode } from "../context/colorModeContext";
import ModeNightIcon from "@mui/icons-material/ModeNightOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";

// Constants
const ICON_SIZE = 22;

/**
 * Floating icon button to toggle between light and dark theme
 */
export function ColorButton() {
  const theme = useTheme();
  const colorMode = useColorMode();
  const isDark = theme.palette.mode === "dark";
  return (
    <AbstractTooltip
      title={`${isDark ? "Light" : "Dark"} Mode`}
      placement="bottom"
    >
      <IconButton
        color="inherit"
        data-print="hide"
        onClick={colorMode.toggle}
        aria-label="Toggle color mode"
        sx={{
          opacity: 0.5,
          zIndex: "appBar",
          position: "fixed",
          // px, not spacing units - MUI does not transform these
          bottom: { xs: 8, sm: 16 },
          right: { xs: 8, sm: 16 },
          transition: "opacity ease-in-out 0.25s",
          "&:hover": { opacity: 1 },
        }}
      >
        {isDark ? (
          <LightModeIcon sx={{ fontSize: ICON_SIZE }} />
        ) : (
          <ModeNightIcon sx={{ fontSize: ICON_SIZE }} />
        )}
      </IconButton>
    </AbstractTooltip>
  );
}
