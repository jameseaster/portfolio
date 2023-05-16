// Imports
import React from "react";
import Work from "../pages/Work";
import Info from "../pages/Info";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

// Types
export interface AnimatedRoutesProps {}

/**
 * AnimatedRoutes
 */
const AnimatedRoutes: React.FC<AnimatedRoutesProps> = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
