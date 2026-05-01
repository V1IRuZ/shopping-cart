import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "../Checkout.jsx";

const mockCart = [
  {
    title: "table",
    category: "furniture",
    image: "test.jpg",
    quantity: 2,
    price: 100,
    isDiscount: false,
    discountPercentage: 20,
    id: 2,
  },
  {
    title: "sofa",
    category: "furniture",
    image: "test.jpg",
    quantity: 1,
    price: 500,
    isDiscount: false,
    discountPercentage: 10,
    id: 3,
  },
];

describe("Checkout component", () => {
  it("displays total sum of the cart", () => {
    render(<Checkout cart={mockCart} />);

    expect(screen.getByText("700.00 $")).toBeInTheDocument();
  });

  it("renders button", () => {
    render(<Checkout cart={mockCart} />);

    const button = screen.getByRole("button", { name: /proceed to checkout/i });

    expect(button).toBeInTheDocument();
  });

  it("button is called", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Checkout cart={mockCart} onClick={onClick} />);

    const button = screen.getByRole("button", { name: /proceed to checkout/i });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
