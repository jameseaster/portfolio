// Imports
import Navigation from "./components/Navigation";
import AnimatedRoutes from "./components/Routes";
import CssBaseline from "@mui/material/CssBaseline";
import ColorModeProvider from "./context/ColorMode";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimationTrackerProvider } from "./context/AnimationTracker";

/**
 * Top level app component
 */
export default function App() {
  return (
    <ColorModeProvider>
      <AnimationTrackerProvider>
        <CssBaseline />
        <Router>
          <Navigation />
          <AnimatedRoutes />
        </Router>
      </AnimationTrackerProvider>
    </ColorModeProvider>
  );
}
