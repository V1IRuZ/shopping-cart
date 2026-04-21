import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import CategoryNavigation from "../CategoryNavigation.jsx";

describe("CategoryNavigation component", () => {
  it("renders each category link", () => {
    render(
      <MemoryRouter>
        <CategoryNavigation />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /beauty/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /fragrances/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /furniture/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /groceries/i }),
    ).toBeInTheDocument();
  });

  it("each link leads to the right page", () => {
    render(
      <MemoryRouter>
        <CategoryNavigation />
      </MemoryRouter>,
    );

    const beautyLink = screen.getByRole("link", { name: /beauty/i });
    const fragrancesLink = screen.getByRole("link", { name: /fragrances/i });
    const furnitureLink = screen.getByRole("link", { name: /furniture/i });
    const groceriesLink = screen.getByRole("link", { name: /groceries/i });

    expect(beautyLink).toHaveAttribute("href", "/shop/beauty");
    expect(fragrancesLink).toHaveAttribute("href", "/shop/fragrances");
    expect(furnitureLink).toHaveAttribute("href", "/shop/furniture");
    expect(groceriesLink).toHaveAttribute("href", "/shop/groceries");
  });

  it("changes focus in the correct order", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <CategoryNavigation />
      </MemoryRouter>,
    );

    const beautyLink = screen.getByRole("link", { name: /beauty/i });
    const fragrancesLink = screen.getByRole("link", { name: /fragrances/i });
    const furnitureLink = screen.getByRole("link", { name: /furniture/i });
    const groceriesLink = screen.getByRole("link", { name: /groceries/i });

    await user.tab();
    expect(beautyLink).toHaveFocus();

    await user.tab();
    expect(fragrancesLink).toHaveFocus();

    await user.tab();
    expect(furnitureLink).toHaveFocus();

    await user.tab();
    expect(groceriesLink).toHaveFocus();
  });
});
