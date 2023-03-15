// Imports
import AppRoutes from "./components/AppRoutes";
import CssBaseline from "@mui/material/CssBaseline";
import ColorModeProvider from "./context/ColorMode";

/**
 * Top level app component
 */
export default function App() {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <AppRoutes />
    </ColorModeProvider>
  );
}
