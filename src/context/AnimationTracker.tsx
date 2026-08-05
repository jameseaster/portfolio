// Imports
import React, { useReducer } from "react";
import { ACTIONS } from "../utils/constants";
import {
  AnimationTrackerContext,
  AnimationTrackerState,
  AnimationTrackerAction,
  initialAnimationTracker,
} from "./animationTrackerContext";

// Reducer to update animation tracker context values
const reducer = (
  state: AnimationTrackerState,
  action: AnimationTrackerAction,
) => {
  switch (action.type) {
    case ACTIONS.UPDATE_ANIMATION_TRACKER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

/**
 * Provides animation tracker to app
 */
export const AnimationTrackerProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [animationTracker, dispatchAnimationTracker] = useReducer(
    reducer,
    initialAnimationTracker,
  );

  return (
    <AnimationTrackerContext.Provider
      value={{ animationTracker, dispatchAnimationTracker }}
    >
      {children}
    </AnimationTrackerContext.Provider>
  );
};
