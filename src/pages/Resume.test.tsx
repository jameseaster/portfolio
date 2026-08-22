import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Resume from "./Resume";
import { renderWithProviders } from "../test-utils";

describe("the resume page", () => {
  it("offers the styled PDF and the ATS version behind one control", async () => {
    renderWithProviders(<Resume />, { route: "/resume" });

    await userEvent.click(
      screen.getByRole("button", { name: /download resume/i }),
    );

    expect(
      screen.getByRole("menuitem", { name: "Styled PDF" }),
    ).toHaveAttribute("href", "/James-Easter-Resume.pdf");
    expect(
      screen.getByRole("menuitem", { name: "ATS version" }),
    ).toHaveAttribute("href", "/James-Easter-Resume-ATS.pdf");
  });

  it("keeps the downloads closed until the control is used", () => {
    renderWithProviders(<Resume />, { route: "/resume" });
    expect(screen.queryByRole("menuitem")).not.toBeInTheDocument();
  });
});
