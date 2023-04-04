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
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Router>
        {/* Header */}
        <Grid item p={2} xs={12} container justifyContent="space-between">
          {/* Navigation Links */}
          <Grid container xs={10} item>
            {links.map(({ label, route }) => (
              <Typography key={label} variant="body1" sx={{ p: 1 }}>
                <Link
                  to={route}
                  style={{
                    textDecoration: "none",
                    color: theme.typography.body1.color,
                  }}
                >
                  {label}
                </Link>
              </Typography>
            ))}
          </Grid>
          {/* Theme Color Toggle */}
          <Grid item>
            <ColorButton />
          </Grid>
        </Grid>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Grid>
  );
}
