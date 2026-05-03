import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { createMemoryRouter, RouterProvider, Outlet } from "react-router";
import Cart from "../../../pages/Cart.jsx";
import userEvent from "@testing-library/user-event";

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

const TestLayout = () => {
  return <Outlet context={{ cart: mockCart, setCart: vi.fn() }} />;
};

const TestHome = () => {
  return <div>Home page</div>;
};

const mockRoutes = [
  {
    element: <TestLayout />,
    children: [
      {
        path: "/",
        element: <TestHome />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

describe("OrderModal component", () => {
  it("renders modal", async () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/cart"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const button = screen.getByRole("button", { name: /proceed to checkout/i });

    await user.click(button);

    const dialog = screen.getByRole("dialog");

    expect(dialog).toBeInTheDocument();
  });

  it("renders list with 3 items", async () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/cart"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const button = screen.getByRole("button", { name: /proceed to checkout/i });

    await user.click(button);

    const dialog = screen.getByRole("dialog");
    const list = within(dialog).getByRole("list");
    const listItems = within(list).getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
  });

  it("renders total price in modal", async () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/cart"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const button = screen.getByRole("button", { name: /proceed to checkout/i });

    await user.click(button);

    const dialog = screen.getByRole("dialog");

    const totalPrice = within(dialog).getByText("711.25 $");

    expect(totalPrice).toBeInTheDocument();
  });

  it("cancel button closes modal", async () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/cart"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const proceedBtn = screen.getByRole("button", {
      name: /proceed to checkout/i,
    });

    await user.click(proceedBtn);

    const dialog = screen.getByRole("dialog");

    const cancelBtn = within(dialog).getByRole("button", { name: "CANCEL" });

    await user.click(cancelBtn);

    expect(screen.queryByTestId("order")).not.toBeVisible();
  });

  it("X button closes modal", async () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/cart"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const proceedBtn = screen.getByRole("button", {
      name: /proceed to checkout/i,
    });

    await user.click(proceedBtn);

    const dialog = screen.getByRole("dialog");

    const xBtn = within(dialog).getByRole("button", { name: "Cancel order" });

    await user.click(xBtn);

    expect(screen.queryByTestId("order")).not.toBeVisible();
  });
});

describe("ConfirmationModal component", () => {
  it("is opened within OrderModal", async () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/cart"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const proceedBtn = screen.getByRole("button", {
      name: /proceed to checkout/i,
    });

    await user.click(proceedBtn);

    const orderModal = screen.getByTestId("order");

    const confirmBtn = within(orderModal).getByRole("button", {
      name: "CONFIRM",
    });

    await user.click(confirmBtn);

    const confirmationModal = screen.getByTestId("confirmation");

    expect(confirmationModal).toBeVisible();
  });

  it("displays thank you message", async () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/cart"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const proceedBtn = screen.getByRole("button", {
      name: /proceed to checkout/i,
    });

    await user.click(proceedBtn);

    const orderModal = screen.getByTestId("order");

    const confirmBtn = within(orderModal).getByRole("button", {
      name: "CONFIRM",
    });

    await user.click(confirmBtn);

    expect(screen.getByText("THANK YOU FOR YOUR ORDER!")).toBeInTheDocument();
  });

  it('"RETURN TO SHOPPING" button closes modal and redirects to the homepage', async () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/cart"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const proceedBtn = screen.getByRole("button", {
      name: /proceed to checkout/i,
    });

    await user.click(proceedBtn);

    const orderModal = screen.getByTestId("order");

    const confirmBtn = within(orderModal).getByRole("button", {
      name: "CONFIRM",
    });

    await user.click(confirmBtn);

    const confirmationModal = screen.getByTestId("confirmation");

    const returnBtn = within(confirmationModal).getByRole("button", {
      name: "RETURN TO SHOPPING",
    });

    await user.click(returnBtn);

    expect(screen.queryByTestId("confirmation")).not.toBeInTheDocument();
    expect(screen.getByText("Home page")).toBeInTheDocument();
  });

  it('X button closes modal and redirects to the homepage', async () => {
    const router = createMemoryRouter(mockRoutes, {
      initialEntries: ["/cart"],
    });
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const proceedBtn = screen.getByRole("button", {
      name: /proceed to checkout/i,
    });

    await user.click(proceedBtn);

    const orderModal = screen.getByTestId("order");

    const confirmBtn = within(orderModal).getByRole("button", {
      name: "CONFIRM",
    });

    await user.click(confirmBtn);

    const confirmationModal = screen.getByTestId("confirmation");

    const xBtn = within(confirmationModal).getByRole("button", {
      name: "Close",
    });

    await user.click(xBtn);

    expect(screen.queryByTestId("confirmation")).not.toBeInTheDocument();
    expect(screen.getByText("Home page")).toBeInTheDocument();
  });
});
