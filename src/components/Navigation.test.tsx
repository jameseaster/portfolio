import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";
import AnimatedRoutes from "./Routes";
import { renderWithProviders } from "../test-utils";

// Paired with the routes so a click can be asserted by the page it lands on
const renderNav = () =>
  renderWithProviders(
    <>
      <Navigation />
      <AnimatedRoutes />
    </>,
  );

describe("Navigation", () => {
  it("renders one button per route, ending with the resume", () => {
    renderNav();
    // The color mode switch has the "switch" role, so it is not counted
    expect(screen.getAllByRole("button")).toHaveLength(5);
  });

  it("navigates to the resume page from the last icon", async () => {
    const user = userEvent.setup();
    renderNav();
    const icons = screen.getAllByRole("button");
    await user.click(icons[icons.length - 1]);
    // findBy, not getBy: AnimatePresence mode="wait" defers the incoming page
    expect(await screen.findByText(/download resume/i)).toBeInTheDocument();
  });

  it("renders the color mode switch outside the icon row", () => {
    renderNav();
    expect(
      screen.getByRole("switch", { name: /toggle color mode/i }),
    ).toBeInTheDocument();
  });
});
