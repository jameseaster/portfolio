// Imports
import Work from "../pages/Work";
import Info from "../pages/Info";
import Home from "../pages/Home";
import Grid from "@mui/material/Grid";
import Contact from "../pages/Contact";
import { ColorButton } from "./ColorButton";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// App links & routes
const links = [
  { label: "Home", route: "/" },
  { label: "Info", route: "/info" },
  { label: "Work", route: "/work" },
  { label: "Contact", route: "/contact" },
];

/**
 * Provides Links and Routes
 */
export default function AppRoutes() {
  const theme = useTheme();

  return (
    <Router>
      <Grid container sx={{ m: 1 }}>
        {links.map(({ label, route }) => (
          <Typography variant="body1" sx={{ p: 1 }}>
            <Link
              to={route}
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
            >
              {label}
            </Link>
          </Typography>
        ))}

        {/* Theme Color Toggle */}
        <ColorButton />
      </Grid>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
