import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import FreshGroceriesSection from "../FreshGroceriesSection.jsx";

describe("FreshGroceriesSection component", () => {
  it("renders banner text", () => {
    render(
      <MemoryRouter>
        <FreshGroceriesSection />
      </MemoryRouter>,
    );

    expect(screen.getByText(/we offer only fresh and tasty vegetables/i));
  });

  it("renders image", () => {
    render(
      <MemoryRouter>
        <FreshGroceriesSection />
      </MemoryRouter>,
    );

    const image = screen.getByRole("img", { name: /vegetables/i });

    expect(image).toBeInTheDocument();
  });

  it("link redirects to the right page", () => {
    render(
      <MemoryRouter>
        <FreshGroceriesSection />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/shop/groceries");
  });

  it("link has focus", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <FreshGroceriesSection/>
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    await user.tab();

    expect(link).toHaveFocus();
  });
});
