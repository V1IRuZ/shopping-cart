import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TotalPrice from "../TotalPrice.jsx";

const mockCart = [
  {
    title: "chair",
    quantity: 4,
    isDiscount: true,
    discountPercentage: 10,
    price: 20.00,
  },
  {
    title: "table",
    quantity: 3,
    isDiscount: false,
    discountPercentage: 6,
    price: 50.50,
  },
  {
    title: "bed",
    quantity: 1,
    isDiscount: false,
    discountPercentage: 16,
    price: 1199.99,
  },
];

describe("TotalPrice component", () => {
  it("renders total text", () => {
    render(<TotalPrice cart={mockCart} />);

    expect(screen.getByText(/total/i)).toBeInTheDocument();
  });

  it("correctly calculates the total price of the products in the shopping cart", () => {
    render(<TotalPrice cart={mockCart} />)

    expect(screen.getByText("1423.49 $")).toBeInTheDocument();
  })
});
