// Imports
import React from "react";
import Path from "./Path";
import Grid from "@mui/material/Grid";
import { SxProps } from "@mui/system";
import { motion } from "framer-motion";
import { APP_CONSTANTS } from "../utils/constants";

// Types
export interface PageProps {
  sx?: SxProps;
  children?: React.ReactNode;
}

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
const Page: React.FC<PageProps> = ({ sx, children }) => {
  return (
    <motion.div {...PAGE_ANIMATIONS}>
      <Grid
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{ height: `${100 - APP_CONSTANTS.HEADER_HEIGHT}vh`, m: 3, ...sx }}
      >
        <Path />
        {children}
      </Grid>
    </motion.div>
  );
};

export default Page;
