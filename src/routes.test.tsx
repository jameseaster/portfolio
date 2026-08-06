import { screen } from "@testing-library/react";
import AnimatedRoutes from "./components/Routes";
import { renderWithProviders } from "./test-utils";

// A representative, stable piece of content rendered by each route.
const routes: Array<{ path: string; expected: RegExp }> = [
  { path: "/", expected: /development/i },
  { path: "/info", expected: /james easter/i },
  { path: "/work", expected: /navportal/i },
  { path: "/contact", expected: /send/i },
  // The <object> fallback link; jsdom keeps fallback children in the DOM.
  // Deliberately not /resume/i, which would also match the page title.
  { path: "/resume", expected: /download resume/i },
];

describe("AnimatedRoutes", () => {
  it.each(routes)("renders the $path route", ({ path, expected }) => {
    renderWithProviders(<AnimatedRoutes />, { route: path });
    expect(screen.getByText(expected)).toBeInTheDocument();
  });
});
