import { createContext, useContext } from "react";

// Color mode context, shared by the provider and the hook below
export const ColorModeContext = createContext({ toggle: () => {} });

// Hook that returns the provider's value in a functional component
export const useColorMode = () => useContext(ColorModeContext);
