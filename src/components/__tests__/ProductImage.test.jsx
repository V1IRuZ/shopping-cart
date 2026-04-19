import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductImage from "../ProductImage.jsx";

const mockProductWithDiscount = {
  thumbnail: "test.jpg",
  isDiscount: true,
  discountPercentage: 13,
};

const mockProductWithNormalPrice = {
  thumbnail: "test.jpg",
  isDiscount: false,
  discountPercentage: 25,
};

describe("ProductImage component", () => {
  it("renders image with discount sign", () => {
    render(<ProductImage product={mockProductWithDiscount} />)

    const image = document.querySelector("img");

    expect(image).toHaveAttribute("src", "test.jpg");
    expect(screen.getByText("-13%")).toBeInTheDocument();
  });

  it("does not render a discount sign for a regular-priced product", () => {
    render(<ProductImage product={mockProductWithNormalPrice} />);

    expect(screen.queryByText("-25%")).not.toBeInTheDocument();
  })
});
