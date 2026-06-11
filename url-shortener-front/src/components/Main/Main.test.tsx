import { render, screen } from "@/test-utils";
import { Main } from "./Main";

describe("Main component", () => {
  it("renders the URL shortener form", () => {
    render(<Main />);
    expect(
      screen.getByPlaceholderText("Paste a long URL to shorten"),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Shorten" })).toBeInTheDocument();
  });
});
