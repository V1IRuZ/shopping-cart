import { expect, it, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import FurnitureSection from "../FurnitureSection.jsx";

describe("FurnitureSection component", () => {
  it("renders banner text", () => {
    render(
      <MemoryRouter>
        <FurnitureSection />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(
        "DO YOU NEED INSPIRATION FOR YOUR INTERIOR DESIGN? CHECK OUT OUR FURNITURE SECTION FOR HIGH-QUALITY AND AFFORDABLE PRODUCTS!",
      ),
    ).toBeInTheDocument();
  });

  it("renders image", () => {
    render(
      <MemoryRouter>
        <FurnitureSection />
      </MemoryRouter>,
    );

    const image = screen.getByRole("img", "furniture");

    expect(image).toBeInTheDocument();
  });

  it("link redirects to the right page", () => {
    render(
      <MemoryRouter>
        <FurnitureSection />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/shop/furniture");
  });

  it("link has focus", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <FurnitureSection />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    await user.tab();

    expect(link).toHaveFocus();
  });
});
