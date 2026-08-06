import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("mounts without crashing and renders the home page", () => {
    render(<App />);
    // Home page content (rendered at the default "/" route)
    expect(screen.getByText("Development")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });

  it("toggles the color mode without crashing", async () => {
    const user = userEvent.setup();
    render(<App />);
    const toggle = screen.getByRole("switch", { name: /toggle color mode/i });
    await user.click(toggle);
    // The app is still rendered after toggling the theme
    expect(screen.getByText("Development")).toBeInTheDocument();
  });
});
