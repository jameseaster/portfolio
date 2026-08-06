// Imports
import React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import AbstractTooltip from "./AbstractTooltip";
import { alpha, useTheme } from "@mui/material/styles";
import { useColorMode } from "../context/colorModeContext";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

// Constants
const TRACK_WIDTH = 46;
const TRACK_HEIGHT = 26;
const THUMB_SIZE = 18;
const THUMB_INSET = 4;
const GLYPH_SIZE = 12;

/**
 * Circular switch thumb carrying the glyph for the active color mode
 */
const Thumb: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      width: THUMB_SIZE,
      height: THUMB_SIZE,
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      color: "background.default",
      backgroundColor: "primary.main",
    }}
  >
    {children}
  </Box>
);

/**
 * Switch to toggle between light and dark theme
 */
export function ColorButton() {
  const theme = useTheme();
  const colorMode = useColorMode();
  const isDark = theme.palette.mode === "dark";
  const trackColor = alpha(theme.palette.primary.main, 0.25);
  return (
    <AbstractTooltip
      title={`${isDark ? "Light" : "Dark"} Mode`}
      placement="bottom"
    >
      <Switch
        checked={isDark}
        onChange={colorMode.toggle}
        slotProps={{ input: { "aria-label": "Toggle color mode" } }}
        icon={
          <Thumb>
            <LightModeIcon sx={{ fontSize: GLYPH_SIZE }} />
          </Thumb>
        }
        checkedIcon={
          <Thumb>
            <ModeNightIcon sx={{ fontSize: GLYPH_SIZE }} />
          </Thumb>
        }
        sx={{
          padding: 0,
          width: TRACK_WIDTH,
          height: TRACK_HEIGHT,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: `${THUMB_INSET}px`,
            transition: "transform ease-in-out 0.25s",
            "&.Mui-checked": {
              transform: `translateX(${TRACK_WIDTH - THUMB_SIZE - THUMB_INSET * 2}px)`,
            },
          },
          "& .MuiSwitch-track, & .Mui-checked + .MuiSwitch-track": {
            opacity: 1,
            borderRadius: TRACK_HEIGHT / 2,
            backgroundColor: trackColor,
          },
        }}
      />
    </AbstractTooltip>
  );
}
