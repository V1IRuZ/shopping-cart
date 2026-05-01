import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import EmptyCart from "../EmptyCart.jsx";

describe("EmptyCart component", () => {
  it("renders text", () => {
    render(
      <MemoryRouter>
        <EmptyCart />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(/your shopping cart is empty/i),
    ).toBeInTheDocument();
  });

  it("link redirects to shop", () => {
    render(
      <MemoryRouter>
        <EmptyCart />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/shop");
  });
});