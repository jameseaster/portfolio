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
  const [mode, setMode] = useState<ColorMode>("light");

  // MUI Theme
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

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
