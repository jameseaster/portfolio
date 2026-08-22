import { render, screen } from "@testing-library/react";
import App from "../App";

/** Renders the app at a given browser path, since App owns its Router. */
const renderAt = (path: string) => {
  window.history.pushState({}, "", path);
  return render(<App />);
};

describe("the print route", () => {
  afterEach(() => window.history.pushState({}, "", "/"));

  it("renders the resume document", () => {
    renderAt("/resume/print");
    expect(screen.getByText("James Easter")).toBeInTheDocument();
    expect(screen.getByText("Digital Bazaar")).toBeInTheDocument();
  });

  // App chrome in the PDF would be a defect, so assert its absence
  it("renders no navigation or color mode toggle", () => {
    renderAt("/resume/print");
    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });

  it("omits interests from the ATS variant", () => {
    renderAt("/resume/print?v=ats");
    expect(screen.queryByText("Interests")).not.toBeInTheDocument();
  });

  it("keeps interests on the styled variant", () => {
    renderAt("/resume/print");
    expect(screen.getByText("Interests")).toBeInTheDocument();
  });

  it("narrows the document to a role variant", () => {
    renderAt("/resume/print?variant=corporate");
    expect(screen.queryByText(/Leverstack/)).not.toBeInTheDocument();
    // Its client work must resurface rather than vanish with the employer
    expect(screen.getByText("Selected Projects")).toBeInTheDocument();
    expect(screen.getByText("Winterfest Mobile App")).toBeInTheDocument();
  });

  it("still renders the full app on a normal route", () => {
    renderAt("/resume");
    expect(
      screen.getByRole("button", { name: /toggle color mode/i }),
    ).toBeInTheDocument();
  });
});
