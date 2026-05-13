import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CartLink from "../CartLink.jsx";
import { ShopContext } from "../../../context/ShopContext.js";

const mockCart = [
  {
    title: "Shirt",
    quantity: 4,
    id: 1,
    image: "test.jpg",
  },
  {
    title: "Kiwi",
    quantity: 10,
    id: 2,
    image: "test.jpg",
  },
  {
    title: "Chair",
    quantity: 2,
    id: 3,
    image: "test.jpg",
  },
];

describe("CartLink component", () => {
  it("displays the number of products in the shopping cart", () => {
    render(
      <MemoryRouter>
        <ShopContext
          value={{
            cart: mockCart,
            showNotification: false,
            currentProductId: 1,
          }}
        >
          <CartLink />
        </ShopContext>
      </MemoryRouter>,
    );

    expect(screen.getByText(/16/i)).toBeInTheDocument();
  });

  it("link directs to cart", () => {
    render(
      <MemoryRouter>
        <ShopContext
          value={{
            cart: mockCart,
            showNotification: false,
            currentProductId: 1,
          }}
        >
          <CartLink />
        </ShopContext>
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/cart");
  });

  it("displays notification", () => {
    render(
      <MemoryRouter>
        <ShopContext
          value={{
            cart: mockCart,
            showNotification: true,
            currentProductId: 3,
          }}
        >
          <CartLink />
        </ShopContext>
      </MemoryRouter>,
    );

    expect(screen.getByText(/chair/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });

  it("doest not display notification while not active", () => {
    render(
      <MemoryRouter>
        <ShopContext
          value={{
            cart: mockCart,
            showNotification: false,
            currentProductId: 3,
          }}
        >
          <CartLink />
        </ShopContext>
      </MemoryRouter>,
    );

    expect(screen.queryByText(/chair/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/2/i)).not.toBeInTheDocument();
  });
});
