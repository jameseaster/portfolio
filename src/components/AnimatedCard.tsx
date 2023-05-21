// Imports
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { SxProps, useTheme } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { useAnimationTracker } from "../context/AnimationTracker";

// Types
export interface AnimatedCardProps {
  sx: SxProps;
  duration?: number;
  elevation?: number;
  children: React.ReactNode;
}

/**
 * AnimatedCard
 */
const AnimatedCard: React.FC<AnimatedCardProps> = ({
  sx,
  children,
  duration = 1.5,
  elevation = 24,
}) => {
  // Style
  const theme = useTheme();

  // Global State
  const {
    animationTracker: { home },
  } = useAnimationTracker();

  // Local State
  const [localElevation, setLocalElevation] = useState(home ? elevation : 0);

  // Update elevation
  useEffect(() => {
    setLocalElevation(elevation);
  }, [elevation]);

  return (
    <Card
      elevation={localElevation}
      sx={{
        p: 2,
        "&:last-child": { pb: 0 },
        color: theme.typography.body1.color,
        transition: `all ease-in-out ${duration}s`,
        ...sx,
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default AnimatedCard;
