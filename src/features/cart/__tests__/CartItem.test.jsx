import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import CartItem from "../CartItem.jsx";

const mockProduct = {
  title: "banana",
  category: "groceries",
  image: "test.jpg",
  quantity: 5,
  price: 2.5,
  isDiscount: true,
  discountPercentage: 10,
  id: 1,
};

describe("CartItem component", () => {
  it("renders product title", () => {
    render(
      <MemoryRouter>
        <CartItem product={mockProduct} />
      </MemoryRouter>,
    );

    expect(screen.getByText("banana")).toBeInTheDocument();
  });

  it("calculates the total sum of products", () => {
    render(
      <MemoryRouter>
        <CartItem product={mockProduct} />
      </MemoryRouter>,
    );

    expect(screen.getByText("11.25$")).toBeInTheDocument();
  });

  it("displays number of products value in input", () => {
    render(
      <MemoryRouter>
        <CartItem product={mockProduct} />
      </MemoryRouter>,
    );

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("5");
  });

  it("link redirects to product page", () => {
    render(
      <MemoryRouter>
        <CartItem product={mockProduct} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/shop/groceries/1");
  });

  it("link receives focus", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <CartItem product={mockProduct} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    await user.tab();

    expect(link).toHaveFocus();
  });
});
