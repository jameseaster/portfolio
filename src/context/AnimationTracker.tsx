// Imports
import React, { useContext, useReducer, Dispatch } from "react";
import { ACTIONS } from "../utils/constants";

// Types
interface InitialState {
  home: boolean;
  // info: boolean;
  // contact: boolean;
  // projects: boolean;
}

interface Action {
  type: string;
  payload: { [key: string]: boolean };
}

// Initial state values for animation tracker
const initialState = {
  home: false,
  // info: false,
  // contact: false,
  // projects: false,
};

// Create animation tracker context
const AnimationTrackerContext = React.createContext<{
  animationTracker: InitialState;
  dispatchAnimationTracker: Dispatch<Action>;
}>({
  animationTracker: initialState,
  dispatchAnimationTracker: () => null,
});

// Reducer to update animation tracker context values
const reducer = (state: InitialState, action: Action) => {
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
    initialState
  );

  return (
    <AnimationTrackerContext.Provider
      value={{ animationTracker, dispatchAnimationTracker }}
    >
      {children}
    </AnimationTrackerContext.Provider>
  );
};

/**
 * Hook that returns the Provider's value in a functional component.
 */
export const useAnimationTracker = () => useContext(AnimationTrackerContext);
