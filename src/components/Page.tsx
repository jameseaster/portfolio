// Imports
import React from "react";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

// Types
export interface PageProps {
  children?: React.ReactNode;
}

// Constants
// TODO: ABSTRACT TO CONSTANTS FILE
const HEADER_HEIGHT = 12;
// Framer-Motion Animation Properties
const PAGE_ANIMATIONS = {
  exit: { opacity: 0 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { ease: "easeIn", duration: 0.25 },
};

/**
 * Page
 */
const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <motion.div {...PAGE_ANIMATIONS}>
      <Grid
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        style={{ height: `${100 - HEADER_HEIGHT}vh`, padding: 20 }}
      >
        {children}
      </Grid>
    </motion.div>
  );
};

export default Page;
