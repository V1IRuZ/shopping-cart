import { describe, expect, it, vi } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router";
import { render, screen } from "@testing-library/react";
import routes from "../routes.jsx";
import App from "../App.jsx";
import { useProductData } from "../hooks/useProductsData.js";

vi.mock("../hooks/useProductsData.js", () => ({
  useProductData: vi.fn(),
}));

vi.mock("../hooks/useCart.js", () => ({
  useCart: () => ({
    cart: [],
    handleAddToCart: vi.fn(),
    setCart: vi.fn(),
    showNotification: false,
    currentProductId: null,
  }),
}));

describe("LoadinPage component", () => {
  it("renders loading text when data is loading", () => {
    useProductData.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});

describe("ErrorPage component", () => {
  it("renders an error text when an error occurs", () => {
    useProductData.mockReturnValue({
      data: null,
      loading: false,
      error: "error",
    });

    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    expect(
      screen.getByText("Something went wrong, try again later."),
    ).toBeInTheDocument();
  });
});

describe("InvalidRoute component", () => {
  it('renders the text "page not found" when invalid route', () => {
    useProductData.mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    const router = createMemoryRouter(routes, { initialEntries: ["/unknown"] });
    render(<RouterProvider router={router} />);

    expect(
      screen.getByText("Sorry the page is not found."),
    ).toBeInTheDocument();
  });

  it("link redirects back to the homepage", () => {
    useProductData.mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    const router = createMemoryRouter(routes, { initialEntries: ["/unknown"] });
    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/");
  });
});
