import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import PathNavigation from "../PathNavigation.jsx";
import Category from "../../../pages/Category.jsx";

const mockProduct = {
  title: "banana",
  category: "groceries",
  id: 1,
};

describe("PathNavigation component", () => {
  it("renders home link correcly", () => {
    render(
      <MemoryRouter>
        <PathNavigation product={mockProduct} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: /home/i });

    expect(link).toHaveAttribute("href", "/");
  });

  it("render shop link correctly", () => {
    render(
      <MemoryRouter>
        <PathNavigation product={mockProduct} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: /shop/i });

    expect(link).toHaveAttribute("href", "/shop");
  });

  it("renders formatted category name", () => {
    render(
      <MemoryRouter>
        <PathNavigation product={mockProduct} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: "Groceries" });

    expect(link).toBeInTheDocument();
  });

  it("category link redirects to the right page", () => {
    render(
      <MemoryRouter>
        <PathNavigation product={mockProduct} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: /groceries/i });

    expect(link).toHaveAttribute("href", "/shop/groceries");
  });

  it("swiches focus between links", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <PathNavigation product={mockProduct} />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    const shopLink = screen.getByRole("link", { name: /shop/i });
    const groceriesLink = screen.getByRole("link", { name: /groceries/i });

    await user.tab();
    expect(homeLink).toHaveFocus();

    await user.tab();
    expect(shopLink).toHaveFocus();

    await user.tab();
    expect(groceriesLink).toHaveFocus();
  });
});
