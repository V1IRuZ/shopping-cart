import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import CategoryCard from "../CategoryCard.jsx";

const mockProduct = {
  title: "bed",
  description: "this bed is awesome",
  id: 1,
  isDiscount: true,
  discountPercentage: 10,
  price: 20,
  rating: 3,
  category: "furniture",
};

describe("CategoryCard component", () => {
  it("should render product details", () => {
    render(
      <MemoryRouter>
        <CategoryCard product={mockProduct} />
      </MemoryRouter>,
    );

    expect(screen.getByText("bed")).toBeInTheDocument();
    expect(screen.getByText("this bed is awesome")).toBeInTheDocument();
    expect(screen.getByText("-10%")).toBeInTheDocument();
    expect(screen.getByText(/20/i)).toBeInTheDocument();
    expect(screen.getByText(/18/i)).toBeInTheDocument();
  });

  it("link redirects to the right page", () => {
    render(
      <MemoryRouter>
        <CategoryCard product={mockProduct} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/shop/furniture/1");
  });

  it("button is called", async () => {
    const user = userEvent.setup();
    const handleAddToCart = vi.fn();

    render(
      <MemoryRouter>
        <CategoryCard product={mockProduct} handleAddToCart={handleAddToCart} />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", { name: /add to cart/i });

    await user.click(button);

    expect(handleAddToCart).toHaveBeenCalled();
  });

  it("link receives focus from tab", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <CategoryCard product={mockProduct} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    await user.tab();

    expect(link).toHaveFocus();
  });
});
