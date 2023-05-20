// Imports
import React from "react";
import { motion } from "framer-motion";

// Types
export interface AnimatedIconProps {}

// Animation constants
const letterVariants = (duration = 4) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    ease: "easeinout",
    transition: { duration },
  },
});

const edgeVariants = (duration = 4) => ({
  hidden: { pathLength: 0 },
  visible: {
    fill: "none",
    pathLength: 1,
    strokeWidth: 2,
    ease: "easeinout",
    stroke: "currentColor",
    transition: { duration },
  },
});

/**
 * AnimatedIcon
 */
const AnimatedIcon: React.FC<AnimatedIconProps> = () => {
  return (
    <motion.svg
      width="65"
      height="65"
      fill="none"
      initial="hidden"
      animate="visible"
      viewBox="0 0 65 65"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "100%", width: "auto" }}
    >
      <motion.path
        variants={letterVariants(2)}
        d="M23.043 40.624V15.4531H27.7305V40.624C27.7305 42.9678 27.2503 44.9453 26.29 46.5566C25.3298 48.168 24.0033 49.3968 22.3105 50.2432C20.6341 51.0732 18.7054 51.4883 16.5244 51.4883C14.3434 51.4883 12.4066 51.1139 10.7139 50.3652C9.02116 49.6165 7.69466 48.4772 6.73438 46.9473C5.77409 45.4173 5.29395 43.4886 5.29395 41.1611H10.0059C10.0059 42.6585 10.2826 43.8874 10.8359 44.8477C11.3893 45.8079 12.1543 46.516 13.1309 46.9717C14.1237 47.4274 15.2549 47.6553 16.5244 47.6553C17.7614 47.6553 18.8682 47.3949 19.8447 46.874C20.8376 46.3369 21.6188 45.5475 22.1885 44.5059C22.7581 43.4479 23.043 42.154 23.043 40.624ZM58.2969 47.167V51H39.4736V47.167H58.2969ZM40.4258 15.4531V51H35.7139V15.4531H40.4258ZM55.8066 30.7363V34.5693H39.4736V30.7363H55.8066ZM58.0527 15.4531V19.3105H39.4736V15.4531H58.0527Z"
        fill="currentColor"
      />
      {/* Right */}
      <motion.path variants={edgeVariants(2)} d="M 64 65 v -64 h -19" />
      {/* Bottom left */}
      <motion.path variants={edgeVariants(2)} d="M 20 64 h -19 v -48" />
      {/* Bottom Right */}
      <motion.path variants={edgeVariants(1)} d="M 19 64 h 45" />
      {/* Left */}
      <motion.path variants={edgeVariants(2)} d="M 1 1 v 16" />
      {/* Top */}
      <motion.path variants={edgeVariants(2)} d="M 0 1 h 46" />
    </motion.svg>
  );
};

AnimatedIcon.defaultProps = {
  size: 50,
};

export default AnimatedIcon;
