import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CartList from "../CartList.jsx";

const mockCart = [
  {
    title: "banana",
    category: "groceries",
    image: "test.jpg",
    quantity: 5,
    price: 2.5,
    isDiscount: true,
    discountPercentage: 10,
    id: 1,
  },
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

describe("CartList component", () => {
  it("renders list with 3 products", () => {
    render(
      <MemoryRouter>
        <CartList cart={mockCart} />
      </MemoryRouter>,
    );

    const list = screen.getByRole("list");
    const listItemns = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItemns).toHaveLength(3);
  });
});
