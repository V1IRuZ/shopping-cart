import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import DiscountSection from "../DiscountSection.jsx";

const mockData = [
  {
    title: "cat food",
    id: 1,
    isDiscount: true,
    discountPercentage: 6,
    thumbnail: "test.jpg",
    category: "groceries",
    rating: 4.1,
  },
  {
    title: "bed",
    id: 2,
    isDiscount: false,
    discountPercentage: 12,
    thumbnail: "test.jpg",
    category: "furniture",
    rating: 4.2,
  },
  {
    title: "perfume",
    id: 3,
    isDiscount: true,
    discountPercentage: 2,
    thumbnail: "test.jpg",
    category: "fragrances",
    rating: 3.9,
  },
  {
    title: "apple",
    id: 4,
    isDiscount: true,
    discountPercentage: 5,
    thumbnail: "test.jpg",
    category: "groceries",
    rating: 2.7,
  },
  {
    title: "mirror",
    id: 5,
    isDiscount: false,
    discountPercentage: 10,
    thumbnail: "test.jpg",
    category: "furniture",
    rating: 4.0,
  },
];

describe("DiscountSection component", () => {
  it("renders header", () => {
    render(
      <MemoryRouter>
        <DiscountSection data={mockData} />
      </MemoryRouter>,
    );

    expect(screen.getByText("THIS WEEKS DISCOUNTS")).toBeInTheDocument();
  });

  it("renders a list of discounted products", () => {
    render(
      <MemoryRouter>
        <DiscountSection data={mockData} />
      </MemoryRouter>,
    );

    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
  });

  it("does not render normal priced products", () => {
    render(
      <MemoryRouter>
        <DiscountSection data={mockData} />
      </MemoryRouter>,
    );

    expect(screen.queryByText("bed")).not.toBeInTheDocument();
    expect(screen.queryByText("mirror")).not.toBeInTheDocument();
  });
});
