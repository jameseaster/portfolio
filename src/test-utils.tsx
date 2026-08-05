import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ColorModeProvider from "./context/ColorMode";
import { AnimationTrackerProvider } from "./context/AnimationTracker";

/**
 * Render a component inside the app's provider stack (color mode + animation
 * tracker) with a MemoryRouter, so route-aware components can be tested at a
 * given path without a real browser history.
 */
export function renderWithProviders(
  ui: React.ReactElement,
  { route = "/" }: { route?: string } = {},
) {
  return render(
    <ColorModeProvider>
      <AnimationTrackerProvider>
        <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
      </AnimationTrackerProvider>
    </ColorModeProvider>,
  );
}
