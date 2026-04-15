import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { screen, render } from "@testing-library/react";
import Slides from "../Slides.jsx";

const mockData = [
  { title: "shirt", id: 1, category: "clothes" },
  { title: "LG CX10", id: 2, category: "televisions" },
  { title: "ring", id: 3, category: "jewelry" },
  { title: "football", id: 4, category: "sport" },
];

describe("Slides component", () => {
  it("starts from the first slide in its position", () => {
    render(
      <MemoryRouter>
        <Slides data={mockData} activeSlide={0} />
      </MemoryRouter>,
    );

    const slideshow = screen.getByTestId("slideshow");
    expect(slideshow).toHaveStyle("transform: translateX(0%)");
  });

  it("moves slide 2 to correct position", () => {
    render(
      <MemoryRouter>
        <Slides data={mockData} activeSlide={1} />
      </MemoryRouter>,
    );

    const slideshow = screen.getByTestId("slideshow");
    expect(slideshow).toHaveStyle("transform: translateX(-100%)");
  });

  it("moves slide 3 to correct position", () => {
    render(
      <MemoryRouter>
        <Slides data={mockData} activeSlide={2} />
      </MemoryRouter>,
    );

    const slideshow = screen.getByTestId("slideshow");
    expect(slideshow).toHaveStyle("transform: translateX(-200%)");
  });

  it("moves slide 4 to correct position", () => {
    render(
      <MemoryRouter>
        <Slides data={mockData} activeSlide={3} />
      </MemoryRouter>,
    );

    const slideshow = screen.getByTestId("slideshow");
    expect(slideshow).toHaveStyle("transform: translateX(-300%)");
  });
});
