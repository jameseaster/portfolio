// Imports
import Work from "./pages/Work";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/info" style={{ padding: 5 }}>
          Info
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          Work
        </Link>
        <Link to="/contact" style={{ padding: 5 }}>
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/about" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
