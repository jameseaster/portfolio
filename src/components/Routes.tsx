// Imports
import React, { useEffect } from "react";
import Work from "../pages/Work";
import Info from "../pages/Info";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import { ACTIONS } from "../utils/constants";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAnimationTracker } from "../context/AnimationTracker";

/**
 * AnimatedRoutes
 */
const AnimatedRoutes: React.FC<{}> = () => {
  // Global State
  const { animationTracker, dispatchAnimationTracker } = useAnimationTracker();

  // Hooks
  const location = useLocation();

  // Track which pages have been loaded so they animate only once
  useEffect(() => {
    if (location.pathname === "/" && !animationTracker.home) {
      dispatchAnimationTracker({
        type: ACTIONS.UPDATE_ANIMATION_TRACKER,
        payload: { home: true },
      });
    }
  }, [location, animationTracker, dispatchAnimationTracker]);

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
