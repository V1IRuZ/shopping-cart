import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Outlet, RouterProvider, createMemoryRouter } from "react-router";
import Category from "../Category.jsx";
import ProductPage from "../ProductPage.jsx";
import userEvent from "@testing-library/user-event";

const mockCategory = [
  {
    title: "bed",
    description: "this bed is awesome",
    id: 1,
    isDiscount: true,
    discountPercentage: 10,
    price: 20,
    rating: 3,
    category: "furniture",
    thumbnail: "test.jpg",
    shippingInformation: "1-2 days",
    availabilityStatus: "In stock",
    reviews: [
      {
        reviewerName: "Jack",
        rating: 4,
        comment: "Very good",
      },
    ],
  },
  {
    title: "chair",
    description: "quality chair",
    id: 2,
    isDiscount: false,
    discountPercentage: 5,
    price: 10,
    rating: 4,
    category: "furniture",
    thumbnail: "test.jpg",
    shippingInformation: "3-4 days",
    availabilityStatus: "Low stock",
    reviews: [
      {
        reviewerName: "Will",
        rating: 5,
        comment: "Awesome",
      },
    ],
  },
  {
    title: "table",
    description: "sturdy table",
    id: 3,
    isDiscount: false,
    discountPercentage: 7,
    price: 30,
    rating: 5,
    category: "furniture",
    thumbnail: "test.jpg",
    shippingInformation: "1-2 weeks",
    availabilityStatus: "In stock",
    reviews: [
      {
        reviewerName: "Susan",
        rating: 3,
        comment: "Average",
      },
    ],
  },
];

const TestLayout = () => {
  return <Outlet context={{ data: mockCategory, cart: [] }} />;
};

const TestHome = () => {
  return <div>Home page</div>;
};

const TestShop = () => {
  return <div>Shop page</div>;
};

const mockRoutes = [
  {
    element: <TestLayout />,
    children: [
      {
        path: "/shop/:category",
        element: <Category />,
      },
      {
        path: "/",
        element: <TestHome />,
      },
      {
        path: "/shop",
        element: <TestShop />,
      },
      {
        path: "/shop/:category/:id",
        element: <ProductPage />,
      },
    ],
  },
];

describe("Category component", () => {
  it("renders list with 3 products", () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/shop/furniture"],
    });
    render(<RouterProvider router={router} />);

    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
  });

  it("link navigates to the home page correctly", async () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/shop/furniture"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /home/i });

    await user.click(link);

    expect(screen.getByText("Home page"));
  });

  it("link navigates to the shop page correctly", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/shop/furniture"],
    });

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /shop/i });

    await user.click(link);

    expect(screen.getByText("Shop page")).toBeInTheDocument();
  });

  it("link navigates to the product page correctly", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/shop/furniture"],
    });

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /table/i });

    await user.click(link);
    expect(screen.getByText("sturdy table")).toBeInTheDocument();
    expect(screen.getByText("1-2 weeks")).toBeInTheDocument();
    expect(screen.getByText("Average")).toBeInTheDocument();
  });
});
