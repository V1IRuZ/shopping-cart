import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import ShopPath from "../ShopPath.jsx";

describe("ShopPath component", () => {
  it("renders home link", () => {
    render(
      <MemoryRouter>
        <ShopPath />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: /home/i });

    expect(link).toHaveAttribute("href", "/");
  });

  it("renders shop link", () => {
    render(
      <MemoryRouter>
        <ShopPath />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: /shop/i });

    expect(link).toHaveAttribute("href", "/shop");
  });

  it("changes link focus correctly with tab", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <ShopPath />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    const shopLink = screen.getByRole("link", { name: /shop/i });

    await user.tab();

    expect(homeLink).toHaveFocus();

    await user.tab();

    expect(shopLink).toHaveFocus();
  });
});
