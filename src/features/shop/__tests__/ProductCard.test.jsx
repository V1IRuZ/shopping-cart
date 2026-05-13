import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import ProductCard from "../ProductCard.jsx";

const mockData = {
  title: "milk",
  id: 23,
  category: "groceries",
  rating: 4.1,
  price: 23.2,
  isDiscount: true,
  discountPercentage: 10,
  thumbnail: "test.jpg",
};

describe("ProductCard component", () => {
  it("renders the product card", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockData} />
      </MemoryRouter>,
    );

    const card = screen.getByRole("listitem");

    expect(card).toBeInTheDocument();
  });

  it("renders product details", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockData} />
      </MemoryRouter>,
    );

    expect(screen.getByText("milk")).toBeInTheDocument();
    expect(screen.getByText("-10%")).toBeInTheDocument();
    expect(screen.getByText(/20.88/i)).toBeInTheDocument();
    expect(screen.getByText(/23.2/i)).toBeInTheDocument();
    expect(screen.getByText("(4.1)")).toBeInTheDocument();
  });

  it("renders a working button", async () => {
    const user = userEvent.setup();
    const onAddtoCart = vi.fn();

    render(
      <MemoryRouter>
        <ProductCard onAddtoCart={onAddtoCart} product={mockData} />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", { name: /add to cart/i });

    expect(button).toBeInTheDocument();

    await user.click(button);

    expect(onAddtoCart).toHaveBeenCalled();
  });

  it("link redirects to the right page", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockData} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/shop/groceries/23");
  });

  it("changes focus from link to button", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <ProductCard product={mockData} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");
    const button = screen.getByRole("button", { name: /add to cart/i });

    await user.tab();

    expect(link).toHaveFocus();

    await user.tab();

    expect(button).toHaveFocus();
  });
});
