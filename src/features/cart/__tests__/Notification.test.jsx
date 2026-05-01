import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Notification from "../Notification.jsx";

const mockCart = [
  {
    title: "Shirt",
    quantity: 4,
    id: 1,
    image: "test.jpg",
  },
  {
    title: "Kiwi",
    quantity: 10,
    id: 2,
    image: "test.jpg",
  },
  {
    title: "Chair",
    quantity: 2,
    id: 3,
    image: "test.jpg",
  },
];

describe("Notification component", () => {
  it("displays the product added to the cart", () => {
    render(
      <MemoryRouter>
        <Notification currentProductId={2} cart={mockCart} />
      </MemoryRouter>,
    );

    expect(screen.getByText(/kiwi/i)).toBeInTheDocument();
    expect(screen.getByText(/10/i)).toBeInTheDocument();
  });

  it("does not display other items in the notification", () => {
    render(
      <MemoryRouter>
        <Notification currentProductId={2} cart={mockCart} />
      </MemoryRouter>,
    );

    expect(screen.queryByText(/chair/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/shirt/i)).not.toBeInTheDocument();
  });

  it("link redirects to shopping cart", () => {
    render(
      <MemoryRouter>
        <Notification currentProductId={2} cart={mockCart} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/cart");
  });
});
