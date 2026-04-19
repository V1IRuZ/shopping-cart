import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Price from "../Price.jsx";

const mockProductWithDiscount = {
  price: 100,
  isDiscount: true,
  discountPercentage: 10,
};

const mockProductWithNormalPrice = {
  price: 60,
  isDiscount: false,
  discountPercentage: 20,
};

describe("Price component", () => {
  it("renders discount with regular price", () => {
    render(
      <Price product={mockProductWithDiscount} className="product-price" />,
    );

    expect(screen.getByText("90.00$")).toBeInTheDocument();
    expect(screen.getByText("100$")).toBeInTheDocument();
  });

  it("renders only the discount for a product that is on sale", () => {
    render(
      <Price product={mockProductWithNormalPrice} className="product-price" />,
    );

    expect(screen.getByText("60$")).toBeInTheDocument();
    expect(screen.queryByText("48.00$")).not.toBeInTheDocument();
  });
});
