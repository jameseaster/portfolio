/**
 * Imports
 */
import React, { useMemo, useState, createContext, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

/**
 * Types
 */
type ColorMode = "light" | "dark";
type Props = {
  children?: React.ReactNode;
};

/**
 * Create color mode context
 */
const ColorModeContext = createContext({ toggle: () => {} });

/**
 * Provides color mode context to children
 */
export default function ColorModeProvider({ children }: Props) {
  // State
  const [mode, setMode] = useState<ColorMode>("dark");

  // MUI Theme
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          allVariants: {
            color: mode === "light" ? "#4d4d4d" : "#FFFFFC",
          },
        },
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#4d4d4d" : "#FFFFFC",
          },
          background: {
            default: mode === "light" ? "#F5F5F5" : "#2D3032",
          },
        },
      }),
    [mode]
  );

  // Current color mode
  const colorMode = useMemo(
    () => ({
      toggle: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

/**
 * Hook that returns the Provider's value in a functional component
 */
export const useColorMode = () => useContext(ColorModeContext);
