import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CategorySection from "../CategorySection.jsx";

const mockData = [
  {
    title: "milk",
    id: 23,
    category: "groceries",
    rating: 4.1,
    price: 23.2,
    isDiscount: true,
    discountPercentage: 10,
    thumbnail: "test.jpg",
  },
  {
    title: "apple",
    id: 2,
    category: "groceries",
    rating: 3.1,
    price: 5,
    isDiscount: false,
    discountPercentage: 12,
    thumbnail: "test.jpg",
  },
  {
    title: "pineapple",
    id: 6,
    category: "groceries",
    rating: 2.1,
    price: 9,
    isDiscount: false,
    discountPercentage: 5,
    thumbnail: "test.jpg",
  },
];

describe("CategorySection component", () => {
  it("renders header text", () => {
    render(
      <MemoryRouter>
        <CategorySection
          category={mockData}
          headerText="This is awesome header!"
          sectionClassName="groceries"
        />
      </MemoryRouter>,
    );

    expect(screen.getByText("This is awesome header!")).toBeInTheDocument();
  });

  it("renders list with 3 items", () => {
    render(
      <MemoryRouter>
        <CategorySection
          category={mockData}
          headerText="This is awesome header!"
          sectionClassName="groceries"
        />
      </MemoryRouter>,
    );

    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
  });
});
