import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Product from "../Product.jsx";
import { ShopContext } from "../../../context/ShopContext.js";

const mockProduct = {
  title: "dreamy",
  description: "this bed is awesome",
  id: 1,
  isDiscount: true,
  discountPercentage: 10,
  price: 20,
  rating: 4.2,
  category: "furniture",
  thumbnail: "test.jpg",
  shippingInformation: "1-2 days",
  availabilityStatus: "In Stock",
  reviews: [
    {
      reviewerName: "Jack",
      rating: 4,
      comment: "Very good",
    },
  ],
};

const mockCart = [
  {
    title: "dreamy",
    id: 1,
    isDiscount: true,
    discountPercentage: 10,
    category: "furniture",
    image: "test.jpg",
    price: 20,
    quantity: 3,
  },
];

describe("Product component", () => {
  it("renders basic product details", () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} cart={[]} />
      </MemoryRouter>,
    );

    expect(screen.getByText("dreamy")).toBeInTheDocument();
    expect(screen.getByText("this bed is awesome")).toBeInTheDocument();
    expect(screen.getByText("-10%")).toBeInTheDocument();
    expect(screen.getByText("1-2 days")).toBeInTheDocument();
    expect(screen.getByText("In Stock")).toBeInTheDocument();
  });

  it("renders price correctly", () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} cart={[]} />
      </MemoryRouter>,
    );

    //discount
    expect(screen.getByText(/18/i)).toBeInTheDocument();

    //regular
    expect(screen.getByText(/20/i)).toBeInTheDocument();
  });

  it("renders comment", () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} cart={[]} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Jack")).toBeInTheDocument();
    expect(screen.getByText("Very good")).toBeInTheDocument();
    expect(screen.getByText("(4)")).toBeInTheDocument();
  });

  it("render a working button if cart does not have product", async () => {
    const user = userEvent.setup();
    const dispatchCart = vi.fn();

    render(
      <MemoryRouter>
        <Product product={mockProduct} cart={[]} dispatchCart={dispatchCart} />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", { name: /add to cart/i });

    await user.click(button);

    expect(dispatchCart).toHaveBeenCalled();
  });

  it("renders increment and decrement buttons if cart has product", () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} cart={mockCart} />
      </MemoryRouter>,
    );

    const incrementBtn = screen.getByRole("button", { name: "increment" });
    const decrementBtn = screen.getByRole("button", { name: "decrement" });

    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();
  });

  it("renders remove button if cart has product", () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} cart={mockCart} />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", { name: "remove" });

    expect(button).toBeInTheDocument();
  });

  it("renders input with current quantity value if cart has product", () => {
    render(
      <MemoryRouter>
        <Product product={mockProduct} cart={mockCart} />
      </MemoryRouter>,
    );

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("3");
  });
});
