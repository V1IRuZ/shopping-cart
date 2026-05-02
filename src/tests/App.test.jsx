import { describe, expect, it, vi } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import routes from "../routes.jsx";
import { testCart, testData } from "./test-data.js";
import App from "../App.jsx";

vi.mock("../hooks/useProductsData.js", () => ({
  useProductData: () => ({
    data: testData,
    loading: false,
    error: null,
  }),
}));

vi.mock("../hooks/useCart.js", () => ({
  useCart: () => ({
    cart: testCart,
    handleAddToCart: vi.fn(),
    setCart: vi.fn(),
    showNotification: false,
    currentProductId: null,
  }),
}));

describe("Main navigation", () => {
  it("shop link redirects to the shop page", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /shop/i });

    await user.click(link);

    expect(screen.getByText("THIS WEEK'S DISCOUNTS!")).toBeInTheDocument();
    expect(screen.getByText("BEAUTY PRODUCTS")).toBeInTheDocument();
    expect(screen.getByText("FOR INTERIOR DESIGN")).toBeInTheDocument();
  });

  it("cart link redirects to the cart page", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /cart/i });

    await user.click(link);

    expect(screen.getByText(/There are/i)).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText(/products in your cart/i)).toBeInTheDocument();
  });

  it("WebMarket logo redirects to the home page", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /web/i });

    await user.click(link);

    expect(screen.getByText(/FAST AND RELIABLE DELIVERY/i)).toBeInTheDocument();
  });
});

describe("Home component", () => {
  it("in the weekly discounts section, the product card redirects to the product page", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /bed/i });

    await user.click(link);

    expect(screen.getByText("this bed is awesome")).toBeInTheDocument();
    expect(screen.getByText("Very good")).toBeInTheDocument();
    expect(screen.getByText("1-2 days")).toBeInTheDocument();
  });

  it("groceries section link redirects to the groceries category", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", {
      name: /WE OFFER ONLY FRESH AND TASTY VEGETABLES/i,
    });

    await user.click(link);

    expect(screen.getByText("apple")).toBeInTheDocument();
    expect(screen.getByText("potato")).toBeInTheDocument();
    expect(screen.queryByText("bed")).not.toBeInTheDocument();
  });

  it("furniture section link redirects to the furniture category", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", {
      name: /interior design/i,
    });

    await user.click(link);

    expect(screen.getByText("bed")).toBeInTheDocument();
    expect(screen.getByText("table")).toBeInTheDocument();
    expect(screen.queryByText("apple")).not.toBeInTheDocument();
  });
});

describe("Shop component", () => {
  it("beauty link redirects to the beauty category", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /beauty/i });

    await user.click(link);

    expect(screen.getByText(/lipstick/i)).toBeInTheDocument();
    expect(screen.getByText(/red nail polish/i)).toBeInTheDocument();
  });

  it("furniture link redirects to the furniture category", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /furniture/i });

    await user.click(link);

    expect(screen.getByText("chair")).toBeInTheDocument();
    expect(screen.getByText("bed")).toBeInTheDocument();
    expect(screen.getByText("table")).toBeInTheDocument();
  });

  it("fragrances link redirects to the fragrances category", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /fragrances/i });

    await user.click(link);

    expect(screen.getByText("Elegante")).toBeInTheDocument();
    expect(screen.getByText("ScentX")).toBeInTheDocument();
  });

  it("groceries link redirects to the groceries category", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /groceries/i });

    await user.click(link);

    expect(screen.getByText("potato")).toBeInTheDocument();
    expect(screen.getByText("apple")).toBeInTheDocument();
  });

  it("product car redirects to the product page", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /ScentX/i });

    await user.click(link);

    expect(
      screen.getByText("Perfect for evening occasions"),
    ).toBeInTheDocument();
    expect(screen.getByText("The Best")).toBeInTheDocument();
  });
});

describe("Cart component", () => {
  it("product title on the card redirects to the product page", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: /potato/i });

    await user.click(link);

    expect(screen.getByText("Tasty potatoes")).toBeInTheDocument();
    expect(screen.getByText("Really good")).toBeInTheDocument();
  });
});

describe("ProductPage component", () => {
  it("renders button if product is not in the cart", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop/beauty/7"],
    });

    render(<RouterProvider router={router} />);

    const button = screen.getByRole("button", { name: /add to cart/i });

    expect(button).toBeInTheDocument();
  });

  it("renders ProductCounter component if product is in the cart", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop/beauty/5"],
    });

    render(<RouterProvider router={router} />);

    const input = screen.getByRole("textbox", { name: /quantity/i });

    expect(input).toHaveValue("5");
  });

  it("Shop link redirects to the shop page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop/furniture/2"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: "Shop" });

    await user.click(link);

    expect(screen.getByText("THIS WEEK'S DISCOUNTS!")).toBeInTheDocument();
    expect(screen.getByText("BEAUTY PRODUCTS")).toBeInTheDocument();
    expect(screen.getByText("FOR INTERIOR DESIGN")).toBeInTheDocument();
  });

  it("Category link redirects to the category page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop/furniture/2"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: "Furniture" });

    await user.click(link);

    expect(screen.getByText("chair")).toBeInTheDocument();
    expect(screen.getByText("table")).toBeInTheDocument();
    expect(screen.getByText("bed")).toBeInTheDocument();
  });

  it("Home link redirects to the home page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop/furniture/2"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", { name: "Home" });

    await user.click(link);

    expect(screen.getByText(/this weeks discounts/i)).toBeInTheDocument();
    expect(
      screen.getByText(/WE OFFER ONLY FRESH AND TASTY VEGETABLES/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/FAST AND RELIABLE DELIVERY/i)).toBeInTheDocument();
  });
});
