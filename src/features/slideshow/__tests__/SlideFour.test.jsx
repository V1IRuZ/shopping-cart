import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SlideFour from "../SlideFour.jsx";

describe("SlideFour component", () => {
  it("renders the logo and slogan", () => {
    render(
      <MemoryRouter>
        <SlideFour active={true} />
      </MemoryRouter>,
    );

    expect(screen.getByText(/web/i));
    expect(screen.getByText(/market/i));
    expect(screen.getByText(/cheap prices./i));
    expect(screen.getByText(/allways./i));
  });

  it("adds inert and aria hidden while inactive", () => {
    render(
      <MemoryRouter>
        <SlideFour active={false} />
      </MemoryRouter>,
    );

    const slide = screen.getByTestId("slide4");

    expect(slide).toHaveAttribute("inert", "");
    expect(slide).toHaveAttribute("aria-hidden", "true");
  });

  it("does not have iner and aria hidden while active", () => {
    render(
      <MemoryRouter>
        <SlideFour active={true} />
      </MemoryRouter>,
    );

    const slide = screen.queryByTestId("slide4");

    expect(slide).not.toHaveAttribute("inert", "");
    expect(slide).not.toHaveAttribute("aria-hidden", "true");
  });

  it("link redirects to the right page", () => {
    render(
      <MemoryRouter>
        <SlideFour active={true} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/shop");
  });

  it("link has focus while active", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <SlideFour active={true} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    await user.tab();

    expect(link).toHaveFocus();
  });

  it("link does not has focus while inactive", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <SlideFour active={false} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { hidden: true });

    expect(link).toHaveAttribute("tabindex", "-1");

    await user.tab();

    expect(link).not.toHaveFocus();
  });
});
