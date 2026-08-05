import { screen } from "@testing-library/react";
import AnimatedRoutes from "./components/Routes";
import { renderWithProviders } from "./test-utils";

// A representative, stable piece of content rendered by each route.
const routes: Array<{ path: string; expected: RegExp }> = [
  { path: "/", expected: /development/i },
  { path: "/info", expected: /james easter/i },
  { path: "/work", expected: /navportal/i },
  { path: "/contact", expected: /send/i },
  { path: "/resume", expected: /view resume/i },
];

describe("AnimatedRoutes", () => {
  it.each(routes)("renders the $path route", ({ path, expected }) => {
    renderWithProviders(<AnimatedRoutes />, { route: path });
    expect(screen.getByText(expected)).toBeInTheDocument();
  });
});
