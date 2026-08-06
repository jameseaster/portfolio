import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";
import AnimatedRoutes from "./Routes";
import { renderWithProviders } from "../test-utils";

// Navigation only renders links; pairing it with the routes lets a click be
// asserted by the page it lands on.
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
    // Home, Info, Work, Contact, Resume. The color mode switch has the "switch"
    // role rather than "button", so it is not counted here.
    expect(screen.getAllByRole("button")).toHaveLength(5);
  });

  it("navigates to the resume page from the last icon", async () => {
    const user = userEvent.setup();
    renderNav();
    const icons = screen.getAllByRole("button");
    await user.click(icons[icons.length - 1]);
    // findBy, not getBy: AnimatePresence mode="wait" holds the outgoing page
    // until its exit animation finishes before mounting the new one.
    expect(await screen.findByText(/download resume/i)).toBeInTheDocument();
  });

  it("renders the color mode switch outside the icon row", () => {
    renderNav();
    expect(
      screen.getByRole("switch", { name: /toggle color mode/i }),
    ).toBeInTheDocument();
  });
});
