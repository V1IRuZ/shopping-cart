import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { screen, render } from "@testing-library/react";
import SlideOne from "../SlideOne.jsx";

const mockData = [
  {
    title: "awesome bed",
    description: "this bed is awesome",
    id: 11,
    category: "furniture",
    images: ["test.jpg", "test2.jpg", "test.jp3"],
    thumbnail: "test.jpg",
  },
  {
    title: "bad bed",
    description: "this bed is bad",
    id: 32,
    category: "furniture",
    images: ["test.jpg", "test2.jpg", "test.jp3"],
    thumbnail: "test.jpg",
  },
];

describe("SlideOne component", () => {
  it("renders correct data", () => {
    render(
      <MemoryRouter>
        <SlideOne data={mockData} active={true} />
      </MemoryRouter>,
    );

    expect(screen.getByText("awesome bed")).toBeInTheDocument();
    expect(screen.getByText("this bed is awesome")).toBeInTheDocument();
  });

  it("does not render incorrect data", () => {
    render(
      <MemoryRouter>
        <SlideOne data={mockData} active={true} />
      </MemoryRouter>,
    );

    expect(screen.queryByText("bad bed")).not.toBeInTheDocument();
    expect(screen.queryByText("this bed is bad")).not.toBeInTheDocument();
  });

  it("adds inert and aria hidden while inactive", () => {
    render(
      <MemoryRouter>
        <SlideOne data={mockData} active={false} />
      </MemoryRouter>,
    );

    const slide = screen.getByTestId("slide1");

    expect(slide).toHaveAttribute("inert", "");
    expect(slide).toHaveAttribute("aria-hidden", "true");
  });

  it("does not have iner and aria hidden while active", () => {
    render(
      <MemoryRouter>
        <SlideOne data={mockData} active={true} />
      </MemoryRouter>,
    );

    const slide = screen.queryByTestId("slide1");

    expect(slide).not.toHaveAttribute("inert", "");
    expect(slide).not.toHaveAttribute("aria-hidden", "true");
  });

  it("does have 4 images", () => {
    render(
      <MemoryRouter>
        <SlideOne data={mockData} active={true} />
      </MemoryRouter>,
    );

    const images = document.querySelectorAll("img");

    expect(images).toHaveLength(4);
  });

  it("link redirects to the right page", () => {
    render(
      <MemoryRouter>
        <SlideOne data={mockData} active={true} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: /see more/i });

    expect(link).toHaveAttribute("href", "/shop/furniture/11");
  });
});
