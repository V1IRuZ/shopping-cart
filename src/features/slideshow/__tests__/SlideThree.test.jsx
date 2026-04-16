import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import SlideThree from "../SlideThree.jsx";

const mockData = [
  {
    title: "dog food",
    description: "tasty food for your dog",
    id: 22,
    category: "groceries",
    thumbnail: "test.jpg",
  },
  {
    title: "awesome bed",
    description: "this bed is awesome",
    id: 11,
    category: "furniture",
    thumbnail: "test.jpg",
  },
];

describe("SlideThree component", () => {
  it("renders correct data", () => {
    render(
      <MemoryRouter>
        <SlideThree data={mockData} active={true} />
      </MemoryRouter>,
    );

    expect(screen.getByText(/dog food/i)).toBeInTheDocument();
    expect(screen.getByText("tasty food for your dog")).toBeInTheDocument();
  });

  it("does not render incorrect data", () => {
    render(
      <MemoryRouter>
        <SlideThree data={mockData} active={true} />
      </MemoryRouter>,
    );

    expect(screen.queryByText(/awesome bed/i)).not.toBeInTheDocument();
    expect(screen.queryByText("this bed is awesome")).not.toBeInTheDocument();
  });

  it("adds inert and aria hidden while inactive", () => {
    render(
      <MemoryRouter>
        <SlideThree data={mockData} active={false} />
      </MemoryRouter>,
    );

    const slide = screen.getByTestId("slide3");

    expect(slide).toHaveAttribute("inert", "");
    expect(slide).toHaveAttribute("aria-hidden", "true");
  });

  it("does not have iner and aria hidden while active", () => {
    render(
      <MemoryRouter>
        <SlideThree data={mockData} active={true} />
      </MemoryRouter>,
    );

    const slide = screen.queryByTestId("slide3");

    expect(slide).not.toHaveAttribute("inert", "");
    expect(slide).not.toHaveAttribute("aria-hidden", "true");
  });

  it("does have image", () => {
    render(
      <MemoryRouter>
        <SlideThree data={mockData} active={true} />
      </MemoryRouter>,
    );

    const images = document.querySelector("img");

    expect(images).toBeInTheDocument();
  });

  it("link redirects to the right page", () => {
    render(
      <MemoryRouter>
        <SlideThree data={mockData} active={true} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/shop/groceries/22");
  });

  it("link has focus while active", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <SlideThree data={mockData} active={true} />
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
        <SlideThree data={mockData} active={false} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { hidden: true });

    expect(link).toHaveAttribute("tabindex", "-1");

    await user.tab();

    expect(link).not.toHaveFocus();
  });
});
