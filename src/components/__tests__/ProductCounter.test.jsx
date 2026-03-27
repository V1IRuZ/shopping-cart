import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCounter from "../ProductCounter.jsx";

const mockProducts = [
  { title: "shirt", id: 1, quantity: 3, price: 10.4 },
  { title: "jeans", id: 2, quantity: 2, price: 15.5 },
  { title: "shoes", id: 3, quantity: 98, price: 12.1 },
];

const Wrapper = ({ productIndex }) => {
  const [cart, setCart] = useState(mockProducts);

  const mockRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
  };

  return (
    <>
      <ProductCounter
        product={cart[productIndex]}
        setCart={setCart}
        handleRemove={() => mockRemove(cart[productIndex].id)}
      />
    </>
  );
};

describe("ProductCounter component", () => {
  it("renders the current product quantity", () => {
    render(<ProductCounter product={mockProducts[0]} />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("3");
  });

  it("increment button is called", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<ProductCounter product={mockProducts[0]} setCart={onClick} />);

    const button = screen.getByRole("button", { name: "increment" });
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("decrement button is called", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<ProductCounter product={mockProducts[0]} setCart={onClick} />);

    const button = screen.getByRole("button", { name: "decrement" });
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("allows the user to type a value into the input", async () => {
    const user = userEvent.setup();

    render(<Wrapper productIndex={0} />);

    const input = screen.getByRole("textbox");

    await user.type(input, "2");

    expect(input).toHaveValue("32");
  });

  it("increment button increments input value", async () => {
    const user = userEvent.setup();

    render(<Wrapper productIndex={0} />);

    const button = screen.getByRole("button", { name: "increment" });
    const input = screen.getByRole("textbox");

    await user.click(button);

    expect(input).toHaveValue("4");
  });

  it("Decrement button decrements input value", async () => {
    const user = userEvent.setup();

    render(<Wrapper productIndex={0} />);

    const button = screen.getByRole("button", { name: "decrement" });
    const input = screen.getByRole("textbox");

    await user.click(button);

    expect(input).toHaveValue("2");
  });

  it("the increment button only increments up to 99", async () => {
    const user = userEvent.setup();

    render(<Wrapper productIndex={2} />);

    const button = screen.getByRole("button", { name: "increment" });
    const input = screen.getByRole("textbox");

    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(input).toHaveValue("99");
  });

  it("decrement button only decreases to 1", async () => {
    const user = userEvent.setup();

    render(<Wrapper productIndex={1} />);

    const button = screen.getByRole("button", { name: "decrement" });
    const input = screen.getByRole("textbox");

    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(input).toHaveValue("1");
  });

  it("does not allow type too large values ​​into the input", async () => {
    const user = userEvent.setup();

    render(<Wrapper productIndex={0} />);

    const input = screen.getByRole("textbox");

    await user.clear(input);
    await user.type(input, "999");

    expect(input).toHaveValue("99");
  });

    it("does not allow type other than numbers", async () => {
    const user = userEvent.setup();

    render(<Wrapper productIndex={0} />);

    const input = screen.getByRole("textbox");

    await user.type(input, "hello!?");

    expect(input).toHaveValue("3");
  });
});
