import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCounter from "../ProductCounter.jsx";

const mockProduct = { title: "shirt", id: 1, quantity: 3, price: 10.4 };

const Wrapper = () => {
  const [cart, setCart] = useState([mockProduct]);

  const mockRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
  };

  return (
    <>
      <ProductCounter
        product={cart[0]}
        setCart={setCart}
        handleRemove={() => mockRemove(cart[0].id)}
      />
    </>
  );
};

describe("ProductCounter component", () => {
  it("renders the current product quantity", () => {
    render(<ProductCounter product={mockProduct} />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("3");
  });

  it("increment button is called", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<ProductCounter product={mockProduct} setCart={onClick} />);

    const button = screen.getByRole("button", { name: "increment" });
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("decrement button is called", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<ProductCounter product={mockProduct} setCart={onClick} />);

    const button = screen.getByRole("button", { name: "decrement" });
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("allows the user to type a value into the input", async () => {
    const user = userEvent.setup();

    render(<Wrapper />);

    const input = screen.getByRole("textbox");

    await user.type(input, "2");

    expect(input).toHaveValue("32");
  });

  it("increment button increments input value", async () => {
    const user = userEvent.setup();

    render(<Wrapper />);

    const button = screen.getByRole("button", { name: "increment" });
    const input = screen.getByRole("textbox");

    await user.click(button);

    expect(input).toHaveValue("4");
  });

  it("Decrement button decrements input value", async () => {
    const user = userEvent.setup();

    render(<Wrapper />);

    const button = screen.getByRole("button", { name: "decrement" });
    const input = screen.getByRole("textbox");

    await user.click(button);

    expect(input).toHaveValue("2");
  });
});
