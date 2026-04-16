import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import SlideSelectionBar from "../SlideSelectionBar.jsx";

describe("SlideSelectionBar component", () => {
  it("renders list with 5 buttons", () => {
    render(<SlideSelectionBar />);

    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");
    const buttons = screen.getAllByRole("button");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(5);
    expect(buttons).toHaveLength(5);
  });

  it("The button corresponding to the active slide has class name active", () => {
    render(<SlideSelectionBar activeSlide={1} />);

    const button1 = screen.getByRole("button", { name: /slide 1/i });
    const button2 = screen.getByRole("button", { name: /slide 2/i });
    const button3 = screen.getByRole("button", { name: /slide 3/i });
    const button4 = screen.getByRole("button", { name: /slide 4/i });

    expect(button1).not.toHaveClass("active");
    expect(button2).toHaveClass("active");
    expect(button3).not.toHaveClass("active");
    expect(button4).not.toHaveClass("active");
  });

  it("each button is called", async () => {
    const user = userEvent.setup();
    const setSlide = vi.fn();

    render(<SlideSelectionBar setActiveSlide={setSlide} activeSlide={2} />);

    const button1 = screen.getByRole("button", { name: /slide 1/i });
    const button2 = screen.getByRole("button", { name: /slide 2/i });
    const button3 = screen.getByRole("button", { name: /slide 3/i });
    const button4 = screen.getByRole("button", { name: /slide 4/i });

    await user.click(button1);
    await user.click(button2);
    await user.click(button3);
    await user.click(button4);

    expect(setSlide).toHaveBeenCalledTimes(4);
  });

  it("will focus each button", async() => {
    const user = userEvent.setup();
    render(<SlideSelectionBar activeSlide={2} />);

    const button1 = screen.getByRole("button", { name: /slide 1/i });
    const button2 = screen.getByRole("button", { name: /slide 2/i });
    const button3 = screen.getByRole("button", { name: /slide 3/i });
    const button4 = screen.getByRole("button", { name: /slide 4/i });
    const pauseBtn = screen.getByRole("button", { name: /pause slideshow/i });

    await user.tab();
    expect(button1).toHaveFocus();

    await user.tab();
    expect(button2).toHaveFocus();

    await user.tab();
    expect(button3).toHaveFocus();

    await user.tab();
    expect(button4).toHaveFocus();

    await user.tab();
    expect(pauseBtn).toHaveFocus();
  });
});
