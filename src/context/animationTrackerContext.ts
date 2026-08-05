import { createContext, useContext, Dispatch } from "react";

// Types
export interface AnimationTrackerState {
  home: boolean;
}

export interface AnimationTrackerAction {
  type: string;
  payload: { [key: string]: boolean };
}

// Initial state values for animation tracker
export const initialAnimationTracker: AnimationTrackerState = {
  home: false,
};

// Animation tracker context, shared by the provider and the hook below
export const AnimationTrackerContext = createContext<{
  animationTracker: AnimationTrackerState;
  dispatchAnimationTracker: Dispatch<AnimationTrackerAction>;
}>({
  animationTracker: initialAnimationTracker,
  dispatchAnimationTracker: () => null,
});

// Hook that returns the provider's value in a functional component
export const useAnimationTracker = () => useContext(AnimationTrackerContext);
