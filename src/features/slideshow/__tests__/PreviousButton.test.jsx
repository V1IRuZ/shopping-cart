import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import PreviousButton from "../PreviousButton.jsx";

describe("PreviousButton component", () => {
  it("renders button", () => {
    render(<PreviousButton />);

    expect(screen.getByRole("button", { name: /previous/i }));
  });

  it("calls button", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<PreviousButton onClick={onClick} />);

    const button = screen.getByRole("button", { name: /previous/i });
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
