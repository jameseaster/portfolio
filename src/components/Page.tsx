// Imports
import React from "react";
import Path from "./Path";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { SxProps } from "@mui/system";
import { motion } from "framer-motion";
import { APP_CONSTANTS } from "../utils/constants";

// Types
export interface PageProps {
  sx?: SxProps;
  action?: React.ReactNode;
  children?: React.ReactNode;
}

// Framer-Motion Animation Properties
const PAGE_ANIMATIONS = {
  exit: { opacity: 0 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { ease: "easeIn" as const, duration: 0.25 },
};

/**
 * Page
 */
const Page: React.FC<PageProps> = ({ sx, action, children }) => {
  return (
    <motion.div {...PAGE_ANIMATIONS}>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: `${100 - APP_CONSTANTS.HEADER_HEIGHT}vh`,
          m: 3,
          ...sx,
        }}
      >
        <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
          <Path />
          {action}
        </Box>
        {children}
      </Grid>
    </motion.div>
  );
};

export default Page;
