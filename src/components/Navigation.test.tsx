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
  it("renders a button per route ending with the resume, then the toggle", () => {
    renderNav();
    const names = screen
      .getAllByRole("button")
      .map((button) => button.getAttribute("aria-label"));
    expect(names).toEqual([
      "Home",
      "Info",
      "Work",
      "Message",
      "Resume",
      "Toggle color mode",
    ]);
  });

  it("navigates to the resume page from the resume icon", async () => {
    const user = userEvent.setup();
    renderNav();
    await user.click(screen.getByRole("button", { name: "Resume" }));
    // findBy, not getBy: AnimatePresence mode="wait" defers the incoming page
    expect(await screen.findByText(/download resume/i)).toBeInTheDocument();
  });
});
