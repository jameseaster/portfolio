// Imports
import Navigation from "./components/Navigation";
import AnimatedRoutes from "./components/Routes";
import ResumePrint from "./pages/ResumePrint";
import { useLocation } from "react-router-dom";
import { ColorButton } from "./components/ColorButton";
import CssBaseline from "@mui/material/CssBaseline";
import ColorModeProvider from "./context/ColorMode";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimationTrackerProvider } from "./context/AnimationTracker";

// The route headless Chrome prints from
export const PRINT_PATH = "/resume/print";

/**
 * Chooses between the app and the bare print document.
 *
 * The print route renders outside the color mode provider, CssBaseline, the
 * navigation, and AnimatePresence: it must be light regardless of the site
 * theme, carry no app chrome, and never animate, since a half-faded page
 * prints as a half-faded PDF.
 */
function AppShell() {
  const { pathname } = useLocation();

  if (pathname.startsWith(PRINT_PATH)) return <ResumePrint />;

  return (
    <ColorModeProvider>
      <AnimationTrackerProvider>
        <CssBaseline />
        <Navigation />
        <AnimatedRoutes />
        <ColorButton />
      </AnimationTrackerProvider>
    </ColorModeProvider>
  );
}

/**
 * Top level app component
 */
export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
