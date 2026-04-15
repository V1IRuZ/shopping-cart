import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import NextButton from "../NextButton.jsx";

describe("NextButton component", () => {
  it("renders button", () => {
    render(<NextButton />);

    expect(screen.getByRole("button", { name: /next/i }));
  });

  it("calls button", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<NextButton onClick={onClick} />);

    const button = screen.getByRole("button", { name: /next/i });
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});