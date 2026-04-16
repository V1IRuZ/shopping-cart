import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import SlideTwo from "../SlideTwo.jsx";

const mockData = [
  {
    brand: "dior",
    id: 1,
    category: "fragrances",
    thumbnail: "test.jpg",
  },
  {
    brand: "gucci",
    id: 2,
    category: "fragrances",
    thumbnail: "test.jpg",
  },
  {
    brand: "awesome bed",
    id: 11,
    category: "furniture",
    thumbnail: "test.jpg",
  },
  {
    brand: "chanel",
    id: 23,
    category: "fragrances",
    thumbnail: "test.jpg",
  },
];

describe("SlideTwo component", () => {
  it("renders a list and list items", () => {
    render(
      <MemoryRouter>
        <SlideTwo data={mockData} active={true} />
      </MemoryRouter>,
    );

    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
  });

  it("renders a list of the correct products", () => {
    render(
      <MemoryRouter>
        <SlideTwo data={mockData} active={true} />
      </MemoryRouter>,
    );

    expect(screen.getByText("dior")).toBeInTheDocument();
    expect(screen.getByText("chanel")).toBeInTheDocument();
    expect(screen.queryByText("awesome bed")).not.toBeInTheDocument();
    expect(screen.getByText("gucci")).toBeInTheDocument();
  });

  it("adds inert and aria hidden while inactive", () => {
    render(
      <MemoryRouter>
        <SlideTwo data={mockData} active={false} />
      </MemoryRouter>,
    );

    const slide = screen.getByTestId("slide2");

    expect(slide).toHaveAttribute("inert", "");
    expect(slide).toHaveAttribute("aria-hidden", "true");
  });

  it("does not have iner and aria hidden while active", () => {
    render(
      <MemoryRouter>
        <SlideTwo data={mockData} active={true} />
      </MemoryRouter>,
    );

    const slide = screen.queryByTestId("slide2");

    expect(slide).not.toHaveAttribute("inert", "");
    expect(slide).not.toHaveAttribute("aria-hidden", "true");
  });

  it("link redirects to the right page", () => {
    render(
      <MemoryRouter>
        <SlideTwo data={mockData} active={true} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/shop/fragrances");
  });

  it("link has focus while active", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <SlideTwo data={mockData} active={true} />
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
        <SlideTwo data={mockData} active={false} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { hidden: true });

    expect(link).toHaveAttribute("tabindex", "-1");

    await user.tab();

    expect(link).not.toHaveFocus();
  });
});
