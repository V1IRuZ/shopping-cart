import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import PauseButton from "../PauseButton.jsx";

describe("PauseButton component", () => {
  it("renders pause button", () => {
    render(<PauseButton paused={false} />);

    const button = screen.getByRole("button", { name: /pause slideshow/i });

    expect(button).toBeInTheDocument();
  });

  it("renders play button", () => {
    render(<PauseButton paused={true} />);

    const button = screen.getByRole("button", { name: /play slideshow/i });

    expect(button).toBeInTheDocument();
  });

  it("pause button is called", async () => {
    const user = userEvent.setup();
    const setPaused = vi.fn();

    render(<PauseButton paused={false} setPaused={setPaused} />);

    const button = screen.getByRole("button", { name: /pause slideshow/i });

    await user.click(button);

    expect(setPaused).toHaveBeenCalled();
  });

    it("play button is called", async () => {
    const user = userEvent.setup();
    const setPaused = vi.fn();

    render(<PauseButton paused={true} setPaused={setPaused} />);

    const button = screen.getByRole("button", { name: /play slideshow/i });

    await user.click(button);

    expect(setPaused).toHaveBeenCalled();
  });
});
